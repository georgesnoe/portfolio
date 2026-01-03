import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const websiteUrl = "https://georgesnoe.github.io";

  return [
    {
      url: new URL("/", websiteUrl).toString(),
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: new URL("/fr", websiteUrl).toString(),
          en: new URL("/en", websiteUrl).toString(),
        },
      },
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
