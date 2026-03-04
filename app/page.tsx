"use client";

import { useLanguage } from "./contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-leaves.jpg)" }}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
          <p className="text-white/60 uppercase tracking-[0.3em] text-xs mb-8 animate-fade-in-up">
            {t("hero.tag")}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-4 animate-fade-in-up delay-100 heading-serif">
            <span className="light-accent">FELIX</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--color-gold-light)] mb-4 animate-fade-in-up delay-200 heading-serif">
            {t("hero.subtitle")}
          </p>

          <div
            className="branch-divider animate-fade-in-up delay-200"
            style={{ background: "linear-gradient(90deg, var(--color-gold), var(--color-gold-light))" }}
          />

          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-300">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <a
              href="/about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              {t("hero.cta.learn")}
            </a>
            <a
              href="/participate"
              className="px-8 py-4 bg-[var(--color-gold)] text-[var(--color-forest-deep)] rounded-full hover:bg-[var(--color-gold-light)] transition-all duration-300 font-medium"
            >
              {t("hero.cta.participate")}
            </a>
          </div>

          <p className="mt-12 text-white/40 text-xs animate-fade-in-up delay-500">
            {t("hero.registered")} &middot;{" "}
            <a
              href="https://clinicaltrials.gov/ct2/show/NCT05680220"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60 transition-colors"
            >
              {t("hero.registered.id")}
            </a>
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[var(--color-sage)] uppercase tracking-[0.3em] text-xs mb-6">{t("bg.label")}</p>
          <h2 className="text-3xl md:text-4xl text-[var(--foreground)] mb-10 heading-serif leading-tight">{t("bg.title")}</h2>

          <div className="space-y-6 text-[var(--muted)] body-text text-base md:text-lg leading-relaxed">
            <p>{t("bg.p1")}</p>
            <p>{t("bg.p2")}</p>
            <p>{t("bg.p3")}</p>
          </div>

          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-forest)] hover:text-[var(--color-sage)] transition-colors"
            >
              {t("hero.cta.learn")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <hr className="max-w-3xl mx-auto border-[var(--color-sage)]/15" />

      {/* ========== EXPLORE ========== */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="space-y-0">
            {[
              {
                href: "/science",
                title: t("nav.science"),
                desc: t("home.card.science"),
              },
              {
                href: "/technology",
                title: t("nav.technology"),
                desc: t("home.card.technology"),
              },
              {
                href: "/study",
                title: t("nav.study"),
                desc: t("home.card.study"),
              },
              {
                href: "/participate",
                title: t("nav.participate"),
                desc: t("home.card.participate"),
              },
              {
                href: "/team",
                title: t("nav.team"),
                desc: t("home.card.team"),
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="group flex items-baseline justify-between py-6 border-b border-[var(--color-sage)]/15 hover:border-[var(--color-forest)]/40 transition-colors"
              >
                <div className="flex-1 min-w-0 pr-8">
                  <h3 className="text-lg md:text-xl text-[var(--foreground)] heading-serif group-hover:text-[var(--color-forest)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mt-1">{link.desc}</p>
                </div>
                <svg
                  className="w-4 h-4 text-[var(--color-sage)] group-hover:text-[var(--color-forest)] group-hover:translate-x-1 transition-all flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
