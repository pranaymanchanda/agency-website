"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/CartContext";
import { IconBag } from "./Icons";

const links = [
  { href: "#shop", label: "Shop" },
  { href: "#categories", label: "Categories" },
  { href: "#deals", label: "Deals" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const { count, open } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-neutral-200/70 bg-white/85 backdrop-blur-xl" : "bg-white"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <a href="#top" className="text-xl font-bold tracking-tight">
          AURA<span className="text-brand">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={open}
          aria-label="Open cart"
          className="relative grid h-10 w-10 place-items-center rounded-full border border-neutral-200 transition-colors hover:bg-neutral-50"
        >
          <IconBag className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[11px] font-bold text-white">
              {count}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
