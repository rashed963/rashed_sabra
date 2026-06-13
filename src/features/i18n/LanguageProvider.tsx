import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  getLanguageFromPath,
  getRoutes,
  localizePath,
} from "../../config/routes";
import { getCopy } from "../copy";
import { LanguageContext, type LanguageContextValue, type TextDirection } from "./language";

const metadata = {
  ar: {
    title: "راشد صبرة — Head of Product & Technology",
    cvTitle: "راشد صبرة — السيرة المهنية",
    description: "راشد صبرة يقود المنتج والتقنية ويبني أنظمة AI واضحة، قابلة للفحص، ويقودها الإنسان.",
  },
  en: {
    title: "Rashed Sabra — Head of Product & Technology",
    cvTitle: "Rashed Sabra — Curriculum Vitae",
    description: "Rashed Sabra leads product and technology, building clear, testable, human-directed AI systems.",
  },
} as const;

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const language = getLanguageFromPath(location.pathname);
  const direction: TextDirection = language === "ar" ? "rtl" : "ltr";
  const localizedRoutes = getRoutes(language);
  const targetLanguage = language === "ar" ? "en" : "ar";

  useEffect(() => {
    const documentElement = document.documentElement;
    documentElement.lang = language;
    documentElement.dir = direction;
    document.title =
      location.pathname === localizedRoutes.cv
        ? metadata[language].cvTitle
        : metadata[language].title;

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata[language].description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", metadata[language].title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", metadata[language].description);
  }, [direction, language, localizedRoutes.cv, location.pathname]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction,
      routes: localizedRoutes,
      switchPath: `${localizePath(location.pathname, targetLanguage)}${location.search}${location.hash}`,
      copy: getCopy(language),
    }),
    [
      direction,
      language,
      localizedRoutes,
      location.hash,
      location.pathname,
      location.search,
      targetLanguage,
    ],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
