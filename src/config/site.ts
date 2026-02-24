import { routes } from "./routes";

export const siteConfig = {
  profile: {
    firstName: "راشد",
    lastName: "صبرة",
    name: "راشد صبرة",
    role: "مهندس ذكاء اصطناعي · رئيس التقنية والمنتج",
  },
  external: {
    linkedIn: "https://www.linkedin.com/in/rashed-sabra",
  },
  navigation: [
    { href: routes.home, label: "الرئيسية" },
    { href: routes.journey, label: "الرحلة" },
    { href: routes.blog, label: "المدونة" },
  ],
} as const;
