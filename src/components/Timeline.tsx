import { useState } from "react";
import type { Milestone, MilestoneType } from "../features/journey/types";

const fallbackOutcomes: Record<string, string[]> = {
  masters: ["AI", "NLP", "أنظمة بيانات"],
  "l-one": ["Software Engineering", "Robotics Simulation", "CAD"],
  "wianco-lead": ["قيادة هندسية", "Delivery Reliability", "ملكية واضحة"],
  "ai-direction": ["Product & Technology", "AI Governance", "Technical Strategy"],
};

const typeLabels: Record<MilestoneType, string> = {
  education: "تعليم",
  role: "دور تقني",
  leadership: "قيادة",
  product: "منتج",
  ai: "AI",
};

interface TimelineProps {
  milestones: Milestone[];
}

export const Timeline = ({ milestones }: TimelineProps) => {
  const orderedMilestones = [...milestones].reverse();
  const [selectedId, setSelectedId] = useState(orderedMilestones[0]?.id ?? "");
  const selectedMilestone =
    orderedMilestones.find((milestone) => milestone.id === selectedId) ?? orderedMilestones[0];

  if (!selectedMilestone) {
    return null;
  }

  const selectedIndex = orderedMilestones.findIndex(
    (milestone) => milestone.id === selectedMilestone.id,
  );
  const outcomes =
    selectedMilestone.outcomes ?? fallbackOutcomes[selectedMilestone.id] ?? [];

  return (
    <div className="journey-timeline">
      <div
        className="journey-timeline__index"
        aria-label="محطات المسار المهني"
      >
        {orderedMilestones.map((milestone, index) => {
          const isSelected = milestone.id === selectedMilestone.id;

          return (
            <button
              key={milestone.id}
              type="button"
              className="journey-timeline__index-item"
              aria-pressed={isSelected}
              aria-controls="journey-milestone-detail"
              onClick={() => setSelectedId(milestone.id)}
            >
              <span className="journey-timeline__index-marker" aria-hidden="true" />
              <span className="journey-timeline__index-meta" dir="ltr">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <time>{milestone.period}</time>
              </span>
              <span className="journey-timeline__index-copy">
                <strong>{milestone.title}</strong>
                <span>{milestone.organization}</span>
              </span>
            </button>
          );
        })}
      </div>

      <article
        id="journey-milestone-detail"
        className="journey-timeline__stage"
        aria-live="polite"
        key={selectedMilestone.id}
      >
        <header className="journey-timeline__stage-header">
          <div className="journey-timeline__stage-kicker">
            <span>{String(selectedIndex + 1).padStart(2, "0")}</span>
            <span>{typeLabels[selectedMilestone.type]}</span>
            <time>{selectedMilestone.period}</time>
          </div>

          <h3>{selectedMilestone.title}</h3>
          <p className="journey-timeline__organization">
            {selectedMilestone.organization}
            {selectedMilestone.location && (
              <span className="before:mx-1.5 before:content-['·']">
                {selectedMilestone.location}
              </span>
            )}
          </p>
        </header>

        <div className="journey-timeline__content">
          <p className="journey-timeline__context">{selectedMilestone.context}</p>

          {selectedMilestone.actions.length > 0 && (
            <ul className="journey-timeline__actions">
              {selectedMilestone.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          )}

          {selectedMilestone.impact && (
            <p className="journey-timeline__impact">
              <span>الأثر · </span>
              {selectedMilestone.impact}
            </p>
          )}

          {outcomes.length > 0 && (
            <div className="journey-timeline__outcomes">
              {outcomes.map((outcome) => (
                <span key={outcome}>{outcome}</span>
              ))}
            </div>
          )}

          {selectedMilestone.lesson && (
            <p className="journey-timeline__lesson">"{selectedMilestone.lesson}"</p>
          )}
        </div>

        <footer className="journey-timeline__stage-footer" dir="ltr">
          <span>
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(orderedMilestones.length).padStart(2, "0")}
          </span>
          <span aria-hidden="true" />
        </footer>
      </article>
    </div>
  );
};
