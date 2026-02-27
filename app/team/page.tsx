"use client";

import teamData from "../data/team.json";
import { useLanguage } from "../contexts/LanguageContext";
import PageHeader from "../components/PageHeader";

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[var(--background)]">
      <PageHeader
        tag={t("team.label")}
        title={t("team.title")}
        subtitle={t("team.intro")}
      />

      {/* Team grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {teamData.team.map((member) => (
              <div key={member.id} className="card-nature p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-light text-white heading-serif">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-[var(--color-gold)] mb-0.5">{member.role}</p>
                    <h3 className="text-base font-medium text-[var(--foreground)] mb-0.5">{member.name}</h3>
                    <p className="text-xs text-[var(--muted)] mb-3">{member.title}</p>
                    <p className="text-sm text-[var(--muted)] body-text mb-3">{member.bio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-[var(--surface-warm)] rounded-full text-[var(--muted)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 gradient-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[var(--color-sage)] uppercase tracking-[0.3em] text-xs mb-6">{t("team.affiliations.label")}</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[var(--muted)]">
            <span>Psychiatric Centre Copenhagen</span>
            <span className="text-[var(--color-sage)]/30">|</span>
            <span>Technical University of Denmark</span>
            <span className="text-[var(--color-sage)]/30">|</span>
            <span>OptoCeutics ApS</span>
            <span className="text-[var(--color-sage)]/30">|</span>
            <span>Copenhagen University Hospital</span>
          </div>
        </div>
      </section>
    </div>
  );
}
