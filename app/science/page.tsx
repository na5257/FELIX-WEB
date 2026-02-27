"use client";

import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";

export default function SciencePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[var(--background)]">
      <PageHeader
        tag={t("sci.label")}
        title={t("sci.title")}
        subtitle={t("science.header.subtitle")}
      />

      {/* Science content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {/* Gamma waves */}
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-forest)]/10 to-[var(--color-sage)]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-sage)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-xl md:text-2xl font-light mb-4 heading-serif text-[var(--foreground)]">{t("sci.gamma.title")}</h3>
              <p className="text-[var(--muted)] body-text mb-3">{t("sci.gamma.p1")}</p>
              <p className="text-[var(--muted)] body-text">{t("sci.gamma.p2")}</p>
            </div>
          </div>

          <div className="section-divider" />

          {/* Invisible spectral flicker */}
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-gold)]/10 to-[var(--color-gold-light)]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-xl md:text-2xl font-light mb-4 heading-serif text-[var(--foreground)]">{t("sci.device.title")}</h3>
              <p className="text-[var(--muted)] body-text mb-3">{t("sci.device.p1")}</p>
              <p className="text-[var(--muted)] body-text">{t("sci.device.p2")}</p>
            </div>
          </div>

          <div className="section-divider" />

          {/* GENUS */}
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-sage)]/10 to-[var(--color-leaf)]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-leaf)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-xl md:text-2xl font-light mb-4 heading-serif text-[var(--foreground)]">{t("sci.genus.title")}</h3>
              <p className="text-[var(--muted)] body-text mb-3">{t("sci.genus.p1")}</p>
              <p className="text-[var(--muted)] body-text">{t("sci.genus.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-sage">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[var(--muted)] mb-6">{t("science.cta.text")}</p>
          <a
            href="/study"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-forest)] text-white rounded-full hover:bg-[var(--color-sage)] transition-colors"
          >
            {t("science.cta.button")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
