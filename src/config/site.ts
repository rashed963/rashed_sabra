import { routes } from "./routes";
import synced from "./synced-content.json";

export const siteConfig = {
  profile: {
    name: "راشد صبرة",
  },
  external: {
    linkedIn: synced.profile.linkedIn,
  },
  documents: {
    cv: {
      url: "/cv/rashed-sabra-cv.pdf",
      downloadName: "Rashed-Sabra-CV.pdf",
    },
  },
  navigation: [
    { href: routes.home, label: "الرئيسية" },
    { href: routes.blog, label: "أفكاري" },
    { href: routes.journey, label: "رحلتي" },
  ],
} as const;
