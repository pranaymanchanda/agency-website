"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { IconArrow } from "./Icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="section">
      <div className="container-px">
        <Reveal className="rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-brand/5 to-white p-8 text-center sm:p-12">
          <h2 className="heading">Get 10% off your first order</h2>
          <p className="mx-auto mt-3 max-w-md text-neutral-600">
            Join our newsletter for new arrivals, offers and home inspiration.
          </p>
          {done ? (
            <p className="mt-6 font-semibold text-brand">Thanks! Check your inbox for the code. 🎉</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
              className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border border-neutral-200 px-5 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
              />
              <button type="submit" className="btn-dark shrink-0">
                Subscribe <IconArrow className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
