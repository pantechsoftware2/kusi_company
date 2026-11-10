import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://kusi-and-company-hardware.goodsole10.chatgpt.site/sitemap.xml" }; }
