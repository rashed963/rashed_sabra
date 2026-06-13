import { Link } from "react-router-dom";
import HumanNetworkHero from "../components/HumanNetworkHero";
import Layout from "../components/Layout";
import { blogPostPath } from "../config/routes";
import { useLanguage } from "../features/i18n/language";
import { getLatestBlogPosts } from "../features/blog/selectors";

const Index = () => {
  const { language, direction, routes, copy } = useLanguage();
  const posts = getLatestBlogPosts(2, language);

  return (
    <Layout>
    <div className="homepage">
      <section className="homepage-hero" aria-labelledby="homepage-title">
        <HumanNetworkHero />

        <div className="homepage-hero__copy">
          <p className="homepage-role" lang="en" dir="ltr">
            {copy.home.role}
          </p>
          <h1 id="homepage-title">{copy.home.title}</h1>
          <p className="homepage-hero__lede">
            {copy.home.lede}
          </p>
          <div className="homepage-actions">
            <a className="homepage-button homepage-button--primary" href="#selected-thoughts">
              {copy.home.thoughtsCta}
            </a>
            <Link className="homepage-button" to={routes.journey}>
              {copy.home.journeyCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="homepage-beliefs" aria-labelledby="beliefs-title">
        <div className="homepage-beliefs__inner">
          <div className="homepage-beliefs__heading">
            <p className="homepage-index">{copy.home.beliefsIndex}</p>
            <h2 id="beliefs-title">{copy.home.beliefsTitle}</h2>
            <p>{copy.home.beliefsSubtitle}</p>
          </div>

          <div className="homepage-beliefs__list">
            {copy.home.beliefs.map((belief, index) => (
              <article key={belief} className="homepage-belief">
                <b>{String(index + 1).padStart(2, "0")}</b>
                <p>{belief}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-thoughts" id="selected-thoughts" aria-labelledby="thoughts-title">
        <div className="homepage-section-head">
          <div>
            <p className="homepage-index">{copy.home.thoughtsIndex}</p>
            <h2 id="thoughts-title">{copy.home.thoughtsTitle}</h2>
          </div>
          <Link to={routes.blog} className="homepage-text-link">
            {copy.home.allThoughtsCta}
          </Link>
        </div>

        <div className="homepage-articles">
          {posts.map((post) => (
            <Link key={post.slug} to={blogPostPath(post.slug, language)} className="homepage-article">
              <div className="homepage-article__image">
                <img src={post.image} alt="" width="1440" height="768" />
              </div>
              <div className="homepage-article__copy">
                <div className="homepage-article__meta">
                  <span>{post.tag}</span>
                  <span>{post.readTime} {copy.common.readLabel}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="homepage-article__arrow" aria-hidden="true">
                  {direction === "rtl" ? "←" : "→"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="homepage-future" aria-labelledby="future-title">
        <div className="homepage-stars homepage-stars--one" aria-hidden="true" />
        <div className="homepage-stars homepage-stars--two" aria-hidden="true" />
        <div className="homepage-future__inner">
          <p>{copy.home.futureEyebrow}</p>
          <h2 id="future-title">
            {copy.home.futureLines.map((line) => <span key={line}>{line}</span>)}
          </h2>
        </div>
      </section>

      <section className="homepage-proof" aria-labelledby="proof-title">
        <div className="homepage-proof__inner">
          <p className="homepage-index">{copy.home.proofIndex}</p>
          <h2 id="proof-title">{copy.home.proofTitle}</h2>
          <div className="homepage-proof__list">
            {copy.home.proof.map((item, index) => (
              <article key={item.title} className="homepage-proof__row">
                <b>{String(index + 1).padStart(2, "0")}</b>
                <strong lang="en" dir="ltr">
                  {item.title}
                </strong>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage-journey" aria-labelledby="journey-title">
        <div className="homepage-journey__inner">
          <div>
            <p className="homepage-index">{copy.home.journeyIndex}</p>
            <h2 id="journey-title">{copy.home.journeyTitle}</h2>
            <p>
              {copy.home.journeyBody}
            </p>
          </div>
          <Link className="homepage-button homepage-button--light" to={routes.journey}>
            {copy.home.journeyCta}
          </Link>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default Index;
