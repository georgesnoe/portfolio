import type { MetadataRoute } from "next";
import { creatorName, websiteUrl } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `Portfolio • ${creatorName}`,
    short_name: `Portfolio`,
    description: `Portfolio of ${creatorName} • Software engineer, Database administrator, and more`,
    background_color: "#ffffff",
    categories: ["personal", "software", "database", "business"],
    dir: "auto",
    display: "browser",
    display_override: ["browser"],
    icons: [
      {
        src: new URL("/favicon.ico", websiteUrl).toString(),
        purpose: "any",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    lang: "en, fr",
    orientation: "any",
    start_url: new URL(websiteUrl).toString(),
    theme_color: "#ffffff",
  };
}
