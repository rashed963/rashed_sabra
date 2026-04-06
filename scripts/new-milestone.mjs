import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const CONTENT_DIR = path.resolve("src/content/journey/milestones");
const SUPPORTED_TYPES = new Set(["education", "role", "leadership", "product", "ai"]);

function getArgValue(name) {
  const index = process.argv.findIndex((arg) => arg === `--${name}`);
  if (index === -1) return undefined;
  return process.argv[index + 1];
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

const id = getArgValue("id");
if (!id) fail("Missing required argument --id (e.g. --id new-role).");

const orderRaw = getArgValue("order");
if (!orderRaw) fail("Missing required argument --order (e.g. --order 5).");
const order = String(Number(orderRaw)).padStart(2, "0");

const type = getArgValue("type") ?? "role";
if (!SUPPORTED_TYPES.has(type)) {
  fail(`Unsupported --type value. Use one of: ${[...SUPPORTED_TYPES].join(", ")}.`);
}

const title = getArgValue("title") ?? "عنوان المحطة";
const org = getArgValue("org") ?? "المؤسسة";
const period = getArgValue("period") ?? "٢٠٢٥ – حتى الآن";
const location = getArgValue("location") ?? "";

const filename = `${order}-${id}.md`;
const targetPath = path.join(CONTENT_DIR, filename);

if (fs.existsSync(targetPath)) {
  fail(`File already exists: ${targetPath}`);
}

const locationLine = location ? `\nlocation: ${location}` : "";

const markdown = `---
id: ${id}
order: ${Number(orderRaw)}
period: ${period}
title: ${title}
organization: ${org}${locationLine}
type: ${type}
context: اكتب السياق هنا.
impact: اكتب الأثر هنا.
lesson: اكتب الدرس هنا.
---
- الإجراء الأول
- الإجراء الثاني
`;

fs.mkdirSync(CONTENT_DIR, { recursive: true });
fs.writeFileSync(targetPath, markdown, { encoding: "utf8", flag: "wx" });

console.log(`Created: ${targetPath}`);
