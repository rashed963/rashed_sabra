export const routes = {
  home: "/",
  journey: "/journey",
  blog: "/blog",
  cv: "/cv",
  adminArticleNew: "/admin/articles/new",
} as const;

export const blogPostPath = (slug: string) => `${routes.blog}/${slug}`;

