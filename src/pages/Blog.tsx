import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import PostCard from "../features/blog/PostCard";
import { copyAr } from "../features/copy/ar";
import { getAllBlogPosts } from "../features/blog/selectors";
import { getBlogTopicOptions, getPostsByTopic, type BlogTopicId } from "../features/blog/topics";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const posts = getAllBlogPosts(DEFAULT_BLOG_LANGUAGE);
  const topicFilters = [
    { id: "all" as const, label: "كل المقالات" },
    ...getBlogTopicOptions(DEFAULT_BLOG_LANGUAGE),
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
              {copyAr.blog.eyebrow}
            </p>
            <h1 id="blog-title" className="interior-title">
              {copyAr.blog.title}
            </h1>
            <p className="interior-lede">
              {copyAr.blog.subtitle}
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
                <span lang="en" dir="ltr">Writing archive</span>
              </p>
              <h2 id="blog-index-title">أفكار عملية، مرتبة بهدوء.</h2>
            </div>
            <p>اختر محورًا أو ابدأ من أحدث كتابة.</p>
          </div>

          <div className="topic-filter" role="group" aria-label="تصنيف المقالات">
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
              <p className="blog-empty">لا توجد مقالات منشورة ضمن هذا المحور حاليًا.</p>
            )}
          </div>
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default Blog;
