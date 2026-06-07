import type { Milestone, MilestoneType } from "../features/journey/types";

const fallbackOutcomes: Record<string, string[]> = {
  masters: ["AI/NLP", "قاعدة أكاديمية", "أنظمة بيانات"],
  "l-one": ["Software Engineering", "Robotics Simulation", "CAD workflows"],
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

export const Timeline = ({ milestones }: TimelineProps) => (
  <div className="journey-timeline">
    {milestones.map((milestone, index) => {
      const outcomes = milestone.outcomes ?? fallbackOutcomes[milestone.id] ?? [];

      return (
        <article key={milestone.id} className="journey-timeline__item">
          <div className="journey-timeline__meta">
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <time>{milestone.period}</time>
            <b>{typeLabels[milestone.type]}</b>
          </div>

          <div className="journey-timeline__content">
            <h3>{milestone.title}</h3>
            <p className="journey-timeline__organization">
              {milestone.organization}
              {milestone.location && (
                <span className="before:mx-1.5 before:content-['·']">{milestone.location}</span>
              )}
            </p>

            <p className="journey-timeline__context">{milestone.context}</p>

            {milestone.actions.length > 0 && (
              <ul className="journey-timeline__actions">
                {milestone.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            )}

            {milestone.impact && (
              <p className="journey-timeline__impact">
                <span>الأثر · </span>
                {milestone.impact}
              </p>
            )}

            {outcomes.length > 0 && (
              <div className="journey-timeline__outcomes">
                {outcomes.map((outcome) => (
                  <span key={outcome}>
                    {outcome}
                  </span>
                ))}
              </div>
            )}

            {milestone.lesson && (
              <p className="journey-timeline__lesson">
                "{milestone.lesson}"
              </p>
            )}
          </div>
        </article>
      );
    })}
  </div>
);
