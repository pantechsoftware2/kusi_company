"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { products } from "@/lib/products";

export function ProductStory() {
  const section = useRef<HTMLElement>(null); const imageWrap = useRef<HTMLDivElement>(null); const [active, setActive] = useState(0);
  useEffect(() => { const node = section.current; if (!node) return; let raf = 0; const update = () => { const rect = node.getBoundingClientRect(); const travel = node.offsetHeight - window.innerHeight; const progress = Math.min(0.999, Math.max(0, -rect.top / Math.max(travel, 1))); setActive(Math.floor(progress * products.length)); raf = 0; }; const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); }; update(); addEventListener("scroll", onScroll, { passive: true }); return () => { removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); }; }, []);
  useEffect(() => { if (imageWrap.current) gsap.fromTo(imageWrap.current, { scale: .86, rotate: -8, opacity: .35 }, { scale: 1, rotate: 0, opacity: 1, duration: .75, ease: "power3.out" }); }, [active]);
  const product = products[active];
  return <section className="story" ref={section} aria-label="Product story">
    <div className="story-sticky">
      <div className="story-info"><p className="eyebrow light">03 / Component study</p><div className="story-number">{product.number}</div><h2>{product.name}</h2><p>{product.shortDescription}</p><div className="story-progress">{products.map((p, i) => <span className={i <= active ? "active" : ""} key={p.slug} />)}</div></div>
      <div className="story-visual"><div className="story-ring" /><div className="story-image" ref={imageWrap}><Image src={product.image} alt={product.alt} fill sizes="(max-width: 800px) 90vw, 55vw" priority /></div><span className="story-label">ROTATION / FORM / FUNCTION</span></div>
      <div className="story-list">{products.map((p, i) => <span className={i === active ? "active" : ""} key={p.slug}>{p.number} — {p.name}</span>)}</div>
    </div>
  </section>;
}
