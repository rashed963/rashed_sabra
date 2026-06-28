import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { siteConfig } from "../config/site";
import { useLanguage } from "../features/i18n/language";
import { getJourneyNarrative } from "../features/journey/narrative";

const chapterGraphPaths = [
  ["M26 23 C31 25 33 38 35 43", "M31 72 C34 68 35 59 35 55", "M64 49 C67 49 69 50 70 50"],
  ["M28 45 C27 39 24 35 21 34", "M28 55 C27 61 24 65 20 66", "M47 27 C56 29 62 40 65 46", "M47 73 C56 71 62 60 65 54"],
  ["M27 45 Q25 37 27 34", "M38 27 Q41 32 40 39", "M57 45 Q63 37 67 34", "M78 28 Q82 39 82 54", "M77 75 Q55 88 34 34"],
  ["M25 24 C34 27 41 40 47 46", "M25 76 C34 73 41 60 47 54", "M50 22 C50 32 50 39 50 46", "M50 78 C50 68 50 61 50 54", "M54 48 C62 45 65 35 67 30", "M54 52 C62 55 64 65 66 70"],
] as const;

const Journey = () => {
  const { language, routes } = useLanguage();
  const journey = getJourneyNarrative(language);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const chapters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-journey-chapter]"),
    );

    if (!chapters.length || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleChapter = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleChapter) {
          setActiveChapter(Number((visibleChapter.target as HTMLElement).dataset.journeyChapter));
        }
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, [language]);

  const scrollToChapter = (index: number) => {
    setActiveChapter(index);
    document.getElementById(`journey-chapter-${index + 1}`)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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

            <div className="journey-chapters__layout">
              <nav className="journey-arc" aria-label={journey.thesis.progressionLabel}>
                <p>{journey.labels.chapters}</p>
                <ol>
                  {journey.chapters.map((chapter, index) => (
                    <li key={chapter.eyebrow}>
                      <button
                        type="button"
                        className={activeChapter === index ? "is-active" : ""}
                        aria-current={activeChapter === index ? "step" : undefined}
                        onClick={() => scrollToChapter(index)}
                      >
                        <span className="journey-arc__marker" aria-hidden="true" />
                        <span className="journey-arc__copy">
                          <small>{String(index + 1).padStart(2, "0")}</small>
                          <strong>{journey.thesis.progression[index].title}</strong>
                          <time dir="ltr">
                            {chapter.time.split(" ").slice(0, 3).join(" ")}
                          </time>
                        </span>
                      </button>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="journey-chapter-list">
                {journey.chapters.map((chapter, index) => (
                  <article
                    id={`journey-chapter-${index + 1}`}
                    data-journey-chapter={index}
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
                        <div
                          className="journey-graph"
                          aria-label={`${chapter.title} concept network`}
                        >
                          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                              <marker
                                id={`journey-arrow-${index}`}
                                viewBox="0 0 8 8"
                                refX="7"
                                refY="4"
                                markerWidth="5"
                                markerHeight="5"
                                orient="auto-start-reverse"
                              >
                                <path d="M0 0 L8 4 L0 8 Z" />
                              </marker>
                            </defs>
                            {chapterGraphPaths[index].map((path) => (
                              <path
                                key={path}
                                d={path}
                                pathLength={1}
                                markerEnd={`url(#journey-arrow-${index})`}
                              />
                            ))}
                          </svg>
                          {chapter.motif.map((label) => (
                            <span className="journey-graph__node" key={label}>
                              {label}
                            </span>
                          ))}
                          {index === 3 && <i className="journey-graph__hub" />}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
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

        <section className="journey-horizon" aria-labelledby="horizon-title">
          <div className="page-shell journey-horizon__inner">
            <div className="journey-horizon__copy">
              <p className="journey-section-index">05 / {journey.labels.horizon}</p>
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
              <p className="journey-section-index">06 / {journey.labels.journal}</p>
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
