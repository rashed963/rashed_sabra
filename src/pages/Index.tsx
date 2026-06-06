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
    <div className="overflow-hidden">
      <section className="relative py-12 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,hsl(var(--primary)/0.16),transparent_24rem)]" />
        <div dir="ltr" className="page-shell relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] xl:gap-16">
          <div dir="rtl" className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[23rem]">
              <div className="absolute inset-8 rounded-full border border-primary/15" />
              <div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-[2rem] p-5">
                <div className="absolute right-5 top-5 h-10 w-10 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-5 left-5 h-10 w-10 border-b-2 border-l-2 border-accent" />
                <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-b from-primary/22 via-white/[0.05] to-background/70 text-center">
                  <p className="text-[3.75rem] font-bold leading-none text-foreground md:text-[4.5rem]">
                    {copyAr.home.profileInitials}
                  </p>
                  <p className="mt-3 text-[1.5rem] font-bold leading-9 text-primary md:text-[1.875rem]">
                    {copyAr.home.profileName}
                  </p>
                  <p className="meta-text mt-2">
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

          <div dir="rtl" className="order-1 text-center lg:order-2 lg:text-right">
            <p className="accent-pill mb-6">
              <span className="accent-dot" />
              {copyAr.home.eyebrow}
            </p>
            <h1 className="hero-title">
              <span className="block">{copyAr.home.titleLines.first}</span>
              <span className="block text-primary">{copyAr.home.titleLines.second}</span>
              <span className="block">
                {copyAr.home.titleLines.thirdPrefix}
                <span className="block text-accent">{copyAr.home.titleLines.thirdAccent}</span>
              </span>
            </h1>
            <p className="lede mx-auto mt-6 max-w-xl lg:mx-0">
              {copyAr.home.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                to={routes.journey}
                className="button-label inline-flex items-center rounded-full bg-primary px-7 py-4 text-primary-foreground shadow-[0_0_34px_hsl(var(--primary)/0.26)] transition-transform hover:-translate-y-0.5"
              >
                {copyAr.home.journeyCta}
              </Link>
              <Link
                to={routes.blog}
                className="button-label inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {copyAr.home.blogCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-primary/15 bg-white/[0.035] py-5 backdrop-blur">
        <div className="button-label page-shell flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
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
              <p className="text-[2rem] font-bold leading-tight text-foreground md:text-[2.25rem]">{stat.value}</p>
              <p className="support-copy mt-3">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {copyAr.home.about.cards.map((card, index) => (
              <article key={card} className="glass-panel rounded-3xl p-6">
                <p className="meta-text mb-5 text-primary">0{index + 1}</p>
                <h3 className="card-title">{card}</h3>
              </article>
            ))}
          </div>

          <div className="text-right">
            <p className="eyebrow mb-5 text-primary">{copyAr.home.about.eyebrow}</p>
            <h2 className="section-title">
              <span className="block">{copyAr.home.about.headingFirst}</span>
              <span className="block">{copyAr.home.about.headingSecond}</span>
              <span className="block text-accent">{copyAr.home.about.headingAccent}</span>
            </h2>
            <p className="lede mt-7">
              {copyAr.home.about.body}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow mb-4 text-primary">{copyAr.home.latestPostsTitle}</p>
              <h2 className="section-title">
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
                <div className="meta-text mb-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">{post.tag}</span>
                  <span>{post.readTime} {copyAr.common.readLabel}</span>
                </div>
                <h3 className="text-[1.5rem] font-bold leading-snug text-foreground">
                  <Link to={blogPostPath(post.slug)} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h3>
                <p className="support-copy mt-4 flex-1">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <time className="meta-text">{post.date}</time>
                  <Link to={blogPostPath(post.slug)} className="button-label text-primary hover:underline underline-offset-4">
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
            <p className="text-[1.125rem] font-bold leading-7 text-foreground">{siteConfig.profile.name}</p>
            <p className="support-copy mt-2">{siteConfig.profile.role}</p>
            <a
              href={siteConfig.external.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="button-label mt-5 inline-flex rounded-full border border-primary/40 px-5 py-3 text-primary hover:bg-primary hover:text-primary-foreground"
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
