"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { whyIcons } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why" className="section bg-neutral-50">
      <div className="container-px">
        <SectionHeader eyebrow={t.why.title} title={t.why.title} subtitle={t.why.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, i) => {
            const Icon = whyIcons[i];
            return (
              <Reveal
                key={item.title}
                delay={i * 60}
                className="flex items-start gap-4 rounded-3xl border border-neutral-200/80 bg-white p-6"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
