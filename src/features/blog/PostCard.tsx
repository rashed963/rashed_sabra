import { Link } from "react-router-dom";
import { blogPostPath } from "../../config/routes";
import { copyAr } from "../copy/ar";
import type { BlogPost } from "./types";

type PostCardProps = {
  post: BlogPost;
  index: number;
};

const PostCard = ({ post, index }: PostCardProps) => (
  <article className="editorial-post">
    <Link
      to={blogPostPath(post.slug)}
      className="editorial-post__image"
      aria-label={post.title}
    >
      <img src={post.image} alt="" width="1440" height="768" loading="lazy" />
    </Link>

    <div className="editorial-post__number" aria-hidden="true">
      {String(index + 1).padStart(2, "0")}
    </div>

    <div className="editorial-post__copy">
      <div className="editorial-meta">
        <span className="editorial-meta__strong">{post.tag}</span>
        <span aria-hidden="true">·</span>
        <span>{post.readTime} {copyAr.common.readLabel}</span>
      </div>

      <h2>
        <Link to={blogPostPath(post.slug)}>
          {post.title}
        </Link>
      </h2>

      <p>{post.excerpt}</p>

      <div className="editorial-post__footer">
        <time>{post.date}</time>
        <Link
          to={blogPostPath(post.slug)}
          className="editorial-text-link"
        >
          {copyAr.common.readPostCta}
        </Link>
      </div>
    </div>
  </article>
);

export default PostCard;
