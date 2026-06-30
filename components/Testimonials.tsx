"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container-px">
        <SectionHeader eyebrow={t.testimonials.title} title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
        <div className="grid gap-5 lg:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 70} className="flex flex-col rounded-3xl border border-neutral-200/80 bg-white p-7">
              <div className="mb-4 flex gap-0.5 text-brand" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s}>★</span>
                ))}
              </div>
              <p className="flex-1 text-[15px] leading-relaxed text-neutral-700">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 font-semibold text-brand">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">{item.name}</div>
                  <div className="text-xs text-neutral-500">{item.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
