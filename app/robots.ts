import type { MetadataRoute } from "next";
import { websiteUrl } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 10,
    },
    sitemap: new URL("sitemap.xml", websiteUrl).toString(),
    host: new URL(websiteUrl).host,
  };
}
