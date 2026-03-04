"use client";

import Image from "next/image";
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

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {teamData.team.map((member) => (
            <article key={member.id} className="flex flex-col sm:flex-row gap-6 items-start">
              {member.hasImage ? (
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden flex-shrink-0 bg-[var(--color-ivory)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-light text-white heading-serif">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              )}

              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-1">{member.role}</p>
                <h3 className="text-xl text-[var(--foreground)] heading-serif mb-0.5">{member.name}</h3>
                <p className="text-xs text-[var(--muted)] mb-3">{member.title}</p>
                <p className="text-sm text-[var(--muted)] body-text leading-relaxed mb-3">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-[var(--surface-warm)] rounded-full text-[var(--muted)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
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
