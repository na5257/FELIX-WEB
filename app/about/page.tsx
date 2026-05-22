"use client";

import Link from "next/link";
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

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6 text-[var(--muted)] body-text text-base md:text-lg leading-relaxed">
            <p>{t("bg.p1")}</p>
            <p>{t("bg.p2")}</p>
            <p>
              <a
                href="http://www.astrotechprojectmsca.eu/all-courses/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-forest)] hover:text-[var(--color-sage)] transition-colors"
              >
                {t("about.astrotech.link")}
              </a>
            </p>
            <p>{t("bg.p3")}</p>
          </div>

          <div className="mt-12 pt-10 border-t border-[var(--color-sage)]/15">
            <p className="text-[var(--muted)] text-sm mb-4">{t("about.cta.text")}</p>
            <Link
              href="/science"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-forest)] hover:text-[var(--color-sage)] transition-colors"
            >
              {t("about.cta.button")}
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
