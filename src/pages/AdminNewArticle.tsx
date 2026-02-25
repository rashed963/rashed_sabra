import { Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { routes } from "@/config/routes";

const commandExample =
  "npm run article:new -- --slug your-article-slug --lang ar";

const AdminNewArticle = () => {
  if (!import.meta.env.DEV) {
    return <Navigate to={routes.blog} replace />;
  }

  return (
    <Layout>
      <section className="pt-16 pb-24 md:pt-24">
        <div className="container max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Admin: New Article</h1>
          <p className="text-base text-muted-foreground">
            Article creation is file-based for reliability. Use the local generator command to create a markdown file
            in <code>src/content/blog</code>.
          </p>
          <div className="card-neural p-6">
            <p className="mb-3 text-sm text-muted-foreground">Run this in your terminal:</p>
            <pre className="overflow-x-auto rounded-md bg-secondary/60 p-4 text-sm">{commandExample}</pre>
          </div>
          <p className="text-sm text-muted-foreground">
            This page is intentionally hidden from navigation and only available in development.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AdminNewArticle;
