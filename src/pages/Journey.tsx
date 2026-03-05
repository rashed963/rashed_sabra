import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import Layout from "../components/Layout";
import { blogPostPath, routes } from "../config/routes";
import { copyAr } from "../features/copy/ar";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import { getAllBlogPosts } from "../features/blog/selectors";
import { getPostsByTopic, type BlogTopicId } from "../features/blog/topics";
import { milestones } from "../features/journey/data";
import { journeyThemes } from "../features/journey/content";

const Timeline = lazy(() =>
  import("../components/Timeline").then((module) => ({ default: module.Timeline })),
);

const topicOrder: BlogTopicId[] = [
  "engineering-leadership",
  "arabic-nlp",
  "robotics-simulation",
];

const posts = getAllBlogPosts(DEFAULT_BLOG_LANGUAGE);

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
          {journeyThemes.map((theme, i) => {
            const topic = topicOrder[i] ?? "general";
            const relatedPosts = getPostsByTopic(posts, topic).slice(0, 2);

            return (
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

                <div className="mt-4 ruled pt-3">
                  {relatedPosts.length > 0 ? (
                    <ul className="space-y-2">
                      {relatedPosts.map((post) => (
                        <li key={post.slug}>
                          <Link
                            to={blogPostPath(post.slug)}
                            className="text-xs font-medium text-primary hover:underline underline-offset-4"
                          >
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Link
                      to={`${routes.blog}?topic=${topic}`}
                      className="text-xs font-medium text-primary hover:underline underline-offset-4"
                    >
                      {copyAr.blog.title}
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <div className="container max-w-2xl">
      <div className="ruled" />
    </div>

    <section className="py-16">
      <div className="container max-w-2xl">
        <h2 className="mb-10 text-sm font-semibold text-foreground">{copyAr.journey.timelineTitle}</h2>
        <Suspense fallback={<div className="h-24 rounded-md border border-border/50 bg-secondary/40" aria-hidden="true" />}>
          <Timeline milestones={milestones} />
        </Suspense>
      </div>
    </section>

    <div className="container max-w-2xl">
      <div className="ruled" />
    </div>

    <section className="py-16">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="card-neural p-7 md:p-9"
        >
          <h2 className="mb-3 text-2xl font-bold text-foreground">{copyAr.blog.title}</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {copyAr.blog.subtitle}
          </p>
          <Link
            to={routes.blog}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            {copyAr.home.showAllCta}
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Journey;
