import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "de", "es", "zh", "ja"],
  defaultLocale: "en",
  localePrefix: {
    mode: "always",
    prefixes: {
      en: "/en",
      fr: "/fr",
      de: "/de",
      es: "/es",
      zh: "/zh",
      ja: "/ja",
    },
  },
  alternateLinks: true,
  localeDetection: true,
  pathnames: {
    "/": "/",
  },
});
