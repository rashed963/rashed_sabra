import { routes } from "./routes";
import synced from "./synced-content.json";

export const siteConfig = {
  profile: {
    name: "راشد صبرة",
    role: "Product & Technology Leader",
  },
  external: {
    linkedIn: synced.profile.linkedIn,
  },
  navigation: [
    { href: routes.home, label: "من أنا" },
    { href: routes.blog, label: "المدونة" },
    { href: routes.journey, label: "الرحلة المهنية" },
    { href: routes.blog, label: "مقالات" },
  ],
} as const;
