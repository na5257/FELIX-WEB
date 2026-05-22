"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";
import GammaAnimation from "../components/GammaAnimation";

export default function SciencePage() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("gamma");
  const optionalT = (key: string) => {
    const value = t(key);
    return value === key ? "" : value;
  };
  const sections = [
    {
      id: "gamma",
      step: "01",
      titleKey: "sci.gamma.title",
      summaryKey: "sci.gamma.summary",
      paragraphKeys: ["sci.gamma.p1", "sci.gamma.p2", "sci.gamma.p3"],
      accentClass: "from-[var(--color-forest)]/10 to-[var(--color-sage)]/10",
      iconClass: "text-[var(--color-sage)]",
      iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      id: "depression",
      step: "02",
      titleKey: "sci.depression.title",
      summaryKey: "sci.depression.summary",
      paragraphKeys: ["sci.depression.p1", "sci.depression.p2", "sci.depression.p3"],
      accentClass: "from-[var(--color-gold)]/10 to-[var(--color-gold-light)]/10",
      iconClass: "text-[var(--color-gold)]",
      iconPath:
        "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    },
    {
      id: "rationale",
      step: "03",
      titleKey: "sci.rationale.title",
      summaryKey: "sci.rationale.summary",
      paragraphKeys: ["sci.rationale.p1", "sci.rationale.p2", "sci.rationale.p3"],
      accentClass: "from-[var(--color-sage)]/10 to-[var(--color-leaf)]/10",
      iconClass: "text-[var(--color-leaf)]",
      iconPath:
        "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    },
    {
      id: "device",
      step: "04",
      titleKey: "sci.device.title",
      summaryKey: "sci.device.summary",
      paragraphKeys: ["sci.device.p1", "sci.device.p2", "sci.device.p3"],
      accentClass: "from-[var(--color-forest)]/10 to-[var(--color-gold-light)]/10",
      iconClass: "text-[var(--color-forest)]",
      iconPath:
        "M6.429 15.75L17.57 4.608M6.43 4.608l11.14 11.142M3.75 12h16.5",
    },
    {
      id: "brainhealth",
      step: "05",
      titleKey: "sci.brainhealth.title",
      summaryKey: "sci.brainhealth.summary",
      accentClass: "from-[var(--color-gold)]/10 to-[var(--color-gold-light)]/10",
      iconClass: "text-[var(--color-gold)]",
      iconPath:
        "M12 3.75a8.25 8.25 0 00-5.842 14.074c.429.43.842 1.062.842 1.676V21h10v-1.5c0-.614.413-1.246.842-1.676A8.25 8.25 0 0012 3.75z",
    },
  ];

  const hypothesisSteps = [
    {
      titleKey: "sci.hypothesis.step1.title",
      bodyKey: "sci.hypothesis.step1.body",
    },
    {
      titleKey: "sci.hypothesis.step2.title",
      bodyKey: "sci.hypothesis.step2.body",
    },
    {
      titleKey: "sci.hypothesis.step3.title",
      bodyKey: "sci.hypothesis.step3.body",
    },
    {
      titleKey: "sci.hypothesis.step4.title",
      bodyKey: "sci.hypothesis.step4.body",
    },
  ];

  const references = [
    {
      id: 1,
      citation:
        "Fitzgerald PJ, Watson BO. Gamma oscillations as a biomarker for major depression: an emerging topic. Translational Psychiatry. 2018.",
      href: "https://doi.org/10.1038/s41398-018-0239-y",
    },
    {
      id: 2,
      citation:
        "Sharpe RLS, Mahmud M, Kaiser MS, Chen J. Gamma entrainment frequency affects mood, memory and cognition: an exploratory pilot study. Brain Informatics. 2020.",
      href: "https://doi.org/10.1186/s40708-020-00119-9",
    },
    {
      id: 3,
      citation:
        "Sun X, Dias L, Peng C, et al. 40 Hz light flickering facilitates the glymphatic flow via adenosine signaling in mice. Cell Discovery. 2024.",
      href: "https://doi.org/10.1038/s41421-024-00701-z",
    },
    {
      id: 4,
      citation:
        "Murdock MH, Yang CY, Sun N, et al. Multisensory gamma stimulation promotes glymphatic clearance of amyloid. Nature. 2024.",
      href: "https://doi.org/10.1038/s41586-024-07132-6",
    },
    {
      id: 5,
      citation:
        "Wang C, Lin C, Zhao Y, et al. 40-Hz optogenetic stimulation rescues functional synaptic plasticity after stroke. Cell Reports. 2023.",
      href: "https://doi.org/10.1016/j.celrep.2023.113475",
    },
    {
      id: 6,
      citation:
        "Yin YY, Li YF. Role of neural oscillations in depression: highlights on gamma oscillations. Translational Psychiatry. 2026. Article in press.",
      href: "https://doi.org/10.1038/s41398-026-03991-x",
    },
    {
      id: 7,
      citation:
        "Yao J, Zhang L, Zhang C, et al. Rhythmic gamma frequency light flickering ameliorates stress-related behaviors and cognitive deficits by modulating neuroinflammatory response through IL-12-mediated cytokine production in chronic stress-induced mice. Brain, Behavior, and Immunity. 2024.",
      href: "https://doi.org/10.1016/j.bbi.2024.07.022",
    },
  ];

  const activeSectionData =
    sections.find((section) => section.id === activeSection) ?? sections[0];

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
          <div className="max-w-3xl space-y-5">
            <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed">
              {t("sci.intro.p1")}
            </p>
            <p className="text-[var(--muted)] body-text">
              {t("sci.intro.p2")}
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--color-sage)]/15 bg-[var(--color-cream)] p-8 md:p-10">
            <div className="max-w-3xl mb-6">
              {optionalT("sci.animation.eyebrow") ? (
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest)]/70 mb-3">
                  {optionalT("sci.animation.eyebrow")}
                </p>
              ) : null}
              <h3 className="text-2xl md:text-3xl font-light heading-serif text-[var(--foreground)] mb-4">
                {t("sci.animation.title")}
              </h3>
              <p className="text-[var(--muted)] body-text">
                {t("sci.animation.body")}
              </p>
            </div>
            <GammaAnimation
              leftLabel={t("sci.animation.left")}
              rightLabel={t("sci.animation.right")}
            />
          </div>

          <div className="border-y border-[var(--color-sage)]/15 py-14 md:py-18">
            <div className="max-w-3xl mb-10">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest)]/70 mb-3">
                {t("sci.hypothesis.eyebrow")}
              </p>
              <h3 className="text-2xl md:text-3xl font-light heading-serif text-[var(--foreground)] mb-4">
                {t("sci.hypothesis.title")}
              </h3>
              <p className="text-[var(--muted)] body-text">
                {t("sci.hypothesis.body")}
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-[var(--color-sage)]/20 via-[var(--color-sage)]/35 to-[var(--color-sage)]/20" />
              <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                {hypothesisSteps.map((step, index) => (
                  <li key={step.titleKey} className="relative">
                    <div className="flex items-center gap-3 md:gap-0 md:flex-col md:items-start mb-3 md:mb-4">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-[var(--color-sage)]/20 flex items-center justify-center shadow-sm">
                        <span className="text-xs font-medium tracking-wide text-[var(--color-forest)]">
                          {["I", "II", "III", "IV"][index]}
                        </span>
                      </div>
                      {index < 3 && (
                        <div className="md:hidden flex-1 h-px bg-[var(--color-sage)]/20" />
                      )}
                    </div>
                    <h4 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wide mb-2">
                      {t(step.titleKey)}
                    </h4>
                    <p className="text-sm leading-relaxed text-[var(--muted)]">
                      {t(step.bodyKey)}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-forest)]/12 bg-[var(--color-forest)]/[0.03] p-8 md:p-10">
            <div className="max-w-4xl mb-8">
              {optionalT("sci.eeg.eyebrow") ? (
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest)]/70 mb-3">
                  {optionalT("sci.eeg.eyebrow")}
                </p>
              ) : null}
              <h3 className="text-2xl md:text-3xl font-light heading-serif text-[var(--foreground)] mb-4">
                {t("sci.eeg.title")}
              </h3>
              <p className="text-[var(--muted)] body-text">
                {t("sci.eeg.body")}
              </p>
            </div>

            <div className="grid md:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.9fr)] gap-10 items-start">
              <div className="space-y-5">
                <p className="text-[var(--muted)] body-text">
                  {t("sci.eeg.p1")}
                </p>
                <p className="text-[var(--muted)] body-text">
                  {t("sci.eeg.p2")}
                </p>
                <p className="text-sm leading-7 text-[var(--muted)] border-t border-[var(--color-forest)]/10 pt-5">
                  {t("sci.eeg.note")}
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--color-forest)]/10 bg-white/80 px-6 py-3">
                <div className="py-4 border-b border-[var(--color-forest)]/10 last:border-b-0">
                  <h4 className="text-base font-medium text-[var(--foreground)] mb-2">
                    {t("sci.eeg.card1.title")}
                  </h4>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {t("sci.eeg.card1.body")}
                  </p>
                </div>
                <div className="py-4 border-b border-[var(--color-forest)]/10 last:border-b-0">
                  <h4 className="text-base font-medium text-[var(--foreground)] mb-2">
                    {t("sci.eeg.card2.title")}
                  </h4>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {t("sci.eeg.card2.body")}
                  </p>
                </div>
                <div className="py-4">
                  <h4 className="text-base font-medium text-[var(--foreground)] mb-2">
                    {t("sci.eeg.card3.title")}
                  </h4>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {t("sci.eeg.card3.body")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="max-w-3xl">
              {optionalT("sci.disclosure.eyebrow") ? (
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest)]/70 mb-3">
                  {optionalT("sci.disclosure.eyebrow")}
                </p>
              ) : null}
              <h3 className="text-2xl md:text-3xl font-light heading-serif text-[var(--foreground)] mb-4">
                {t("sci.disclosure.title")}
              </h3>
              <p className="text-[var(--muted)] body-text">
                {t("sci.disclosure.body")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section) => {
                const isActive = section.id === activeSection;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    aria-pressed={isActive}
                    aria-controls={`science-section-${section.id}`}
                    className={`group text-left rounded-2xl border p-5 transition-all duration-300 ${
                      isActive
                        ? "border-[var(--color-forest)]/25 bg-[var(--color-sage)]/8 shadow-[0_12px_32px_rgba(15,31,19,0.08)]"
                        : "border-[var(--color-sage)]/12 bg-white hover:border-[var(--color-forest)]/18 hover:bg-[var(--color-sage)]/4"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest)]/55">
                        {section.step}
                      </span>
                      {isActive ? (
                        <span className="flex items-center justify-center w-5 h-5" aria-label="Active">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="9" cy="9" r="8" stroke="var(--color-forest)" strokeWidth="1.25" fill="none" />
                            <circle cx="9" cy="9" r="4" fill="var(--color-forest)" />
                          </svg>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center w-5 h-5 opacity-40 group-hover:opacity-70 transition-opacity" aria-label="Open layer">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="9" cy="9" r="8" stroke="var(--color-stone)" strokeWidth="1.25" />
                            <path d="M7.5 6l3 3-3 3" stroke="var(--color-stone)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg md:text-xl heading-serif text-[var(--foreground)] mb-2">
                      {t(section.titleKey)}
                    </h4>
                    <p className="text-sm leading-6 text-[var(--muted)]">
                      {t(section.summaryKey)}
                    </p>
                  </button>
                );
              })}
            </div>

            <div
              id={`science-section-${activeSectionData.id}`}
              className="rounded-3xl border border-[var(--color-sage)]/15 bg-white p-8 md:p-10 animate-fade-in-up"
              key={activeSectionData.id}
            >
              <div className="grid md:grid-cols-5 gap-8 items-start">
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeSectionData.accentClass} flex items-center justify-center`}
                  >
                    <svg
                      className={`w-8 h-8 ${activeSectionData.iconClass}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={activeSectionData.iconPath}
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:col-span-4">
                  {activeSectionData.id === "brainhealth" ? (
                    <div>
                      {optionalT("sci.brainhealth.eyebrow") ? (
                        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest)]/70 mb-3">
                          {optionalT("sci.brainhealth.eyebrow")}
                        </p>
                      ) : null}
                      <h3 className="text-xl md:text-2xl font-light mb-4 heading-serif text-[var(--foreground)]">
                        {t("sci.brainhealth.title")}
                      </h3>
                      <p className="text-[var(--muted)] body-text mb-6">
                        {t("sci.brainhealth.intro")}
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="rounded-2xl border border-[var(--color-gold)]/10 bg-[var(--color-gold-light)]/5 p-5">
                          <h4 className="text-base font-medium text-[var(--foreground)] mb-2">
                            {t("sci.brainhealth.card1.title")}
                          </h4>
                          <p className="text-sm leading-6 text-[var(--muted)]">
                            {t("sci.brainhealth.card1.body")}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-[var(--color-gold)]/10 bg-[var(--color-gold-light)]/5 p-5">
                          <h4 className="text-base font-medium text-[var(--foreground)] mb-2">
                            {t("sci.brainhealth.card2.title")}
                          </h4>
                          <p className="text-sm leading-6 text-[var(--muted)]">
                            {t("sci.brainhealth.card2.body")}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-[var(--color-gold)]/10 bg-[var(--color-gold-light)]/5 p-5">
                          <h4 className="text-base font-medium text-[var(--foreground)] mb-2">
                            {t("sci.brainhealth.card3.title")}
                          </h4>
                          <p className="text-sm leading-6 text-[var(--muted)]">
                            {t("sci.brainhealth.card3.body")}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-[var(--muted)]">
                        {t("sci.brainhealth.note")}
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest)]/70 mb-3">
                        {t("sci.disclosure.detailLabel")}
                      </p>
                      <h3 className="text-xl md:text-2xl font-light mb-4 heading-serif text-[var(--foreground)]">
                        {t(activeSectionData.titleKey)}
                      </h3>
                      <div className="space-y-3">
                        {activeSectionData.paragraphKeys?.map((paragraphKey) => (
                          <p key={paragraphKey} className="text-[var(--muted)] body-text">
                            {t(paragraphKey)}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--color-sage)]/15 bg-[var(--color-cream)] p-8 md:p-10">
            <div className="max-w-3xl mb-2">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-forest)]/70 mb-3">
                {t("sci.references.eyebrow")}
              </p>
            </div>

            <ol className="space-y-4">
              {references.map((reference) => (
                <li
                  key={reference.id}
                  className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-7 text-[var(--muted)]"
                >
                  <span className="text-[var(--color-forest)] font-medium">
                    [{reference.id}]
                  </span>
                  <span>
                    {reference.citation}{" "}
                    <a
                      href={reference.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-forest)] hover:text-[var(--color-sage)] transition-colors"
                    >
                      DOI
                    </a>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="pt-10 border-t border-[var(--color-sage)]/15">
            <p className="text-[var(--muted)] text-sm mb-4">{t("science.cta.text")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-forest)] hover:text-[var(--color-sage)] transition-colors"
              >
                {t("nav.technology")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/study"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-forest)] hover:text-[var(--color-sage)] transition-colors"
              >
                {t("science.cta.button")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
