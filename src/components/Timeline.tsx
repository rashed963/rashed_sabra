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
  <div className="border-y border-border/80">
    {milestones.map((milestone) => {
      const outcomes = milestone.outcomes ?? fallbackOutcomes[milestone.id] ?? [];

      return (
        <article key={milestone.id} className="grid gap-4 border-b border-border/70 py-7 last:border-b-0 md:grid-cols-[11rem_1fr]">
          <div className="support-copy">
            <time className="block font-semibold tabular-nums text-foreground">{milestone.period}</time>
            <span className="mt-1 block">{typeLabels[milestone.type]}</span>
          </div>

          <div>
            <h3 className="mb-1 text-[1.375rem] font-semibold leading-snug text-foreground">{milestone.title}</h3>
            <p className="support-copy mb-4">
              {milestone.organization}
              {milestone.location && (
                <span className="before:mx-1.5 before:content-['·']">{milestone.location}</span>
              )}
            </p>

            <p className="body-copy mb-4 text-foreground/85">{milestone.context}</p>

            {milestone.actions.length > 0 && (
              <ul className="support-copy mb-4 list-disc space-y-2 pr-5">
                {milestone.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            )}

            {milestone.impact && (
              <p className="support-copy mb-4 border-r-2 border-border pr-4 text-foreground/85">
                <span className="font-bold text-foreground">الأثر - </span>
                {milestone.impact}
              </p>
            )}

            {outcomes.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="meta-text border border-border/80 px-2 py-0.5"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            )}

            {milestone.lesson && (
              <p className="support-copy mt-4 italic">
                "{milestone.lesson}"
              </p>
            )}
          </div>
        </article>
      );
    })}
  </div>
);
