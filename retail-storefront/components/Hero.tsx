import { IconArrow } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/15 via-brand/5 to-transparent blur-3xl" />
      </div>

      <div className="container-px grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-brand" /> New season · 2026 collection
          </span>
          <h1 className="animate-fade-up mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Modern pieces for a calmer home.
          </h1>
          <p className="animate-fade-up mt-5 max-w-md text-lg text-neutral-600 [animation-delay:120ms]">
            Thoughtfully designed furniture, kitchen and decor — delivered fast across Kuwait.
          </p>
          <div className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
            <a href="#shop" className="btn-dark">
              Shop the collection <IconArrow className="h-4 w-4" />
            </a>
            <a href="#deals" className="btn-secondary">
              View deals
            </a>
          </div>
          <div className="mt-10 flex gap-8 text-sm">
            <div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-neutral-500">Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-neutral-500">Customer rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold">48h</div>
              <div className="text-neutral-500">Delivery</div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up relative [animation-delay:160ms]">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex aspect-[3/4] items-center justify-center rounded-3xl bg-gradient-to-br from-amber-200 to-orange-300 text-7xl shadow-sm">
              🛋️
            </div>
            <div className="mt-8 flex aspect-[3/4] items-center justify-center rounded-3xl bg-gradient-to-br from-sky-200 to-indigo-300 text-7xl shadow-sm">
              🪟
            </div>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold shadow-lg">
            Free delivery over <span className="text-brand">25 KWD</span>
          </div>
        </div>
      </div>
    </section>
  );
}
