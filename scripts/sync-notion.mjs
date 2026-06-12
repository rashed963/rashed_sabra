/**
 * Syncs content from Notion to the local file system.
 *
 * Sources synced:
 *   - Blog posts        → src/content/blog/
 *   - Journey milestones → src/content/journey/milestones/
 *   - Site config       → src/config/synced-content.json
 *
 * Required in .env:
 *   NOTION_API_KEY          - Your Notion integration token
 *   NOTION_BLOG_DB_ID       - Blog Posts database ID
 *   NOTION_MILESTONE_DB_ID  - Journey Milestones database ID
 *   NOTION_CONFIG_DB_ID     - Site Config database ID
 *
 * Run: npm run sync:notion
 */

import fs from "node:fs";
import path from "node:path";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const BLOG_DIR = path.resolve("src/content/blog");
const MILESTONE_DIR = path.resolve("src/content/journey/milestones");
const CONFIG_PATH = path.resolve("src/config/synced-content.json");

// ── Load env vars ─────────────────────────────────────────────────────────────
const apiKey = process.env.NOTION_API_KEY;

if (!apiKey) {
  console.error("Error: NOTION_API_KEY must be set in .env");
  process.exit(1);
}

const notion = new Client({ auth: apiKey });
const n2m = new NotionToMarkdown({ notionClient: notion });

// ── Helpers ───────────────────────────────────────────────────────────────────
function getText(prop) {
  if (!prop) return "";
  if (prop.type === "title") return prop.title.map((t) => t.plain_text).join("");
  if (prop.type === "rich_text") return prop.rich_text.map((t) => t.plain_text).join("");
  if (prop.type === "select") return prop.select?.name ?? "";
  if (prop.type === "date") return prop.date?.start ?? "";
  if (prop.type === "url") return prop.url ?? "";
  if (prop.type === "number") return prop.number != null ? String(prop.number) : "";
  return "";
}

function toSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function getPageMarkdownBody(pageId) {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(mdBlocks).parent?.trim() ?? "";
}

// ── Blog posts ────────────────────────────────────────────────────────────────
async function syncBlogPosts() {
  const databaseId = process.env.NOTION_BLOG_DB_ID;
  if (!databaseId) {
    console.log("  ⚠ NOTION_BLOG_DB_ID not set — skipping blog posts.");
    return;
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  console.log(`  Found ${response.results.length} published post(s).`);
  fs.mkdirSync(BLOG_DIR, { recursive: true });

  for (const page of response.results) {
    const props = page.properties;
    const title = getText(props["Name"]);
    const slugRaw = getText(props["Slug"]);
    const excerpt = getText(props["Excerpt"]);
    const date = getText(props["Date"]);
    const tag = getText(props["Tag"]);
    const language = getText(props["Language"]) || "ar";
    const topic = getText(props["Topic"]) || "general";
    const readTime = getText(props["Read Time"]);
    const image = getText(props["Image"]) || "/placeholder.svg";

    if (!title || !date) {
      console.warn(`  ⚠ Skipping page ${page.id}: missing Name or Date.`);
      continue;
    }

    const slug = slugRaw ? toSlug(slugRaw) : toSlug(title);
    const body = await getPageMarkdownBody(page.id);
    const filename = `${date}-${slug}.${language}.md`;

    fs.writeFileSync(
      path.join(BLOG_DIR, filename),
      `---\nslug: ${slug}\ntitle: ${title}\nexcerpt: ${excerpt}\ndate: ${date}\ntag: ${tag}\nreadTime: ${readTime}\nimage: ${image}\nlanguage: ${language}\ntopic: ${topic}\n---\n${body}\n`,
      { encoding: "utf8" },
    );
    console.log(`  ✓ blog/${filename}`);
  }
}

// ── Journey milestones ────────────────────────────────────────────────────────
async function syncMilestones() {
  const databaseId = process.env.NOTION_MILESTONE_DB_ID;
  if (!databaseId) {
    console.log("  ⚠ NOTION_MILESTONE_DB_ID not set — skipping milestones.");
    return;
  }

  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ property: "Order", direction: "ascending" }],
  });

  console.log(`  Found ${response.results.length} milestone(s).`);
  fs.mkdirSync(MILESTONE_DIR, { recursive: true });

  for (const page of response.results) {
    const props = page.properties;
    const id = getText(props["ID"]);
    const order = Number(getText(props["Order"])) || 0;
    const title = getText(props["Name"]);
    const period = getText(props["Period"]);
    const organization = getText(props["Organization"]);
    const location = getText(props["Location"]);
    const type = getText(props["Type"]);
    const context = getText(props["Context"]);
    const impact = getText(props["Impact"]);
    const lesson = getText(props["Lesson"]);

    const milestoneId = id || toSlug(title);
    const orderStr = String(order).padStart(2, "0");
    const filename = `${orderStr}-${milestoneId}.md`;
    const body = await getPageMarkdownBody(page.id);
    const locationLine = location ? `\nlocation: ${location}` : "";

    fs.writeFileSync(
      path.join(MILESTONE_DIR, filename),
      `---\nid: ${milestoneId}\norder: ${order}\nperiod: ${period}\ntitle: ${title}\norganization: ${organization}${locationLine}\ntype: ${type}\ncontext: ${context}\nimpact: ${impact}\nlesson: ${lesson}\n---\n${body}\n`,
      { encoding: "utf8" },
    );
    console.log(`  ✓ milestones/${filename}`);
  }
}

// ── Site config ───────────────────────────────────────────────────────────────
async function syncConfig() {
  const databaseId = process.env.NOTION_CONFIG_DB_ID;
  if (!databaseId) {
    console.log("  ⚠ NOTION_CONFIG_DB_ID not set — skipping site config.");
    return;
  }

  const response = await notion.databases.query({ database_id: databaseId });

  const flat = {};
  for (const page of response.results) {
    const key = getText(page.properties["Key"]);
    const value = getText(page.properties["Value"]);
    if (key) flat[key] = value;
  }

  const synced = {
    profile: {
      linkedIn: flat["linkedin_url"] ?? "",
    },
  };

  fs.writeFileSync(CONFIG_PATH, JSON.stringify(synced, null, 2), { encoding: "utf8" });
  console.log("  ✓ synced-content.json");
}

// ── Run ───────────────────────────────────────────────────────────────────────
async function main() {
  console.log("Syncing blog posts...");
  await syncBlogPosts();

  console.log("Syncing journey milestones...");
  await syncMilestones();

  console.log("Syncing site config...");
  await syncConfig();

  console.log("Done.");
}

main().catch((err) => {
  console.error("Sync failed:", err.message);
  process.exit(1);
});
