const messages = [
  "Free delivery across Kuwait on orders over 25 KWD",
  "New season arrivals now in store",
  "Easy 14-day returns",
  "Pay on delivery available",
];

export default function AnnouncementBar() {
  const row = [...messages, ...messages];
  return (
    <div className="overflow-hidden bg-neutral-900 py-2 text-xs font-medium text-white">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap pe-10">
        {row.map((m, i) => (
          <span key={i} className="flex items-center gap-10">
            {m}
            <span className="text-brand">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
