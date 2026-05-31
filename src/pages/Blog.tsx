import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { DEFAULT_BLOG_LANGUAGE } from "../features/blog/constants";
import PostCard from "../features/blog/PostCard";
import { copyAr } from "../features/copy/ar";
import { getAllBlogPosts } from "../features/blog/selectors";
import { journeyThemes } from "../features/journey/content";
import { getPostsByTopic, type BlogTopicId } from "../features/blog/topics";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const posts = getAllBlogPosts(DEFAULT_BLOG_LANGUAGE);
  const topicFilters = [
    { id: "all" as const, label: "كل المقالات" },
    { id: "engineering-leadership" as const, label: journeyThemes[0].title },
    { id: "arabic-nlp" as const, label: journeyThemes[1].title },
    { id: "robotics-simulation" as const, label: journeyThemes[2].title },
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
      <section className="py-14 md:py-20">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">{copyAr.blog.eyebrow}</p>
            <h1 className="page-title mb-6">
              {copyAr.blog.title}
            </h1>
            <p className="lede">
              {copyAr.blog.subtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2" role="group" aria-label="تصنيف المقالات">
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
                  className={`button-label underline-offset-4 transition-colors ${
                    isActive
                      ? "text-foreground underline decoration-border"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="page-shell">
          <div className="border-y border-border/80">
            {visiblePosts.map((post, index) => (
              <PostCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
