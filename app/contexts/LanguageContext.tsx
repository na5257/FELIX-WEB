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
    'science.header.subtitle': 'En kredsløbsbaseret forståelse af depression og det translationelle rationale for 40 Hz-neuromodulation.',
    'science.cta.text': 'Se hvordan studiet er designet, og hvilke mål der bruges til at teste den mekanistiske hypotese.',
    'science.cta.button': 'Se studiedesign',

    // Team page
    'team.affiliations.label': 'Tilknyttede Institutioner',

    // Hero
    'hero.tag': 'Klinisk Forsøg — Psykiatrisk Center København',
    'hero.title': 'FELIX Studiet',
    'hero.subtitle': 'Et nyt lys på hjernens sundhed',
    'hero.description': 'Et randomiseret, dobbeltblindet klinisk forsøg, der undersøger om 40 Hz lysneurostimulering kan lindre symptomer på depression.',
    'hero.cta.learn': 'Læs mere om studiet',
    'hero.cta.learn.study': 'Om studiet',
    'hero.registered': 'Registreret på ClinicalTrials.gov',
    'hero.registered.id': 'NCT05680220',

    // Background
    'bg.label': 'Baggrund',
    'bg.title': 'Om FELIX',
    'bg.p1': 'FELIX er en klinisk forskningsprotokol, der undersøger, om non-invasiv 40 Hz gamma-neurostimulering leveret via lys kan reducere depressive symptomer. Studiet tager afsæt i behovet for nye og skalerbare behandlingsmuligheder ved depression, hvor en betydelig andel af patienter ikke opnår tilstrækkelig effekt af eksisterende behandlinger.',
    'bg.p2': 'Projektet er udviklet inden for Horizon Europes Marie Skłodowska-Curie Actions-program under Astrotech-konsortiet, et tværfagligt forsknings- og uddannelsessamarbejde med 15 early-stage researchers på tværs af værtsinstitutioner og projekter inden for astrocytbiologi, neuroteknologi og lysbaseret stimulering. Med udgangspunkt i en voksende præklinisk og translationel evidensbase, der forbinder 40 Hz sensorisk stimulering med neurobiologiske effekter — herunder forstærket gamma-oscillatorisk aktivitet, glymfatisk clearance og neuroimmun modulation — udgør FELIX en væsentlig del af de tidlige bestræbelser på systematisk at evaluere denne intervention i en psykiatrisk population. Studiet sigter ikke kun mod at vurdere klinisk effekt, men også mod at bidrage med mekanistisk indsigt i de neurofysiologiske processer, som gamma-frekvent entrainment engagerer i konteksten af svær depressiv lidelse.',
    'bg.p3': 'Studiet gennemføres som et randomiseret, dobbeltblindet, placebokontrolleret forsøg ved Psykiatrisk Center København i samarbejde med Danmarks Tekniske Universitet og OptoCeutics ApS, som har udviklet den patenterede teknologi til usynlig spektral flimmer. Ved at afprøve en hjemmebaseret og non-invasiv intervention undersøger FELIX også, om denne tilgang kan være praktisk gennemførlig og potentielt skalerbar som supplement til eksisterende depressionsbehandling.',
    'bg.stat1.value': '60',
    'bg.stat1.label': 'Deltagere i forsøget',
    'bg.stat2.value': '6 uger',
    'bg.stat2.label': 'Daglig behandling i hjemmet',
    'bg.stat3.value': '40 Hz',
    'bg.stat3.label': 'Gamma-frekvens leveret via lys',

    // Science
    'sci.label': 'Videnskaben',
    'sci.title': 'Det videnskabelige rationale',
    'sci.intro.p1': 'FELIX tager udgangspunkt i en voksende forståelse af depression som en lidelse, der ikke kun vedrører stemningsleje og neurokemi, men også organiseringen af aktivitet i distribuerede hjernenetværk. Inden for den ramme giver gammaaktivitet et målbart indblik i, hvordan neurale populationer koordinerer information over tid.',
    'sci.intro.p2': 'Evidens fra EEG-, MEG-, interventions- og dyrestudier peger på, at gammaforandringer ved depression sjældent kan beskrives som ét enkelt underskud. De fremstår snarere som kontekst- og kredsløbsafhængig dysregulering. For FELIX betyder det, at formålet ikke er ukritisk at forstærke gamma, men at undersøge, om tolerabel 40 Hz-stimulation kan påvirke sårbare netværk i retning af mere sammenhængende temporal organisering.',
    'sci.animation.eyebrow': '',
    'sci.animation.title': 'Netværkstiming i sundhed og depression',
    'sci.animation.body': 'Hjernefunktion afhænger ikke kun af, hvilke områder der er aktive, men af hvornår og hvor præcist de kommunikerer. I sunde netværk koordinerer neuronpopulationer deres aktivitet inden for snævre tidsvinduer — et fænomen der afspejles i gammabåndsoscillationer (~30–80 Hz) genereret af hurtigaffyrende hæmmende interneuroner. Ved depression kan denne tidslige organisering forstyrres: EEG-studier viser ændret gammasynkroni og koblingssvaghed særligt inden for og imellem frontoparietale, saliensrelaterede og dorsale opmærksomhedsnetværk. Forstyrrelsen er ikke blot et spørgsmål om for lidt aktivitet, men om kommunikation der mister tidsmæssig præcision — og netværk der regulerer opmærksomhed, affekt og kognitiv kontrol, som arbejder mindre sammenhængende.',
    'sci.animation.left': 'Koordineret',
    'sci.animation.right': 'Dysreguleret',
    'sci.disclosure.eyebrow': '',
    'sci.disclosure.title': 'Et lagdelt rationale for FELIX',
    'sci.disclosure.body': 'Den videnskabelige begrundelse spænder fra mikrokredsløb og regionale fund til behandlingslitteratur, sensorisk entrainment og bredere biologisk kontekst. Temaerne nedenfor udfolder de vigtigste niveauer i denne argumentation.',
    'sci.disclosure.view': 'Åbn lag',
    'sci.disclosure.active': 'Aktivt lag',
    'sci.disclosure.detailLabel': 'Fuld forklaring',
    'sci.hypothesis.eyebrow': 'Mekanistisk model',
    'sci.hypothesis.title': 'Arbejdshypotesen i FELIX',
    'sci.hypothesis.body': 'Studiet bygger på en translationel kæde, hvor et sensorisk signal først påvirker kredsløbsfysiologi og derfra potentielt kliniske symptomer. Hvert led i kæden kan undersøges empirisk med både kliniske mål og elektrofysiologiske mål, og sammenhængen er netop det, studiet søger at afprøve.',
    'sci.hypothesis.step1.title': 'Sensorisk input',
    'sci.hypothesis.step1.body': 'Usynlig 40 Hz-stimulation leverer et præcist tidskodet signal til det visuelle system.',
    'sci.hypothesis.step2.title': 'Gamma-entrainment',
    'sci.hypothesis.step2.body': 'Det periodiske input forventes at øge eller normalisere gamma-synkronisering i relevante kortikale kredsløb.',
    'sci.hypothesis.step3.title': 'Netværkskoordinering',
    'sci.hypothesis.step3.body': 'Mere præcis timing kan understøtte mere sammenhængende kommunikation mellem perceptuelle, affektive og kognitive kontrolnetværk.',
    'sci.hypothesis.step4.title': 'Klinisk effekt',
    'sci.hypothesis.step4.body': 'Hvis disse netværkseffekter er meningsfulde, kan de afspejles i forbedret stemningsleje, kognition eller søvn.',
    'sci.eeg.eyebrow': '',
    'sci.eeg.title': 'Sammenhængen mellem klinisk effekt og kredsløbsengagement',
    'sci.eeg.body': 'FELIX er designet til at vurdere både klinisk effekt og biologisk plausibilitet. Kliniske skalaer viser, om deltagernes symptomer og funktion ændrer sig. EEG gør det samtidig muligt at undersøge, om 40 Hz-stimulation påvirker de neurale dynamikker, interventionen er tænkt til at engagere.',
    'sci.eeg.p1': 'Denne kombination er vigtig, fordi en klinisk intervention i psykiatrien i sidste ende skal vurderes på patientnære udfald, men samtidig står stærkere videnskabeligt, når den også kan forankres i målbar kredsløbsfysiologi.',
    'sci.eeg.p2': 'I FELIX bruges EEG til at undersøge, om ændringer i symptomer optræder sammen med ændringer i temporal organisering og gamma-relateret netværksfunktion. Det er især relevant i en litteratur, hvor baselinefysiologi og responsmønstre ikke nødvendigvis er ens på tværs af patienter.',
    'sci.eeg.card1.title': 'Klinisk relevans',
    'sci.eeg.card1.body': 'Symptom- og funktionsmål er afgørende, fordi de viser, om interventionen har betydning for patienten på et klinisk niveau.',
    'sci.eeg.card2.title': 'Elektrofysiologisk forankring',
    'sci.eeg.card2.body': 'EEG giver et non-invasivt indblik i temporal koordinering på tværs af hjernenetværk og gør det muligt at undersøge, om gamma-relaterede forandringer ledsager den kliniske udvikling.',
    'sci.eeg.card3.title': 'Heterogenitet og stratificering',
    'sci.eeg.card3.body': 'Når baseline-fysiologi og kredsløbsdysregulering varierer mellem patienter, kan mekanistiske mål bidrage til at forklare, hvorfor responsmønstre ikke nødvendigvis er ens.',
    'sci.eeg.note': 'EEG indgår derfor som et mekanistisk sekundært endepunkt: ikke som udtryk for, at gamma allerede er en etableret klinisk biomarkør, men som en måde at undersøge forholdet mellem symptomændring og målbar ændring i kredsløbsfunktion.',
    'sci.gamma.title': 'Gamma som markør for kredsløbsorganisation',
    'sci.gamma.summary': 'Gamma afspejler præcis excitatorisk-inhibitorisk timing og er tæt knyttet til informationsselektion, lokal kredsløbsintegritet og plasticitet.',
    'sci.gamma.p1': 'Gamma-oscillationer, typisk i området 30-80 Hz, optræder, når neurale populationer skal koordinere aktivitet med høj tidslig præcision. De forbindes med blandt andet opmærksomhed, arbejdshukommelse, sensorisk integration og selektion af information. [1,6]',
    'sci.gamma.p2': 'På mikrokredsløbsniveau opstår gamma gennem samspillet mellem excitatoriske pyramideneuroner og inhibitoriske interneuroner, især parvalbumin-positive (PV+) og somatostatin-positive (SST+) celler. Netop disse cellepopulationer er centrale for præcis tidsstyring og samtidig relevante i stress- og depressionsrelateret patologi. [1,5,6]',
    'sci.gamma.p3': 'Gamma er heller ikke blot en frekvenskomponent i et EEG-signal. Rytmen er knyttet til synaptisk plasticitet, langtidspotentiering og krydsfrekvent kobling og giver dermed også indsigt i, hvornår netværk kan styrkes, reorganiseres og tilpasse sig. [5,6]',
    'sci.depression.title': 'Hvordan ser dysreguleringen ud ved depression?',
    'sci.depression.summary': 'Litteraturen peger ikke på ét universelt gammaunderskud, men på heterogen dysregulering i stemningsrelevante kredsløb.',
    'sci.depression.p1': 'Fundene er regionale og kontekstafhængige. Afvigende gammaaktivitet er beskrevet i blandt andet medial præfrontal cortex, hippocampus, nucleus accumbens, anterior cingulate cortex og temporale regioner. I nogle paradigmer er gamma reduceret, i andre øget eller dårligt koordineret på tværs af regioner. [1,6]',
    'sci.depression.p2': 'En central fortolkning er, at depression indebærer forstyrret excitatorisk-inhibitorisk balance og svækket mikrokredsløbstiming. Hertil kommer prækliniske data, der viser, at både kronisk stress og inflammatoriske udfordringer kan bidrage til gammaforstyrrelser i kredsløb med betydning for affektregulering og kognition. [6,7]',
    'sci.depression.p3': 'Det vigtige kliniske punkt er derfor ikke, om gamma altid bevæger sig i én bestemt retning, men at dysreguleringen kan antage forskellige former afhængigt af region, opgave, symptomprofil og baselinefysiologi. Det er netop en af grundene til, at mekanismen bør måles direkte.',
    'sci.rationale.title': 'Hvordan passer dette ind i den øvrige behandlingslitteratur?',
    'sci.rationale.summary': 'Forskellige behandlinger kan have forskellige angrebspunkter og alligevel delvist konvergere gennem retuning af netværksdynamik.',
    'sci.rationale.p1': 'Et kredsløbsperspektiv gør det muligt at forbinde interventioner, som ellers ofte omtales i hver deres sprog. SSRI- og SNRI-behandling, ketamin, rTMS, DBS og sensorisk entrainment påvirker hjernen gennem forskellige mekanismer, men kan alle tænkes at forme, hvordan netværk synkroniserer, kommunikerer og reorganiserer sig over tid. I den sammenhæng bliver gamma et muligt vindue ind til behandlingsrelevant netværksretuning. [6]',
    'sci.rationale.p2': 'Denne litteratur er også grunden til, at gamma har tiltrukket sig interesse som biomarkør-kandidat. Flere studier forbinder gammaforandringer med symptombelastning, behandlingsrespons eller theta-gamma-kobling, og enkelte data peger på, at baseline-tilstand kan have betydning for responsmønstre. [1,6]',
    'sci.rationale.p3': 'Det fører imidlertid ikke til den simple konklusion, at mere gamma nødvendigvis er bedre. En mere plausibel model er, at effektiv behandling hjælper netværk mod et mere funktionelt niveau af rytmisk koordinering. I denne optik er 40 Hz-stimulation interessant som en måde at afprøve, om ekstern timing kan påvirke kredsløb i en klinisk relevant retning. [1,2,6]',
    'sci.device.title': 'Hvad undersøger FELIX med 40 Hz lysstimulation?',
    'sci.device.summary': 'Interventionen leverer et eksternt timingsignal, mens studiet undersøger, om dette ledsages af målbar kredsløbseffekt og klinisk forandring.',
    'sci.device.p1': 'Rytmisk visuel stimulation kan fremkalde steady-state-responser i visuel cortex og videreføre timing-signaler gennem bredere thalamo-kortikale og kortiko-kortikale netværk. Et 40 Hz-input kan derfor fungere som et eksternt tidsstillads for gamma-relateret aktivitet. [3,4,6]',
    'sci.device.p2': 'FELIX anvender Invisible Spectral Flicker i stedet for traditionelt stroboskopisk lys. Ved at veksle mellem nøje kalibrerede spektrale faser er systemet udviklet til at bevare entrainment-effekten og samtidig reducere synligt flimmer, ubehag og distraktion. Det er væsentligt, hvis stimulationen skal kunne anvendes gentaget i en klinisk sammenhæng. [2,6]',
    'sci.device.p3': 'Studiet forudsætter ikke en allerede etableret antidepressiv effekt. Det undersøger, om et tolerabelt 40 Hz-signal kan engagere den foreslåede neurale mekanisme, og om eventuelle kliniske ændringer ledsages af målbare ændringer i gamma-relateret netværksfunktion. [6]',
    'sci.brainhealth.eyebrow': '',
    'sci.brainhealth.title': 'Bredere biologisk kontekst',
    'sci.brainhealth.summary': 'Prækliniske fund udvider perspektivet til stressbiologi, inflammation, plasticitet og andre processer med betydning for hjernens funktionelle robusthed.',
    'sci.brainhealth.intro': 'Ud over den umiddelbare synkronisering peger nyere præklinisk forskning på, at gamma-targeteret stimulation kan krydse spor med stressbiologi, immunologisk signalering, synaptisk adaptation og vedligeholdelsesprocesser i hjernen. Disse fund uddyber rationalet, men de er stadig primært prækliniske. [3,4,5,6,7]',
    'sci.brainhealth.card1.title': 'Stress og inflammation',
    'sci.brainhealth.card1.body': 'Kronisk stress og inflammatoriske udfordringer kan forstyrre gammaaktivitet i depressionsrelevante kredsløb, og nyere 40 Hz-studier peger på mulige effekter på mikroglia og inflammatoriske signalveje. [6,7]',
    'sci.brainhealth.card2.title': 'Plasticitet og adaptation',
    'sci.brainhealth.card2.body': 'Gammatiming er knyttet til langtidspotentiering, krydsfrekvent kobling og de betingelser, hvorunder kredsløb styrkes, reorganiseres og genvinder fleksibilitet. Det kan være en del af forklaringen på, hvorfor gentagen stimulation overhovedet kan tænkes at have betydning over tid. [5,6]',
    'sci.brainhealth.card3.title': 'Hjernens vedligeholdelse',
    'sci.brainhealth.card3.body': 'Separat dyreforskning peger på, at 40 Hz-stimulation også kan påvirke glymfatisk flow, vaskulær pulsation, astrocytfunktion og beslægtede vedligeholdelsesprocesser, hvilket udvider interessen for gamma ud over stemningskredsløb alene. [3,4]',
    'sci.brainhealth.note': 'Disse fund er vigtige for den bredere biologiske rationale, men de er endnu ikke dokumentation for, at FELIX-behandlingen giver sygdomsmodificerende effekter hos patienter med depression. På denne hjemmeside bruges de derfor som baggrund for, hvorfor gamma-targeteret stimulation er videnskabeligt interessant, ikke som et klinisk løfte.',
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
    'science.header.subtitle': 'A circuit-based account of depression and the translational rationale for 40 Hz neuromodulation.',
    'science.cta.text': 'See how the study is designed and which outcomes are used to test the mechanistic hypothesis.',
    'science.cta.button': 'View study design',

    // Team page
    'team.affiliations.label': 'Affiliated Institutions',

    // Hero
    'hero.tag': 'Clinical Trial — Psychiatric Centre Copenhagen',
    'hero.title': 'The FELIX Study',
    'hero.subtitle': 'A new light on brain health',
    'hero.description': 'A randomized, double-blinded clinical trial investigating whether 40 Hz light neurostimulation can alleviate symptoms of depression.',
    'hero.cta.learn': 'Learn about the study',
    'hero.cta.learn.study': 'The study',
    'hero.registered': 'Registered on ClinicalTrials.gov',
    'hero.registered.id': 'NCT05680220',

    // Background
    'bg.label': 'Background',
    'bg.title': 'About FELIX',
    'bg.p1': 'FELIX is a clinical research protocol investigating whether non-invasive 40 Hz gamma neurostimulation delivered through light can reduce depressive symptoms. The study is motivated by the need for novel and scalable treatment options for depression, where a substantial proportion of patients do not achieve sufficient benefit from existing interventions.',
    'bg.p2': 'The project was developed within Horizon Europe\'s Marie Skłodowska-Curie Actions programme under the Astrotech consortium, a multidisciplinary research and training network comprising 15 early-stage researchers across host institutions and projects spanning astrocyte biology, neurotechnology, and light-based stimulation. Building on a growing preclinical and translational evidence base linking 40 Hz sensory stimulation to neurobiological effects — including enhanced gamma-band oscillatory activity, glymphatic clearance, and neuroimmune modulation — FELIX constitutes a significant part of the early efforts to systematically evaluate this intervention in a psychiatric population. The study aims not only to assess clinical efficacy, but to contribute mechanistic insight into the neurophysiological processes engaged by gamma-frequency entrainment in the context of major depressive disorder.',
    'bg.p3': 'The study is conducted as a randomized, double-blinded, placebo-controlled trial at Psychiatric Centre Copenhagen in collaboration with the Technical University of Denmark and OptoCeutics ApS, developer of the patented Invisible Spectral Flicker technology. By evaluating a home-based, non-invasive intervention, FELIX examines whether this approach may be practical and potentially scalable as an adjunct to existing depression treatment.',
    'bg.stat1.value': '60',
    'bg.stat1.label': 'Participants in the trial',
    'bg.stat2.value': '6 weeks',
    'bg.stat2.label': 'Daily treatment at home',
    'bg.stat3.value': '40 Hz',
    'bg.stat3.label': 'Gamma frequency delivered via light',

    // Science
    'sci.label': 'The Science',
    'sci.title': 'Scientific Rationale',
    'sci.intro.p1': 'FELIX is grounded in a growing view of depression as a disorder that involves not only mood and neurochemistry, but also the organization of activity across distributed brain circuits. Within that framework, gamma-band activity offers a measurable window into how neuronal populations coordinate information in time.',
    'sci.intro.p2': 'Evidence from EEG, MEG, interventional studies, and animal models suggests that gamma abnormalities in depression are rarely captured by a single, uniform deficit. They are better understood as context-dependent and circuit-dependent dysregulation. For FELIX, that means the goal is not indiscriminate amplification of gamma activity, but a careful test of whether tolerable 40 Hz stimulation can bias vulnerable networks toward more coherent temporal organization.',
    'sci.animation.eyebrow': '',
    'sci.animation.title': 'Network timing in health and depression',
    'sci.animation.body': 'Brain function depends not only on which regions are active, but on when — and how precisely — they communicate. In healthy networks, populations of neurons coordinate their firing within narrow temporal windows, a process reflected in gamma-band oscillations (~30–80 Hz) generated by fast-spiking inhibitory interneurons. In depression, this temporal organization may break down: EEG studies reveal altered gamma synchrony and reduced coupling, particularly within and between frontoparietal, salience, and dorsal attention circuits. The pattern is not simply one of diminished activity, but of communication that loses precision in time — leaving the networks that normally regulate attention, affect, and cognitive control less able to work in concert.',
    'sci.animation.left': 'Coordinated',
    'sci.animation.right': 'Dysregulated',
    'sci.disclosure.eyebrow': '',
    'sci.disclosure.title': 'A layered rationale for FELIX',
    'sci.disclosure.body': 'The scientific case spans microcircuit physiology, regional network findings, treatment-response literature, sensory entrainment, and broader biological context. The themes below unpack the main levels of that argument.',
    'sci.disclosure.view': 'Open layer',
    'sci.disclosure.active': 'Active layer',
    'sci.disclosure.detailLabel': 'Full explanation',
    'sci.hypothesis.eyebrow': 'Mechanistic model',
    'sci.hypothesis.title': 'Working hypothesis in FELIX',
    'sci.hypothesis.body': 'The study is built around a translational sequence linking sensory input to circuit physiology and then, potentially, to clinical outcome. Each step is testable through both clinical and electrophysiological measures, and the full chain remains an empirical question.',
    'sci.hypothesis.step1.title': 'Sensory drive',
    'sci.hypothesis.step1.body': 'Invisible 40 Hz stimulation delivers a precisely timed signal to the visual system.',
    'sci.hypothesis.step2.title': 'Gamma entrainment',
    'sci.hypothesis.step2.body': 'That periodic input is expected to increase or normalize gamma-band synchronization in relevant cortical circuits.',
    'sci.hypothesis.step3.title': 'Network coordination',
    'sci.hypothesis.step3.body': 'Improved timing may support more coherent communication between perceptual, affective, and cognitive-control networks.',
    'sci.hypothesis.step4.title': 'Clinical outcome',
    'sci.hypothesis.step4.body': 'If those network effects are meaningful, they may translate into improved mood, cognition, or sleep.',
    'sci.eeg.eyebrow': '',
    'sci.eeg.title': 'Relating clinical change to circuit engagement',
    'sci.eeg.body': 'FELIX is designed to evaluate both clinical outcome and biological plausibility. Clinical scales establish whether symptoms and functioning change. EEG makes it possible to ask, in parallel, whether 40 Hz stimulation affects the neural dynamics the intervention is intended to engage.',
    'sci.eeg.p1': 'That combination matters because a psychiatric intervention must ultimately be judged by patient-level outcome, while gaining scientific strength when its effects can also be anchored in measurable circuit physiology.',
    'sci.eeg.p2': 'In FELIX, EEG is used to test whether clinical change occurs alongside change in temporal organization and gamma-related network function. This is especially relevant in a literature where baseline physiology and response patterns are unlikely to be identical across patients.',
    'sci.eeg.card1.title': 'Clinical relevance',
    'sci.eeg.card1.body': 'Symptom and functioning measures remain essential, because they determine whether the intervention matters at the level of patient outcome.',
    'sci.eeg.card2.title': 'Electrophysiological grounding',
    'sci.eeg.card2.body': 'EEG provides a non-invasive view of temporal coordination across brain networks and allows the study to examine whether gamma-related changes accompany clinical development.',
    'sci.eeg.card3.title': 'Heterogeneity and stratification',
    'sci.eeg.card3.body': 'When baseline physiology and circuit dysregulation differ across patients, mechanistic measures may help explain why response patterns are not necessarily uniform.',
    'sci.eeg.note': 'EEG is therefore included as a mechanistic secondary endpoint: not because gamma is already an established clinical biomarker, but because it offers a way to examine the relationship between symptom change and measurable change in circuit function.',
    'sci.gamma.title': 'Gamma as a marker of circuit organization',
    'sci.gamma.summary': 'Gamma reflects precise excitatory-inhibitory timing and is closely linked to information selection, local circuit integrity, and plasticity.',
    'sci.gamma.p1': 'Gamma oscillations, typically in the 30-80 Hz range, emerge when neuronal populations must coordinate activity with high temporal precision. They are associated with attention, working memory, sensory integration, and the selective routing of information. [1,6]',
    'sci.gamma.p2': 'At the microcircuit level, gamma arises from reciprocal interactions between excitatory pyramidal cells and inhibitory interneurons, especially parvalbumin-positive (PV+) and somatostatin-positive (SST+) populations. These cell types are central to precise timing and are also relevant to stress-related and depressive pathology. [1,5,6]',
    'sci.gamma.p3': 'Gamma is not simply a frequency component within an EEG trace. It is also linked to synaptic plasticity, long-term potentiation, and cross-frequency coupling, which makes it informative not only about coordination in the moment, but also about when networks may strengthen, reorganize, and adapt. [5,6]',
    'sci.depression.title': 'How does dysregulation appear in depression?',
    'sci.depression.summary': 'The literature does not point to one universal gamma deficit, but to heterogeneous dysregulation across mood-relevant circuits.',
    'sci.depression.p1': 'The findings are regional and context dependent. Abnormal gamma activity has been described in medial prefrontal cortex, hippocampus, nucleus accumbens, anterior cingulate cortex, and temporal regions. In some paradigms gamma is reduced; in others it is elevated or poorly coordinated across regions. [1,6]',
    'sci.depression.p2': 'One major interpretation is that depression involves disturbed excitatory-inhibitory balance and impaired microcircuit timing. Preclinical work further suggests that both chronic stress and inflammatory challenge can contribute to gamma disruption in circuits relevant to affect regulation and cognition. [6,7]',
    'sci.depression.p3': 'The clinically important point is therefore not whether gamma always moves in one direction, but that dysregulation may take different forms depending on region, task, symptom profile, and baseline physiology. That is one reason the mechanism is worth measuring directly.',
    'sci.rationale.title': 'How does this fit within the broader treatment literature?',
    'sci.rationale.summary': 'Different treatments may have different entry points while still converging, in part, through the retuning of network dynamics.',
    'sci.rationale.p1': 'A circuit perspective helps connect interventions that are often described in separate languages. SSRIs, SNRIs, ketamine, rTMS, DBS, and sensory entrainment influence the brain through different mechanisms, yet all may shape how circuits synchronize, communicate, and reorganize over time. In that setting, gamma becomes one possible window into treatment-relevant network retuning. [6]',
    'sci.rationale.p2': 'This broader literature is also why gamma has attracted interest as a biomarker candidate. Multiple studies associate gamma changes with symptom burden, treatment response, or theta-gamma coupling, and some findings suggest that baseline state may help explain differences in response. [1,6]',
    'sci.rationale.p3': 'That does not lead to the simplistic conclusion that more gamma is always preferable. A more plausible model is that effective treatment moves networks toward a more functional degree of rhythmic coordination. From that perspective, 40 Hz stimulation is of interest because it allows the study to test whether externally delivered timing can influence circuits in a clinically relevant direction. [1,2,6]',
    'sci.device.title': 'What is FELIX examining with 40 Hz light stimulation?',
    'sci.device.summary': 'The intervention delivers an external timing signal while the study asks whether this is accompanied by measurable circuit effects and clinical change.',
    'sci.device.p1': 'Rhythmic visual stimulation can generate steady-state responses in visual cortex and propagate timing signals through wider thalamo-cortical and cortico-cortical networks. A 40 Hz input can therefore act as an external scaffold for gamma-related activity. [3,4,6]',
    'sci.device.p2': 'FELIX uses Invisible Spectral Flicker rather than conventional stroboscopic light. By alternating carefully calibrated spectral phases, the system is designed to preserve entrainment while reducing visible flicker, discomfort, and distraction. That is important if stimulation is to be used repeatedly in a clinical setting. [2,6]',
    'sci.device.p3': 'The study does not presume an established antidepressant effect in advance. It examines whether a tolerable 40 Hz signal can engage the proposed neural mechanism, and whether any clinical change is accompanied by measurable change in gamma-related network function. [6]',
    'sci.brainhealth.eyebrow': '',
    'sci.brainhealth.title': 'Broader biological context',
    'sci.brainhealth.summary': 'Preclinical findings extend the discussion to stress biology, inflammation, plasticity, and other processes relevant to functional brain resilience.',
    'sci.brainhealth.intro': 'Beyond immediate synchronization, newer preclinical work suggests that gamma-targeted stimulation may intersect with stress biology, immune signaling, synaptic adaptation, and maintenance processes in the brain. These findings deepen the rationale, but they remain primarily preclinical. [3,4,5,6,7]',
    'sci.brainhealth.card1.title': 'Stress and inflammation',
    'sci.brainhealth.card1.body': 'Chronic stress and inflammatory challenges can disrupt gamma activity in depression-relevant circuits, and emerging 40 Hz studies suggest possible effects on microglia and inflammatory pathways. [6,7]',
    'sci.brainhealth.card2.title': 'Plasticity and adaptation',
    'sci.brainhealth.card2.body': 'Gamma timing is linked to long-term potentiation, cross-frequency coupling, and the conditions under which circuits strengthen, reorganize, and regain flexibility. This may help explain why repeated stimulation could matter over time. [5,6]',
    'sci.brainhealth.card3.title': 'Brain maintenance',
    'sci.brainhealth.card3.body': 'Separate animal work suggests that 40 Hz stimulation may also influence glymphatic flow, vascular pulsatility, astrocyte function, and related maintenance processes, widening interest beyond mood circuits alone. [3,4]',
    'sci.brainhealth.note': 'These findings matter for the broader biological rationale, but they are not evidence that the FELIX intervention confers disease-modifying effects in patients with depression. On this website they are therefore presented as scientific context, not as a clinical promise.',
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
