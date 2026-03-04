"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'da' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  da: {
    // Navigation
    'nav.about': 'Om Studiet',
    'nav.science': 'Videnskaben',
    'nav.participate': 'Deltagelse',
    'nav.team': 'Forskerne',
    'nav.contact': 'Kontakt',
    'nav.study': 'Studiedesign',

    // Home page cards
    'home.card.science': 'Lær om gamma-bølger, 40 Hz stimulering og den usynlige spektrale flimmer-teknologi.',
    'home.card.study': 'Forstå studiets opbygning, hvad vi måler, og hvordan tidsforløbet ser ud.',
    'home.card.participate': 'Se om du kan deltage, og find kontaktinformation.',
    'home.card.team': 'Mød forskerne bag FELIX-studiet.',
    'home.card.readmore': 'Læs mere',

    // About page
    'about.header.subtitle': 'Fra grundforskning i astrocytter til klinisk afprøvning af lysterapi mod depression.',
    'about.cta.text': 'Vil du vide mere om videnskaben bag studiet?',
    'about.cta.button': 'Videnskaben bag FELIX',

    // Science page
    'science.header.subtitle': 'Gamma-bølger, neurostimulering og usynlig spektral flimmer.',
    'science.cta.text': 'Se hvordan studiet er designet og hvad vi måler.',
    'science.cta.button': 'Se studiedesign',

    // Team page
    'team.affiliations.label': 'Tilknyttede Institutioner',

    // Hero
    'hero.tag': 'Klinisk Forsøg — Psykiatrisk Center København',
    'hero.title': 'FELIX Studiet',
    'hero.subtitle': 'Lys som ny vej til behandling af depression',
    'hero.description': 'Et randomiseret, dobbeltblindet klinisk forsøg, der undersøger om 40 Hz lysneurostimulering kan lindre symptomer på depression.',
    'hero.cta.learn': 'Læs mere om studiet',
    'hero.cta.participate': 'Kan du deltage?',
    'hero.registered': 'Registreret på ClinicalTrials.gov',
    'hero.registered.id': 'NCT05680220',

    // Background
    'bg.label': 'Baggrund',
    'bg.title': 'Om FELIX',
    'bg.p1': 'FELIX er en klinisk forskningsprotokol, der undersøger den kliniske effekt af 40 Hz gamma-neurostimulering leveret non-invasivt gennem pulserende lys til patienter med depression.',
    'bg.p2': 'Projektet udspringer af Horizon Europes Marie Skłodowska-Curie Actions-programmet under Astrotech-konsortiet, der blev etableret for at opnå en dybere forståelse af astrocytters funktion i hjernen. Denne grundforskning ledte til opdagelsen af, at gamma-frekvent lysstimulering kan påvirke neurale netværk på måder, der potentielt kan gavne patienter med affektive lidelser.',
    'bg.p3': 'Studiet gennemføres som et randomiseret, dobbeltblindet, placebokontrolleret forsøg ved Psykiatrisk Center København i samarbejde med Danmarks Tekniske Universitet og OptoCeutics ApS, der har udviklet den patenterede teknologi til usynlig spektral flimmer.',
    'bg.stat1.value': '60',
    'bg.stat1.label': 'Deltagere i forsøget',
    'bg.stat2.value': '6 uger',
    'bg.stat2.label': 'Daglig behandling i hjemmet',
    'bg.stat3.value': '40 Hz',
    'bg.stat3.label': 'Gamma-frekvens leveret via lys',

    // Science
    'sci.label': 'Videnskaben',
    'sci.title': 'Hvordan virker det?',
    'sci.gamma.title': 'Gamma-bølger og hjernen',
    'sci.gamma.p1': 'Gamma-bølger (30-80 Hz) er hurtige hjernerytmer, der er forbundet med højere kognitiv funktion, informationsbehandling og hukommelse. Forskning tyder på, at balancen mellem excitatorisk og inhibitorisk neurale aktivitet — som giver anledning til gamma-bølger — er forstyrret ved depression.',
    'sci.gamma.p2': 'Ved at stimulere hjernen med 40 Hz lys kan vi potentielt genopbygge denne balance og påvirke de neurale netværk, der er involveret i depressive symptomer.',
    'sci.device.title': 'Usynlig Spektral Flimmer',
    'sci.device.p1': 'I modsætning til traditionelt stroboskopisk lys bruger behandlingsenheden en patenteret teknologi, der veksler mellem to farve-kombinationer (cyan/rød og blå/gul). Denne hurtige skift er næsten usynlig for det menneskelige øje.',
    'sci.device.p2': 'Teknologien er udviklet af OptoCeutics og er designet til at minimere ubehag, samtidig med at den leverer præcis 40 Hz gamma-stimulering.',
    'sci.genus.title': 'GENUS — Gamma Entrainment Using Sensory Stimuli',
    'sci.genus.p1': 'Studiet bygger på GENUS-konceptet, hvor rytmisk sansestimulering bruges til at synkronisere hjernens aktivitet. Tidligere studier har vist, at denne tilgang kan reducere hjernesvind, forbedre kognitive funktioner og have neuroprotektive effekter hos patienter med Alzheimers sygdom.',
    'sci.genus.p2': 'FELIX-studiet er det første til at undersøge, om disse lovende resultater også gælder for depression.',

    // Study Design
    'design.label': 'Studiedesign',
    'design.title': 'Sådan er studiet opbygget',
    'design.p1': 'FELIX er et randomiseret, dobbeltblindet, placebokontrolleret klinisk forsøg. Det betyder, at hverken deltagere eller forskere ved, hvem der modtager aktiv behandling og hvem der modtager placebo.',
    'design.active.title': 'Aktiv gruppe',
    'design.active.desc': '40 Hz maskeret flimrende lys',
    'design.placebo.title': 'Placebogruppe',
    'design.placebo.desc': 'Kontinuerligt lys matchet i farvetemperatur og lysstyrke',
    'design.duration.title': 'Behandlingsperiode',
    'design.duration.desc': '6 uger med daglig lysterapi i 1 time hjemme',
    'design.followup.title': 'Opfølgning',
    'design.followup.desc': 'Afsluttende besøg i uge 8 for at vurdere varige effekter',

    // What We Measure
    'measure.label': 'Hvad Måler Vi',
    'measure.title': 'Studiets målinger og endepunkter',
    'measure.primary.title': 'Primært endepunkt',
    'measure.primary.desc': 'Ændring i depressionssværhedsgrad målt ved Hamilton Depression Rating Scale (HAM-D6) fra baseline til uge 6.',
    'measure.secondary.title': 'Sekundære endepunkter',
    'measure.secondary.item1': 'Selvvurderet depression (MDI)',
    'measure.secondary.item2': 'Neurokognitiv funktion',
    'measure.secondary.item3': 'Søvnkvalitet (PSQI)',
    'measure.secondary.item4': 'Livskvalitet (WHO-5)',
    'measure.secondary.item5': 'EEG-ændringer',
    'measure.visits.title': 'Studiebesøg',
    'measure.visits.desc': '5 besøg med kliniske vurderinger: baseline, dag 7, dag 21, dag 42 og dag 56.',

    // Eligibility
    'elig.label': 'Kan du deltage?',
    'elig.title': 'Hvem søger vi?',
    'elig.intro': 'Vi søger 60 deltagere til studiet. Her er kriterierne for deltagelse:',
    'elig.yes.title': 'Inklusionskriterier',
    'elig.yes.item1': 'Alder 18-75 år',
    'elig.yes.item2': 'Diagnose: major depressiv episode (DSM-5)',
    'elig.yes.item3': 'MDI-score på 21 eller derover',
    'elig.yes.item4': 'Stabil antidepressiv medicin i mindst 2 uger',
    'elig.yes.item5': 'Villig til at bruge lysenheden 1 time dagligt i 6 uger',
    'elig.no.title': 'Eksklusionskriterier',
    'elig.no.item1': 'Epilepsi eller lysoverfølsomme migræneanfald',
    'elig.no.item2': 'Bipolar lidelse eller aktuelle psykotiske symptomer',
    'elig.no.item3': 'Høj suicidalrisiko',
    'elig.no.item4': 'Aktuel alkohol- eller stofafhængighed',
    'elig.no.item5': 'Deltagelse i andet klinisk forsøg',
    'elig.note': 'Alle deltagere vil blive grundigt vurderet ved et screeningbesøg.',

    // Timeline
    'timeline.label': 'Tidsforløb',
    'timeline.title': 'Sådan forløber studiet',
    'timeline.step1.title': 'Screening',
    'timeline.step1.desc': 'Vurdering af egnethed, informeret samtykke og baseline-målinger.',
    'timeline.step2.title': 'Uge 1',
    'timeline.step2.desc': 'Første opfølgningsbesøg med depressionsscoring og neurokognitiv test.',
    'timeline.step3.title': 'Uge 3',
    'timeline.step3.desc': 'Midtvejsbesøg med klinisk evaluering af symptomer og søvn.',
    'timeline.step4.title': 'Uge 6',
    'timeline.step4.desc': 'Afslutning af behandling. Primært endepunkt måles.',
    'timeline.step5.title': 'Uge 8',
    'timeline.step5.desc': 'Opfølgningsbesøg for at vurdere varige effekter efter behandlingsstop.',

    // Team
    'team.label': 'Forskerne',
    'team.title': 'Hvem står bag studiet?',
    'team.intro': 'FELIX-studiet udføres af et tværfagligt team af forskere fra Psykiatrisk Center København, Danmarks Tekniske Universitet og OptoCeutics ApS.',

    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Vil du vide mere?',
    'contact.intro': 'Hvis du er interesseret i at deltage i studiet eller har spørgsmål, er du velkommen til at kontakte os.',
    'contact.location': 'Lokation',
    'contact.location.value': 'Psykiatrisk Center København, Københavns Universitetshospital',
    'contact.registration': 'Registrering',
    'contact.registration.value': 'ClinicalTrials.gov: NCT05680220',
    'contact.funding': 'Finansiering',
    'contact.funding.value': 'Horizon 2020 Astrotech (Marie Skłodowska-Curie) og JaschaFonden',
    'contact.email': 'E-mail',

    // Footer
    'footer.description': 'FELIX er et klinisk forsøg ved Psykiatrisk Center København, der undersøger 40 Hz lysneurostimulering som behandling for depression.',
    'footer.links': 'Links',
    'footer.legal': 'Juridisk',
    'footer.contact': 'Kontakt',
    'footer.privacy': 'Privatlivspolitik',
    'footer.data': 'Persondata (GDPR)',
    'footer.copyright': '© 2025 FELIX Studiet — Psykiatrisk Center København',
    'footer.approved': 'Godkendt af Lægemiddelstyrelsen og Etisk Komité (sagsnr. 2300521)',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.science': 'The Science',
    'nav.participate': 'Participate',
    'nav.team': 'Researchers',
    'nav.contact': 'Contact',
    'nav.study': 'Study Design',

    // Home page cards
    'home.card.science': 'Learn about gamma waves, 40 Hz stimulation, and the invisible spectral flicker technology.',
    'home.card.study': 'Understand the study structure, what we measure, and the timeline.',
    'home.card.participate': 'See if you can participate and find contact information.',
    'home.card.team': 'Meet the researchers behind the FELIX study.',
    'home.card.readmore': 'Read more',

    // About page
    'about.header.subtitle': 'From fundamental astrocyte research to a clinical trial of light therapy for depression.',
    'about.cta.text': 'Want to learn more about the science behind the study?',
    'about.cta.button': 'The science behind FELIX',

    // Science page
    'science.header.subtitle': 'Gamma waves, neurostimulation, and invisible spectral flicker.',
    'science.cta.text': 'See how the study is designed and what we measure.',
    'science.cta.button': 'View study design',

    // Team page
    'team.affiliations.label': 'Affiliated Institutions',

    // Hero
    'hero.tag': 'Clinical Trial — Psychiatric Centre Copenhagen',
    'hero.title': 'The FELIX Study',
    'hero.subtitle': 'Light as a new path to treating depression',
    'hero.description': 'A randomized, double-blinded clinical trial investigating whether 40 Hz light neurostimulation can alleviate symptoms of depression.',
    'hero.cta.learn': 'Learn about the study',
    'hero.cta.participate': 'Can you participate?',
    'hero.registered': 'Registered on ClinicalTrials.gov',
    'hero.registered.id': 'NCT05680220',

    // Background
    'bg.label': 'Background',
    'bg.title': 'About FELIX',
    'bg.p1': 'FELIX is a clinical research protocol investigating the clinical efficacy of 40 Hz gamma neurostimulation delivered non-invasively through pulsating light in patients with depression.',
    'bg.p2': 'The project originated from Horizon Europe\'s Marie Skłodowska-Curie Actions programme under the Astrotech consortium, which was established to gain a deeper understanding of astrocyte function in the brain. This fundamental research led to the discovery that gamma-frequency light stimulation can influence neural networks in ways that may benefit patients with affective disorders.',
    'bg.p3': 'The study is conducted as a randomized, double-blinded, placebo-controlled trial at Psychiatric Centre Copenhagen in collaboration with the Technical University of Denmark and OptoCeutics ApS, who developed the patented invisible spectral flicker technology.',
    'bg.stat1.value': '60',
    'bg.stat1.label': 'Participants in the trial',
    'bg.stat2.value': '6 weeks',
    'bg.stat2.label': 'Daily treatment at home',
    'bg.stat3.value': '40 Hz',
    'bg.stat3.label': 'Gamma frequency delivered via light',

    // Science
    'sci.label': 'The Science',
    'sci.title': 'How does it work?',
    'sci.gamma.title': 'Gamma waves and the brain',
    'sci.gamma.p1': 'Gamma waves (30-80 Hz) are fast brain rhythms associated with higher cognitive function, information processing, and memory. Research suggests that the balance between excitatory and inhibitory neural activity — which gives rise to gamma waves — is disrupted in depression.',
    'sci.gamma.p2': 'By stimulating the brain with 40 Hz light, we can potentially restore this balance and influence the neural networks involved in depressive symptoms.',
    'sci.device.title': 'Invisible Spectral Flicker',
    'sci.device.p1': 'Unlike traditional stroboscopic light, the treatment device uses patented technology that alternates between two color combinations (cyan/red and blue/yellow). This rapid alternation is nearly imperceptible to the human eye.',
    'sci.device.p2': 'The technology is developed by OptoCeutics and designed to minimize discomfort while delivering precise 40 Hz gamma stimulation.',
    'sci.genus.title': 'GENUS — Gamma Entrainment Using Sensory Stimuli',
    'sci.genus.p1': 'The study builds on the GENUS concept, where rhythmic sensory stimulation is used to synchronize brain activity. Previous studies have shown that this approach can reduce brain atrophy, improve cognitive function, and have neuroprotective effects in Alzheimer\'s disease patients.',
    'sci.genus.p2': 'The FELIX study is the first to investigate whether these promising results also apply to depression.',

    // Study Design
    'design.label': 'Study Design',
    'design.title': 'How the study is structured',
    'design.p1': 'FELIX is a randomized, double-blinded, placebo-controlled clinical trial. This means that neither participants nor researchers know who receives active treatment and who receives placebo.',
    'design.active.title': 'Active group',
    'design.active.desc': '40 Hz masked flickering light',
    'design.placebo.title': 'Placebo group',
    'design.placebo.desc': 'Continuous light matched in color temperature and brightness',
    'design.duration.title': 'Treatment period',
    'design.duration.desc': '6 weeks of daily light therapy for 1 hour at home',
    'design.followup.title': 'Follow-up',
    'design.followup.desc': 'Final visit at week 8 to assess lasting effects',

    // What We Measure
    'measure.label': 'What We Measure',
    'measure.title': 'Study endpoints and assessments',
    'measure.primary.title': 'Primary endpoint',
    'measure.primary.desc': 'Change in depression severity measured by the Hamilton Depression Rating Scale (HAM-D6) from baseline to week 6.',
    'measure.secondary.title': 'Secondary endpoints',
    'measure.secondary.item1': 'Self-reported depression (MDI)',
    'measure.secondary.item2': 'Neurocognitive function',
    'measure.secondary.item3': 'Sleep quality (PSQI)',
    'measure.secondary.item4': 'Quality of life (WHO-5)',
    'measure.secondary.item5': 'EEG changes',
    'measure.visits.title': 'Study visits',
    'measure.visits.desc': '5 visits with clinical assessments: baseline, day 7, day 21, day 42, and day 56.',

    // Eligibility
    'elig.label': 'Can you participate?',
    'elig.title': 'Who are we looking for?',
    'elig.intro': 'We are seeking 60 participants for the study. Here are the criteria for participation:',
    'elig.yes.title': 'Inclusion criteria',
    'elig.yes.item1': 'Age 18-75 years',
    'elig.yes.item2': 'Diagnosis: major depressive episode (DSM-5)',
    'elig.yes.item3': 'MDI score of 21 or above',
    'elig.yes.item4': 'Stable antidepressant medication for at least 2 weeks',
    'elig.yes.item5': 'Willing to use the light device 1 hour daily for 6 weeks',
    'elig.no.title': 'Exclusion criteria',
    'elig.no.item1': 'Epilepsy or photosensitive migraines',
    'elig.no.item2': 'Bipolar disorder or current psychotic symptoms',
    'elig.no.item3': 'High suicide risk',
    'elig.no.item4': 'Current alcohol or drug dependence',
    'elig.no.item5': 'Participation in another clinical trial',
    'elig.note': 'All participants will be thoroughly assessed at a screening visit.',

    // Timeline
    'timeline.label': 'Timeline',
    'timeline.title': 'How the study unfolds',
    'timeline.step1.title': 'Screening',
    'timeline.step1.desc': 'Eligibility assessment, informed consent, and baseline measurements.',
    'timeline.step2.title': 'Week 1',
    'timeline.step2.desc': 'First follow-up visit with depression scoring and neurocognitive testing.',
    'timeline.step3.title': 'Week 3',
    'timeline.step3.desc': 'Mid-point visit with clinical evaluation of symptoms and sleep.',
    'timeline.step4.title': 'Week 6',
    'timeline.step4.desc': 'End of treatment. Primary endpoint measured.',
    'timeline.step5.title': 'Week 8',
    'timeline.step5.desc': 'Follow-up visit to assess lasting effects after treatment cessation.',

    // Team
    'team.label': 'Researchers',
    'team.title': 'Who is behind the study?',
    'team.intro': 'The FELIX study is conducted by an interdisciplinary team of researchers from Psychiatric Centre Copenhagen, the Technical University of Denmark, and OptoCeutics ApS.',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Want to know more?',
    'contact.intro': 'If you are interested in participating in the study or have questions, please don\'t hesitate to contact us.',
    'contact.location': 'Location',
    'contact.location.value': 'Psychiatric Centre Copenhagen, Copenhagen University Hospital',
    'contact.registration': 'Registration',
    'contact.registration.value': 'ClinicalTrials.gov: NCT05680220',
    'contact.funding': 'Funding',
    'contact.funding.value': 'Horizon 2020 Astrotech (Marie Skłodowska-Curie) and JaschaFonden',
    'contact.email': 'Email',

    // Footer
    'footer.description': 'FELIX is a clinical trial at Psychiatric Centre Copenhagen investigating 40 Hz light neurostimulation as a treatment for depression.',
    'footer.links': 'Links',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.data': 'Personal Data (GDPR)',
    'footer.copyright': '© 2025 The FELIX Study — Psychiatric Centre Copenhagen',
    'footer.approved': 'Approved by the Danish Medicines Agency and Ethics Committee (case no. 2300521)',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
