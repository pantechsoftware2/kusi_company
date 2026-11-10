import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const product = getProduct(slug); return product ? { title: product.name, description: `${product.shortDescription} Contact Kusi and Company for availability.` } : {}; }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = getProduct(slug); if (!product) notFound();
  const related = products.filter(p => p.slug !== product.slug).slice(0, 3);
  const message = encodeURIComponent(`Hello Kusi and Company, I would like to ask about availability for ${product.name}. My requirement is: `);
  return <main id="main-content" className="inner-page product-detail">
    <nav className="breadcrumb"><Link href="/products"><ArrowLeft size={14} /> Products</Link><span>/</span><span>{product.name}</span></nav>
    <section className="detail-hero"><div className="detail-copy"><p className="eyebrow">Product category / {product.number}</p><h1>{product.name}</h1><p>{product.description}</p><a className="button button-dark" href={`https://wa.me/919088355699?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Ask about availability</a></div><div className="detail-image grid-bg"><Image src={product.image} alt={product.alt} fill priority sizes="(max-width: 900px) 100vw, 55vw" /><span>KC / {product.number} · Category image</span></div></section>
    <section className="detail-info section"><div><p className="section-number">General information</p><h2>Need a specific size<br />or specification?</h2></div><div><h3>Common applications</h3><ul>{product.applications.map(item => <li key={item}><Check size={16} /> {item}</li>)}</ul><p className="spec-note">Exact specifications, materials, finishes, standards, sizes, and stock availability must be confirmed before ordering.</p></div></section>
    <section className="related section"><div className="section-kicker"><span>Related products</span><span>Continue exploring</span></div><div className="related-grid">{related.map(p => <Link href={`/products/${p.slug}`} key={p.slug}><div><Image src={p.image} alt={p.alt} fill sizes="33vw" /></div><span>{p.number}</span><h3>{p.name}</h3><ArrowUpRight /></Link>)}</div></section>
  </main>;
}
