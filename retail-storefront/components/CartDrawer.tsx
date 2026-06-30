"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import { formatKWD } from "@/lib/format";
import { IconClose, IconMinus, IconPlus, IconTrash, IconBag, IconArrow } from "./Icons";

export default function CartDrawer() {
  const { isOpen, close, lines, subtotal, count, setQty, remove } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const checkout = () => {
    alert("This is a demo storefront — checkout is not connected to a payment provider.");
  };

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="text-lg font-bold">Your cart ({count})</h2>
          <button onClick={close} aria-label="Close cart" className="grid h-9 w-9 place-items-center rounded-full hover:bg-neutral-100">
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center text-neutral-500">
            <IconBag className="h-10 w-10" />
            <p>Your cart is empty.</p>
            <button onClick={close} className="btn-secondary mt-2">Continue shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {lines.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-4">
                  <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${product.gradient} text-3xl`}>
                    {product.emoji}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold leading-snug">{product.name}</h3>
                      <button onClick={() => remove(product.id)} aria-label="Remove" className="text-neutral-400 hover:text-red-500">
                        <IconTrash className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="mt-0.5 text-sm font-bold text-brand">{formatKWD(product.price)}</span>
                    <div className="mt-auto flex items-center gap-2">
                      <button onClick={() => setQty(product.id, qty - 1)} aria-label="Decrease" className="grid h-7 w-7 place-items-center rounded-full border border-neutral-200 hover:bg-neutral-50">
                        <IconMinus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                      <button onClick={() => setQty(product.id, qty + 1)} aria-label="Increase" className="grid h-7 w-7 place-items-center rounded-full border border-neutral-200 hover:bg-neutral-50">
                        <IconPlus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-200 px-5 py-5">
              <div className="mb-1 flex items-center justify-between text-sm text-neutral-500">
                <span>Subtotal</span>
                <span>{formatKWD(subtotal)}</span>
              </div>
              <div className="mb-4 flex items-center justify-between text-base font-bold">
                <span>Total</span>
                <span>{formatKWD(subtotal)}</span>
              </div>
              <button onClick={checkout} className="btn-dark w-full">
                Checkout <IconArrow className="h-4 w-4" />
              </button>
              <p className="mt-2 text-center text-xs text-neutral-400">Taxes and delivery calculated at checkout.</p>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
