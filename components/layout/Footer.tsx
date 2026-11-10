import Link from "next/link";
import { ArrowUp, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { products } from "@/lib/products";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-top"><div className="footer-brand"><Link href="/">KUSI <span>& COMPANY</span></Link><p>Hardware & fastening products</p></div><a className="back-top" href="#main-content"><ArrowUp /> Back to top</a></div>
    <div className="footer-grid">
      <div className="footer-address"><p className="footer-label">Visit us</p><address>{BUSINESS.address}</address><a href={BUSINESS.maps} target="_blank" rel="noreferrer"><MapPin size={15} /> Get directions</a></div>
      <div><p className="footer-label">Navigate</p><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      <div><p className="footer-label">Products</p>{products.map(p => <Link key={p.slug} href={`/products/${p.slug}`}>{p.name}</Link>)}</div>
      <div><p className="footer-label">Direct inquiry</p><a href={BUSINESS.phoneHref}><Phone size={15} /> {BUSINESS.phone}</a><a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Kusi and Company</span><span>Kolkata, West Bengal, India</span></div>
  </footer>;
}
