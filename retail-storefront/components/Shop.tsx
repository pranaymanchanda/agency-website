"use client";

import { useMemo, useState } from "react";
import { categories, products } from "@/lib/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function Shop() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="shop" className="section">
      <div className="container-px">
        <Reveal className="mb-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-brand">
              Shop
            </span>
            <h2 className="heading">Featured products</h2>
          </div>

          <div id="categories" className="flex flex-wrap gap-2 scroll-mt-24">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === c.id
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 60}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
