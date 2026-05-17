import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Timeline } from "../components/Timeline";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { copyAr } from "../features/copy/ar";
import { milestones, journeyThemes } from "../features/journey/content";

const Journey = () => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="page-shell">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">{copyAr.journey.eyebrow}</p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
            {copyAr.journey.titlePrefix} {copyAr.journey.titleHighlight}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {copyAr.journey.subtitle}
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
          >
            {copyAr.common.linkedInCta}
          </a>
          <Link
            to={routes.blog}
            className="inline-flex items-center rounded-sm border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
          >
            {copyAr.home.blogCta}
          </Link>
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="page-shell section-rule pt-8">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="eyebrow">{copyAr.journey.themesTitle}</h2>
          <span className="text-xs text-muted-foreground">01</span>
        </div>
        <div className="grid gap-0 border-y border-border/80 md:grid-cols-3">
          {journeyThemes.map((theme) => (
            <article key={theme.title} className="border-b border-border/70 py-5 md:border-b-0 md:border-l md:px-5 md:first:pr-0 md:last:border-l-0 md:last:pl-0">
              <p className="mb-2 text-xs font-semibold text-muted-foreground">{theme.num}</p>
              <h3 className="mb-2 text-lg font-bold text-foreground">{theme.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{theme.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="page-shell section-rule pt-8">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="eyebrow">{copyAr.journey.principlesTitle}</h2>
          <span className="text-xs text-muted-foreground">02</span>
        </div>
        <div className="grid gap-x-10 gap-y-7 md:grid-cols-2">
          {copyAr.journey.principles.map((principle) => (
            <article key={principle.title} className="soft-rule pt-4">
              <h3 className="mb-2 text-lg font-bold text-foreground">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="page-shell section-rule pt-8">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="eyebrow">{copyAr.journey.proofTitle}</h2>
          <span className="text-xs text-muted-foreground">03</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {copyAr.journey.proofStories.map((story) => (
            <article key={story.title} className="surface p-5">
              <h3 className="mb-3 text-lg font-bold text-foreground">{story.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{story.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="page-shell section-rule pt-8">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="eyebrow">{copyAr.journey.timelineTitle}</h2>
          <span className="text-xs text-muted-foreground">04</span>
        </div>
        <Timeline milestones={milestones} />
      </div>
    </section>

    <section className="pb-20">
      <div className="page-shell section-rule pt-8">
        <div className="max-w-2xl">
          <h2 className="mb-3 text-2xl font-bold text-foreground">{copyAr.blog.title}</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {copyAr.blog.subtitle}
          </p>
          <Link
            to={routes.blog}
            className="inline-flex items-center rounded-sm border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
          >
            {copyAr.home.showAllCta}
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Journey;
