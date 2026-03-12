export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.4em] text-accent font-semibold">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-ink-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-ink-700 dark:text-white/70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
