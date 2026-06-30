"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IconArrow } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const gradients = [
  "from-blue-500 to-indigo-600",
  "from-sky-500 to-blue-600",
  "from-indigo-500 to-violet-600",
  "from-cyan-500 to-blue-600",
  "from-blue-600 to-slate-800",
  "from-violet-500 to-blue-600",
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="work" className="section">
      <div className="container-px">
        <SectionHeader eyebrow={t.portfolio.title} title={t.portfolio.title} subtitle={t.portfolio.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60} as="article" className="group overflow-hidden rounded-3xl border border-neutral-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5">
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradients[i]} overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:18px_18px]" />
                <span className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {item.tag}
                </span>
              </div>
              <div className="flex items-center justify-between p-5">
                <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  {t.portfolio.cta}
                  <IconArrow className="h-4 w-4 rtl:rotate-180" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
