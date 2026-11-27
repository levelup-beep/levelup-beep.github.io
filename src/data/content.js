// Alle Inhalte der Landingpage — hier editieren, nicht in den Komponenten.
// LINKS: bewusst noch keine. Buttons und Footer-Eintraege sind vorerst ohne Ziel.
// Sobald die Ziele feststehen: hier eine "href"-Angabe ergaenzen, die Komponenten
// machen daraus automatisch einen Link (siehe Button.jsx).
import { kontaktEintrag, kontaktMail } from "../../shared/kontakt.js";


export const ticker = [
  "Klick. Prompt. Done.",
  "Das ist dein Glow-up",
  "Level up, Ladies",
  "Future is female",
  "Keine Passagiere — wir lenken das Spiel",
  "Hack the system",
  "Knowledge = Power",
  "Wir nehmen uns den Raum",
];

// Hinweis auf den KI-Adventskalender: Adventskranz neben dem Magenta-Banner im Kopfbereich.
// Verschwindet automatisch nach dem Datum in "bis" (Zeit in Berlin).
export const adventHinweis = {
  href: "/advent/",
  bis: "2027-01-01T00:00:00+01:00",
  notiz: "Zum\nAdventskalender",
  label: "Zum KI-Adventskalender für Lehrerinnen",
};

export const hero = {
  issue: "Issue 01",
  season: "Season: Glow up",
  headline: ["Level Up,", "Ladies."],
  banner: ["KI-Power für Frauen", "im Bildungsbereich"],
  tagline: ["Wir schließen den digitalen Gap.", "Gemeinsam. Mit Claude. Ohne Angst."],
  byline: "Insa · Wir schließen den digitalen Gap",
  scribbles: {
    topRight: "Future is female",
    midRight: "Hack the system",
    bottomLeft: "Knowledge = Power",
  },
  ctaPrimary: "Auf die Warteliste",
  // "Mein Angebot" vorerst ausgeblendet (Insa, 27.11.2026)
  ctaSecondary: "",
  portraitAlt: "Insa in Schwarz-Weiß am Schreibtisch, das Kinn auf die Hand gestützt",
};

// Den Workshop fuer den Bildungsbereich gibt Insa allein.
// Diese Sektion bleibt einpersonig — Mareike gehoert ausschliesslich
// zur Seite fuer alle Frauen unter frauen/content.js.
export const about = {
  kicker: "Player 001",
  headline: "Wer bin ich?",
  // Mission (Insa, 27.11.2026). Zahlen aus JIM-Studie 2026 (mpfs), S. 70: 92 % nutzen KI zumindest selten,
  // 75 % der KI-Nutzenden für Hausaufgaben und Lernen. „Als Abkürzung“ ist Insas Einschätzung, nicht aus der Studie.
  paragraphs: [
    "Ich bin Insa. Lehrerin für Mathe, Informatik und GL an einer Gesamtschule in NRW.",
    "92 Prozent der Jugendlichen nutzen KI, drei Viertel davon für Hausaufgaben und Lernen.* Viel zu oft als Abkürzung: Sie lassen die KI denken, statt selbst zu denken.",
    "Deshalb ist mir wichtig: Wir Lehrerinnen eignen uns KI-Skills an, bevor wir uns überfordert fühlen. Wer selbst mit KI arbeitet,",
  ],
  liste: [
    "weiß, was möglich ist,",
    "wird sicher im Umgang mit den Tools,",
    "versteht, was KI mit unseren Schülerinnen und Schülern macht,",
    "und kann Aufgaben so verändern, dass KI sinnvoll dazugehört – und das Denken trotzdem bei den Kindern bleibt.",
  ],
  quelle: "* JIM-Studie 2026, Medienpädagogischer Forschungsverbund Südwest (mpfs): 1.200 Jugendliche von 12 bis 19 Jahren.",
  accent: "Knowledge = Power",
  scribble: "Fang einfach an",
  photoAlt: "Insa Riese, Lehrerin und Gründerin von Level Up Ladies",
  photoLabel: "Foto: public/insa.jpg",
  closing: "Wir warten nicht, bis es uns jemand zeigt. Wir zeigen es uns gegenseitig.",
};

// "Das bekommst du": was in den Workshops steckt, statt der ausfuehrlichen
// Level-01-Vorstellung (Insa, 11.11.2026). Alle Punkte stammen aus den
// Level-Beschreibungen weiter unten (workshop, series) und aus "Wer bin ich".
export const lernen = {
  kicker: "In der Pipeline",
  headline: "Daran arbeite ich gerade",
  intro:
    "Ich baue gerade Workshops für Lehrerinnen: Du richtest Claude so ein, dass es für deinen Schulalltag arbeitet. Einmal richtig eingerichtet, reicht ein Satz. Das wird drinstecken:",
  gruppen: [
    {
      titel: "Dein Setup",
      punkte: [
        "Claude kennt dein Fach, deine Klassen und deine Standards",
        "Ein Projekt für deine wiederkehrenden Aufgaben",
        "Eigene Prompts, die du immer wieder nutzt",
      ],
    },
    {
      titel: "Dein Material",
      punkte: [
        "Arbeitsblätter vom leeren Blatt bis fertig",
        "Präsentationen, die sich fast von selbst bauen",
        "Material, das aussieht wie gekauft",
      ],
    },
    {
      titel: "Dein Weg",
      punkte: [
        "Keine Vorkenntnisse nötig, nur ein Laptop und Mut",
        "Hands-on an deinen eigenen Aufgaben",
        "Ohne Angst, ohne Zauberei, ohne Buzzwords",
      ],
    },
  ],
  pointe: "Wann es losgeht, steht noch nicht fest. Auf der Warteliste erfährst du es als Erste.",
};

// "Mein Angebot": steht unten vor dem Schlussblock, angelehnt an Mareikes
// "Deine Kurse – Drei Wege" auf /job/. Insas Workshops sind privat, keine
// Buchung durch Schulen. Webinare ohne Rhythmus, nur "regelmaessig"
// (Insa, 11.11.2026).
export const angebot = {
  kicker: "Mein Angebot",
  headline: "Drei Wege, mit mir zu lernen",
  intro:
    "Für Lehrerinnen, die KI für ihren eigenen Arbeitsalltag nutzen wollen. Alle Termine bekommst du zuerst über die Warteliste.",
  wege: [
    {
      titel: "Offene Webinare",
      text: "Zum Reinschauen: Du lernst mich kennen und siehst, wie ich mit Claude arbeite.",
      fakten: ["Regelmäßige Termine", "Einladung über die Warteliste"],
    },
    {
      titel: "Season 01",
      text: "Level für Level vom ersten Setup bis zum fertigen Material. Jedes Level ist ein eigener Workshop.",
      fakten: ["Start mit Level 01: Deine KI kennt dich", "Danach: Sag, was du willst · Dein erstes Tool · Von der Idee zum Projekt", "60 bis 75 Minuten pro Level"],
      link: { label: "Alle Level ansehen", to: "#serie" },
    },
    {
      titel: "Workshop-Tag am Wochenende",
      text: "Ein Tag, hands-on: Du richtest Claude so ein, dass es dich und deine Arbeit kennt.",
      fakten: ["Ein Tag am Wochenende", "Hands-on: Claude einrichten", "Termin über die Warteliste"],
    },
  ],
  button: "Auf die Warteliste",
};

export const workshop = {
  level: "Level 01",
  levelTitle: "The Setup",
  headline: "Deine KI kennt dich",
  intro:
    "Das ist dein erster Schritt in ein System, das dir dauerhaft Zeit spart. Im Workshop lernst du, wie Claude dich und deine Arbeit versteht – und wie du dein eigenes, maßgeschneidertes Setup aufbaust.",
  tapeLabel: "Essential",
  cards: [
    {
      no: "01",
      title: "Datenschutz zuerst",
      body: "Bevor du irgendwas eintippst: Training aus, die wichtigsten Einstellungen geprüft.",
      tag: "Einstellungs-Check",
    },
    {
      no: "02",
      title: "Deine KI-Visitenkarte",
      body: "Claude lernt, wer du bist: dein Fach, deine Klassen, dein Ton. Einmal in den Einstellungen, dann kennt dich jeder Chat. Schon ein Ich-Profil? Dann machen wir ein Upgrade.",
      tag: "Character Setup",
    },
    {
      no: "03",
      title: "Dein Floskel-Filter",
      body: "Wörter und Sätze, die du nie wieder lesen willst. Ab jetzt klingt Claude nach dir, nicht nach Pressemitteilung.",
      tag: "Superpower",
      highlight: true,
    },
  ],
  cardScribble: "Klick. Prompt. Done.",
  outcomesKicker: "Dein Goodiebag",
  outcomesHeadline: "Das nimmst du mit:",
  outcomes: [
    "Deine KI-Visitenkarte, fest in den Einstellungen",
    "Sichere Einstellungen, Training aus",
    'Das erste Erfolgserlebnis ("Ja, das geht!")',
    "Die Grundlage für alle weiteren Level",
  ],
  detailsKicker: "The Stats",
  detailsHeadline: "Der Workshop:",
  facts: [
    { label: "Dauer", value: "60 Minuten" },
    { label: "Level", value: "Anfängerin (wirklich!)" },
    { label: "Voraussetzungen", value: "Keine — außer: ein Laptop und Mut" },
  ],
  bringHeadline: "Dein Loadout:",
  bring: [
    "Deinen Laptop",
    "10 Minuten Zeit für eine kurze Befragung",
    "Falls vorhanden: dein Ich-Profil aus dem Adventskalender oder dem Freebie",
    "Die Bereitschaft, was Neues zu probieren",
  ],
  ctaLabel: "Auf die Warteliste",
};

export const series = {
  kicker: "Season 01",
  headline: "Level für Level",
  intro:
    "Jedes Level ist ein eigener Workshop. Du startest mit deinem Setup und baust darauf auf, bis zum fertigen Material.",
  scribble: "Level 07: Endgegner",
  workshops: [
    {
      level: "Level 01",
      title: "Deine KI kennt dich",
      description: "Dein Setup: Claude lernt, wer du bist und wie du arbeitest.",
      duration: "60 Min",
      tag: "Einsteigerin",
    },
    {
      level: "Level 02",
      title: "Sag, was du willst",
      description: "Ein Masterprompt für eine Aufgabe, die jede Woche wiederkommt.",
      duration: "60 Min",
      tag: "Auftraggeberin",
    },
    {
      level: "Level 03",
      title: "Dein erstes Tool",
      description: "Quiz, Übung oder Rechner: ein eigenes kleines Tool, offline und ohne Konto.",
      duration: "75 Min",
      tag: "Erfinderin",
    },
    {
      level: "Level 04",
      title: "Von der Idee zum Projekt",
      description: "Ein Projekt für eine wiederkehrende Unterrichtsaufgabe, mit deinem ersten fertigen Dokument.",
      duration: "60 Min",
      tag: "Projektleiterin",
    },
  ],
  moreLabel: "6 weitere Level",
  moreHint: "Die komplette Season",
};

export const cta = {
  kicker: "Ready?",
  headline: "Glow up.",
  subheading: ["Lass uns den digitalen Gap schließen.", "Gemeinsam. Mit Claude. Ohne Angst."],
  song: "Klick. Prompt. Done. – Das ist dein Glow-up.",
  button: "Auf die Warteliste",
  note: "Workshops sind in Planung. Du willst als Erste davon hören? Setz dich auf die Warteliste.",
  buchen: {
    frage: "Du hast Fragen oder Interesse?",
    link: "Schreib mir.",
    href: `mailto:${kontaktMail}?subject=Workshop-Anfrage%3A%20Level%20Up%2C%20Ladies%21&body=Hallo%20Insa%2C%0D%0A%0D%0A`,
  },
};

export const footer = {
  brand: "Level Up, Ladies!",
  tagline: "KI-Power für Frauen im Bildungsbereich",
  linksHeadline: "Backstage",
  // "Über Level Up Ladies" zeigt vorerst auf den Über-mich-Bereich dieser Seite.
  // Geplant ist eine eigene Seite zur Philosophie hinter Level Up Ladies (ROADMAP 3.4).
  links: [
    { label: "Über Level Up Ladies", to: "#ueber-mich" },
    { label: "In der Pipeline", to: "#lernen" },
    { label: "Warteliste", to: "/warteliste/" },
  ],
  contactHeadline: "Kontakt",
  contact: [kontaktEintrag],
  socialHeadline: "Social",
  social: [
    { label: "LinkedIn Insa", href: "https://www.linkedin.com/in/insa-riese-303946316/" },
  ],
  legal: [
    { label: "Impressum", to: "impressum/" },
    { label: "Datenschutz", to: "datenschutz/" },
    { label: "KI-Transparenz", to: "ki-transparenz/" },
  ],
  outro: "Setup gemacht. Masterprompt läuft. Kreativ gestartet.",
  crossLink: { label: "Nicht aus der Schule? → Alle Angebote auf der Startseite", to: "" },
  quizLink: { label: "Der Level-Check: Wo stehst du im KI-Gap?", to: "quiz/" },
  copyright: "© 2026 Level Up Ladies | Für Lehrerinnen, von einer Lehrerin",
  madeWith: "Made with ❤️ and Claude",
};

// Anmeldung: Alle Anmelde-Buttons fuehren zur Brevo-Warteliste.
export const signupHref = `${import.meta.env.BASE_URL}warteliste/`;
