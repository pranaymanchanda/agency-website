"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section bg-neutral-50">
      <div className="container-px">
        <SectionHeader eyebrow={t.process.title} title={t.process.title} subtitle={t.process.subtitle} />
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent lg:block" />
          {t.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80} className="relative rounded-3xl border border-neutral-200/80 bg-white p-6 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand text-lg font-bold text-white shadow-lg shadow-brand/25">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
