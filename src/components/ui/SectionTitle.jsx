export default function SectionTitle({ eyebrow, title, intro }) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <span className="font-mono text-sm text-accent">{eyebrow}</span>
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {intro && <p className="max-w-2xl text-muted">{intro}</p>}
    </div>
  );
}
