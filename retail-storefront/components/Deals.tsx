"use client";

import { products } from "@/lib/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function Deals() {
  const onSale = products.filter((p) => p.oldPrice);

  return (
    <section id="deals" className="section bg-neutral-50">
      <div className="container-px">
        <Reveal className="overflow-hidden rounded-3xl bg-neutral-900 p-8 text-white sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider">
                Limited time
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Up to 30% off seasonal picks</h2>
              <p className="mt-3 max-w-md text-neutral-300">
                Refresh your space for less. Selected furniture, kitchen and decor on sale while stocks last.
              </p>
              <a href="#shop" className="btn-primary mt-6">Shop the sale</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {onSale.slice(0, 2).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
