import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const CONTENT_DIR = path.resolve("src/content/blog");
const SUPPORTED_LANGUAGES = new Set(["ar", "en"]);

function getArgValue(name) {
  const index = process.argv.findIndex((arg) => arg === `--${name}`);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

function toSlug(value) {
  return (value ?? "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

const language = getArgValue("lang") ?? "ar";
if (!SUPPORTED_LANGUAGES.has(language)) {
  fail("Unsupported --lang value. Use 'ar' or 'en'.");
}

const inputSlug = getArgValue("slug");
if (!inputSlug) {
  fail("Missing required argument --slug.");
}

const slug = toSlug(inputSlug);
if (!slug) {
  fail("Slug is empty after normalization.");
}

const date = getArgValue("date") ?? todayIsoDate();
const title = getArgValue("title") ?? (language === "ar" ? "عنوان المقال" : "Article title");
const excerpt = getArgValue("excerpt") ?? (language === "ar" ? "ملخص قصير للمقال." : "A short article excerpt.");
const tag = getArgValue("tag") ?? (language === "ar" ? "عام" : "General");
const readTime = getArgValue("read-time") ?? (language === "ar" ? "٥ د" : "5 min");
const image = getArgValue("image") ?? "/placeholder.svg";

const filename = `${date}-${slug}.${language}.md`;
const targetPath = path.join(CONTENT_DIR, filename);

if (fs.existsSync(targetPath)) {
  fail(`File already exists: ${targetPath}`);
}

const bodyTemplate =
  language === "ar"
    ? "اكتب الفقرة الأولى هنا.\n\nاكتب الفقرة الثانية هنا."
    : "Write the first paragraph here.\n\nWrite the second paragraph here.";

const markdown = `---
slug: ${slug}
title: ${title}
excerpt: ${excerpt}
date: ${date}
tag: ${tag}
readTime: ${readTime}
image: ${image}
language: ${language}
---
${bodyTemplate}
`;

fs.mkdirSync(CONTENT_DIR, { recursive: true });
fs.writeFileSync(targetPath, markdown, { encoding: "utf8", flag: "wx" });

console.log(`Created: ${targetPath}`);
