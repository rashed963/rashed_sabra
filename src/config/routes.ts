export const routes = {
  home: "/",
  journey: "/journey",
  blog: "/blog",
  adminArticleNew: "/admin/articles/new",
} as const;

export const blogPostPath = (slug: string) => `${routes.blog}/${slug}`;

