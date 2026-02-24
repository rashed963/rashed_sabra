import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Crown, Cpu, Rocket } from "lucide-react";
import type { Milestone, MilestoneType } from "../features/journey/types";

const typeConfig: Record<
  MilestoneType,
  { icon: React.ElementType; dotColor: string; badgeClass: string; label: string }
> = {
  education: {
    icon: GraduationCap,
    dotColor: "hsl(var(--milestone-education))",
    badgeClass: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    label: "تعليم",
  },
  role: {
    icon: Briefcase,
    dotColor: "hsl(var(--milestone-role))",
    badgeClass: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    label: "دور وظيفي",
  },
  leadership: {
    icon: Crown,
    dotColor: "hsl(var(--milestone-leadership))",
    badgeClass: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    label: "قيادة",
  },
  product: {
    icon: Rocket,
    dotColor: "hsl(var(--milestone-product))",
    badgeClass: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    label: "منتج",
  },
  ai: {
    icon: Cpu,
    dotColor: "hsl(var(--milestone-ai))",
    badgeClass: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
    label: "ذكاء اصطناعي",
  },
};

interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
  total: number;
}

const MilestoneCard = ({ milestone, index, total }: MilestoneCardProps) => {
  const config = typeConfig[milestone.type];
  const Icon = config.icon;
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
      className="relative flex gap-5 md:gap-8 pb-12 last:pb-0"
    >
      {/* ── Dot + connector ── */}
      <div className="flex flex-col items-center pt-1 shrink-0">
        <div
          className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-4 ring-background shadow-sm"
          style={{ backgroundColor: config.dotColor }}
        >
          <Icon className="h-4 w-4 text-white" />
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-gradient-to-b from-border to-border/20" />
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex-1 min-w-0 pb-2">
        {/* Period + badge */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <time className="text-xs font-medium text-muted-foreground tabular-nums">
            {milestone.period}
          </time>
          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${config.badgeClass}`}>
            {config.label}
          </span>
        </div>

        {/* Title — heavy */}
        <h3 className="mb-1 text-2xl font-bold leading-snug text-foreground">
          {milestone.title}
        </h3>
        {/* Org — light */}
        <p className="mb-4 text-sm font-light text-muted-foreground">
          {milestone.organization}
          {milestone.location && (
            <span className="before:content-['·'] before:mx-1.5">{milestone.location}</span>
          )}
        </p>

        {/* Context */}
        <p className="mb-4 text-base font-light leading-loose text-foreground/75">
          {milestone.context}
        </p>

        {/* Actions */}
        {milestone.actions.length > 0 && (
          <ul className="mb-4 space-y-2.5">
            {milestone.actions.map((action, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-light text-foreground/65 leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {action}
              </li>
            ))}
          </ul>
        )}

        {/* Impact */}
        {milestone.impact && (
          <div className="rounded-md border-r-2 border-accent bg-secondary/50 px-4 py-3">
            <p className="text-sm font-light leading-relaxed text-foreground/80">
              <span className="font-bold text-accent">الأثر — </span>
              {milestone.impact}
            </p>
          </div>
        )}

        {/* Lesson */}
        {milestone.lesson && (
          <p className="mt-4 text-sm font-light italic text-muted-foreground leading-loose">
            "{milestone.lesson}"
          </p>
        )}
      </div>
    </motion.div>
  );
};

/* ── Timeline wrapper ── */
interface TimelineProps {
  milestones: Milestone[];
}

export const Timeline = ({ milestones }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative">
      {/* Scroll progress bar */}
      <div className="pointer-events-none absolute top-0 -right-4 bottom-0 hidden w-0.5 md:block">
        <div className="h-full w-full rounded-full bg-border/40" />
        <motion.div
          className="absolute top-0 right-0 left-0 rounded-full bg-accent/50"
          style={{ scaleY, transformOrigin: "top" }}
        />
      </div>

      {milestones.map((milestone, index) => (
        <MilestoneCard
          key={milestone.id}
          milestone={milestone}
          index={index}
          total={milestones.length}
        />
      ))}
    </div>
  );
};
