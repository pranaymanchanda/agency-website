import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="heading">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>}
    </Reveal>
  );
}
