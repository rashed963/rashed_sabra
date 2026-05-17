import { Link } from "react-router-dom";
import { blogPostPath } from "../../config/routes";
import { copyAr } from "../copy/ar";
import type { BlogPost } from "./types";

type PostCardProps = {
  post: BlogPost;
  index: number;
  showReadTime?: boolean;
  showReadMore?: boolean;
};

const PostCard = ({ post, showReadTime = true, showReadMore = true }: PostCardProps) => (
  <article className="border-b border-border/70 py-7 last:border-b-0">
    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      <span className="font-semibold text-foreground/80">{post.tag}</span>
      <span aria-hidden="true">·</span>
      <span>{showReadTime ? `${post.readTime} ${copyAr.common.readLabel}` : post.date}</span>
    </div>

    <h2 className="mb-3 text-2xl font-bold leading-snug text-foreground">
      <Link to={blogPostPath(post.slug)} className="hover:underline underline-offset-4">
        {post.title}
      </Link>
    </h2>

    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>

    {showReadMore && (
      <div className="mt-5 flex items-center justify-between gap-4">
        <time className="text-xs text-muted-foreground">{post.date}</time>
        <Link
          to={blogPostPath(post.slug)}
          className="text-sm font-semibold text-primary hover:underline underline-offset-4"
        >
          {copyAr.common.readPostCta}
        </Link>
      </div>
    )}
  </article>
);

export default PostCard;
