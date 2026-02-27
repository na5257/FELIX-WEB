"use client";

import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[var(--background)]">
      <PageHeader
        tag={t("bg.label")}
        title={t("bg.title")}
        subtitle={t("about.header.subtitle")}
      />

      {/* Background text */}
      <section className="py-20 md:py-28 gradient-warm leaf-texture">
        <div className="relative max-w-3xl mx-auto px-6 space-y-6">
          <p className="text-[var(--muted)] body-text text-lg">{t("bg.p1")}</p>
          <p className="text-[var(--muted)] body-text text-lg">{t("bg.p2")}</p>
          <p className="text-[var(--muted)] body-text text-lg">{t("bg.p3")}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* CTA to science page */}
      <section className="py-16 gradient-sage">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--muted)] mb-6">{t("about.cta.text")}</p>
          <a
            href="/science"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-forest)] text-white rounded-full hover:bg-[var(--color-sage)] transition-colors"
          >
            {t("about.cta.button")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
