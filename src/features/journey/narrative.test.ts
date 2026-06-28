import { describe, expect, it } from "vitest";
import { getJourneyNarrative } from "./narrative";

describe("Journey narrative", () => {
  it("keeps the English and Arabic narrative structures aligned", () => {
    const english = getJourneyNarrative("en");
    const arabic = getJourneyNarrative("ar");

    expect(arabic.thesis.progression).toHaveLength(english.thesis.progression.length);
    expect(arabic.chapters).toHaveLength(english.chapters.length);
    expect(arabic.turningPoints).toHaveLength(english.turningPoints.length);
    expect(arabic.proof).toHaveLength(english.proof.length);
  });

  it("defines the transformation path as titled nodes with supporting copy", () => {
    const narrative = getJourneyNarrative("en");

    expect(narrative.thesis.progression.map((step) => step.title)).toEqual([
      "Signal",
      "Layer",
      "Machine",
      "System",
    ]);
    expect(narrative.thesis.progression.every((step) => step.body.length > 0)).toBe(true);
  });

  it("clarifies the academic and early engineering context in Chapter 01", () => {
    const englishChapter = getJourneyNarrative("en").chapters[0];
    const arabicChapter = getJourneyNarrative("ar").chapters[0];

    expect(englishChapter.time).toContain("2013 - 2021");
    expect(englishChapter.time).toBe("2013 - 2021 · Damascus");
    expect(englishChapter.context).toEqual([
      "Academic foundation",
      "Early ML/NLP engineering",
    ]);
    expect(arabicChapter.context).toHaveLength(2);
  });

  it("keeps EMMA context while excluding internal capability names", () => {
    const publishedCopy = JSON.stringify({
      en: getJourneyNarrative("en"),
      ar: getJourneyNarrative("ar"),
    });

    expect(publishedCopy).toContain("EMMA ecosystem");
    expect(publishedCopy).not.toContain("EMMA Cortex");
    expect(publishedCopy).not.toContain("Classification Step");
    expect(publishedCopy).not.toMatch(/first AI-powered feature/i);
  });
});
