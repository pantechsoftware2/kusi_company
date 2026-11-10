import Link from "next/link";
import { ArrowUp, ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { products } from "@/lib/products";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-head">
      <div><p className="footer-kicker">Hardware & fastening products · Kolkata</p><Link className="footer-wordmark" href="/">Kusi <span>& Company</span></Link></div>
      <a className="back-top" href="#main-content"><ArrowUp /> Back to top</a>
    </div>
    <div className="footer-main">
      <aside className="footer-contact-card">
        <p>Direct product inquiries</p>
        <h2>Let&apos;s talk<br />hardware.</h2>
        <a className="footer-phone" href={BUSINESS.phoneHref}><Phone size={18} /> {BUSINESS.phone}</a>
        <a className="footer-whatsapp" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Start a WhatsApp inquiry <ArrowUpRight size={18} /></a>
      </aside>
      <div className="footer-link-groups">
        <div><p className="footer-label">Navigate</p><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        <div><p className="footer-label">Products</p>{products.map(p => <Link key={p.slug} href={`/products/${p.slug}`}>{p.name}</Link>)}</div>
        <div><p className="footer-label">Contact</p><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a><a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><Link href="/contact">Inquiry form</Link></div>
      </div>
    </div>
    <div className="footer-location-bar">
      <div className="footer-address-line"><MapPin /><div><span>Visit Kusi and Company</span><address>{BUSINESS.address}</address></div></div>
      <a href={BUSINESS.maps} target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight /></a>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Kusi and Company</span><span>Precision in every connection</span><span>Kolkata, West Bengal, India</span></div>
  </footer>;
}
