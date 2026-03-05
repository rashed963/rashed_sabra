import { motion } from "framer-motion";
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
    { id: "all" as const, label: copyAr.home.showAllCta },
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
      <section className="pt-16 pb-4 md:pt-24 md:pb-8">
        <div className="container max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-4 text-sm font-medium tracking-wide text-primary"
          >
            {copyAr.blog.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 text-5xl font-bold md:text-6xl"
          >
            {copyAr.blog.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="text-base leading-relaxed text-muted-foreground"
          >
            {copyAr.blog.subtitle}
          </motion.p>

          <div className="mt-6 flex flex-wrap gap-2">
            {topicFilters.map((topic) => {
              const isActive = activeTopic === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => {
                    if (topic.id === "all") {
                      setSearchParams({});
                      return;
                    }

                    setSearchParams({ topic: topic.id });
                  }}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    isActive
                      ? "border-primary/35 bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 pb-24">
        <div className="container max-w-2xl space-y-4">
          {visiblePosts.map((post, i) => (
            <PostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
