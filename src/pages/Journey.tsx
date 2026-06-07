import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Timeline } from "../components/Timeline";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { copyAr } from "../features/copy/ar";
import { milestones, journeyThemes } from "../features/journey/content";

const Journey = () => (
  <Layout>
    <div className="site-page journey-page">
    <section className="interior-hero" aria-labelledby="journey-title">
      <div className="page-shell">
        <div className="interior-hero__copy">
          <p className="section-label">
            <span>01</span>
            {copyAr.journey.eyebrow}
          </p>
          <h1 id="journey-title" className="interior-title">
            {copyAr.journey.titlePrefix} {copyAr.journey.titleHighlight}
          </h1>
          <p className="interior-lede">
            {copyAr.journey.subtitle}
          </p>
        </div>

        <div className="editorial-actions">
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-button editorial-button--primary"
          >
            {copyAr.common.linkedInCta}
          </a>
          <Link
            to={routes.blog}
            className="editorial-button"
          >
            {copyAr.home.blogCta}
          </Link>
        </div>
      </div>
    </section>

    <section className="paper-section journey-section" aria-labelledby="journey-themes">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="section-label"><span>02</span><span lang="en" dir="ltr">Working themes</span></p>
            <h2 id="journey-themes">{copyAr.journey.themesTitle}</h2>
          </div>
        </div>
        <div className="journey-themes">
          {journeyThemes.map((theme) => (
            <article key={theme.title}>
              <p>{theme.num}</p>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="journey-section" aria-labelledby="journey-principles">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="section-label"><span>03</span><span lang="en" dir="ltr">Operating principles</span></p>
            <h2 id="journey-principles">{copyAr.journey.principlesTitle}</h2>
          </div>
        </div>
        <div className="journey-principles">
          {copyAr.journey.principles.map((principle, index) => (
            <article key={principle.title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="paper-section journey-section" aria-labelledby="journey-proof">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="section-label"><span>04</span><span lang="en" dir="ltr">Professional proof</span></p>
            <h2 id="journey-proof">{copyAr.journey.proofTitle}</h2>
          </div>
        </div>
        <div className="journey-proof">
          {copyAr.journey.proofStories.map((story, index) => (
            <article key={story.title}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <h3>{story.title}</h3>
              <p>{story.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="journey-section" aria-labelledby="journey-timeline">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="section-label"><span>05</span><span lang="en" dir="ltr">Selected path</span></p>
            <h2 id="journey-timeline">{copyAr.journey.timelineTitle}</h2>
          </div>
        </div>
        <Timeline milestones={milestones} />
      </div>
    </section>

    <section className="journey-closing" aria-labelledby="journey-writing">
      <div className="page-shell">
        <div>
          <p className="section-label"><span>06</span><span lang="en" dir="ltr">Ideas in practice</span></p>
          <h2 id="journey-writing">{copyAr.blog.title}</h2>
          <p>
            {copyAr.blog.subtitle}
          </p>
          <Link
            to={routes.blog}
            className="editorial-button editorial-button--light"
          >
            {copyAr.home.showAllCta}
          </Link>
        </div>
      </div>
    </section>
    </div>
  </Layout>
);

export default Journey;
