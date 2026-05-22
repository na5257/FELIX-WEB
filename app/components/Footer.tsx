"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-16 gradient-forest text-white/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[var(--color-gold-light)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              </div>
              <span className="font-medium tracking-wide text-white text-sm">FELIX</span>
            </div>
            <p className="text-sm text-white/50 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <p className="text-xs text-white/30 mt-4">
              {t("footer.approved")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-white/90 mb-4 text-sm">{t("footer.links")}</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-white/80 transition-colors">{t("nav.about")}</Link></li>
              <li><Link href="/science" className="hover:text-white/80 transition-colors">{t("nav.science")}</Link></li>
              <li><Link href="/study" className="hover:text-white/80 transition-colors">{t("nav.study")}</Link></li>

              <li><Link href="/team" className="hover:text-white/80 transition-colors">{t("nav.team")}</Link></li>
              <li>
                <a href="https://clinicaltrials.gov/ct2/show/NCT05680220" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">
                  ClinicalTrials.gov
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-white/90 mb-4 text-sm">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Psykiatrisk Center K&oslash;benhavn</li>
              <li>K&oslash;benhavns Universitetshospital</li>
              <li className="pt-2">
                <a href="mailto:nikolas.johansen.aasheim@regionh.dk" className="hover:text-white/80 transition-colors">
                  nikolas.johansen.aasheim@regionh.dk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/50 transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-white/50 transition-colors">{t("footer.data")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
