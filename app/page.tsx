"use client";

import { useState } from "react";
import teamData from "./data/team.json";
import { useLanguage } from "./contexts/LanguageContext";

// ============================================
// TREE OF THOUGHTS: Title Options
// ============================================

/**
 * OPTION A: Informativt og Formelt
 * "CLARA Forsøget: Et Randomiseret, Placebokontrolleret Klinisk Forsøg 
 *  der Udprøver Neurostimulering mod ADHD hos Voksne"
 * 
 * Pros:
 * - Professionel og akademisk tone
 * - Beskriver præcist studiets design
 * - Signalerer seriøsitet og videnskabelig rigor
 * 
 * Cons:
 * - Lang og kompleks - kan overvælde personer med ADHD
 * - "Placebokontrolleret" kan skræmme potentielle deltagere
 * - Mangler emotionel appel
 * 
 * OPTION B: Balanceret og Tilgængelig
 * "CLARA Forsøget: Ny Lysterapi mod ADHD"
 * Undertitel: "Et videnskabeligt studie af innovativ behandling for voksne"
 * 
 * Pros:
 * - Kort og let at huske
 * - "Lysterapi" er konkret og forståeligt
 * - Balancerer videnskab med tilgængelighed
 * - Undertitel giver ekstra kontekst
 * 
 * Cons:
 * - Mindre detaljeret om studiets design
 * - Kan virke for simpelt for nogle
 * 
 * OPTION C: Emotionel og Motiverende
 * "CLARA Forsøget: Oplev en Ny Vej til Bedre Fokus"
 * Undertitel: "Deltag i banebrydende forskning i lysterapi for voksne med ADHD"
 * 
 * Pros:
 * - Emotionelt engagerende
 * - Fokuserer på benefit (bedre fokus)
 * - Inviterende og motiverende
 * 
 * Cons:
 * - Kan virke for marketingsorienteret
 * - Risikerer at miste troværdighed
 * - Personer med ADHD kan være skeptiske over for "løfter"
 */

// ============================================
// CHAIN OF THOUGHTS: Title Selection
// ============================================

/**
 * Analyse af målgruppe:
 * - Voksne med ADHD (18-65 år)
 * - Ofte skeptiske pga. mange "mirakkelkure"
 * - Værdsætter ærlighed og konkret information
 * - Kan have svært ved at læse lange tekster
 * - Søger håb, men vil ikke manipuleres
 * 
 * Vurdering:
 * 1. Option A er for kompleks og kan skræmme deltagere
 * 2. Option C er for marketingsorienteret og risikerer troværdighed
 * 3. Option B balancerer professionalisme med tilgængelighed
 * 
 * BESLUTNING: Option B med elementer fra C
 * - Kort hovedtitel: "CLARA Forsøget"
 * - Klar undertitel der nævner lysterapi og ADHD
 * - Emotionel hook i beskrivelsen (ikke titlen)
 * - Videnskabelig tone bevares i body text
 */

// ============================================
// TREE OF THOUGHTS: Content Strategy
// ============================================

/**
 * OPTION A: Klinisk/Medicinsk Tilgang
 * - Fokus på studiedesign og videnskabelig metodik
 * - Detaljerede inklusionskriterier
 * - Neutral, objektiv tone
 * 
 * Pros: Troværdig, professionel
 * Cons: Kan virke koldt, svært tilgængeligt for lægfolk
 * 
 * OPTION B: Patient-Centreret Tilgang
 * - Fokus på deltagerens oplevelse og fordele
 * - Tydelige forventninger og tidslinjer
 * - Empatisk tone der anerkender ADHD-udfordringer
 * - FAQ-lignende struktur
 * 
 * Pros: Relaterbar, reducerer angst, lettere at scanne
 * Cons: Risikerer at mangle videnskabelig dybde
 * 
 * OPTION C: Hybrid Tilgang
 * - Åbner med empati og forståelse
 * - Kort, scanbar information med bullet points
 * - Videnskabelige detaljer tilgængelige men ikke overvældende
 * - Klar CTA (call-to-action) med lav forpligtelse
 * 
 * Pros: Balancerer alle behov
 * Cons: Kræver omhyggelig eksekvering
 */

// ============================================
// CHAIN OF THOUGHTS: Content Selection
// ============================================

/**
 * ADHD-venligt design principper:
 * 1. Korte afsnit og bullet points
 * 2. Visuel hierarki med tydelige overskrifter
 * 3. Konkrete tal og tidsrammer
 * 4. Ærlig kommunikation om hvad studiet indebærer
 * 5. Lav-risiko første skridt (interesseformular, ikke forpligtelse)
 * 
 * BESLUTNING: Option C (Hybrid) med fokus på:
 * - Anerkendelse af ADHD-udfordringer i åbning
 * - Konkret "hvad får du ud af det" sektion
 * - Scanbar information med ikoner
 * - Tidslinjer og forventningsafstemning
 * - Ærlig kommunikation om placebo-kontrol
 */

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    diagnosis: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--muted)]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </div>
            <span className="font-medium tracking-wide text-[var(--foreground)]">{t('hero.title')}</span>
          </a>
          
          {/* Mobile Language Switcher */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLanguage('da')}
              className={`transition-all ${language === 'da' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}
              title="Dansk"
            >
              <span className="text-2xl">🇩🇰</span>
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`transition-all ${language === 'en' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}
              title="English"
            >
              <span className="text-2xl">🇬🇧</span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">{t('nav.about')}</a>
            <a href="#hvordan" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">{t('nav.how')}</a>
            <a href="#team" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">{t('nav.team')}</a>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-[var(--muted)]/20 pl-6">
              <button
                onClick={() => setLanguage('da')}
                className={`transition-all ${language === 'da' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}
                title="Dansk"
              >
                <span className="text-2xl">🇩🇰</span>
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-all ${language === 'en' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}
                title="English"
              >
                <span className="text-2xl">🇬🇧</span>
              </button>
            </div>
            
            <a href="#enroll" className="px-5 py-2 bg-[var(--accent)] text-white rounded-full text-sm hover:bg-[var(--accent-light)] transition-colors">
              {t('nav.enroll')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-20 washi-texture gradient-warm">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="animate-fade-in-up">
            <p className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs mb-6">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[var(--foreground)] mb-4 animate-fade-in-up animation-delay-100"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            <span className="brush-accent">CLARA</span> {language === 'da' ? 'Forsøget' : 'Study'}
          </h1>
          
          <p 
            className="text-xl md:text-2xl text-[var(--success)] mb-8 animate-fade-in-up animation-delay-200"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {t('hero.headline')}
          </p>
          
          <div className="zen-divider animate-fade-in-up animation-delay-200" />
          
          <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-6 jp-text animate-fade-in-up animation-delay-300">
            {t('hero.intro')}
          </p>

          <p className="text-base text-[var(--foreground)]/70 max-w-xl mx-auto mb-12 animate-fade-in-up animation-delay-300">
            {t('hero.contribution')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a
              href="#enroll"
              className="px-8 py-4 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-light)] transition-all duration-300 hover-lift"
            >
              {t('hero.cta.primary')}
            </a>
            <a
              href="#hvordan"
              className="px-8 py-4 border border-[var(--muted)]/30 text-[var(--foreground)] rounded-full hover:border-[var(--accent)] hover:text-[var(--success)] transition-all duration-300"
            >
              {t('hero.cta.secondary')}
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* What is this about - Short intro */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--success)] uppercase tracking-[0.2em] text-xs mb-3">
                {t('what.label')}
              </p>
              <h2 
                className="text-2xl md:text-3xl font-light text-[var(--foreground)] mb-6"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {t('what.title')}
              </h2>
              <p className="text-[var(--muted)] mb-4">
                {t('what.p1')} <strong>{t('what.p1.bold')}</strong> {t('what.p1.cont')}
              </p>
              <p className="text-[var(--muted)] mb-4">
                {t('what.p2')} <strong>{t('what.p2.bold')}</strong> {t('what.p2.cont')}
              </p>
              <p className="text-[var(--muted)]">
                {t('what.p3')}
              </p>
            </div>
            <div className="bg-[var(--background)] p-8 rounded-2xl">
              <h3 className="font-medium mb-4 text-[var(--foreground)]">{t('what.facts.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[var(--muted)] text-sm"><strong>{t('what.facts.duration')}</strong> {t('what.facts.duration.value')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[var(--muted)] text-sm"><strong>{t('what.facts.time')}</strong> {t('what.facts.time.value')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[var(--muted)] text-sm"><strong>{t('what.facts.visits')}</strong> {t('what.facts.visits.value')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[var(--muted)] text-sm"><strong>{t('what.facts.price')}</strong> {t('what.facts.price.value')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[var(--success)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[var(--muted)] text-sm"><strong>{t('what.facts.age')}</strong> {t('what.facts.age.value')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Device Section */}
      <section className="py-20 gradient-cool">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[var(--success)] uppercase tracking-[0.2em] text-xs mb-3">
                {t('device.label')}
              </p>
              <h2 
                className="text-2xl md:text-3xl font-light text-[var(--foreground)] mb-6"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {t('device.title')}
              </h2>
              <p className="text-[var(--muted)] mb-4">
                {t('device.p1')} <strong>Optoceutics</strong> {t('device.p1.cont')}
                <em> {t('device.p1.tech')}</em>{t('device.p1.cont2')}
              </p>
              <p className="text-[var(--muted)] mb-4">
                {t('device.p2')} <strong>{t('device.p2.bold')}</strong> {t('device.p2.cont')}
              </p>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('device.feature1')}
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('device.feature2')}
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('device.feature3')}
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              {/* Device image */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <img 
                  src="/images/evy-light-device.jpg" 
                  alt="EVY LIGHT® device - gamma neurostimulation via light"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-xs text-[var(--muted)] text-center mt-3">
                  {t('device.caption1')} <a href="https://optoceutics.com" target="_blank" rel="noopener noreferrer" className="text-[var(--success)] hover:underline">Optoceutics</a>
                </p>
              </div>
              {/* Person using device */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="/images/evy-light-in-use.jpg" 
                    alt="Person using the EVY LIGHT® device at home"
                    className="w-full h-auto rounded-lg"
                    style={{ filter: 'brightness(1.05) contrast(1.02)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
                <p className="text-xs text-[var(--muted)] text-center mt-3">
                  {t('device.caption2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="hvordan" className="py-24 md:py-32 gradient-cool">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs mb-4">
              {t('how.label')}
            </p>
            <h2 
              className="text-3xl md:text-5xl font-light text-[var(--foreground)] mb-6"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              {t('how.title')}
            </h2>
            <div className="zen-divider" />
          </div>

          {/* Timeline Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {[
              { 
                step: "1", 
                title: t('how.step1.title'), 
                desc: t('how.step1.desc'),
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              },
              { 
                step: "2", 
                title: t('how.step2.title'), 
                desc: t('how.step2.desc'),
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              { 
                step: "3", 
                title: t('how.step3.title'), 
                desc: t('how.step3.desc'),
                icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              },
              { 
                step: "4", 
                title: t('how.step4.title'), 
                desc: t('how.step4.desc'),
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-sm hover-lift h-full">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center font-medium mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-medium text-[var(--foreground)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 text-[var(--muted)]/30">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* What you get / Important info boxes */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--bamboo)]/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-[var(--foreground)]">{t('benefits.title')}</h3>
              <ul className="text-[var(--muted)] text-sm space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--success)] mt-0.5">✓</span>
                  {t('benefits.item1')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--success)] mt-0.5">✓</span>
                  {t('benefits.item2')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--success)] mt-0.5">✓</span>
                  {t('benefits.item3')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--success)] mt-0.5">✓</span>
                  {t('benefits.item4')}
                </li>
              </ul>
            </div>

            {/* Honest info about study design */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--bamboo)]/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4 text-[var(--foreground)]">{t('important.title')}</h3>
              <p className="text-[var(--muted)] text-sm mb-4">
                {t('important.intro')} <strong>{t('important.intro.bold')}</strong> {t('important.intro.cont')}
              </p>
              <ul className="text-[var(--muted)] text-sm space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--success)] mt-0.5">•</span>
                  {t('important.item1')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--success)] mt-0.5">•</span>
                  {t('important.item2')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--success)] mt-0.5">•</span>
                  {t('important.item3')}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--success)] mt-0.5">•</span>
                  {t('important.item4')}
                </li>
              </ul>
              <p className="text-[var(--muted)] text-sm mt-4 italic">
                {t('important.note')}
              </p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm">
            <h3 
              className="text-2xl md:text-3xl font-light text-center mb-8"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              {t('eligibility.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-[var(--success)] mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {t('eligibility.can.title')}
                </h4>
                <ul className="text-[var(--muted)] text-sm space-y-2">
                  <li>• {t('eligibility.can.item1')}</li>
                  <li>• {t('eligibility.can.item2')}</li>
                  <li>• {t('eligibility.can.item3')}</li>
                  <li>• {t('eligibility.can.item4')}</li>
                  <li>• {t('eligibility.can.item5')}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-400 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {t('eligibility.cannot.title')}
                </h4>
                <ul className="text-[var(--muted)] text-sm space-y-2">
                  <li>• {t('eligibility.cannot.item1')}</li>
                  <li>• {t('eligibility.cannot.item2')}</li>
                  <li>• {t('eligibility.cannot.item3')}</li>
                  <li>• {t('eligibility.cannot.item4')}</li>
                  <li>• {t('eligibility.cannot.item5')}</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-[var(--muted)] text-sm mt-8">
              {t('eligibility.note')} <strong>{t('eligibility.note.bold')}</strong> {t('eligibility.note.cont')}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 md:py-32 washi-texture">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs mb-4">
              {t('team.label')}
            </p>
            <h2 
              className="text-3xl md:text-5xl font-light text-[var(--foreground)] mb-6"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              {t('team.title')}
            </h2>
            <div className="zen-divider" />
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              {t('team.intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamData.team.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover-lift group"
              >
                {/* Photo or Avatar with initials */}
                <div className="aspect-square relative overflow-hidden">
                  {member.hasImage ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] flex items-center justify-center">
                      <span 
                        className="text-7xl font-light text-white/90"
                        style={{ fontFamily: 'var(--font-cormorant), serif' }}
                      >
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-[var(--success)] mb-1">{member.role}</p>
                  <h3 className="text-xl font-medium text-[var(--foreground)] mb-1">{member.name}</h3>
                  <p className="text-sm text-[var(--muted)] mb-4">{member.title}</p>
                  
                  <p className="text-sm text-[var(--muted)] jp-text mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.slice(0, 3).map((skill, i) => (
                      <span 
                        key={i}
                        className="text-xs px-3 py-1 bg-[var(--background)] rounded-full text-[var(--muted)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--muted)]/10">
                    <span className="text-xs text-[var(--muted)]">{member.publications} {t('team.publications')}</span>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-[var(--success)] hover:text-[var(--accent-light)] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section id="enroll" className="py-24 md:py-32 gradient-cool">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[var(--muted)] uppercase tracking-[0.3em] text-xs mb-4">
              {t('enroll.label')}
            </p>
            <h2 
              className="text-3xl md:text-5xl font-light text-[var(--foreground)] mb-6"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              {t('enroll.title')}
            </h2>
            <div className="zen-divider" />
            <p className="text-[var(--muted)]">
              {t('enroll.intro')}
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-white p-12 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--success)]/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-light mb-4"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {t('enroll.success.title')}
              </h3>
              <p className="text-[var(--muted)] mb-4">
                {t('enroll.success.p1')}
              </p>
              <p className="text-sm text-[var(--muted)]">
                {t('enroll.success.p2')} <a href="mailto:clara@sdu.dk" className="text-[var(--success)] hover:underline">clara@sdu.dk</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
              {/* Form intro */}
              <p className="text-sm text-[var(--muted)] text-center mb-8">
                {t('enroll.form.disclaimer')}
              </p>

              <div className="space-y-8">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      onFocus={() => setActiveField('firstName')}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-[var(--muted)]/20 focus:border-[var(--accent)] transition-colors peer placeholder-transparent"
                      placeholder={t('enroll.form.firstName')}
                    />
                    <label 
                      htmlFor="firstName"
                      className={`absolute left-0 transition-all duration-300 pointer-events-none
                        ${formData.firstName || activeField === 'firstName' 
                          ? 'top-0 text-xs text-[var(--success)]' 
                          : 'top-4 text-[var(--muted)]'}`}
                    >
                      {t('enroll.form.firstName')}
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      onFocus={() => setActiveField('lastName')}
                      onBlur={() => setActiveField(null)}
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-[var(--muted)]/20 focus:border-[var(--accent)] transition-colors peer placeholder-transparent"
                      placeholder={t('enroll.form.lastName')}
                    />
                    <label 
                      htmlFor="lastName"
                      className={`absolute left-0 transition-all duration-300 pointer-events-none
                        ${formData.lastName || activeField === 'lastName' 
                          ? 'top-0 text-xs text-[var(--success)]' 
                          : 'top-4 text-[var(--muted)]'}`}
                    >
                      {t('enroll.form.lastName')}
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-[var(--muted)]/20 focus:border-[var(--accent)] transition-colors peer placeholder-transparent"
                    placeholder={t('enroll.form.email')}
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                      ${formData.email || activeField === 'email' 
                        ? 'top-0 text-xs text-[var(--success)]' 
                        : 'top-4 text-[var(--muted)]'}`}
                  >
                    {t('enroll.form.email')}
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-[var(--muted)]/20 focus:border-[var(--accent)] transition-colors peer placeholder-transparent"
                    placeholder={t('enroll.form.phone')}
                  />
                  <label 
                    htmlFor="phone"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                      ${formData.phone || activeField === 'phone' 
                        ? 'top-0 text-xs text-[var(--success)]' 
                        : 'top-4 text-[var(--muted)]'}`}
                  >
                    {t('enroll.form.phone')}
                  </label>
                </div>

                {/* Age */}
                <div className="relative">
                  <input
                    type="number"
                    name="age"
                    id="age"
                    min="18"
                    max="65"
                    value={formData.age}
                    onChange={handleChange}
                    onFocus={() => setActiveField('age')}
                    onBlur={() => setActiveField(null)}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-[var(--muted)]/20 focus:border-[var(--accent)] transition-colors peer placeholder-transparent"
                    placeholder={t('enroll.form.age')}
                  />
                  <label 
                    htmlFor="age"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                      ${formData.age || activeField === 'age' 
                        ? 'top-0 text-xs text-[var(--success)]' 
                        : 'top-4 text-[var(--muted)]'}`}
                  >
                    {t('enroll.form.age')}
                  </label>
                </div>

                {/* ADHD Diagnosis */}
                <div className="relative">
                  <label 
                    htmlFor="diagnosis"
                    className="block text-xs text-[var(--success)] mb-2"
                  >
                    {t('enroll.form.diagnosis')}
                  </label>
                  <div className="relative">
                    <select
                      name="diagnosis"
                      id="diagnosis"
                      value={formData.diagnosis}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-white border-0 border-b-2 border-[var(--muted)]/20 focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer text-[var(--foreground)]"
                    >
                      <option value="" className="text-[var(--muted)]">{t('enroll.form.diagnosis.placeholder')}</option>
                      <option value="diagnosed">{t('enroll.form.diagnosis.diagnosed')}</option>
                      <option value="suspected">{t('enroll.form.diagnosis.suspected')}</option>
                      <option value="process">{t('enroll.form.diagnosis.process')}</option>
                    </select>
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted)] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-[var(--muted)]/20 focus:border-[var(--accent)] transition-colors resize-none placeholder-transparent"
                    placeholder={t('enroll.form.message')}
                  />
                  <label 
                    htmlFor="message"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none
                      ${formData.message || activeField === 'message' 
                        ? 'top-0 text-xs text-[var(--success)]' 
                        : 'top-4 text-[var(--muted)]'}`}
                  >
                    {t('enroll.form.message')}
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--accent)] text-white rounded-full hover:bg-[var(--accent-light)] transition-all duration-300 hover-lift font-medium tracking-wide"
                >
                  {t('enroll.form.submit')}
                </button>

                <p className="text-xs text-[var(--muted)] text-center">
                  {t('enroll.form.privacy')}
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-[var(--muted)]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                </div>
                <span className="font-medium tracking-wide">{t('hero.title')}</span>
              </div>
              <p className="text-sm text-[var(--muted)] max-w-sm">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">{t('footer.shortcuts')}</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><a href="#about" className="hover:text-[var(--foreground)] transition-colors">{t('nav.about')}</a></li>
                <li><a href="#hvordan" className="hover:text-[var(--foreground)] transition-colors">{t('nav.how')}</a></li>
                <li><a href="#team" className="hover:text-[var(--foreground)] transition-colors">{t('nav.team')}</a></li>
                <li><a href="#enroll" className="hover:text-[var(--foreground)] transition-colors">{t('nav.enroll')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li>Syddansk Universitet</li>
                <li>Campusvej 55</li>
                <li>5230 Odense M</li>
                <li className="pt-2">
                  <a href="mailto:clara@sdu.dk" className="hover:text-[var(--foreground)] transition-colors">
                    clara@sdu.dk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="zen-divider" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-[var(--foreground)] transition-colors">{t('footer.data')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
