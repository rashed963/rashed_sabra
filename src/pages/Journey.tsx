import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { siteConfig } from "../config/site";
import { useLanguage } from "../features/i18n/language";
import { getJourneyNarrative } from "../features/journey/narrative";

const chapterGraphPaths = [
  ["M12 20 L54 48", "M18 76 L54 48", "M54 48 L86 50"],
  ["M12 50 L38 24", "M12 50 L38 76", "M38 24 L86 50", "M38 76 L86 50"],
  ["M8 50 L28 22", "M28 22 L50 50", "M50 50 L72 22", "M72 22 L92 50", "M92 50 L72 78", "M72 78 L28 22"],
  ["M10 20 L50 50", "M10 80 L50 50", "M50 12 L50 50", "M50 88 L50 50", "M50 50 L90 24", "M50 50 L90 76"],
] as const;

const Journey = () => {
  const { language, routes } = useLanguage();
  const journey = getJourneyNarrative(language);

  return (
    <Layout>
      <div className="site-page journey-page">
        <section className="journey-hero" aria-labelledby="journey-title">
          <div className="journey-hero__noise" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="page-shell journey-hero__inner">
            <p className="journey-kicker">{journey.hero.label}</p>
            <h1 id="journey-title">{journey.hero.title}</h1>
            <p className="journey-hero__lede">{journey.hero.body}</p>
            <div className="editorial-actions">
              <a href="#proof-of-work" className="editorial-button editorial-button--primary">
                {journey.hero.proofCta}
              </a>
              <Link to={routes.blog} className="editorial-button">
                {journey.hero.thinkingCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="journey-thesis" aria-labelledby="journey-thesis-title">
          <div className="page-shell journey-thesis__inner">
            <div>
              <p className="journey-section-index">01 / {journey.labels.thesis}</p>
              <h2 id="journey-thesis-title">{journey.thesis.title}</h2>
            </div>
            <p>{journey.thesis.body}</p>
            <ol className="journey-progression" aria-label={journey.thesis.progressionLabel}>
              {journey.thesis.progression.map((step, index) => (
                <li key={step.title}>
                  <span className="journey-progression__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="journey-progression__node" aria-hidden="true" />
                  <strong>{step.title}</strong>
                  <small>{step.body}</small>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="journey-chapters" aria-labelledby="journey-chapters-title">
          <div className="page-shell">
            <header className="journey-section-heading">
              <p className="journey-section-index">02 / {journey.labels.chapters}</p>
              <h2 id="journey-chapters-title">{journey.chaptersTitle}</h2>
            </header>

            <div className="journey-chapter-list">
              {journey.chapters.map((chapter, index) => (
                <article
                  className={`journey-chapter journey-chapter--${index + 1}`}
                  key={chapter.eyebrow}
                >
                  <div className="journey-chapter__rail" aria-hidden="true">
                    <span className="journey-chapter__node" />
                  </div>
                  <div className="journey-chapter__content">
                    <header>
                      <div>
                        <p className="journey-chapter__eyebrow">
                          {chapter.eyebrow}
                          {chapter.current && (
                            <span className="journey-current">
                              <span aria-hidden="true" />
                              {journey.labels.current}
                            </span>
                          )}
                        </p>
                        <h3>{chapter.title}</h3>
                      </div>
                      <p className="journey-chapter__time" dir="ltr">{chapter.time}</p>
                    </header>
                    {"context" in chapter && chapter.context && (
                      <ul className="journey-context" aria-label={journey.labels.capabilities}>
                        {chapter.context.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                    <div className="journey-chapter__body">
                      <div>
                        {chapter.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        <ul className="journey-tags" aria-label={journey.labels.capabilities}>
                          {chapter.tags.map((tag) => <li key={tag}>{tag}</li>)}
                        </ul>
                      </div>
                      <div className="journey-graph" aria-hidden="true">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                          {chapterGraphPaths[index].map((path) => <path key={path} d={path} />)}
                        </svg>
                        {chapter.motif.map((label) => <span key={label}>{label}</span>)}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="journey-turning" aria-labelledby="turning-points-title">
          <div className="page-shell">
            <header className="journey-section-heading">
              <p className="journey-section-index">03 / {journey.labels.turningPoints}</p>
              <h2 id="turning-points-title">{journey.turningPointsTitle}</h2>
            </header>
            <div className="journey-turning__flow">
              {journey.turningPoints.map((point, index) => (
                <article key={point.title}>
                  <header>
                    <p className="journey-card-number">{String(index + 1).padStart(2, "0")}</p>
                    <h3>{point.title}</h3>
                  </header>
                  <dl className="journey-decision-flow">
                    <div className="journey-decision-flow__tension">
                      <dt>{journey.labels.tension}</dt><dd>{point.challenge}</dd>
                    </div>
                    <div className="journey-decision-flow__decision">
                      <dt>{journey.labels.decision}</dt><dd>{point.decision}</dd>
                    </div>
                    <div className="journey-decision-flow__capability">
                      <dt>{journey.labels.newCapability}</dt><dd>{point.result}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proof-of-work" className="journey-evidence" aria-labelledby="proof-title">
          <div className="page-shell">
            <header className="journey-section-heading">
              <p className="journey-section-index">04 / {journey.labels.proof}</p>
              <h2 id="proof-title">{journey.proofTitle}</h2>
              <p>{journey.proofIntro}</p>
            </header>
            <div className="journey-evidence__grid">
              {journey.proof.map((item, index) => (
                <article key={item.title} tabIndex={0}>
                  <div className="journey-evidence__meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.type}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="journey-evidence__impact">
                    <strong>{journey.labels.impact}</strong>
                    {item.impact}
                  </p>
                  <ul className="journey-tags">
                    {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="journey-method" aria-labelledby="method-title">
          <div className="page-shell journey-method__inner">
            <header>
              <p className="journey-section-index">05 / {journey.labels.method}</p>
              <h2 id="method-title">{journey.method.title}</h2>
              <p>{journey.method.subtitle}</p>
            </header>
            <div>
              <ol className="journey-operating-loop" aria-label={journey.method.loopLabel}>
                {journey.method.loop.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </li>
                ))}
              </ol>
              <div className="journey-method__list">
                {journey.method.principles.map((principle, index) => (
                  <article key={principle.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h3>{principle.title}</h3><p>{principle.body}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="journey-horizon" aria-labelledby="horizon-title">
          <div className="page-shell journey-horizon__inner">
            <div className="journey-horizon__copy">
              <p className="journey-section-index">06 / {journey.labels.horizon}</p>
              <h2 id="horizon-title">{journey.horizon.title}</h2>
              {journey.horizon.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="editorial-actions">
                <Link to={routes.blog} className="editorial-button editorial-button--primary">
                  {journey.hero.thinkingCta}
                </Link>
                <a
                  href={siteConfig.external.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-button"
                >
                  {journey.horizon.linkedInCta}
                </a>
              </div>
            </div>
            <div className="journey-system-map" aria-label={journey.horizon.systemLabel}>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path d="M8 16 L62 50" />
                <path d="M8 38 L62 50" />
                <path d="M8 62 L62 50" />
                <path d="M8 84 L62 50" />
                <path d="M62 50 L92 50" />
              </svg>
              {journey.horizon.tracks.map((track) => <span key={track}>{track}</span>)}
              <strong>{journey.horizon.system}</strong>
            </div>
          </div>
        </section>

        <section className="journey-journal" aria-labelledby="journal-title">
          <div className="page-shell journey-journal__inner">
            <div>
              <p className="journey-section-index">07 / {journey.labels.journal}</p>
              <h2 id="journal-title">{journey.journal.title}</h2>
              <p>{journey.journal.body}</p>
            </div>
            <Link to={routes.blog} className="editorial-button">
              {journey.journal.cta}
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Journey;
