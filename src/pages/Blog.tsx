import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PostCard from "../features/blog/PostCard";
import { getAllBlogPosts } from "../features/blog/selectors";

const posts = getAllBlogPosts();

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
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;
