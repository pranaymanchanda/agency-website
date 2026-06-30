"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { serviceIcons } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const iconOrder = [
  serviceIcons.web,
  serviceIcons.chat,
  serviceIcons.automation,
  serviceIcons.wrench,
  serviceIcons.search,
  serviceIcons.globe,
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section">
      <div className="container-px">
        <SectionHeader eyebrow={t.services.title} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = iconOrder[i];
            return (
              <Reveal key={item.title} delay={i * 60} className="card group">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
