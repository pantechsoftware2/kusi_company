"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { products, type Product } from "@/lib/products";

export function ProductHoverList() {
  const [active, setActive] = useState<Product | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  function movePreview(clientX: number, clientY: number) {
    const preview = previewRef.current;
    if (!preview) return;
    const width = 310;
    const height = 245;
    const x = Math.min(clientX + 26, window.innerWidth - width - 18);
    const y = Math.max(86, Math.min(clientY - height / 2, window.innerHeight - height - 18));
    preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function showFromKeyboard(product: Product) {
    setActive(product);
    const preview = previewRef.current;
    if (preview) preview.style.transform = `translate3d(calc(100vw - 340px), 110px, 0)`;
  }

  return (
    <section
      className="category-lineup product-hover-list section"
      onPointerMove={(event) => movePreview(event.clientX, event.clientY)}
      onPointerLeave={() => setActive(null)}
    >
      <div className="section-kicker"><span>02 / Product categories</span><span>05 essential components</span></div>
      {products.map((product) => (
        <Link
          href={`/products/${product.slug}`}
          key={product.slug}
          onPointerEnter={() => setActive(product)}
          onPointerLeave={() => setActive(null)}
          onFocus={() => showFromKeyboard(product)}
          onBlur={() => setActive(null)}
        >
          <span>{product.number}</span>
          <h3>{product.name}</h3>
          <p>{product.shortDescription}</p>
          <ArrowUpRight />
        </Link>
      ))}
      <div ref={previewRef} className={`product-hover-preview ${active ? "is-visible" : ""}`} aria-hidden="true">
        {active && <>
          <div className="product-hover-image"><Image src={active.image} alt="" fill sizes="310px" /></div>
          <div className="product-hover-meta"><span>{active.number}</span><strong>{active.name}</strong></div>
        </>}
      </div>
    </section>
  );
}
