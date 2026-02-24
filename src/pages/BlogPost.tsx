import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getBlogPostBySlug } from "../features/blog/selectors";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <article className="pt-16 pb-24 md:pt-24">
        <div className="container max-w-2xl">
          <Link to="/blog" className="mb-8 inline-flex text-sm font-medium text-primary hover:underline">
            → العودة إلى المدونة
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.tag}</span>
              <span className="text-muted-foreground/30">·</span>
              <time className="text-xs text-muted-foreground/60">{post.date}</time>
              <span className="text-muted-foreground/30">·</span>
              <span className="text-xs text-muted-foreground/60">{post.readTime} قراءة</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">{post.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="card-neural space-y-6 p-7 md:p-9"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-auto w-full rounded-md border border-border object-cover"
              loading="lazy"
            />
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
