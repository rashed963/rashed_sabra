import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import TypingEffect from "../components/TypingEffect";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import PostCard from "../features/blog/PostCard";
import { copyAr } from "../features/copy/ar";
import { getAllBlogPosts } from "../features/blog/selectors";
import { milestones } from "../features/journey/data";
import { journeyThemes } from "../features/journey/content";

const posts = getAllBlogPosts(DEFAULT_BLOG_LANGUAGE);
const proofStats = [
  { value: milestones.length, label: copyAr.journey.timelineTitle },
  { value: journeyThemes.length, label: copyAr.journey.themesTitle },
  { value: posts.length, label: copyAr.home.latestPostsTitle },
];

const Index = () => (
  <Layout>
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-base font-semibold tracking-wide text-primary/90 md:text-lg"
        >
          {siteConfig.profile.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="mb-5 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          {siteConfig.profile.firstName} <span className="text-primary">{siteConfig.profile.lastName}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mb-7 h-8"
        >
          <TypingEffect
            texts={copyAr.home.typingTexts}
            className="text-sm text-muted-foreground md:text-base"
            speed={55}
            pauseMs={2800}
            prefix=""
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          {copyAr.home.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.26 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            to={routes.journey}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            {copyAr.home.journeyCta}
            <span aria-hidden="true">←</span>
          </Link>
          <Link
            to={routes.blog}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            {copyAr.home.blogCta}
            <span aria-hidden="true">←</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          {proofStats.map((item) => (
            <div key={item.label} className="card-neural px-4 py-3">
              <p className="text-2xl font-bold chapter-num text-foreground">{item.value}</p>
              <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38, ease: "easeOut" }}
          className="mt-6"
        >
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
          >
            {copyAr.common.linkedInCta}
          </a>
        </motion.div>
      </div>
    </section>

    <div className="container max-w-2xl">
      <div className="ruled" />
    </div>

    <section className="py-16">
      <div className="container max-w-2xl">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-foreground">{copyAr.home.latestPostsTitle}</h2>
          <Link
            to={routes.blog}
            className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
          >
            {copyAr.home.showAllCta}
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} showReadTime={false} showReadMore={false} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-neural p-10"
        >
          <p className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            "{copyAr.home.quote}"
          </p>
          <p className="mt-5 text-sm text-primary/60">{copyAr.home.quoteAuthor}</p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
