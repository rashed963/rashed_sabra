import { createContext, useContext } from "react";
import { getRoutes, type LocalizedRoutes } from "../../config/routes";
import type { BlogLanguage } from "../blog/types";
import { getCopy } from "../copy";

export type TextDirection = "rtl" | "ltr";

export type LanguageContextValue = {
  language: BlogLanguage;
  direction: TextDirection;
  routes: LocalizedRoutes;
  switchPath: string;
  copy: ReturnType<typeof getCopy>;
};

export const LanguageContext = createContext<LanguageContextValue>({
  language: "ar",
  direction: "rtl",
  routes: getRoutes("ar"),
  switchPath: "/en",
  copy: getCopy("ar"),
});

export const useLanguage = () => useContext(LanguageContext);
