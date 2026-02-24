import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { BlogPost } from "./types";

type PostCardProps = {
  post: BlogPost;
  index: number;
  showReadTime?: boolean;
  showReadMore?: boolean;
};

const PostCard = ({ post, index, showReadTime = true, showReadMore = true }: PostCardProps) => (
  <motion.article
    key={post.slug}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
    className="card-neural p-6 group"
  >
    <div className="mb-3 flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.tag}</span>
      <span className="text-muted-foreground/30">·</span>
      <span className="text-xs text-muted-foreground/60">
        {showReadTime ? `${post.readTime} قراءة` : post.date}
      </span>
    </div>

    <h2 className="mb-4 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-2xl">
      <Link to={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
        {post.title}
      </Link>
    </h2>

    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>

    {showReadMore && (
      <div className="flex items-center justify-between">
        <time className="text-xs text-muted-foreground/50">{post.date}</time>
        <Link
          to={`/blog/${post.slug}`}
          className="text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
        >
          اقرأ المقال ←
        </Link>
      </div>
    )}
  </motion.article>
);

export default PostCard;

