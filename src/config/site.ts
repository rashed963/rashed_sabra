import { routes } from "./routes";
import synced from "./synced-content.json";

export const siteConfig = {
  profile: {
    name: synced.profile.name,
    role: synced.profile.role,
  },
  external: {
    linkedIn: synced.profile.linkedIn,
  },
  navigation: [
    { href: routes.home, label: "الرئيسية" },
    { href: routes.journey, label: "الرحلة" },
    { href: routes.blog, label: "المدونة" },
  ],
} as const;
