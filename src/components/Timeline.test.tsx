import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Timeline } from "./Timeline";
import type { Milestone } from "../features/journey/types";

const milestones: Milestone[] = [
  {
    id: "earlier",
    period: "2020 - 2022",
    title: "Earlier role",
    organization: "First company",
    type: "role",
    context: "Earlier role details",
    actions: [],
  },
  {
    id: "current",
    period: "2024 - Present",
    title: "Current role",
    organization: "Current company",
    type: "leadership",
    context: "Current role details",
    actions: [],
  },
];

describe("Timeline", () => {
  it("selects the latest milestone as the initial focus", () => {
    render(<Timeline milestones={milestones} />);

    expect(screen.getByRole("button", { name: /Current role/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("heading", { name: "Current role" })).toBeVisible();
    expect(screen.getByText("Current role details")).toBeVisible();
  });

  it("moves the reading stage when another milestone is selected", () => {
    render(<Timeline milestones={milestones} />);

    fireEvent.click(screen.getByRole("button", { name: /Earlier role/i }));

    expect(screen.getByRole("button", { name: /Earlier role/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("heading", { name: "Earlier role" })).toBeVisible();
    expect(screen.getByText("Earlier role details")).toBeVisible();
  });
});
