import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, UserRound } from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = { title: "About Us", description: "Get to know Kusi and Company, a hardware products business based in Kolkata." };
export default function AboutPage() { return <main id="main-content" className="inner-page about-page">
  <section className="inner-hero grid-bg"><div><p className="eyebrow">Company / Kolkata</p><h1>Get to know<br /><em>Kusi & Company.</em></h1></div><p>Kusi and Company is a hardware products business based in Kolkata, offering a range of essential fastening components including machine screws, nuts, washers, spring washers, and split pins.</p></section>
  <section className="about-feature section"><div className="about-feature-image reveal-image"><Image src="/images/products/spring-washers.png" alt="Spring washers" fill sizes="(max-width: 800px) 100vw, 50vw" /><span>Focused range / Direct inquiry</span></div><div className="about-feature-copy reveal"><p className="section-number">01 / The business</p><h2>Hardware,<br />clearly presented.</h2><p>This website makes it simple to explore the available product categories and contact the business directly to discuss requirements, pricing, and availability.</p><div className="fact-row"><UserRound /><span>Contact person</span><strong>Rishav Saraogi</strong></div><div className="fact-row"><MapPin /><span>Business location</span><strong>Manohar Das Chowk, Kolkata</strong></div></div></section>
  <section className="category-lineup section"><div className="section-kicker"><span>02 / Product categories</span><span>05 essential components</span></div>{products.map(p => <Link href={`/products/${p.slug}`} key={p.slug}><span>{p.number}</span><h3>{p.name}</h3><p>{p.shortDescription}</p><ArrowUpRight /></Link>)}</section>
  <section className="page-cta"><p>Have a hardware requirement?</p><h2>Make a direct inquiry.</h2><Link className="button button-amber" href="/contact">Contact Kusi and Company <ArrowUpRight size={16} /></Link></section>
  </main>; }
