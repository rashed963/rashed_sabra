import { Link } from "react-router-dom";
import HumanNetworkHero from "../components/HumanNetworkHero";
import Layout from "../components/Layout";
import { blogPostPath, routes } from "../config/routes";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import { getLatestBlogPosts } from "../features/blog/selectors";

const posts = getLatestBlogPosts(2, DEFAULT_BLOG_LANGUAGE);

const beliefs = [
  "يجب أن تعزّز التقنية حكم الإنسان، لا أن تستبدله.",
  "تحوّل قيادة Product & Technology التعقيد إلى قرارات واضحة، وملكية محددة، وأنظمة تثق بها الفرق.",
  "تكتسب أنظمة AI الثقة بالدليل: أن تكون مفهومة، وقابلة للاختبار، وخاضعة للمساءلة.",
];

const proof = [
  {
    title: "Head of Product & Technology",
    body: "أوحّد المنتج والهندسة والجودة والتسليم في نظام عمل واضح.",
  },
  {
    title: "AI Engineer",
    body: "خبرة أكاديمية وعملية في AI وNLP، تركّز على أنظمة قابلة للفحص.",
  },
  {
    title: "MSc in Big Data Systems",
    body: "أساس في البيانات وNLP وتقييم التقنية بعيدًا عن الضجيج.",
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
          <h1 id="homepage-title">أقود Product &amp; Technology لبناء أنظمة ذكية يقودها الإنسان.</h1>
          <p className="homepage-hero__lede">
            أجمع Product &amp; Technology وSoftware Engineering بخبرة عملية في AI لأحوّل التعقيد إلى أنظمة واضحة، قابلة
            للفحص، وموثوقة.
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

      <section className="homepage-beliefs" aria-labelledby="beliefs-title">
        <div className="homepage-beliefs__inner">
          <div className="homepage-beliefs__heading">
            <p className="homepage-index">01 · المبادئ</p>
            <h2 id="beliefs-title">ما أؤمن به</h2>
            <p>المبادئ التي توجّه قيادتي وبنائي وتقييمي للأنظمة الذكية.</p>
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
            <h2 id="thoughts-title">أكتب عن أنظمة تعمل في الواقع، لا في العروض.</h2>
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
                  <span>{post.readTime} للقراءة</span>
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

      <section className="homepage-future" aria-labelledby="future-title">
        <div className="homepage-stars homepage-stars--one" aria-hidden="true" />
        <div className="homepage-stars homepage-stars--two" aria-hidden="true" />
        <div className="homepage-future__inner">
          <p>مبدأ لما هو قادم</p>
          <h2 id="future-title">
            <span>أفضل طريقة</span>
            <span>للتنبؤ بالمستقبل</span>
            <span>هي أن نصنعه.</span>
          </h2>
        </div>
      </section>

      <section className="homepage-proof" aria-labelledby="proof-title">
        <div className="homepage-proof__inner">
          <p className="homepage-index">03 · الخبرة المهنية</p>
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
            <h2 id="journey-title">من AI وNLP وSoftware Engineering إلى قيادة Product &amp; Technology.</h2>
            <p>
              المحطات والمبادئ التي شكّلت طريقتي في بناء الفرق والأنظمة واتخاذ القرار.
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
