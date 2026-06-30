"use client";

import { useCart } from "@/lib/CartContext";
import { formatKWD } from "@/lib/format";
import type { Product } from "@/lib/products";
import { IconPlus, IconStar } from "./Icons";

const tagStyles: Record<string, string> = {
  New: "bg-brand text-white",
  Sale: "bg-red-500 text-white",
  Bestseller: "bg-neutral-900 text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5">
      <div className={`relative flex aspect-square items-center justify-center bg-gradient-to-br ${product.gradient} text-7xl`}>
        {product.tag && (
          <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold ${tagStyles[product.tag]}`}>
            {product.tag}
          </span>
        )}
        <span className="transition-transform duration-300 group-hover:scale-110">{product.emoji}</span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1 text-xs text-amber-500">
          <IconStar className="h-3.5 w-3.5" />
          <span className="font-medium text-neutral-500">4.9</span>
        </div>
        <h3 className="font-semibold leading-snug text-neutral-900">{product.name}</h3>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-neutral-900">{formatKWD(product.price)}</span>
            {product.oldPrice && (
              <span className="text-xs text-neutral-400 line-through">{formatKWD(product.oldPrice)}</span>
            )}
          </div>
          <button
            onClick={() => add(product.id)}
            aria-label={`Add ${product.name} to cart`}
            className="grid h-9 w-9 place-items-center rounded-full bg-neutral-900 text-white transition-all hover:bg-brand active:scale-90"
          >
            <IconPlus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
