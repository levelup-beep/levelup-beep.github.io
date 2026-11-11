// Inhalte der Startseite (/) fuer alle drei Bereiche: Schule, Business, Job.
// Eigenstaendige Datei — Schule (src/) und Job/Business (frauen/) haben ihre eigenen.
//
// Kopfbereich, Laufband und Kurs-Kacheln aus Mareikes Entwurf
// (Repo level-up-ladies-website, index.html), Entscheidung Insa 02.11.2026.
// Nur Vornamen (siehe CLAUDE.md).
//
import { kontaktEintrag } from "../shared/kontakt.js";

export const ticker = [
  "Klick. Prompt. Done.",
  "Das ist dein Glow-up",
  "Level Up, Ladies",
  "Future is female",
  "Knowledge = Power",
  "Wir nehmen uns den Raum",
];

export const hero = {
  issue: "Issue 01",
  season: "Season: Glow up",
  headline: ["Level Up,", "Ladies."],
  banner: ["KI-Power für Frauen", "in Job, Schule und Business"],
  tagline: [
    "Du lernst, mit Claude so zu arbeiten, dass es deine Aufgaben kennt und deinen Ton trifft.",
    "Keine Spielerei. Deine echte Arbeit, die dich jede Woche Zeit kostet.",
  ],
  byline: "Mareike und Insa · Wir schließen den digitalen Gap",
  scribbles: {
    topRight: "Future is female",
    bottomLeft: "Knowledge = Power",
  },
  ctaPrimary: "Auf die Warteliste",
  ctaPrimaryHref: "warteliste/",
  ctaSecondary: "Finde deinen Kurs",
  ctaSecondaryTarget: "#wege",
  image: {
    src: "start/collage.jpg",
    width: 972,
    height: 1136,
    alt: "Mit KI erstellte Collage aus Schwarz-Weiß-Porträts unterschiedlicher Frauen in zerrissenem Papier",
  },
};

// Vorstellung beider Gruenderinnen in der Wir-Form, wie auf /frauen/.
// Allein in der Ich-Form: Insa nur auf /schule/, Mareike auf Job und Business.
export const about = {
  kicker: "The Founders",
  headline: "Wer sind wir?",
  intro:
    "Zwei Frauen, ein Ziel: KI raus aus der Buzzword-Blase und rein in deinen Alltag. Das Problem ist nie die Technologie. Es ist der Zugang.",
  people: [
    {
      tag: "Player 001",
      name: "Insa",
      role: "Lehrerin · Mathe, Informatik, GL",
      linkedin: "https://www.linkedin.com/in/insa-riese-303946316/",
      initials: "IR",
      photo: "insa.jpg",
      photoPosition: "60% 16%",
      photoAlt: "Insa Riese, Gründerin von Level Up Ladies",
      photoLabel: "Foto: public/frauen/insa.jpg",
      paragraphs: [
        "Ich bin Insa. Hauptberuflich unterrichte ich an einer Gesamtschule in NRW, daneben bringe ich Erwachsenen bei, wie sie mit KI arbeiten — statt sie nur auszuprobieren.",
        "Ich sehe überall dasselbe Muster: Frauen, die KI längst nutzen könnten, sich aber nicht rantrauen. Oder sie nutzen, ohne je über den ersten Chat hinauszukommen. Genau da setzen wir an.",
      ],
      quote: "Ohne Angst. Ohne Zauberei. Ohne die ganzen Buzzwords.",
    },
    {
      tag: "Player 002",
      name: "Mareike",
      role: "Ingenieurin · Unternehmerin · KI-Trainerin",
      linkedin: "https://www.linkedin.com/in/mareikekirch/",
      initials: "MK",
      photo: "mareike.jpg",
      photoPosition: "62% 22%",
      photoAlt: "Mareike Kirch, Ingenieurin, Unternehmerin und KI-Trainerin",
      photoLabel: "Foto: public/frauen/mareike.jpg",
      paragraphs: [
        "Ich bin Mareike. Ingenieurin, Unternehmerin und KI-Trainerin. Ich habe den Konzern verlassen und ein Bootcamp mitgegründet. Dann hat KI unser Geschäftsmodell getroffen.",
        "Heute nutze ich sie jeden Tag und zeige Frauen in Job und Business, wie sie Claude in ihrem Arbeitsalltag nutzen.",
      ],
      quote: "Kein Talent-Problem. Ein Zugangs-Problem.",
    },
  ],
  accent: "Knowledge = Power",
  scribble: "Nicht warten, bis man uns fragt",
  closing: "Nicht warten, bis man uns fragt. Wir machen das einfach selbst.",
};

// "So startest du": drei Schritte, direkt unter dem Kopfbereich.
// Webinare: bewusst ohne Rhythmus und Preis, nur "regelmaessig" (Insa, 11.11.2026).
export const start = {
  kicker: "Dein Einstieg",
  headline: "So startest du",
  intro: "Drei Schritte vom ersten Reinschauen bis zu deinem eigenen KI-System.",
  schritte: [
    {
      nr: "01",
      titel: "Level-Check machen",
      text: "In 3 Minuten weißt du, wo du mit KI stehst. Danach trägst du dich auf die Warteliste ein und bekommst alle Termine zuerst.",
      links: [
        { label: "Zum Level-Check", to: "quiz/" },
        { label: "Auf die Warteliste", to: "warteliste/" },
      ],
    },
    {
      nr: "02",
      titel: "Webinar besuchen",
      text: "Wir bieten regelmäßig offene Webinare an, online. Du lernst uns kennen und siehst, wie wir mit Claude arbeiten. Die Einladung kommt über die Warteliste.",
      links: [{ label: "Einladung bekommen", to: "warteliste/" }],
    },
    {
      nr: "03",
      titel: "Kurs oder Workshop wählen",
      text: "Schule, Job oder Business: Such dir den Weg aus, der zu deiner Arbeit passt. Live in kleiner Gruppe, an deinen echten Aufgaben.",
      links: [{ label: "Zu den Bereichen", to: "#wege" }],
    },
  ],
};

export const kurse = {
  kicker: "Deine Kurse",
  headline: "Wo arbeitest du?",
  intro: "Live in kleiner Gruppe. Höchstens 12 Frauen. An deinen echten Aufgaben.",
  karten: [
    {
      titel: "Im eigenen Business",
      versprechen: "Anfragen, Angebote und Verwaltung als feste Abläufe abgeben. Mit Mareike.",
      fakten: ["Für Solo-Unternehmerinnen", "Kurs: Business Automation mit KI", "Online, höchstens 12 Frauen"],
      button: "Zum Kurs",
      to: "business/",
    },
    {
      titel: "In der Schule",
      versprechen: "Arbeitsblätter, Feedback und Präsentationen schneller fertig. Mit Insa.",
      fakten: [
        "Für Lehrerinnen",
        "Season 01: Level für Level, Start mit „Claude kennt dich“",
        "Workshop-Tag am Wochenende: Claude einrichten, hands-on",
      ],
      button: "Zur Season",
      to: "schule/",
    },
    {
      titel: "Im Job",
      versprechen: "Mails, Protokolle und Office-Aufgaben schneller vom Tisch. Mit Mareike.",
      fakten: ["Für angestellte Frauen", "Ein Tag, sechs Wochen oder Intensivwoche", "Online, höchstens 12 Frauen"],
      button: "Zu den Kursen",
      to: "job/",
    },
  ],
};

export const footer = {
  brand: "Level Up, Ladies!",
  tagline: "KI-Power für Frauen in Job, Schule und Business",
  linksHeadline: "Backstage",
  links: [
    { label: "Deine Kurse", to: "#wege" },
    { label: "Wer sind wir?", to: "#ueber-uns" },
    { label: "Für die Schule", to: "schule/" },
    { label: "Für den Job", to: "job/" },
    { label: "Für dein Business", to: "business/" },
    { label: "Warteliste", to: "warteliste/" },
  ],
  contactHeadline: "Kontakt",
  contact: [kontaktEintrag],
  socialHeadline: "Social",
  social: [
    { label: "LinkedIn Insa", href: "https://www.linkedin.com/in/insa-riese-303946316/" },
    { label: "LinkedIn Mareike", href: "https://www.linkedin.com/in/mareikekirch/" },
    { label: "Instagram Mareike", href: "https://www.instagram.com/mareike.kirch/" },
  ],
  outro: "Setup gemacht. Masterprompt läuft. Kreativ gestartet.",
  quizLink: { label: "Der Level-Check: Wo stehst du im KI-Gap?", to: "quiz/" },
  legal: [
    { label: "Impressum", to: "impressum/" },
    { label: "Datenschutz", to: "datenschutz/" },
    { label: "KI-Transparenz", to: "ki-transparenz/" },
  ],
  copyright: "© 2026 Level Up Ladies | Von Frauen, für Frauen",
  madeWith: "Made with ❤️ and Claude",
};
