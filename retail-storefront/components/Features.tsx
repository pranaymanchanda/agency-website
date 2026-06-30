import { IconTruck, IconShield, IconRefresh } from "./Icons";
import Reveal from "./Reveal";

const features = [
  { icon: IconTruck, title: "Fast delivery", desc: "Across Kuwait within 48 hours." },
  { icon: IconRefresh, title: "Easy returns", desc: "14-day hassle-free returns." },
  { icon: IconShield, title: "Secure checkout", desc: "Pay on delivery or by card." },
];

export default function Features() {
  return (
    <section id="about" className="section">
      <div className="container-px grid gap-5 sm:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 70} className="flex items-start gap-4 rounded-3xl border border-neutral-200/80 bg-white p-6">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
              <f.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
