import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 10,
    },
    sitemap: "https://georgesnoe.github.io/sitemap.xml",
    host: "https://georgesnoe.github.io",
  };
}
