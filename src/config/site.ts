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
    { href: routes.home, label: "الرئيسية" },
    { href: routes.blog, label: "أفكاري" },
    { href: routes.journey, label: "رحلتي" },
  ],
} as const;
