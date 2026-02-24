import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import TypingEffect from "../components/TypingEffect";
import { blogPosts } from "../data/blog-posts";

const typingTexts = [
  "أبني أنظمة ذكية قابلة للتدقيق",
  "أقود فرقًا نحو تسليم منتجات موثوقة",
  "أصمم وكلاء ذكاء اصطناعي حتميين",
];

const Index = () => (
  <Layout>
    {/* ── Hero ── */}
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container max-w-2xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5 text-sm font-medium tracking-wide text-primary"
        >
          مهندس ذكاء اصطناعي · رئيس التقنية والمنتج
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="mb-5 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
        >
          راشد <span className="text-primary">صبرة</span>
        </motion.h1>

        {/* Typing effect — subtle, not dominant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="mb-8 h-8"
        >
          <TypingEffect
            texts={typingTexts}
            className="text-base text-muted-foreground"
            speed={55}
            pauseMs={2800}
            prefix=""
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground"
        >
          أكتب عن الأتمتة، القيادة التقنية، وبناء الأنظمة —
          وأؤمن أن المستقبل للأنظمة التي يمكن تفسيرها والوثوق بها.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.26 }}
          className="flex flex-wrap gap-3"
        >
          <Link
            to="/journey"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            الرحلة المهنية
            <span aria-hidden="true">←</span>
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:bg-secondary"
          >
            المدونة
            <span aria-hidden="true">←</span>
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ── Separator ── */}
    <div className="container max-w-2xl">
      <div className="ruled" />
    </div>

    {/* ── Latest Posts ── */}
    <section className="py-16">
      <div className="container max-w-2xl">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            أحدث المقالات
          </h2>
          <Link
            to="/blog"
            className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
          >
            عرض الكل ←
          </Link>
        </div>

        <div className="space-y-4">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="card-neural p-6 group"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {post.tag}
                </span>
                <span className="text-muted-foreground/30">·</span>
                <time className="text-xs text-muted-foreground/60">{post.date}</time>
              </div>
              <h3 className="mb-3 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                <Link to={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
                  {post.title}
                </Link>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    {/* ── Quote ── */}
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
            "المستقبل للأنظمة التي يمكن تفسيرها والوثوق بها،
            لا الأكثر تعقيدًا."
          </p>
          <p className="mt-5 text-sm text-primary/60">— راشد صبرة</p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
