import { Link } from "react-router-dom";
import { blogPostPath } from "../../config/routes";
import { useLanguage } from "../i18n/language";
import type { BlogPost } from "./types";

type PostCardProps = {
  post: BlogPost;
  index: number;
};

const PostCard = ({ post, index }: PostCardProps) => {
  const { language, copy } = useLanguage();

  return (
    <article className="editorial-post">
    <Link
      to={blogPostPath(post.slug, language)}
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
        <span>{post.readTime} {copy.common.readLabel}</span>
      </div>

      <h2>
        <Link to={blogPostPath(post.slug, language)}>
          {post.title}
        </Link>
      </h2>

      <p>{post.excerpt}</p>

      <div className="editorial-post__footer">
        <time>{post.date}</time>
        <Link
          to={blogPostPath(post.slug, language)}
          className="editorial-text-link"
        >
          {copy.common.readPostCta}
        </Link>
      </div>
    </div>
    </article>
  );
};

export default PostCard;
