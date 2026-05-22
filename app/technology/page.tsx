"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";

export default function TechnologyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[var(--background)]">
      <PageHeader
        tag={t("tech.label")}
        title={t("tech.title")}
        subtitle={t("tech.header.subtitle")}
      />

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[var(--muted)] body-text text-base md:text-lg leading-relaxed mb-16">
            {t("tech.intro")}
          </p>

          {/* The problem */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-[var(--foreground)] heading-serif mb-6">
              {t("tech.problem.title")}
            </h2>
            <div className="space-y-4 text-[var(--muted)] body-text text-base md:text-lg leading-relaxed">
              <p>{t("tech.problem.p1")}</p>
              <p>{t("tech.problem.p2")}</p>
            </div>
          </div>

          <hr className="border-[var(--color-sage)]/15 mb-16" />

          {/* What is ISF */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-[var(--foreground)] heading-serif mb-6">
              {t("tech.isf.title")}
            </h2>
            <div className="space-y-4 text-[var(--muted)] body-text text-base md:text-lg leading-relaxed">
              <p>{t("tech.isf.p1")}</p>
              <p>{t("tech.isf.p2")}</p>
              <p>{t("tech.isf.p3")}</p>
            </div>

            <figure className="mt-10">
              <div className="bg-white rounded-lg p-4 md:p-6 border border-[var(--color-sage)]/10">
                <Image
                  src="/technology/isf-diagram.jpg"
                  alt="Technical diagram showing CIE 1931 chromaticity coordinates of ISF Phase 1 and Phase 2, and the corresponding relative intensity waveforms for constant colour, luminance flicker, and invisible spectral flicker over time."
                  width={1424}
                  height={720}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <figcaption className="mt-3 text-xs text-[var(--muted)]/70 leading-relaxed">
                Left: CIE 1931 chromaticity coordinates of Phase 1 and Phase 2, showing the closely matched colour points that produce ISF. Right: Relative intensity waveforms across three operational regimes — constant colour (CC), luminance flicker (LF), and invisible spectral flicker (ISF) — illustrating how spectral alternation masks visible pulsing while preserving the 40 Hz modulation.
              </figcaption>
            </figure>
          </div>

          <hr className="border-[var(--color-sage)]/15 mb-16" />

          {/* Precision LED */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-[var(--foreground)] heading-serif mb-6">
              {t("tech.led.title")}
            </h2>
            <p className="text-[var(--muted)] body-text text-base md:text-lg leading-relaxed">
              {t("tech.led.p1")}
            </p>
          </div>

          <hr className="border-[var(--color-sage)]/15 mb-16" />

          {/* EVY Light device */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-[var(--foreground)] heading-serif mb-6">
              {t("tech.evy.title")}
            </h2>
            <p className="text-[var(--muted)] body-text text-base md:text-lg leading-relaxed">
              {t("tech.evy.p1")}
            </p>
          </div>

          <hr className="border-[var(--color-sage)]/15 mb-16" />

          {/* PSD comparison */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-[var(--foreground)] heading-serif mb-6">
              {t("tech.psd.title")}
            </h2>
            <p className="text-[var(--muted)] body-text text-base md:text-lg leading-relaxed mb-10">
              {t("tech.psd.description")}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <figure>
                <div className="bg-white rounded-lg p-4 border border-[var(--color-sage)]/10">
                  <Image
                    src="/technology/psd-isf.png"
                    alt="Power Spectral Density plot during Invisible Spectral Flicker (ISF) stimulation, showing a clear SSVEP peak at 40 Hz."
                    width={1024}
                    height={578}
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-[var(--muted)]/70 leading-relaxed text-center">
                  <span className="font-medium text-[var(--foreground)]">Invisible Spectral Flicker (ISF)</span>
                </figcaption>
              </figure>

              <figure>
                <div className="bg-white rounded-lg p-4 border border-[var(--color-sage)]/10">
                  <Image
                    src="/technology/psd-stroboscopic.png"
                    alt="Power Spectral Density plot during stroboscopic flicker stimulation, showing a comparable SSVEP peak at 40 Hz."
                    width={1024}
                    height={588}
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-3 text-xs text-[var(--muted)]/70 leading-relaxed text-center">
                  <span className="font-medium text-[var(--foreground)]">Stroboscopic flicker (40 Hz luminance)</span>
                </figcaption>
              </figure>
            </div>

            <p className="mt-6 text-xs text-[var(--muted)]/70 leading-relaxed">
              Both conditions show a distinct SSVEP peak at 40 Hz, demonstrating that ISF entrains gamma-band neural oscillations at a magnitude comparable to conventional stroboscopic flicker. PSD computed using Welch method, frequency range 1–45 Hz.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-10 border-t border-[var(--color-sage)]/15">
            <p className="text-[var(--muted)] text-sm mb-4">{t("tech.cta.text")}</p>
            <Link
              href="/study"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-forest)] hover:text-[var(--color-sage)] transition-colors"
            >
              {t("tech.cta.button")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
