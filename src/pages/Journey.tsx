import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Timeline } from "../components/Timeline";
import { siteConfig } from "../config/site";
import { useLanguage } from "../features/i18n/language";
import { getJourneyThemes, getMilestones } from "../features/journey/content";

const Journey = () => {
  const { language, routes, copy } = useLanguage();
  const milestones = getMilestones(language);
  const journeyThemes = getJourneyThemes(language);

  return (
    <Layout>
    <div className="site-page journey-page">
    <section className="interior-hero" aria-labelledby="journey-title">
      <div className="page-shell">
        <div className="interior-hero__copy">
          <p className="section-label">
            <span>01</span>
            {copy.journey.eyebrow}
          </p>
          <h1 id="journey-title" className="interior-title">
            {copy.journey.titlePrefix} {copy.journey.titleHighlight}
          </h1>
          <p className="interior-lede">
            {copy.journey.subtitle}
          </p>
        </div>

        <div className="editorial-actions">
          <Link
            to={routes.cv}
            state={{ from: routes.journey }}
            className="editorial-button editorial-button--primary"
          >
            {copy.common.cvCta}
          </Link>
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-button"
          >
            {copy.common.linkedInCta}
          </a>
        </div>
      </div>
    </section>

    <section className="paper-section journey-section" aria-labelledby="journey-themes">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="section-label"><span>02</span><span>{copy.journey.themesLabel}</span></p>
            <h2 id="journey-themes">{copy.journey.themesTitle}</h2>
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
            <p className="section-label"><span>03</span><span>{copy.journey.principlesLabel}</span></p>
            <h2 id="journey-principles">{copy.journey.principlesTitle}</h2>
          </div>
        </div>
        <div className="journey-principles">
          {copy.journey.principles.map((principle, index) => (
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
            <p className="section-label"><span>04</span><span>{copy.journey.proofLabel}</span></p>
            <h2 id="journey-proof">{copy.journey.proofTitle}</h2>
          </div>
        </div>
        <div className="journey-proof">
          {copy.journey.proofStories.map((story, index) => (
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
            <p className="section-label"><span>05</span><span>{copy.journey.timelineLabel}</span></p>
            <h2 id="journey-timeline">{copy.journey.timelineTitle}</h2>
          </div>
        </div>
        <Timeline milestones={milestones} />
      </div>
    </section>

    <section className="journey-closing" aria-labelledby="journey-writing">
      <div className="page-shell">
        <div>
          <p className="section-label"><span>06</span><span>{copy.journey.writingLabel}</span></p>
          <h2 id="journey-writing">{copy.blog.title}</h2>
          <p>
            {copy.blog.subtitle}
          </p>
          <Link
            to={routes.blog}
            className="editorial-button editorial-button--light"
          >
            {copy.home.showAllCta}
          </Link>
        </div>
      </div>
    </section>
    </div>
    </Layout>
  );
};

export default Journey;
