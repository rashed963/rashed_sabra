import type { BlogLanguage } from "../features/blog/types";

export const routes = {
  home: "/",
  journey: "/journey",
  blog: "/blog",
  cv: "/cv",
  adminArticleNew: "/admin/articles/new",
} as const;

export type LocalizedRoutes = {
  home: string;
  journey: string;
  blog: string;
  cv: string;
};

const localizedRoutes: Record<BlogLanguage, LocalizedRoutes> = {
  ar: routes,
  en: {
    home: "/en",
    journey: "/en/journey",
    blog: "/en/blog",
    cv: "/en/cv",
  },
};

export const getRoutes = (language: BlogLanguage) => localizedRoutes[language];

export const blogPostPath = (slug: string, language: BlogLanguage = "ar") =>
  `${getRoutes(language).blog}/${slug}`;

export const getLanguageFromPath = (pathname: string): BlogLanguage =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ar";

export const localizePath = (pathname: string, language: BlogLanguage) => {
  const basePath =
    pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;

  if (language === "ar") {
    return basePath || "/";
  }

  return basePath === "/" ? "/en" : `/en${basePath}`;
};

