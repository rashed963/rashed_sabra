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
          <h1 className="text-4xl font-bold md:text-5xl">إدارة المحتوى</h1>

          <div className="surface space-y-4 p-6">
            <p className="text-sm font-semibold text-foreground">مقالات المدونة عبر Notion</p>
            <p className="text-sm text-muted-foreground">
              اكتب المقالات في قاعدة{" "}
              <a href={notionDbUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                Blog Posts
              </a>
              {" "}على Notion. فعّل <code>Published</code>، ثم شغّل:
            </p>
            <pre className="overflow-x-auto rounded-sm bg-secondary/60 p-4 text-sm">npm run sync:notion</pre>
            <p className="text-xs text-muted-foreground">
              أو للمزامنة والبناء في خطوة واحدة: <code>npm run sync:build</code>
            </p>
          </div>

          <div className="surface space-y-4 p-6">
            <p className="text-sm font-semibold text-foreground">محطة جديدة في الرحلة</p>
            <pre className="overflow-x-auto rounded-sm bg-secondary/60 p-4 text-sm">
              {"npm run milestone:new -- --id new-role --order 5 --title \"عنوان المحطة\" --org \"المؤسسة\" --type role"}
            </pre>
            <p className="text-xs text-muted-foreground">
              ثم عدّل الملف المُنشأ في <code>src/content/journey/milestones/</code>
            </p>
          </div>

          <p className="text-sm text-muted-foreground">هذه الصفحة متاحة في بيئة التطوير فقط.</p>
        </div>
      </section>
    </Layout>
  );
};

export default AdminNewArticle;
