import { parseMilestone, parseTheme } from "./markdown";
import type { BlogLanguage } from "../blog/types";

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

const isEnglishFile = (path: string) => path.endsWith(".en.md");

function localizedValues(modules: Record<string, string>, language: BlogLanguage): string[] {
  return Object.entries(modules)
    .filter(([path]) => isEnglishFile(path) === (language === "en"))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, raw]) => raw);
}

export const getMilestones = (language: BlogLanguage) =>
  localizedValues(milestoneModules, language).map(parseMilestone);

export const getJourneyThemes = (language: BlogLanguage) =>
  localizedValues(themeModules, language).map(parseTheme);
