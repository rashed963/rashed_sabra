import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { blogPosts } from "../data/blog-posts";

const Blog = () => (
  <Layout>
    <section className="pt-16 pb-4 md:pt-24 md:pb-8">
      <div className="container max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-medium tracking-wide text-primary"
        >
          أفكار وتحليلات
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-5 text-5xl font-bold md:text-6xl"
        >
          المدونة
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="text-base leading-relaxed text-muted-foreground"
        >
          مقالات في الأتمتة الذكية، القيادة التقنية، وبناء الأنظمة.
        </motion.p>
      </div>
    </section>

    <section className="py-12 pb-24">
      <div className="container max-w-2xl space-y-4">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
            className="card-neural p-6 group"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.tag}</span>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-xs text-muted-foreground/60">{post.readTime} قراءة</span>
            </div>

            <h2 className="mb-4 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-2xl">
              <Link to={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
                {post.title}
              </Link>
            </h2>

            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

            <div className="flex items-center justify-between">
              <time className="text-xs text-muted-foreground/50">{post.date}</time>
              <Link
                to={`/blog/${post.slug}`}
                className="text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
              >
                اقرأ المقال ←
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
