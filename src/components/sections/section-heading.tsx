export function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
        {number} / {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-100">
        {title}
      </h2>
    </div>
  );
}
