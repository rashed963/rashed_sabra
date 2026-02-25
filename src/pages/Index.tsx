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

const posts = getAllBlogPosts(DEFAULT_BLOG_LANGUAGE);

const Index = () => (
  <Layout>
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-sm font-medium tracking-wide text-primary"
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
          className="mb-8 h-8"
        >
          <TypingEffect
            texts={copyAr.home.typingTexts}
            className="text-base text-muted-foreground"
            speed={55}
            pauseMs={2800}
            prefix=""
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground"
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
