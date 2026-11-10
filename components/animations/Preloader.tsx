"use client";

import { useEffect, useRef } from "react";

export function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; if (sessionStorage.getItem("kusi-intro")) { node.style.display = "none"; return; } sessionStorage.setItem("kusi-intro", "1"); const id = window.setTimeout(() => { node.style.display = "none"; }, 900); return () => window.clearTimeout(id); }, []);
  return <div className="preloader" ref={ref} aria-hidden="true"><div className="preloader-mark"><strong>KUSI <span>& COMPANY</span></strong><div className="preloader-line" /></div></div>;
}
