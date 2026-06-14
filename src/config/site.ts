import synced from "./synced-content.json";

export const siteConfig = {
  profile: {
    name: {
      ar: "راشد صبرة",
      en: "Rashed Sabra",
    },
  },
  external: {
    linkedIn: synced.profile.linkedIn,
  },
  documents: {
    cv: {
      url: "/cv/rashed-sabra-cv-2026-06-14.pdf",
      downloadName: "Rashed-Sabra-CV.pdf",
    },
  },
} as const;
