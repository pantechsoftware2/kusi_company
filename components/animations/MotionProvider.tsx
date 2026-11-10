"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.85 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => gsap.fromTo(el, { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }));
      gsap.utils.toArray<HTMLElement>(".reveal-image").forEach((el) => gsap.fromTo(el, { clipPath: "inset(12% 0 12% 0)", opacity: 0 }, { clipPath: "inset(0% 0 0% 0)", opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }));
      const heroLines = gsap.utils.toArray<HTMLElement>(".hero-title .line-mask > span");
      if (heroLines.length > 0) {
        gsap.fromTo(heroLines, { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.12, ease: "power4.out", delay: 0.15 });
      }

      const hero = document.querySelector<HTMLElement>(".hero");
      const heroProduct = document.querySelector<HTMLElement>(".hero-product");
      if (hero && heroProduct) {
        gsap.to(heroProduct, { yPercent: 10, rotate: 4, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 1 } });
      }
    });
    ScrollTrigger.refresh();
    return () => { ctx.revert(); lenis.destroy(); gsap.ticker.remove(tick); };
  }, [pathname]);
  return children;
}
