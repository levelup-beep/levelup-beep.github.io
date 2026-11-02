// Inhalte der Seite /job/ — Bereich Job, nur Mareike, Ich-Form.
// Quelle: Mareikes Entwurf fuer-den-job.html (Stand 02.11.2026).
// Gemeinsame Teile mit /business/ stehen in ../bereich/gemeinsam.js.
import {
  ticker,
  ueber,
  heroBild,
  heroFakten,
  paket,
  webinar,
  fragenGemeinsam,
  glow,
  footer,
} from "../bereich/gemeinsam.js";

const cta = { label: "Auf die Warteliste", to: "warteliste/?gruppe=job" };

export const seite = {
  ticker,
  cta,
  hero: {
    bereich: "job",
    kicker: "KI für deinen Job",
    kicker2: "Nur für Frauen",
    headline: ["Dein Job.", "Deine KI.", "Dein System."],
    banner: "KI-Power für deinen Arbeitsalltag",
    scribble: "Klick. Prompt. Done.",
    lead: "Du tippst jede Mail neu, baust jede Präsentation von vorn und erklärst der KI jedes Mal, wer du bist. Damit ist Schluss. Du richtest Claude einmal richtig ein. Danach kennt es deinen Job und trifft deinen Ton.",
    fakten: heroFakten,
    ctaAngebot: "Zum Angebot",
    byline: "Mareike · KI-Trainerin für Claude und Microsoft 365 Copilot",
    bild: heroBild,
  },
  problem: {
    kicker: "Das kennst du",
    headline: "Du nutzt KI längst. Oder du weißt, dass du es solltest.",
    absaetze: [
      "Mal kommt Gold raus, mal Grütze. Du tippst jedes Mal alles neu und bist nicht sicher, ob du es richtig machst. Dabei wartet die nächste Mail schon, die Tabelle will niemand lesen, und die Präsentation muss Freitag fertig sein.",
    ],
    pointe: "Das liegt nicht an dir. Es fehlt dir kein Talent. Es fehlt ein System.",
  },
  aufgaben: {
    kicker: "Deine Aufgaben",
    headline: "Das gibst du ab",
    gruppen: [
      {
        titel: "Mails und Abstimmung",
        punkte: ["Mails in deinem Ton entwerfen", "Protokolle aus Notizen schreiben", "Lange Texte zusammenfassen"],
      },
      {
        titel: "Office",
        punkte: ["Excel-Tabellen auswerten", "Word-Dokumente überarbeiten", "PowerPoint-Entwürfe bauen"],
      },
      {
        titel: "Dein System",
        punkte: ["Ein Profil, das dich kennt", "Ein Projekt für deinen Job", "Aufträge, die du wiederverwendest"],
      },
    ],
  },
  angebot: {
    kicker: "Deine Kurse",
    headline: "Drei Wege zu deinem KI-System",
    kurse: [
      {
        titel: "Der eine Tag",
        text: "Am Abend hast du ein Claude-Setup, das dich kennt, und fünf eigene Aufträge in der Bibliothek.",
        fakten: ["6 Stunden live, an einem Tag", "Online, maximal 12 Plätze"],
      },
      {
        titel: "Sechs Wochen",
        text: "Du lernst abends neben der Arbeit und setzt zwischen den Terminen an deinen echten Aufgaben um.",
        fakten: ["6 Termine à 2 Stunden", "Online, maximal 12 Plätze"],
      },
      {
        titel: "Die Intensivwoche",
        text: "Eine Woche raus aus dem Tagesgeschäft. Danach arbeitest du anders, mit fertigen Routinen für deinen Job.",
        fakten: ["5 halbe Tage, 20 Stunden", "Online, 4 bis 12 Plätze"],
      },
    ],
  },
  ergebnis: {
    kicker: "Das Ergebnis",
    headline: "Was du danach hast",
    punkte: [
      "Eine ausgefüllte Datenschutz-Checkliste",
      "Ein personalisiertes Claude-Profil",
      "Eine Promptbibliothek mit eigenen Aufträgen",
      "Je nach Kurs: Projekt, Office-Routinen und eigene Skills",
    ],
    hinweis: "Mindestens 60 Prozent der Zeit arbeitest du selbst, an Aufgaben aus deinem Job.",
  },
  zielgruppe: {
    kicker: "The Party",
    headline: "Für wen das ist",
    ja: [
      "Du arbeitest angestellt und jonglierst Mails, Organisation, Word, Excel und PowerPoint",
      "Du willst KI für deine Arbeit nutzen, ohne technischen Hintergrund",
      "Du hast Aufgaben, die dich jede Woche Zeit kosten",
    ],
    neinHeadline: "Für wen das nicht ist",
    nein: "Wenn du Programmieren lernen oder eine Tool-Tour durch zehn Anwendungen willst, bist du hier falsch.",
  },
  ueber,
  paket,
  webinar: { ...webinar, cta: { label: "Zur Warteliste", to: "warteliste/?gruppe=job" } },
  fragen: {
    kicker: "Häufige Fragen",
    headline: "Fragen",
    liste: [
      ...fragenGemeinsam,
      {
        frage: "Darf ich Claude im Job nutzen?",
        antwort:
          "Das klären wir zuerst. Bevor du eine Aufgabe stellst, weißt du, welche Daten hineingehören und welche nicht.",
      },
      {
        frage: "Gibt es schon einen Kurs vor dem Start?",
        antwort:
          "Ja. Vom 30.11. bis 04.12.2026 läuft der Pilotkurs über workshops.de, fünf halbe Tage, online, nur für Frauen.",
        link: {
          label: "Zum Pilotkurs",
          to: "https://workshops.de/seminare-schulungen-kurse/level-up-ladies-claude",
        },
      },
    ],
  },
  glow,
  footer: footer("KI-Power für deinen Arbeitsalltag", "job"),
};
