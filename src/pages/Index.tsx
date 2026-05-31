import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { blogPostPath, routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import { getAllBlogPosts } from "../features/blog/selectors";
import { copyAr } from "../features/copy/ar";

const posts = getAllBlogPosts(DEFAULT_BLOG_LANGUAGE).slice(0, 3);

const Index = () => (
  <Layout>
    <div className="site-pattern overflow-hidden">
      <section className="relative py-14 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,hsl(var(--primary)/0.16),transparent_24rem)]" />
        <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-8 rounded-full border border-primary/15" />
              <div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-[2rem] p-5">
                <div className="absolute right-5 top-5 h-10 w-10 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-5 left-5 h-10 w-10 border-b-2 border-l-2 border-accent" />
                <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-b from-primary/22 via-white/[0.05] to-background/70 text-center">
                  <p className="text-7xl font-black tracking-tight text-foreground md:text-8xl">
                    {copyAr.home.profileInitials}
                  </p>
                  <p className="mt-3 text-3xl font-black text-primary">
                    {copyAr.home.profileName}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">
                    {copyAr.home.profileLabel}
                  </p>
                </div>
              </div>

              {copyAr.home.profilePills.map((pill, index) => (
                <span
                  key={pill}
                  className={`accent-pill absolute ${
                    index === 0
                      ? "-right-5 top-10"
                      : index === 1
                        ? "-left-8 top-1/3"
                        : index === 2
                          ? "bottom-8 right-10"
                          : "bottom-24 -left-10"
                  }`}
                >
                  <span className={index === 1 ? "accent-dot bg-accent" : "accent-dot"} />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-right">
            <p className="accent-pill mb-8">
              <span className="accent-dot" />
              {copyAr.home.eyebrow}
            </p>
            <h1 className="text-balance text-5xl font-black leading-[1.08] tracking-tight text-foreground sm:text-6xl md:text-7xl xl:text-8xl">
              <span className="block">{copyAr.home.titleLines.first}</span>
              <span className="block text-primary">{copyAr.home.titleLines.second}</span>
              <span className="block">
                {copyAr.home.titleLines.thirdPrefix}
                <span className="block text-accent">{copyAr.home.titleLines.thirdAccent}</span>
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg font-medium leading-9 text-muted-foreground lg:mx-0">
              {copyAr.home.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                to={routes.journey}
                className="inline-flex items-center rounded-full bg-primary px-7 py-4 text-sm font-black text-primary-foreground shadow-[0_0_34px_hsl(var(--primary)/0.26)] transition-transform hover:-translate-y-0.5"
              >
                {copyAr.home.journeyCta}
              </Link>
              <Link
                to={routes.blog}
                className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {copyAr.home.blogCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-white/[0.035] py-5 backdrop-blur">
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm font-bold">
          <span className="text-accent">🚀 {copyAr.home.announcement}</span>
          <Link to={routes.blog} className="text-primary hover:underline underline-offset-4">
            {copyAr.home.announcementCta}
          </Link>
        </div>
      </section>

      <section className="border-b border-white/10 py-10">
        <div className="page-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {copyAr.home.stats.map((stat) => (
            <article key={stat.value} className="glass-panel rounded-3xl p-6 text-center">
              <p className="text-3xl font-black text-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-muted-foreground">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {copyAr.home.about.cards.map((card, index) => (
              <article key={card} className="glass-panel rounded-3xl p-6">
                <p className="mb-5 text-xs font-black text-primary">0{index + 1}</p>
                <h3 className="text-xl font-black leading-snug text-foreground">{card}</h3>
              </article>
            ))}
          </div>

          <div className="text-right">
            <p className="mb-5 text-sm font-black text-primary">{copyAr.home.about.eyebrow}</p>
            <h2 className="text-balance text-5xl font-black leading-[1.12] text-foreground md:text-7xl">
              <span className="block">{copyAr.home.about.headingFirst}</span>
              <span className="block">{copyAr.home.about.headingSecond}</span>
              <span className="block text-accent">{copyAr.home.about.headingAccent}</span>
            </h2>
            <p className="mt-7 text-lg font-medium leading-9 text-muted-foreground">
              {copyAr.home.about.body}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-4 text-sm font-black text-primary">{copyAr.home.latestPostsTitle}</p>
              <h2 className="text-4xl font-black text-foreground md:text-6xl">
                محتوى للتقنيين العرب.
              </h2>
            </div>
            <Link to={routes.blog} className="font-bold text-primary hover:underline underline-offset-4">
              {copyAr.home.showAllCta}
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="glass-panel flex min-h-72 flex-col rounded-3xl p-6">
                <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-bold text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{post.tag}</span>
                  <span>{post.readTime} {copyAr.common.readLabel}</span>
                </div>
                <h3 className="text-2xl font-black leading-snug text-foreground">
                  <Link to={blogPostPath(post.slug)} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <time className="text-xs text-muted-foreground">{post.date}</time>
                  <Link to={blogPostPath(post.slug)} className="text-sm font-black text-primary hover:underline underline-offset-4">
                    {copyAr.common.readPostCta}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="glass-panel rounded-3xl p-8 text-center text-muted-foreground">
              لا توجد مقالات منشورة بعد.
            </div>
          )}

          <div className="mt-16 glass-panel rounded-3xl p-8 text-center">
            <p className="text-lg font-bold text-foreground">{siteConfig.profile.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{siteConfig.profile.role}</p>
            <a
              href={siteConfig.external.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full border border-primary/40 px-5 py-3 text-sm font-black text-primary hover:bg-primary hover:text-primary-foreground"
            >
              تواصل معي
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default Index;
