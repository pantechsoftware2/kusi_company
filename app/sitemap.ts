import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://kusi-and-company-hardware.goodsole10.chatgpt.site"; return ["", "/products", "/about", "/contact", ...products.map(p => `/products/${p.slug}`)].map(url => ({ url: `${base}${url}`, lastModified: new Date(), changeFrequency: url === "" ? "monthly" : "yearly", priority: url === "" ? 1 : .8 })); }
