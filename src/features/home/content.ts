import { parseMethodStep, parseOffer, parseSnapshot, parseFaqItem } from "./markdown";

const methodStepModules = import.meta.glob("../../content/home/method-steps/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const offerModules = import.meta.glob("../../content/home/offers/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const snapshotModules = import.meta.glob("../../content/home/snapshots/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

const faqModules = import.meta.glob("../../content/home/faq/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

function sortedValues(modules: Record<string, string>): string[] {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, raw]) => raw);
}

export const methodSteps = sortedValues(methodStepModules).map(parseMethodStep);
export const offers = sortedValues(offerModules).map(parseOffer);
export const snapshots = sortedValues(snapshotModules).map(parseSnapshot);
export const faqItems = sortedValues(faqModules).map(parseFaqItem);
