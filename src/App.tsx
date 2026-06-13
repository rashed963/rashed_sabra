import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getRoutes, routes } from "./config/routes";
import { LanguageProvider } from "./features/i18n/LanguageProvider";

const Index = lazy(() => import("./pages/Index"));
const Journey = lazy(() => import("./pages/Journey"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Cv = lazy(() => import("./pages/Cv"));
const AdminNewArticle = lazy(() => import("./pages/AdminNewArticle"));
const NotFound = lazy(() => import("./pages/NotFound"));

const englishRoutes = getRoutes("en");

const App = () => (
  <BrowserRouter>
    <LanguageProvider>
      <Suspense fallback={<div className="min-h-screen bg-background" aria-hidden="true" />}>
        <Routes>
          <Route path={routes.home} element={<Index />} />
          <Route path={routes.journey} element={<Journey />} />
          <Route path={routes.blog} element={<Blog />} />
          <Route path={routes.cv} element={<Cv />} />
          <Route path={routes.adminArticleNew} element={<AdminNewArticle />} />
          <Route path={`${routes.blog}/:slug`} element={<BlogPost />} />
          <Route path={englishRoutes.home} element={<Index />} />
          <Route path={englishRoutes.journey} element={<Journey />} />
          <Route path={englishRoutes.blog} element={<Blog />} />
          <Route path={englishRoutes.cv} element={<Cv />} />
          <Route path={`${englishRoutes.blog}/:slug`} element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </LanguageProvider>
  </BrowserRouter>
);

export default App;
