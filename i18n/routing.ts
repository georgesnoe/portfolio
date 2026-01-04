import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  alternateLinks: true,
  localePrefix: {
    mode: "always",
    prefixes: {
      en: "/en",
      fr: "/fr",
    },
  },
  pathnames: {
    "/": "/",
  },
});
