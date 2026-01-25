import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wellingtoncma.com",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://wellingtoncma.com/services",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
      {
      url: "https://wellingtoncma.com/team",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
        {
      url: "https://wellingtoncma.com/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];
}
