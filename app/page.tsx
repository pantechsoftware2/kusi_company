import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { products } from "@/lib/products";
import { ProductStory } from "@/components/home/ProductStory";
import { Preloader } from "@/components/animations/Preloader";
import { BUSINESS } from "@/lib/business";

export default function Home() {
  return (
    <main id="main-content">
      <Preloader />
      <section className="hero grid-bg" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow reveal">Kolkata · Hardware & fastening products</p>
          <h1 id="hero-title" className="hero-title">
            <span className="line-mask"><span>Precision.</span></span>
            <span className="line-mask"><span>Strength.</span></span>
            <span className="line-mask accent-line"><span>Reliability.</span></span>
          </h1>
          <p className="hero-intro reveal">Explore essential hardware and fastening solutions from Kusi and Company, Kolkata.</p>
          <div className="button-row reveal">
            <Link className="button button-dark magnetic" href="/products">Explore products <ArrowUpRight size={16} /></Link>
            <Link className="button button-ghost" href="/contact">Request a quote</Link>
          </div>
        </div>
        <div className="hero-visual reveal-image" aria-hidden="true">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="hero-plate"><span>KC / 01</span><span>Machine screw</span></div>
          <Image className="hero-product" src="/images/products/machine-screws.png" alt="" fill priority sizes="(max-width: 900px) 100vw, 55vw" />
          <div className="measure measure-x"><span>FASTENER / 001</span></div>
        </div>
        <a className="scroll-cue" href="#products"><ArrowDown size={16} /> Scroll to explore</a>
      </section>

      <section className="marquee" aria-label="Product categories"><div className="marquee-track">
        {[0, 1].map((set) => <div className="marquee-set" aria-hidden={set === 1} key={set}>{products.map((p) => <span key={p.slug}>{p.name}<i>✦</i></span>)}</div>)}
      </div></section>

      <section className="section about-preview">
        <div className="section-number reveal">01 / Company</div>
        <div className="about-heading reveal"><h2>Built around<br />the essentials.</h2></div>
        <div className="about-copy reveal"><p>Kusi and Company supplies a focused range of hardware and fastening products for customers seeking practical, reliable sourcing.</p><Link className="text-link" href="/about">Discover our company <ArrowUpRight size={16} /></Link></div>
        <div className="about-object reveal-image"><Image src="/images/products/nuts.png" alt="Stainless steel hex nuts" fill sizes="(max-width: 800px) 100vw, 40vw" /><div className="object-caption"><span>Form</span><strong>Hexagonal</strong><span>Function</span><strong>Connection</strong></div></div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-kicker reveal"><span>02 / Product range</span><span>Five essential categories</span></div>
        <h2 className="display-heading reveal">The components that<br />hold it all together.</h2>
        <div className="product-grid">{products.map((product, index) => (
          <article className={`product-card reveal ${index === 0 ? "product-card-large" : ""}`} key={product.slug}>
            <Link href={`/products/${product.slug}`} className="product-image-wrap" aria-label={`Explore ${product.name}`}><Image src={product.image} alt={product.alt} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 60vw" : "(max-width: 800px) 100vw, 40vw"} /><span className="product-index">{product.number}</span></Link>
            <div className="product-card-copy"><div><h3>{product.name}</h3><p>{product.shortDescription}</p></div><Link className="round-link" href={`/products/${product.slug}`} aria-label={`View ${product.name}`}><ArrowUpRight /></Link></div>
          </article>
        ))}</div>
      </section>

      <ProductStory />

      <section className="section benefits">
        <div className="section-kicker reveal"><span>04 / Why Kusi and Company</span><span>Simple. Direct. Local.</span></div>
        <h2 className="display-heading reveal">The right components.<br />A direct connection.</h2>
        <div className="benefit-grid">
          <article className="benefit-card reveal"><div className="benefit-image"><Image src="/images/benefits/focused-hardware-range.webp" alt="Machine screw, nut, flat washer, spring washer, and split pin arranged together" fill sizes="(max-width: 900px) 100vw, 33vw" /></div><span>01</span><div className="benefit-copy"><h3>Focused hardware range</h3><p>Explore five essential fastening product categories.</p></div></article>
          <article className="benefit-card reveal"><div className="benefit-image"><Image src="/images/benefits/direct-product-inquiry.webp" alt="A phone inquiry interface beside a machine screw and nut" fill sizes="(max-width: 900px) 100vw, 33vw" /></div><span>02</span><div className="benefit-copy"><h3>Direct product inquiries</h3><p>Discuss requirements, pricing, and availability with the business.</p></div></article>
          <article className="benefit-card reveal"><div className="benefit-image"><Image src="/images/benefits/kolkata-location.webp" alt="Hardware components and an amber location marker arranged on a Kolkata-inspired city map" fill sizes="(max-width: 900px) 100vw, 33vw" /></div><span>03</span><div className="benefit-copy"><h3>Kolkata-based business</h3><p>Find us at our Manohar Das Chowk location.</p></div></article>
        </div>
      </section>

      <section className="visual-break"><div className="visual-break-images reveal-image"><Image src="/images/products/machine-screws.png" alt="Machine screws" fill sizes="100vw" /><Image src="/images/products/washers.png" alt="Flat washers" fill sizes="50vw" /></div><div className="visual-break-copy reveal"><p>Small components.</p><h2>Important<br />connections.</h2><span>Hardware in focus / Kolkata</span></div></section>

      <section className="contact-cta grid-bg-dark">
        <div><p className="eyebrow light reveal">Start an inquiry</p><h2 className="reveal">Let&apos;s talk<br /><em>hardware.</em></h2></div>
        <div className="cta-side reveal"><p>Looking for machine screws, nuts, washers, spring washers, or split pins? Contact us with your requirements.</p><div className="button-row"><a className="button button-amber" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp inquiry</a><a className="button button-outline-light" href={BUSINESS.phoneHref}><Phone size={17} /> Call now</a></div><a className="location-line" href={BUSINESS.maps} target="_blank" rel="noreferrer"><MapPin size={17} /> 113/B, Manohar Das Chowk, Kolkata</a></div>
      </section>
    </main>
  );
}
