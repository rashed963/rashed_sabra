import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import PostCard from "../features/blog/PostCard";
import { useLanguage } from "../features/i18n/language";
import { getAllBlogPosts } from "../features/blog/selectors";
import { getBlogTopicOptions, getPostsByTopic, type BlogTopicId } from "../features/blog/topics";

const Blog = () => {
  const { language, copy } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const posts = getAllBlogPosts(language);
  const topicFilters = [
    { id: "all" as const, label: copy.blog.allPosts },
    ...getBlogTopicOptions(language),
  ];

  const requestedTopic = searchParams.get("topic");
  const validTopics = topicFilters.map((topic) => topic.id);
  const activeTopic =
    requestedTopic && validTopics.includes(requestedTopic as BlogTopicId | "all")
      ? (requestedTopic as BlogTopicId | "all")
      : "all";

  const visiblePosts =
    activeTopic === "all" ? posts : getPostsByTopic(posts, activeTopic);

  return (
    <Layout>
      <div className="site-page">
      <section className="interior-hero" aria-labelledby="blog-title">
        <div className="page-shell">
          <div className="interior-hero__copy">
            <p className="section-label">
              <span>01</span>
              {copy.blog.eyebrow}
            </p>
            <h1 id="blog-title" className="interior-title">
              {copy.blog.title}
            </h1>
            <p className="interior-lede">
              {copy.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="paper-section blog-index" aria-labelledby="blog-index-title">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="section-label">
                <span>02</span>
                <span>{copy.blog.archiveLabel}</span>
              </p>
              <h2 id="blog-index-title">{copy.blog.archiveTitle}</h2>
            </div>
            <p>{copy.blog.archiveHint}</p>
          </div>

          <div className="topic-filter" role="group" aria-label={copy.blog.filterLabel}>
            {topicFilters.map((topic) => {
              const isActive = activeTopic === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    if (topic.id === "all") {
                      setSearchParams({});
                      return;
                    }

                    setSearchParams({ topic: topic.id });
                  }}
                  className={isActive ? "is-active" : undefined}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
          <div className="editorial-posts">
            {visiblePosts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
            {visiblePosts.length === 0 && (
              <p className="blog-empty">{copy.blog.empty}</p>
            )}
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Blog;
