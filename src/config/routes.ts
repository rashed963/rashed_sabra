export const routes = {
  home: "/",
  journey: "/journey",
  blog: "/blog",
} as const;

export const blogPostPath = (slug: string) => `${routes.blog}/${slug}`;

