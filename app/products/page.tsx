import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "Products", description: "Explore machine screws, nuts, washers, spring washers, and split pins available for inquiry." };

export default function ProductsPage() {
  return <main id="main-content" className="inner-page">
    <section className="inner-hero grid-bg"><div><p className="eyebrow">Product catalog / 05 categories</p><h1>Our hardware<br /><em>collection.</em></h1></div><p>Explore the essential fastening components available for inquiry. Product dimensions, specifications, and availability are subject to confirmation.</p></section>
    <section className="catalog section"><div className="section-kicker"><span>Available for inquiry</span><span>Kolkata · West Bengal</span></div><div className="catalog-grid">{products.map(product => {
      const message = encodeURIComponent(`Hello Kusi and Company, I would like to inquire about ${product.name}.`);
      return <article className="catalog-card reveal" key={product.slug}><Link className="catalog-image" href={`/products/${product.slug}`}><span>{product.number}</span><Image src={product.image} alt={product.alt} fill sizes="(max-width: 800px) 100vw, 48vw" /></Link><div className="catalog-copy"><h2>{product.name}</h2><p>{product.shortDescription}</p><div><Link className="text-link" href={`/products/${product.slug}`}>View details <ArrowUpRight size={15} /></Link><a className="inquiry-link" href={`https://wa.me/919088355699?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp inquiry</a></div></div></article>;
    })}</div></section>
  </main>;
}
