"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { IconWhatsApp, IconArrow } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

// TODO: replace with your real WhatsApp number (international format, no +) and email.
const WHATSAPP_NUMBER = "96500000000";
const CONTACT_EMAIL = "hello@yourbrand.com";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
  };

  const inputCls =
    "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  return (
    <section id="contact" className="section">
      <div className="container-px">
        <SectionHeader eyebrow={t.nav.contact} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3 rounded-3xl border border-neutral-200/80 bg-white p-6 sm:p-8">
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t.contact.name}</label>
                <input required value={form.name} onChange={update("name")} className={inputCls} />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t.contact.email}</label>
                <input required type="email" value={form.email} onChange={update("email")} className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t.contact.business}</label>
                <input value={form.business} onChange={update("business")} className={inputCls} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">{t.contact.message}</label>
                <textarea required rows={4} value={form.message} onChange={update("message")} className={`${inputCls} resize-none`} />
              </div>
              <button type="submit" className="btn-primary sm:col-span-2">
                {t.contact.send}
                <IconArrow className="h-4 w-4 rtl:rotate-180" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2 flex flex-col gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl bg-[#25D366] p-6 text-white transition-transform hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
                <IconWhatsApp className="h-7 w-7" />
              </span>
              <span className="font-semibold">{t.contact.whatsapp}</span>
            </a>

            <div className="rounded-3xl border border-neutral-200/80 bg-neutral-50 p-6">
              <div className="text-sm text-neutral-500">{t.contact.emailUs}</div>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block break-all font-semibold text-brand hover:underline">
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
