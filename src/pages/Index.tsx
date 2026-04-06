import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import PostCard from "../features/blog/PostCard";
import { getAllBlogPosts } from "../features/blog/selectors";
import { milestones } from "../features/journey/content";
import { methodSteps, offers, snapshots, faqItems } from "../features/home/content";
import synced from "../config/synced-content.json";

const posts = getAllBlogPosts(DEFAULT_BLOG_LANGUAGE);
const proofStats = [
  { value: `${milestones.length}+`, label: "محطات وخبرات عملية موثقة" },
  { value: `${posts.length}`, label: "مقالات عملية في الاستراتيجية والتنفيذ" },
  { value: "6-12 أسابيع", label: "المدة المعتادة للانتقال من التشتت إلى الزخم" },
];

const Index = () => (
  <Layout>
    <section className="pt-20 pb-14 md:pt-28 md:pb-20">
      <div className="container max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-sm font-semibold tracking-wide text-primary/90 md:text-base"
        >
          {synced.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="mb-5 text-4xl font-bold leading-tight md:text-6xl"
        >
          {synced.hero.title} <span className="text-primary">{synced.hero.titleHighlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
          className="mb-9 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          {synced.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.22 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            احجز مكالمة استراتيجية
            <span aria-hidden="true">[خارجي]</span>
          </a>
          <Link
            to={routes.blog}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            اقرأ المقالات
            <span aria-hidden="true">التالي</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          {proofStats.map((item) => (
            <div key={item.label} className="card-neural px-4 py-3">
              <p className="text-2xl font-bold chapter-num text-foreground">{item.value}</p>
              <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          className="mt-6"
        >
          <p className="text-sm text-muted-foreground">
            مصمم للمؤسسين وقادة الفرق الذين يتحركون داخل قرارات عالية التأثير.
          </p>
        </motion.div>
      </div>
    </section>

    <div className="container max-w-2xl">
      <div className="ruled" />
    </div>

    <section className="py-16">
      <div className="container max-w-2xl">
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-primary">المنهجية</h2>
          <p className="mt-2 text-3xl font-bold text-foreground md:text-4xl">نشخص. نرتب. ننفذ. نراجع.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {methodSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="card-neural p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="container max-w-2xl">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">العروض</h2>
          <Link
            to={routes.journey}
            className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
          >
            كيف أعمل
          </Link>
        </div>

        <div className="space-y-4">
          {offers.map((offer, index) => (
            <motion.article
              key={offer.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
              className="card-neural p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-foreground">{offer.title}</h3>
                <p className="text-xs font-medium text-primary">{offer.timeframe}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{offer.who}</p>
              <p className="mt-2 text-sm text-muted-foreground">{offer.include}</p>
              <p className="mt-3 text-sm font-medium text-foreground">{offer.outcome}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="pb-16">
      <div className="container max-w-2xl">
        <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">نماذج نتائج</h2>
        <div className="space-y-4">
          {snapshots.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
              className="card-neural p-6"
            >
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">قبل:</span> {item.before}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">بعد:</span> {item.after}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-2xl">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-foreground">المقالات</h2>
          <Link
            to={routes.blog}
            className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
          >
            عرض الكل
          </Link>
        </div>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} showReadTime={false} showReadMore={false} />
          ))}
        </div>
      </div>
    </section>

    <section className="pb-12">
      <div className="container max-w-2xl">
        <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">الأسئلة الشائعة</h2>
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.article
              key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
              className="card-neural p-5"
            >
              <h3 className="text-base font-semibold text-foreground">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-neural p-10"
        >
          <p className="text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            هل أنت جاهز لتحويل التعقيد إلى تنفيذ مركز؟
          </p>
          <p className="mt-3 text-base text-muted-foreground">
            احجز مكالمة استراتيجية واخرج بخطوات تالية واضحة.
          </p>
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
          >
            احجز مكالمة استراتيجية [خارجي]
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
