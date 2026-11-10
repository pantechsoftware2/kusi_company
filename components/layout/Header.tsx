"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [["Home", "/"], ["Products", "/products"], ["About", "/about"], ["Contact", "/contact"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <Link className="wordmark" href="/" aria-label="Kusi and Company home"><span>KUSI</span><span>& COMPANY</span></Link>
    <nav className="desktop-nav" aria-label="Primary">{nav.map(([label, href]) => <Link key={href} className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""} href={href}>{label}</Link>)}</nav>
    <Link className="quote-link" href="/contact">Get a quote <span>↗</span></Link>
    <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}><span className="sr-only">Toggle menu</span>{open ? <X /> : <Menu />}</button>
    <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>{nav.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}<Link className="button button-amber" href="/contact" onClick={() => setOpen(false)}>Start an inquiry</Link></div>
  </header>;
}
