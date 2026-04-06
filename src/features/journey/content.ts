import { parseMilestone, parseTheme } from "./markdown";

const milestoneModules = import.meta.glob("../../content/journey/milestones/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const themeModules = import.meta.glob("../../content/journey/themes/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

function sortedValues(modules: Record<string, string>): string[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, raw]) => raw);
}

export const milestones = sortedValues(milestoneModules).map(parseMilestone);
export const journeyThemes = sortedValues(themeModules).map(parseTheme);
