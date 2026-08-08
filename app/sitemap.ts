import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://zenova-template.vercel.app",
      priority: 1,
      changeFrequency: "weekly",
    },
  ];
}