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
    'nav.technology': 'Teknologien',
    'nav.participate': 'Deltagelse',
    'nav.team': 'Forskerne',
    'nav.contact': 'Kontakt',
    'nav.study': 'Studiedesign',

    // Home page cards
    'home.card.science': 'Lær om gamma-bølger, 40 Hz stimulering og den usynlige spektrale flimmer-teknologi.',
    'home.card.technology': 'Forstå den patenterede ISF-teknologi og EVY Light-enheden.',
    'home.card.study': 'Forstå studiets opbygning, hvad vi måler, og hvordan tidsforløbet ser ud.',
    'home.card.participate': 'Se om du kan deltage, og find kontaktinformation.',
    'home.card.team': 'Mød forskerne bag FELIX-studiet.',
    'home.card.readmore': 'Læs mere',

    // About page
    'about.header.subtitle': 'Fra basal neurovidenskab til klinisk afprøvning af lysbaseret behandling ved depression.',
    'about.cta.text': 'Vil du vide mere om videnskaben bag studiet?',
    'about.cta.button': 'Videnskaben bag FELIX',
    'about.astrotech.link': 'Læs mere om Astrotech-konsortiet',

    // Science page
    'science.header.subtitle': 'Fra kortikal kredsløbstiming til translationel 40 Hz-neuromodulation ved depression.',
    'science.cta.text': 'Se hvordan studiet er designet, og hvilke mål der bruges til at teste den mekanistiske hypotese.',
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
    'bg.p1': 'FELIX er en klinisk forskningsprotokol, der undersøger, om non-invasiv 40 Hz gamma-neurostimulering leveret via lys kan reducere depressive symptomer. Studiet tager afsæt i behovet for nye og skalerbare behandlingsmuligheder ved depression, hvor en betydelig andel af patienter ikke opnår tilstrækkelig effekt af eksisterende behandlinger.',
    'bg.p2': 'Projektet er udviklet inden for Horizon Europes Marie Skłodowska-Curie Actions-program under Astrotech-konsortiet, et tværfagligt forsknings- og uddannelsessamarbejde med 15 early-stage researchers på tværs af værtsinstitutioner og projekter inden for astrocytbiologi, neuroteknologi og lysbaseret stimulation. Konsortiet blev etableret for at styrke forståelsen af astrocytters funktion i hjernen. Denne forskning førte ikke i sig selv til opdagelsen af gamma-frekvent lysstimulering, men indgår i en bredere translationel forskningskontekst, hvor arbejde med gamma-entrainment og sensorisk stimulation har motiveret undersøgelser af lysbaseret neuromodulation ved affektive lidelser.',
    'bg.p3': 'Studiet gennemføres som et randomiseret, dobbeltblindet, placebokontrolleret forsøg ved Psykiatrisk Center København i samarbejde med Danmarks Tekniske Universitet og OptoCeutics ApS, som har udviklet den patenterede teknologi til usynlig spektral flimmer. Ved at afprøve en hjemmebaseret og non-invasiv intervention undersøger FELIX også, om denne tilgang kan være praktisk gennemførlig og potentielt skalerbar som supplement til eksisterende depressionsbehandling.',
    'bg.stat1.value': '60',
    'bg.stat1.label': 'Deltagere i forsøget',
    'bg.stat2.value': '6 uger',
    'bg.stat2.label': 'Daglig behandling i hjemmet',
    'bg.stat3.value': '40 Hz',
    'bg.stat3.label': 'Gamma-frekvens leveret via lys',

    // Science
    'sci.label': 'Videnskaben',
    'sci.title': 'Hvordan virker det?',
    'sci.intro.p1': 'Den videnskabelige begrundelse for FELIX er, at depression ikke kun er en forstyrrelse i stemningsleje, men også i den måde kortikale netværk koordinerer information over tid. Gammaaktivitet er en af de centrale rytmer, hvorigennem lokale kredsløb organiserer perception, opmærksomhed, hukommelse og kognitiv kontrol.',
    'sci.intro.p2': 'På tværs af EEG-, MEG-, behandlings- og dyrestudier peger litteraturen på, at gammaforandringer ved depression bedst forstås som kredsløbsspecifik dysregulering snarere end et enkelt ensartet underskud. Derfor er målet med 40 Hz-stimulation ikke blot at øge gamma mest muligt, men at understøtte mere fysiologisk timing og koordinering i netværk, der er relevante for depressive symptomer.',
    'sci.animation.eyebrow': 'Koordinering vs. dysregulering',
    'sci.animation.title': 'Hvorfor timing i hjernen betyder noget',
    'sci.animation.body': 'I en sund hjerne pulserer funktionelle netværk i koordinerede rytmer — hver ved sin egen frekvens, men indbyrdes synkrone. Ved depression bliver denne tidsmæssige arkitektur forstyrret: de samme netværk affyrer ukoordineret, og forbindelserne mellem dem svækkes. FELIX sigter mod at genoprette denne koordinering.',
    'sci.animation.left': 'Koordineret',
    'sci.animation.right': 'Dysreguleret',
    'sci.disclosure.eyebrow': 'Progressiv udfoldelse',
    'sci.disclosure.title': 'Udforsk mekanismen lag for lag',
    'sci.disclosure.body': 'For at gøre den videnskabelige rationale lettere at navigere er argumentet opdelt i fem lag. Vælg et tema for at se den fulde mekanistiske forklaring.',
    'sci.disclosure.view': 'Åbn lag',
    'sci.disclosure.active': 'Aktivt lag',
    'sci.disclosure.detailLabel': 'Fuld forklaring',
    'sci.hypothesis.eyebrow': 'Mekanistisk model',
    'sci.hypothesis.title': 'Arbejdshypotesen i FELIX',
    'sci.hypothesis.body': 'Studiet bygger på en translationel kæde, hvor et sensorisk signal først påvirker kredsløbsfysiologi og derfra potentielt kliniske symptomer. Hvert led i kæden kan undersøges empirisk, og sammenhængen er netop det, studiet søger at afprøve.',
    'sci.hypothesis.step1.title': 'Sensorisk input',
    'sci.hypothesis.step1.body': 'Usynlig 40 Hz-stimulation leverer et præcist tidskodet signal til det visuelle system.',
    'sci.hypothesis.step2.title': 'Gamma-entrainment',
    'sci.hypothesis.step2.body': 'Det periodiske input forventes at øge eller normalisere gamma-synkronisering i relevante kortikale kredsløb.',
    'sci.hypothesis.step3.title': 'Netværkskoordinering',
    'sci.hypothesis.step3.body': 'Mere præcis timing kan understøtte mere sammenhængende kommunikation mellem perceptuelle, affektive og kognitive kontrolnetværk.',
    'sci.hypothesis.step4.title': 'Klinisk effekt',
    'sci.hypothesis.step4.body': 'Hvis disse netværkseffekter er meningsfulde, kan de afspejles i forbedret stemningsleje, kognition, søvn eller andre depressive symptomer.',
    'sci.gamma.title': 'Gamma som koordinerende hjernerytme',
    'sci.gamma.summary': 'Gamma beskrives bedst som et timingsignal, der organiserer spikes, selektion af information og lokal netværkskoordinering.',
    'sci.gamma.p1': 'Gamma-oscillationer, typisk omkring 30-80 Hz, er hurtige hjernerytmer, der optræder, når neuroner skal koordinere aktivitet med høj tidsmæssig præcision. De forbindes med selektion af information, opmærksomhed, arbejdshukommelse og integration af sensoriske signaler. [1]',
    'sci.gamma.p2': 'På kredsløbsniveau opstår gamma gennem samspillet mellem excitatoriske pyramideneuroner og inhibitoriske GABAerge interneuroner. Disse vekselvirkninger skaber smalle tidsvinduer, hvor spikes bliver mere præcist organiseret, så lokale netværk kan kommunikere effektivt. [1,5]',
    'sci.gamma.p3': 'Netop fordi gamma afhænger af præcist timet inhibition, fungerer rytmen som et følsomt mål for kredsløbenes funktionelle tilstand. Det handler derfor ikke kun om hvor meget gamma der er, men om hvor i hjernen, hvornår og hvor velkoordineret rytmen optræder. [1]',
    'sci.depression.title': 'Hvad ser ud til at være forstyrret ved depression?',
    'sci.depression.summary': 'Depression ser ikke ud til at give ét enkelt gamma-underskud, men snarere en fejlreguleret rytmik i stemningsrelevante kredsløb.',
    'sci.depression.p1': 'Studier af depression peger ikke på ét enkelt mønster i alle situationer, men mange undersøgelser finder unormal hvile- eller opgaveudløst gammaaktivitet i blandt andet anterior cingulate cortex, præfrontal cortex og temporale regioner. I nogle paradigmer er gamma reduceret; i andre ser rytmen ud til at være fejlplaceret eller ineffektivt rekrutteret. [1]',
    'sci.depression.p2': 'En gennemgående mekanistisk forklaring er forstyrret excitatorisk-inhibitorisk balance, herunder nedsat GABAerg tonus og ændret funktion af inhibitoriske interneuroner. Når den inhibitoriske timing svækkes, bliver kortikale populationer dårligere til at generere den præcist faseordnede aktivitet, som fleksibel kognition og affektregulering kræver. [1]',
    'sci.depression.p3': 'På det kliniske niveau kan en sådan dysrytmi tænkes at bidrage til svækket kognitiv kontrol, rigid negativ bias, ændret saliensbearbejdning og vanskeligheder med at skifte ud af uhensigtsmæssige hjernetilstande. Pointen er derfor ikke nødvendigvis, at gamma altid er globalt lav, men at den ofte er dårligt reguleret i kredsløb, der er relevante for depression.',
    'sci.rationale.title': 'Hvorfor forsøge at styrke gamma?',
    'sci.rationale.summary': 'Begrundelsen er ikke “mere gamma for enhver pris”, men at behandling kan hjælpe netværk mod et mere optimalt koordineringsniveau.',
    'sci.rationale.p1': 'Rationalet hviler ikke på ketamin alene. På tværs af litteraturen ses gammaforandringer i forbindelse med flere interventionstyper, herunder monoaminerge antidepressiva, hurtigtvirkende ketamin, TMS-relateret bedring og andre former for ikke-farmakologisk modulering. I flere studier er klinisk recovery ledsaget af øget præfrontal gamma eller stærkere theta-gamma-kobling, hvilket peger på, at gamma kan afspejle behandlingsrelevant netværksnormalisering snarere end ét enkelt lægemiddels effekt. [1]',
    'sci.rationale.p2': 'Eksperimentelle entrainmentstudier styrker denne pointe yderligere: 40 Hz-stimulation er i små menneskestudier blevet koblet til forbedringer i humør, hukommelse og kognition, mens prækliniske modeller viser ændringer i interregional kommunikation, krydsfrekvent kobling og synaptisk plasticitet efter ekstern gamma-driving. [2,5]',
    'sci.rationale.p3': 'Det betyder ikke, at mere gamma altid er bedre. En mere sandsynlig model er, at effektiv behandling hjælper distribuerede netværk mod et mere optimalt niveau af rytmisk koordinering: for lidt gamma kan afspejle desorganiseret fyring, mens overdreven eller fejlallokeret synkronisering også kan være uhensigtsmæssig. I den ramme er 40 Hz sensorisk entrainment interessant som en non-invasiv måde at påvirke kortikal timing udefra og teste, om sådanne netværksændringer kan omsættes klinisk. [1,2,5]',
    'sci.device.title': 'Hvorfor 40 Hz lys og Invisible Spectral Flicker?',
    'sci.device.summary': 'Det visuelle input fungerer som et eksternt tidsstillads, mens ISF søger at bevare entrainment og samtidig gøre stimuleringen tolerabel i praksis.',
    'sci.device.p1': 'Rytmisk visuel stimulation kan fremkalde steady-state-responser i visuel cortex og sende timing-signaler videre gennem bredere thalamo-kortikale og kortiko-kortikale netværk. Et 40 Hz-input kan derfor fungere som et eksternt tidsstillads, der hjælper med at synkronisere neuronal aktivitet i gammaområdet. [3,4]',
    'sci.device.p2': 'FELIX anvender Invisible Spectral Flicker frem for traditionelt stroboskopisk lys. Ved at veksle mellem nøje kalibrerede spektrale faser er systemet designet til at bevare entrainment-effekten, men samtidig mindske det ubehag, den distraktion og de tolerabilitetsproblemer, som synligt flimmer kan medføre.',
    'sci.device.p3': 'FELIX tester en mekanistisk hypotese og forudsætter ikke en allerede bevist antidepressiv effekt: Hvis depression hos nogle patienter indebærer svækket gamma-koordinering, kan gentagen og tolerabel 40 Hz-stimulation måske bidrage til mere adaptive netværksdynamikker og derigennem reducere symptomer. [1,2,5]',
    'sci.brainhealth.eyebrow': 'Udvidet biologisk perspektiv',
    'sci.brainhealth.title': 'Gamma-stimulation som mulig støtte for hjernens vedligeholdelse',
    'sci.brainhealth.summary': 'Nye dyrestudier udvider perspektivet fra stemningskredsløb til glymfatisk flow, vaskulær pulsation, astrocytfunktion og plasticitet.',
    'sci.brainhealth.intro': 'Ud over de stemningsrelevante kredsløb peger nyere prækliniske studier på, at 40 Hz-stimulation også kan påvirke mere generelle processer for hjernehelbred. Det gælder især væskedynamik, neurovaskulær pulsation, astrocytfunktion og cellulær plasticitet. [3,4,5]',
    'sci.brainhealth.card1.title': 'Glymfatisk flow og affalds-clearance',
    'sci.brainhealth.card1.body': 'Museforsøg har vist, at 40 Hz lys eller multisensorisk gamma-stimulation kan øge influx af cerebrospinalvæske og efflux af interstitialvæske, ledsaget af øget AQP4-polarisering i astrocytære endefødder og mere effektiv transport mod cervikale lymfeknuder. I Alzheimers-modeller er denne respons blevet koblet til øget clearance af amyloid. [3,4]',
    'sci.brainhealth.card2.title': 'Adenosin og vaskulær pulsation',
    'sci.brainhealth.card2.body': 'Et vigtigt spor er, at 40 Hz lys i dyr ser ud til at øge ekstracellulær adenosin og engagere A2A-signalering, som både kan påvirke søvntryk, blodgennemstrømning og AQP4-organisering. Andre studier peger samtidig på øget arteriel vasomotion og meningeal lymfatisk dilation, hvilket giver en biologisk plausibel kobling mellem gamma-stimulation og væsketransport i hjernen. [3,4]',
    'sci.brainhealth.card3.title': 'Plasticitet og neuroprotektion',
    'sci.brainhealth.card3.body': 'Præklinisk forskning uden for depressionsfeltet tyder også på, at 40 Hz-stimulation kan styrke interregional kommunikation, forbedre krydsfrekvent kobling, understøtte funktionel synaptisk plasticitet og nedregulere celledødsprogrammer efter hjerneskade. Det antyder, at gamma ikke kun er en biomarkør, men muligvis også en regulator af netværksrobusthed. [5]',
    'sci.brainhealth.note': 'Disse fund er vigtige for den overordnede biologiske rationale, men de er endnu ikke dokumentation for, at FELIX-behandlingen forbedrer glymfatisk clearance eller giver sygdomsmodificerende effekter hos patienter med depression. På denne hjemmeside bruges de derfor som baggrund for, hvorfor gamma-stimulation er interessant for hjernens helbred bredt forstået, ikke som et klinisk løfte.',
    'sci.references.eyebrow': 'Referencer',

    // Technology page
    'tech.label': 'Teknologien',
    'tech.title': 'Invisible Spectral Flicker',
    'tech.header.subtitle': 'Sådan leverer EVY Light 40 Hz gamma-stimulering uden synligt flimmer.',
    'tech.intro': 'FELIX-studiet anvender en non-invasiv neurostimuleringsenhed udviklet af det danske firma OptoCeutics. Enheden — EVY Light — leverer præcis 40 Hz gamma-stimulering via en patenteret teknologi kaldet Invisible Spectral Flicker (ISF).',
    'tech.problem.title': 'Problemet med stroboskopisk flimmer',
    'tech.problem.p1': 'Konventionel luminans-flimmer (LF) — simple "tænd-sluk"-pulsationer af lys — kan synkronisere hjernebølger ved 40 Hz, men medfører markant visuelt ubehag. Umaskereret stroboskopisk flimmer kan udløse svimmelhed, migræne, kvalme og i sjældne tilfælde fotosensitiv epilepsi.',
    'tech.problem.p2': 'For at gamma-stimulering skal være klinisk anvendelig som daglig hjemmebehandling, skal den tolereres over uger uden bivirkninger. Det kræver en anden strategi for at synkronisere gamma-hjernebølger — en der fremkalder det ønskede 40 Hz-respons, men eliminerer det synlige flimmer.',
    'tech.isf.title': 'Hvad er ISF?',
    'tech.isf.p1': 'Invisible Spectral Flicker er et dual-modalitets flimmer-system der kombinerer luminans-flimmer med en synkron spektral maskering. Enheden bruger to nøje kalibrerede farvefaser — Fase 1 og Fase 2 — der veksler med 40 Hz.',
    'tech.isf.p2': 'De to faser er repræsenteret som tætliggende kromaticitetskoordinater i CIE 1931-farverummet. De udgør to subtilt forskellige spektrale sammensætninger — i praksis to næsten identiske nuancer af hvidt lys. Faserne er designet til at være metamerisk matchede: de fremstår visuelt ens for det menneskelige øje under normale betingelser, men deres spektrale profiler adskiller sig tilstrækkeligt til at inducere den ønskede 40 Hz-modulering.',
    'tech.isf.p3': 'Idet lyset oscillerer mellem disse faser, forbliver den opfattede lysstyrke stabil. Den overordnede luminansændring maskeres af de spektrale skift, hvilket skaber et "næsten umærkeligt flimmer-effekt" — mens 40 Hz-rytmen trænger igennem det visuelle system og synkroniserer neurale oscillationer i hjernens gamma-bånd.',
    'tech.led.title': 'Præcisions-LED-teknologi',
    'tech.led.p1': 'Enheden anvender højpræcisions-LED-emittere, optimeret af nanoteknologispecialister til at sikre sømlse overgange med nøjagtig 40 cykler per sekund. Intensitetsbølgeformen viser, hvordan ISF-sporet dæmper synlig pulsering, mens den terapeutiske frekvens bevares.',
    'tech.evy.title': 'EVY Light-enheden',
    'tech.evy.p1': 'EVY Light er OptoCeutics\' klinisk testede enhed til daglig brug i hjemmet. Deltagere i FELIX-studiet modtager enheden og bruger den én time dagligt i seks uger som supplement til deres vanlige behandling.',
    'tech.psd.title': 'Gamma-entrainment: ISF vs. stroboskopisk flimmer',
    'tech.psd.description': 'Power Spectral Density (PSD) analyser fra EEG-optagelser viser, at ISF kan inducere gamma-entrainment der er sammenlignelig med konventionelt stroboskopisk flimmer — men uden det synlige flimmer og de tilhørende bivirkninger.',
    'tech.psd.placeholder': 'PSD-plot vil blive tilføjet her.',
    'tech.cta.text': 'Læs om det kliniske studiedesign.',
    'tech.cta.button': 'Se studiedesign',

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
    'nav.technology': 'Technology',
    'nav.participate': 'Participate',
    'nav.team': 'Researchers',
    'nav.contact': 'Contact',
    'nav.study': 'Study Design',

    // Home page cards
    'home.card.science': 'Learn about gamma waves, 40 Hz stimulation, and the invisible spectral flicker technology.',
    'home.card.technology': 'Understand the patented ISF technology and the EVY Light device.',
    'home.card.study': 'Understand the study structure, what we measure, and the timeline.',
    'home.card.participate': 'See if you can participate and find contact information.',
    'home.card.team': 'Meet the researchers behind the FELIX study.',
    'home.card.readmore': 'Read more',

    // About page
    'about.header.subtitle': 'From basic neuroscience to a clinical trial of light-based treatment for depression.',
    'about.cta.text': 'Want to learn more about the science behind the study?',
    'about.cta.button': 'The science behind FELIX',
    'about.astrotech.link': 'Read more about the Astrotech consortium',

    // Science page
    'science.header.subtitle': 'From cortical circuit timing to translational 40 Hz neuromodulation in depression.',
    'science.cta.text': 'See how the study is designed and which outcomes are used to test the mechanistic hypothesis.',
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
    'bg.p1': 'FELIX is a clinical research protocol investigating whether non-invasive 40 Hz gamma neurostimulation delivered through light can reduce depressive symptoms. The study is motivated by the need for novel and scalable treatment options for depression, where a substantial proportion of patients do not achieve sufficient benefit from existing interventions.',
    'bg.p2': 'The project was developed within Horizon Europe\'s Marie Skłodowska-Curie Actions programme under the Astrotech consortium, a multidisciplinary research and training network comprising 15 early-stage researchers across host institutions and projects spanning astrocyte biology, neurotechnology, and light-based stimulation. The consortium was established to advance understanding of astrocyte function in the brain. This research did not itself lead to the discovery of gamma-frequency light stimulation, but it forms part of a broader translational context in which work on gamma entrainment and sensory stimulation has motivated investigation of light-based neuromodulation in affective disorders.',
    'bg.p3': 'The study is conducted as a randomized, double-blinded, placebo-controlled trial at Psychiatric Centre Copenhagen in collaboration with the Technical University of Denmark and OptoCeutics ApS, developer of the patented Invisible Spectral Flicker technology. By evaluating a home-based, non-invasive intervention, FELIX examines whether this approach may be practical and potentially scalable as an adjunct to existing depression treatment.',
    'bg.stat1.value': '60',
    'bg.stat1.label': 'Participants in the trial',
    'bg.stat2.value': '6 weeks',
    'bg.stat2.label': 'Daily treatment at home',
    'bg.stat3.value': '40 Hz',
    'bg.stat3.label': 'Gamma frequency delivered via light',

    // Science
    'sci.label': 'The Science',
    'sci.title': 'How does it work?',
    'sci.intro.p1': 'The scientific rationale behind FELIX is that depression may be not only a disorder of mood, but also a disorder of how cortical networks coordinate information in time. Gamma-band activity is one of the principal rhythms through which local circuits organize perception, attention, memory, and cognitive control.',
    'sci.intro.p2': 'Across EEG, MEG, treatment, and animal studies, the literature suggests that gamma abnormalities in depression are best understood as circuit-specific dysregulation rather than a single uniform deficit. That distinction matters: the aim of 40 Hz stimulation is not to maximize gamma indiscriminately, but to support more physiologic timing and coordination in networks implicated in depressive symptoms.',
    'sci.animation.eyebrow': 'Coordination vs. dysregulation',
    'sci.animation.title': 'Why timing in the brain matters',
    'sci.animation.body': 'In a healthy brain, functional networks pulse in coordinated rhythms — each at its own frequency, yet mutually synchronized. In depression, this temporal architecture is disrupted: the same networks fire out of step, and the connections between them weaken. FELIX aims to restore this coordination.',
    'sci.animation.left': 'Coordinated',
    'sci.animation.right': 'Dysregulated',
    'sci.disclosure.eyebrow': 'Progressive disclosure',
    'sci.disclosure.title': 'Explore the mechanism layer by layer',
    'sci.disclosure.body': 'To make the scientific rationale easier to navigate, the argument is organized into five layers. Select a topic to reveal the full mechanistic account.',
    'sci.disclosure.view': 'Open layer',
    'sci.disclosure.active': 'Active layer',
    'sci.disclosure.detailLabel': 'Full explanation',
    'sci.hypothesis.eyebrow': 'Mechanistic model',
    'sci.hypothesis.title': 'Working hypothesis in FELIX',
    'sci.hypothesis.body': 'The study is built around a translational sequence linking sensory input to circuit physiology and then, potentially, to clinical outcome. Each step is testable, and the full chain remains an empirical question.',
    'sci.hypothesis.step1.title': 'Sensory drive',
    'sci.hypothesis.step1.body': 'Invisible 40 Hz stimulation delivers a precisely timed signal to the visual system.',
    'sci.hypothesis.step2.title': 'Gamma entrainment',
    'sci.hypothesis.step2.body': 'That periodic input is expected to increase or normalize gamma-band synchronization in relevant cortical circuits.',
    'sci.hypothesis.step3.title': 'Network coordination',
    'sci.hypothesis.step3.body': 'Improved timing may support more coherent communication between perceptual, affective, and cognitive-control networks.',
    'sci.hypothesis.step4.title': 'Clinical outcome',
    'sci.hypothesis.step4.body': 'If those network effects are meaningful, they may translate into improved mood, cognition, sleep, or related depressive symptoms.',
    'sci.gamma.title': 'Gamma rhythms as a coordination signal',
    'sci.gamma.summary': 'Gamma is best understood as a timing signal that organizes spiking, information selection, and local network coordination.',
    'sci.gamma.p1': 'Gamma oscillations, typically around 30-80 Hz, are fast brain rhythms that emerge when neuronal populations need to coordinate activity with high temporal precision. They are associated with information selection, attention, working memory, and the integration of sensory signals. [1]',
    'sci.gamma.p2': 'At the circuit level, gamma arises from reciprocal interactions between excitatory pyramidal cells and inhibitory GABAergic interneurons. These interactions create narrow windows in time within which spiking becomes more precisely organized, allowing local networks to communicate efficiently. [1,5]',
    'sci.gamma.p3': 'Because gamma depends on precisely timed inhibition, it is a sensitive readout of circuit integrity. The key issue is therefore not simply how much gamma is present, but where in the brain it appears, when it is recruited, and how coherently it is organized. [1]',
    'sci.depression.title': 'What appears to be altered in depression?',
    'sci.depression.summary': 'Depression does not seem to produce one universal gamma deficit, but rather dysregulated rhythmic activity in mood-relevant circuits.',
    'sci.depression.p1': 'Studies of depression do not reveal one simple pattern under all conditions, but many report abnormal resting or task-evoked gamma activity in regions such as anterior cingulate cortex, prefrontal cortex, and temporal cortex. In some paradigms gamma is reduced; in others it appears to be misallocated or inefficiently recruited. [1]',
    'sci.depression.p2': 'A recurring mechanistic explanation is disturbed excitatory-inhibitory balance, including reduced GABAergic tone and altered function of inhibitory interneurons. When inhibitory timing weakens, cortical populations may become less able to generate the precisely phased activity required for flexible cognition and affect regulation. [1]',
    'sci.depression.p3': 'At the clinical level, this kind of dysrhythmia could contribute to impaired cognitive control, rigid negative bias, altered salience processing, and difficulty shifting out of maladaptive brain states. The important point is therefore not necessarily that gamma is always globally low, but that it is often poorly regulated in mood-relevant circuits.',
    'sci.rationale.title': 'Why strengthen gamma in depression?',
    'sci.rationale.summary': 'The rationale is not “more gamma at any cost”, but that treatment may move vulnerable networks toward a more optimal range of coordination.',
    'sci.rationale.p1': 'The therapeutic rationale does not rest on ketamine alone. Across the literature, gamma changes have been linked to several intervention classes, including monoaminergic antidepressants, rapid-acting ketamine, TMS-associated recovery, and other non-pharmacologic modulation strategies. In multiple studies, clinical improvement coincides with increased prefrontal gamma or stronger theta-gamma coupling, suggesting that gamma may index treatment-relevant network normalization rather than the effect of a single drug. [1]',
    'sci.rationale.p2': 'Experimental entrainment studies strengthen that argument further: in small human studies, 40 Hz stimulation has been associated with improvements in mood, memory, and cognition, while preclinical models show changes in interregional communication, cross-frequency coupling, and synaptic plasticity after externally driven gamma activity. [2,5]',
    'sci.rationale.p3': 'This does not mean that more gamma is always better. A more plausible model is that effective treatment moves distributed circuits toward a more optimal range of rhythmic coordination: too little gamma may reflect disorganized firing, while excessive or poorly allocated synchrony may also be maladaptive. Within that framework, 40 Hz sensory entrainment is attractive as a non-invasive way to bias cortical timing from the outside and test whether such network changes can translate clinically. [1,2,5]',
    'sci.device.title': 'Why 40 Hz light and Invisible Spectral Flicker?',
    'sci.device.summary': 'The visual input acts as an external temporal scaffold, while ISF is intended to preserve entrainment and make the intervention tolerable in practice.',
    'sci.device.p1': 'Rhythmic visual stimulation can generate steady-state responses in visual cortex and propagate timing signals through wider thalamo-cortical and cortico-cortical networks. A 40 Hz input can therefore provide an external temporal scaffold that may help synchronize neuronal firing in the gamma range. [3,4]',
    'sci.device.p2': 'The FELIX intervention uses Invisible Spectral Flicker rather than conventional stroboscopic light. By alternating carefully calibrated spectral phases, the system is designed to preserve the entrainment effect while minimizing the discomfort, distraction, and tolerability problems associated with visible flicker.',
    'sci.device.p3': 'FELIX is testing a mechanistic hypothesis, not assuming a proven antidepressant effect: if depression in some patients involves impaired gamma coordination, then repeatedly delivering a tolerable 40 Hz signal may help restore more adaptive network dynamics and, in turn, reduce symptoms. [1,2,5]',
    'sci.brainhealth.eyebrow': 'Extended biological perspective',
    'sci.brainhealth.title': 'Gamma stimulation as a possible support for brain maintenance',
    'sci.brainhealth.summary': 'Newer animal studies widen the lens from mood circuits to glymphatic flow, vascular pulsatility, astrocyte function, and plasticity.',
    'sci.brainhealth.intro': 'Beyond mood-relevant circuits, newer preclinical studies suggest that 40 Hz stimulation may also influence broader aspects of brain health. These include fluid dynamics, neurovascular pulsatility, astrocyte function, and cellular plasticity. [3,4,5]',
    'sci.brainhealth.card1.title': 'Glymphatic flow and waste clearance',
    'sci.brainhealth.card1.body': 'Mouse studies report that 40 Hz light or multisensory gamma stimulation can increase cerebrospinal fluid influx and interstitial fluid efflux, accompanied by increased AQP4 polarization at astrocytic endfeet and more effective transport toward cervical lymph nodes. In Alzheimer\'s models, this response has been linked to enhanced amyloid clearance. [3,4]',
    'sci.brainhealth.card2.title': 'Adenosine and vascular pulsatility',
    'sci.brainhealth.card2.body': 'One important mechanistic lead is that 40 Hz light in animals appears to increase extracellular adenosine and engage A2A signaling, which can influence sleep pressure, cerebral blood flow, and AQP4 organization. Other studies point to increased arterial vasomotion and dilation of meningeal lymphatic vessels, creating a biologically plausible link between gamma stimulation and brain fluid transport. [3,4]',
    'sci.brainhealth.card3.title': 'Plasticity and neuroprotection',
    'sci.brainhealth.card3.body': 'Preclinical work outside depression also suggests that 40 Hz stimulation may strengthen interregional communication, improve cross-frequency coupling, support functional synaptic plasticity, and downregulate cell-death programs after brain injury. This raises the possibility that gamma is not only a biomarker, but also a regulator of network resilience. [5]',
    'sci.brainhealth.note': 'These findings matter for the broader biological rationale, but they are not evidence that the FELIX intervention improves glymphatic clearance or confers disease-modifying effects in patients with depression. On this website they are therefore presented as background for why gamma stimulation is scientifically interesting for brain health in a wider sense, not as a clinical promise.',
    'sci.references.eyebrow': 'References',

    // Technology page
    'tech.label': 'Technology',
    'tech.title': 'Invisible Spectral Flicker',
    'tech.header.subtitle': 'How EVY Light delivers 40 Hz gamma stimulation without visible flicker.',
    'tech.intro': 'The FELIX study uses a non-invasive neurostimulation device developed by the Danish company OptoCeutics. The device — EVY Light — delivers precise 40 Hz gamma stimulation via a patented technology called Invisible Spectral Flicker (ISF).',
    'tech.problem.title': 'The problem with stroboscopic flicker',
    'tech.problem.p1': 'Conventional luminance flicker (LF) — simple binary "on-off" pulsations of light — can entrain brainwaves at 40 Hz, but produces significant visual discomfort. Unmasked stroboscopic flicker can trigger dizziness, migraines, nausea, and in rare cases photosensitive epilepsy.',
    'tech.problem.p2': 'For gamma stimulation to be clinically viable as a daily home treatment, it must be tolerated over weeks without adverse effects. This requires a different strategy for entraining gamma brainwaves — one that entrains the target 40 Hz response while eliminating the perceptible flicker.',
    'tech.isf.title': 'What is ISF?',
    'tech.isf.p1': 'Invisible Spectral Flicker is a dual-modality flicker system that combines luminance flicker with a synchronous spectral masking. The device uses two precisely calibrated colour phases — Phase 1 and Phase 2 — that alternate at 40 Hz.',
    'tech.isf.p2': 'The two phases are represented as closely positioned chromaticity coordinates in the CIE 1931 colour space. They constitute two subtly differentiated spectral compositions — in practice, two nearly identical shades of white light. The phases are engineered to be metamerically matched: they appear visually identical to the human eye under typical viewing conditions, yet their spectral profiles differ sufficiently to induce the desired 40 Hz modulation.',
    'tech.isf.p3': 'As the light oscillates between these phases, the perceived brightness remains stable. The overt luminance change is concealed by the spectral shifts, creating an "almost imperceptible flicker effect" — while the 40 Hz rhythm penetrates the visual system and entrains neural oscillations in the brain\'s gamma band.',
    'tech.led.title': 'Precision LED technology',
    'tech.led.p1': 'The device employs high-precision LED emitters, optimised by nanotechnology specialists to ensure seamless transitions at exactly 40 cycles per second. The intensity waveform shows how the ISF trace neutralises visible pulsing while preserving the therapeutic frequency.',
    'tech.evy.title': 'The EVY Light device',
    'tech.evy.p1': 'EVY Light is OptoCeutics\' clinically tested device for daily home use. Participants in the FELIX study receive the device and use it for one hour daily over six weeks as an adjunct to their usual treatment.',
    'tech.psd.title': 'Gamma entrainment: ISF vs. stroboscopic flicker',
    'tech.psd.description': 'Power Spectral Density (PSD) analyses from EEG recordings demonstrate that ISF can induce gamma entrainment comparable to conventional stroboscopic flicker — but without the visible flicker and its associated adverse effects.',
    'tech.psd.placeholder': 'PSD plots will be added here.',
    'tech.cta.text': 'Read about the clinical study design.',
    'tech.cta.button': 'View study design',

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
