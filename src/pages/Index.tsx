import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import PostCard from "../features/blog/PostCard";
import { getAllBlogPosts } from "../features/blog/selectors";
import { copyAr } from "../features/copy/ar";

const posts = getAllBlogPosts(DEFAULT_BLOG_LANGUAGE).slice(0, 2);

const Index = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="page-shell">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">{copyAr.home.eyebrow}</p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
            {copyAr.home.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {copyAr.home.subtitle}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            to={routes.journey}
            className="inline-flex items-center rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {copyAr.home.journeyCta}
          </Link>
          <Link
            to={routes.blog}
            className="inline-flex items-center rounded-sm border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
          >
            {copyAr.home.blogCta}
          </Link>
        </div>

        <div className="mt-12 section-rule pt-6">
          <p className="text-sm font-semibold text-foreground">{siteConfig.profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{siteConfig.profile.role}</p>
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="page-shell">
        <h2 className="eyebrow mb-6">{copyAr.home.proofTitle}</h2>
        <div className="grid gap-0 border-y border-border/80 md:grid-cols-3">
          {copyAr.home.proofItems.map((item) => (
            <article key={item.title} className="border-b border-border/70 py-5 md:border-b-0 md:border-l md:px-5 md:first:pr-0 md:last:border-l-0 md:last:pl-0">
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="page-shell">
        <div className="mb-6 flex items-baseline justify-between gap-4 section-rule pt-6">
          <h2 className="eyebrow">{copyAr.home.latestPostsTitle}</h2>
          <Link
            to={routes.blog}
            className="text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            {copyAr.home.showAllCta}
          </Link>
        </div>

        <div className="space-y-0 border-y border-border/80">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} showReadMore={false} />
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
