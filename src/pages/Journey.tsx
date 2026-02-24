import { motion } from "framer-motion";
import { Timeline } from "../components/Timeline";
import { siteConfig } from "../config/site";
import Layout from "../components/Layout";
import { copyAr } from "../features/copy/ar";
import { milestones } from "../features/journey/data";
import { journeyThemes } from "../features/journey/content";

const Journey = () => (
  <Layout>
    <section className="pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="container max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium tracking-wide text-primary"
        >
          {copyAr.journey.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 text-5xl font-bold md:text-6xl"
        >
          {copyAr.journey.titlePrefix} <span className="text-primary">{copyAr.journey.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mb-2 text-base leading-relaxed text-muted-foreground"
        >
          {copyAr.journey.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6"
        >
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            {copyAr.common.linkedInCta}
          </a>
        </motion.div>
      </div>
    </section>

    <section className="pb-16">
      <div className="container max-w-2xl">
        <h2 className="mb-8 text-sm font-semibold text-foreground">{copyAr.journey.themesTitle}</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {journeyThemes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card-neural p-5"
            >
              <span className="mb-3 block text-3xl font-bold text-primary/15 chapter-num">{theme.num}</span>
              <h3 className="mb-2 text-base font-bold text-foreground">{theme.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{theme.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <div className="container max-w-2xl">
      <div className="ruled" />
    </div>

    <section className="py-16">
      <div className="container max-w-2xl">
        <h2 className="mb-10 text-sm font-semibold text-foreground">{copyAr.journey.timelineTitle}</h2>
        <Timeline milestones={milestones} />
      </div>
    </section>
  </Layout>
);

export default Journey;
