"use client";

import { useLanguage } from "@/lib/LanguageContext";

const socials = [
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "X", href: "#", icon: "X" },
  { label: "LinkedIn", href: "#", icon: "in" },
  { label: "WhatsApp", href: "#", icon: "WA" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container-px py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-bold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-brand text-white">◆</span>
              <span>{t.brand}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-neutral-200 text-xs font-semibold text-neutral-600 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a href="#contact" className="text-sm font-semibold text-brand hover:underline">
              {t.nav.cta}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row">
          <span>© {year} {t.brand}. {t.footer.rights}</span>
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}
