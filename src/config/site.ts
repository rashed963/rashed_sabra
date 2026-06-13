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
      url: "/cv/rashed-sabra-cv.pdf",
      downloadName: "Rashed-Sabra-CV.pdf",
    },
  },
} as const;
