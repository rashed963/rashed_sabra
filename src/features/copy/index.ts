import type { BlogLanguage } from "../blog/types";
import { copyAr } from "./ar";
import { copyEn } from "./en";

type WidenCopy<T> =
  T extends string
    ? string
    : T extends readonly (infer Item)[]
      ? readonly WidenCopy<Item>[]
      : T extends object
        ? { readonly [Key in keyof T]: WidenCopy<T[Key]> }
        : T;

export type SiteCopy = WidenCopy<typeof copyAr>;

export const copyByLanguage = {
  ar: copyAr,
  en: copyEn,
} as const satisfies Record<BlogLanguage, SiteCopy>;

export const getCopy = (language: BlogLanguage): SiteCopy => copyByLanguage[language];
