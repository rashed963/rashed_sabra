import { Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { routes } from "@/config/routes";

const notionDbUrl = "https://www.notion.so/fe62fb415bef45a196be5654c76aefea";

const AdminNewArticle = () => {
  if (!import.meta.env.DEV) {
    return <Navigate to={routes.blog} replace />;
  }

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="reading-shell space-y-8">
          <h1 className="text-4xl font-bold md:text-5xl">Content</h1>

          <div className="surface space-y-4 p-6">
            <p className="text-sm font-semibold text-foreground">Blog posts - via Notion</p>
            <p className="text-sm text-muted-foreground">
              Write articles in the{" "}
              <a href={notionDbUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                Blog Posts database
              </a>
              . Check <code>Published</code>, then sync:
            </p>
            <pre className="overflow-x-auto rounded-sm bg-secondary/60 p-4 text-sm">npm run sync:notion</pre>
            <p className="text-xs text-muted-foreground">
              Or sync + build in one step: <code>npm run sync:build</code>
            </p>
          </div>

          <div className="surface space-y-4 p-6">
            <p className="text-sm font-semibold text-foreground">New journey milestone</p>
            <pre className="overflow-x-auto rounded-sm bg-secondary/60 p-4 text-sm">
              {"npm run milestone:new -- --id new-role --order 5 --title \"عنوان المحطة\" --org \"المؤسسة\" --type role"}
            </pre>
            <p className="text-xs text-muted-foreground">
              Then edit the generated file in <code>src/content/journey/milestones/</code>
            </p>
          </div>

          <p className="text-sm text-muted-foreground">This page is only available in development.</p>
        </div>
      </section>
    </Layout>
  );
};

export default AdminNewArticle;
