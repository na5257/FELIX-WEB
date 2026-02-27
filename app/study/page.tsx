"use client";

import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";

export default function StudyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[var(--background)]">
      <PageHeader
        tag={t("design.label")}
        title={t("design.title")}
        subtitle={t("design.p1")}
      />

      {/* Study Design Cards */}
      <section className="py-20 md:py-28 gradient-warm leaf-texture">
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {[
              {
                title: t("design.active.title"),
                desc: t("design.active.desc"),
                icon: (
                  <svg className="w-6 h-6 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
              },
              {
                title: t("design.placebo.title"),
                desc: t("design.placebo.desc"),
                icon: (
                  <svg className="w-6 h-6 text-[var(--color-sage)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
              },
              {
                title: t("design.duration.title"),
                desc: t("design.duration.desc"),
                icon: (
                  <svg className="w-6 h-6 text-[var(--color-forest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: t("design.followup.title"),
                desc: t("design.followup.desc"),
                icon: (
                  <svg className="w-6 h-6 text-[var(--color-leaf)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="card-nature p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--surface-warm)] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-[var(--foreground)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* What We Measure */}
          <div className="text-center mb-12">
            <p className="text-[var(--color-sage)] uppercase tracking-[0.3em] text-xs mb-4">{t("measure.label")}</p>
            <h2 className="text-3xl md:text-4xl text-[var(--foreground)] mb-6 heading-serif">{t("measure.title")}</h2>
            <div className="branch-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="card-nature p-8 h-full bg-gradient-to-br from-[var(--color-forest)]/5 to-transparent">
              <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">{t("measure.primary.title")}</h3>
              <p className="text-sm text-[var(--muted)] body-text">{t("measure.primary.desc")}</p>
            </div>

            <div className="card-nature p-8 h-full">
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">{t("measure.secondary.title")}</h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-sage)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[var(--color-sage)]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--muted)]">{t(`measure.secondary.item${n}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-nature p-8 h-full">
              <div className="w-10 h-10 rounded-full bg-[var(--color-forest)]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[var(--color-forest)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">{t("measure.visits.title")}</h3>
              <p className="text-sm text-[var(--muted)] body-text">{t("measure.visits.desc")}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="text-center mb-12">
            <p className="text-[var(--color-sage)] uppercase tracking-[0.3em] text-xs mb-4">{t("timeline.label")}</p>
            <h2 className="text-3xl md:text-4xl text-[var(--foreground)] mb-6 heading-serif">{t("timeline.title")}</h2>
            <div className="branch-divider" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-sage)]/30 via-[var(--color-gold)]/30 to-[var(--color-sage)]/30 -translate-x-1/2" />

            {[1, 2, 3, 4, 5].map((n, i) => (
              <div key={n} className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="card-nature p-6 inline-block text-left">
                    <h3 className="font-medium text-[var(--foreground)] mb-1">{t(`timeline.step${n}.title`)}</h3>
                    <p className="text-sm text-[var(--muted)]">{t(`timeline.step${n}.desc`)}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white flex items-center justify-center text-sm font-medium z-10 shadow-lg">
                  {n}
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
