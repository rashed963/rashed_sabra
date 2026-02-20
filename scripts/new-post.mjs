import { mkdir, access, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const slugify = (value) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const today = new Date().toISOString().slice(0, 10);
const rl = readline.createInterface({ input, output });

try {
  const title = (await rl.question("Title: ")).trim();
  if (!title) {
    throw new Error("Title is required.");
  }

  const publishDateInput = (await rl.question(`Publish date (${today}): `)).trim();
  const publishDate = publishDateInput || today;

  const langInput = (await rl.question("Language (ar/en) [ar]: ")).trim().toLowerCase();
  const lang = langInput === "en" ? "en" : "ar";

  const category = (await rl.question("Category (optional): ")).trim();
  const series = (await rl.question("Series (optional): ")).trim();
  const partInput = (await rl.question("Part number (optional): ")).trim();
  const part = Number.parseInt(partInput, 10);

  const statusInput = (await rl.question("Status (draft/scheduled/published) [draft]: "))
    .trim()
    .toLowerCase();
  const status = ["draft", "scheduled", "published"].includes(statusInput)
    ? statusInput
    : "draft";

  const slugBase = slugify(title);
  if (!slugBase) {
    throw new Error("Could not generate a slug from title.");
  }
  const slug = `${publishDate}-${slugBase}`;

  const dir = path.join(process.cwd(), "src", "content", "blog");
  await mkdir(dir, { recursive: true });
  const filePath = path.join(dir, `${slug}.md`);

  try {
    await access(filePath, constants.F_OK);
    throw new Error(`File already exists: ${filePath}`);
  } catch (err) {
    if (err?.code !== "ENOENT") {
      throw err;
    }
  }

  const frontmatter = [
    "---",
    `slug: "${slug}"`,
    `title: "${title.replace(/"/g, '\\"')}"`,
    `lang: "${lang}"`,
    'description: ""',
    `publishDate: "${publishDate}"`,
    `status: "${status}"`,
    ...(category ? [`category: "${category.replace(/"/g, '\\"')}"`] : []),
    "tags: []",
    ...(series ? [`series: "${series.replace(/"/g, '\\"')}"`] : []),
    ...(Number.isInteger(part) && part > 0 ? [`part: ${part}`] : []),
    "---",
    "",
    "Write your article here.",
    "",
  ].join("\n");

  await writeFile(filePath, frontmatter, "utf8");
  output.write(`Created ${filePath}\n`);
} finally {
  rl.close();
}
