import type { MetadataRoute } from "next";
import { websiteUrl } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL(websiteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
      alternates: {
        languages: {
          en: new URL("/en", websiteUrl).toString(),
          fr: new URL("/fr", websiteUrl).toString(),
        },
      },
    },
  ];
}
