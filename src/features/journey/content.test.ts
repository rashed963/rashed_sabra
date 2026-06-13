import { describe, expect, it } from "vitest";
import { getJourneyThemes, getMilestones } from "./content";

describe("localized journey content", () => {
  it("keeps milestone identities aligned across languages", () => {
    const arabicIds = getMilestones("ar").map((milestone) => milestone.id);
    const englishIds = getMilestones("en").map((milestone) => milestone.id);

    expect(englishIds).toEqual(arabicIds);
  });

  it("keeps theme numbering aligned across languages", () => {
    const arabicThemeNumbers = getJourneyThemes("ar").map((theme) => theme.num);
    const englishThemeNumbers = getJourneyThemes("en").map((theme) => theme.num);

    expect(englishThemeNumbers).toEqual(arabicThemeNumbers);
  });
});
