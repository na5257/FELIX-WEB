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

      {/* ========== BRIEF OVERVIEW ========== */}
      <section className="py-24 md:py-32 gradient-warm leaf-texture">
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-sage)] uppercase tracking-[0.3em] text-xs mb-4">{t("bg.label")}</p>
            <h2 className="text-3xl md:text-5xl text-[var(--foreground)] mb-6 heading-serif">{t("bg.title")}</h2>
            <div className="branch-divider" />
          </div>

          <p className="text-[var(--muted)] body-text text-lg text-center max-w-3xl mx-auto mb-16">
            {t("bg.p1")}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { value: t("bg.stat1.value"), label: t("bg.stat1.label") },
              { value: t("bg.stat2.value"), label: t("bg.stat2.label") },
              { value: t("bg.stat3.value"), label: t("bg.stat3.label") },
            ].map((stat, i) => (
              <div key={i} className="card-nature p-8 stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm text-[var(--color-forest)] border border-[var(--color-sage)]/30 rounded-full hover:bg-[var(--color-forest)] hover:text-white transition-all duration-300"
            >
              {t("hero.cta.learn")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ========== QUICK LINKS ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/science",
                title: t("nav.science"),
                desc: t("home.card.science"),
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                href: "/study",
                title: t("nav.study"),
                desc: t("home.card.study"),
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                ),
              },
              {
                href: "/participate",
                title: t("nav.participate"),
                desc: t("home.card.participate"),
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <a
                key={i}
                href={card.href}
                className="card-nature p-8 hover-lift group block"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-forest)]/10 to-[var(--color-sage)]/10 flex items-center justify-center mb-5 text-[var(--color-sage)] group-hover:from-[var(--color-forest)] group-hover:to-[var(--color-sage)] group-hover:text-white transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--muted)] mb-4">{card.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[var(--color-sage)] group-hover:text-[var(--color-forest)] transition-colors">
                  {t("home.card.readmore")}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
