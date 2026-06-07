import { Link } from "react-router-dom";
import HumanNetworkHero from "../components/HumanNetworkHero";
import Layout from "../components/Layout";
import { blogPostPath, routes } from "../config/routes";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import { getAllBlogPosts } from "../features/blog/selectors";

const selectedSlugs = ["automation-where-to-start", "automation-single-question"];
const posts = selectedSlugs
  .map((slug) => getAllBlogPosts(DEFAULT_BLOG_LANGUAGE).find((post) => post.slug === slug))
  .filter((post) => post !== undefined);

const beliefs = [
  "I believe technology should expand human judgment, not quietly replace it.",
  "I believe strong product and technology leadership turns complexity into shared clarity: clear decisions, clear ownership, and systems teams can trust.",
  "I believe AI earns its place through evidence. It should be understandable, testable, and accountable to the people affected by it.",
];

const proof = [
  {
    title: "Head of Product & Technology",
    body: "قيادة المنتج والهندسة والجودة والتسليم ضمن نظام عمل واحد.",
  },
  {
    title: "AI Engineer",
    body: "خلفية أكاديمية وعملية في الذكاء الاصطناعي وNLP، مع تركيز على الأنظمة القابلة للفحص.",
  },
  {
    title: "MSc in Big Data Systems",
    body: "أساس في البيانات، معالجة اللغة، وتقييم التقنية بعيدًا عن الضجيج.",
  },
];

const Index = () => (
  <Layout>
    <div className="homepage">
      <section className="homepage-hero" aria-labelledby="homepage-title">
        <HumanNetworkHero />

        <div className="homepage-hero__copy">
          <p className="homepage-role" lang="en" dir="ltr">
            Head of Product &amp; Technology
          </p>
          <h1 id="homepage-title">أقود المنتج والتقنية لبناء أنظمة ذكية تبقى تحت قيادة الإنسان.</h1>
          <p className="homepage-hero__lede">
            أجمع بين قيادة المنتج والهندسة وخبرة عملية في الذكاء الاصطناعي لأحوّل الأفكار المعقدة إلى
            أنظمة واضحة، قابلة للفحص، ويمكن للفرق أن تثق بها.
          </p>
          <div className="homepage-actions">
            <a className="homepage-button homepage-button--primary" href="#selected-thoughts">
              استكشف أفكاري
            </a>
            <Link className="homepage-button" to={routes.journey}>
              تعرّف إلى رحلتي
            </Link>
          </div>
        </div>
      </section>

      <section className="homepage-beliefs" lang="en" dir="ltr" aria-labelledby="beliefs-title">
        <div className="homepage-beliefs__inner">
          <div className="homepage-beliefs__heading">
            <p className="homepage-index">01 · Principles</p>
            <h2 id="beliefs-title">
              What I
              <br />
              Believe
            </h2>
            <p>The operating principles behind how I lead, build, and evaluate intelligent systems.</p>
          </div>

          <div className="homepage-beliefs__list">
            {beliefs.map((belief, index) => (
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
            <p className="homepage-index">02 · أفكار مختارة</p>
            <h2 id="thoughts-title">أكتب عن الأنظمة التي تعمل في الواقع، لا في العرض فقط.</h2>
          </div>
          <Link to={routes.blog} className="homepage-text-link">
            عرض كل الكتابات
          </Link>
        </div>

        <div className="homepage-articles">
          {posts.map((post) => (
            <Link key={post.slug} to={blogPostPath(post.slug)} className="homepage-article">
              <div className="homepage-article__image">
                <img src={post.image} alt="" width="1440" height="768" />
              </div>
              <div className="homepage-article__copy">
                <div className="homepage-article__meta">
                  <span>{post.tag}</span>
                  <span>{post.readTime} قراءة</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className="homepage-article__arrow" aria-hidden="true">
                  ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="homepage-future" lang="en" dir="ltr" aria-labelledby="future-title">
        <div className="homepage-stars homepage-stars--one" aria-hidden="true" />
        <div className="homepage-stars homepage-stars--two" aria-hidden="true" />
        <div className="homepage-future__inner">
          <p>A principle for what comes next</p>
          <h2 id="future-title">
            <span>The best way</span>
            <span>to predict the future</span>
            <span>is to create it.</span>
          </h2>
        </div>
      </section>

      <section className="homepage-proof" aria-labelledby="proof-title">
        <div className="homepage-proof__inner">
          <p className="homepage-index">03 · Professional proof</p>
          <h2 id="proof-title">الخبرة التي تقف خلف الأفكار.</h2>
          <div className="homepage-proof__list">
            {proof.map((item, index) => (
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
            <p className="homepage-index">04 · الخبرة وراء الأفكار</p>
            <h2 id="journey-title">من AI/NLP وهندسة البرمجيات إلى قيادة المنتج والتقنية.</h2>
            <p>
              تعرّف إلى المحطات والمبادئ التي شكّلت طريقتي في بناء الفرق والأنظمة واتخاذ القرار.
            </p>
          </div>
          <Link className="homepage-button homepage-button--light" to={routes.journey}>
            تعرّف إلى رحلتي
          </Link>
        </div>
      </section>
    </div>
  </Layout>
);

export default Index;
