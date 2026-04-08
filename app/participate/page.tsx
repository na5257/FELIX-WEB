"use client";

import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";

export default function ParticipatePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[var(--background)]">
      <PageHeader
        tag={t("elig.label")}
        title={t("elig.title")}
        subtitle={t("elig.intro")}
      />

      {/* Eligibility */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Inclusion */}
            <div className="card-nature p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--color-leaf)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-leaf)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[var(--color-leaf)]">{t("elig.yes.title")}</h3>
              </div>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <span className="text-[var(--color-leaf)] mt-0.5 text-sm font-medium">+</span>
                    <span className="text-sm text-[var(--muted)]">{t(`elig.yes.item${n}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusion */}
            <div className="card-nature p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-red-400">{t("elig.no.title")}</h3>
              </div>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 text-sm font-medium">&minus;</span>
                    <span className="text-sm text-[var(--muted)]">{t(`elig.no.item${n}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-[var(--muted)] text-sm italic">{t("elig.note")}</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-28 gradient-sage leaf-texture">
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--color-sage)] uppercase tracking-[0.3em] text-xs mb-4">{t("contact.label")}</p>
            <h2 className="text-3xl md:text-4xl text-[var(--foreground)] mb-6 heading-serif">{t("contact.title")}</h2>
            <div className="branch-divider" />
            <p className="text-[var(--muted)] body-text max-w-2xl mx-auto">{t("contact.intro")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="card-nature p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-forest)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-forest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] text-sm mb-1">{t("contact.location")}</h3>
                    <p className="text-sm text-[var(--muted)]">{t("contact.location.value")}</p>
                  </div>
                </div>
              </div>

              <div className="card-nature p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-sage)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-sage)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] text-sm mb-1">{t("contact.registration")}</h3>
                    <p className="text-sm text-[var(--muted)]">
                      <a href="https://clinicaltrials.gov/ct2/show/NCT05680220" target="_blank" rel="noopener noreferrer" className="text-[var(--color-sage)] hover:underline">
                        {t("contact.registration.value")}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-nature p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-leaf)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-leaf)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-[var(--foreground)] text-sm mb-1">{t("contact.email")}</h3>
                    <p className="text-sm">
                      <a href="mailto:nikolas.johansen.aasheim@regionh.dk" className="text-[var(--color-sage)] hover:underline">
                        nikolas.johansen.aasheim@regionh.dk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
