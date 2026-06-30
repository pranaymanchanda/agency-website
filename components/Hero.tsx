"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IconArrow } from "./Icons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/15 via-brand/5 to-transparent blur-3xl" />
        <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-brand/10 blur-3xl animate-float" />
      </div>

      <div className="container-px text-center">
        <div className="animate-fade-in mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-neutral-600 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-brand" />
          {t.hero.badge}
        </div>

        <h1 className="animate-fade-up mx-auto max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-6xl">
          {t.hero.title}
        </h1>

        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-neutral-600 [animation-delay:120ms]">
          {t.hero.subtitle}
        </p>

        <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:240ms]">
          <a href="#contact" className="btn-primary w-full sm:w-auto">
            {t.hero.ctaPrimary}
            <IconArrow className="h-4 w-4 rtl:rotate-180" />
          </a>
          <a href="#work" className="btn-secondary w-full sm:w-auto">
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="animate-fade-up mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-neutral-200 pt-8 [animation-delay:360ms]">
          {t.hero.stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-neutral-900 sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-neutral-500 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
