import type { MetadataRoute } from "next";
import { SITE_URL as BASE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: BASE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/works`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/research`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
