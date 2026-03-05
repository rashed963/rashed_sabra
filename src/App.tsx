import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./config/routes";

const Index = lazy(() => import("./pages/Index"));
const Journey = lazy(() => import("./pages/Journey"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const AdminNewArticle = lazy(() => import("./pages/AdminNewArticle"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" aria-hidden="true" />}>
          <Routes>
            <Route path={routes.home} element={<Index />} />
            <Route path={routes.journey} element={<Journey />} />
            <Route path={routes.blog} element={<Blog />} />
            <Route path={routes.adminArticleNew} element={<AdminNewArticle />} />
            <Route path={`${routes.blog}/:slug`} element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
