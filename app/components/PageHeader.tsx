"use client";

interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ tag, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background: cropped version of the hero leaves */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-leaves.jpg)", backgroundPosition: "center 30%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-forest-deep)]/80 via-[var(--color-forest)]/70 to-[var(--color-forest-deep)]/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-white/50 uppercase tracking-[0.3em] text-xs mb-4">{tag}</p>
        <h1 className="text-4xl md:text-6xl text-white mb-4 heading-serif">{title}</h1>
        {subtitle && (
          <>
            <div className="branch-divider" style={{ background: "linear-gradient(90deg, var(--color-gold), var(--color-gold-light))" }} />
            <p className="text-white/70 body-text max-w-2xl mx-auto text-lg">{subtitle}</p>
          </>
        )}
      </div>
    </section>
  );
}
