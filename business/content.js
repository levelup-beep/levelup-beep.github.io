// Inhalte der Seite /business/ — Bereich Business, nur Mareike, Ich-Form.
// Quelle: Mareikes Entwurf fuers-business.html (Stand 02.11.2026).
// Gemeinsame Teile mit /job/ stehen in ../bereich/gemeinsam.js.
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

const cta = { label: "Auf die Warteliste", to: "warteliste/?gruppe=business" };

export const seite = {
  ticker,
  cta,
  hero: {
    kicker: "KI für dein Business",
    kicker2: "Nur für Frauen",
    headline: ["Dein Business.", "Deine KI.", "Dein System."],
    banner: "Effizienz für Solo-Unternehmerinnen",
    scribble: "Klick. Prompt. Done.",
    lead: "Du machst alles selbst: Anfragen, Angebote, Rechnungen, Beiträge. Gib die Aufgaben, die jede Woche wiederkommen, als feste Abläufe an Claude ab. Die Freigabe bleibt bei dir.",
    fakten: heroFakten,
    ctaAngebot: "Zum Angebot",
    byline: "Mareike · KI-Trainerin für Claude und Microsoft 365 Copilot",
    bild: heroBild,
  },
  problem: {
    kicker: "Das kennst du",
    headline: "Du bist Vertrieb, Kundenservice und Büro in einer Person.",
    absaetze: [
      "Tagsüber arbeitest du für deine Kundinnen und Kunden. Abends beantwortest du Anfragen, schreibst Angebote, fasst bei offenen Rechnungen nach und überlegst, was du diese Woche postest.",
      "Niemand nimmt dir das ab. Eine Assistenz lohnt sich noch nicht, und jede Aufgabe für sich dauert ja nur zehn Minuten. Zusammen kosten sie dich die Zeit, in der du Geld verdienst.",
    ],
  },
  aufgaben: {
    kicker: "Deine Aufgaben",
    headline: "Das gibst du ab",
    gruppen: [
      {
        titel: "Kundenkontakt",
        punkte: ["Anfragen in deinem Ton beantworten", "Gespräche vor- und nachbereiten", "Bei Angeboten nachfassen"],
      },
      {
        titel: "Angebote und Büro",
        punkte: [
          "Angebote aus deinen Bausteinen erstellen",
          "Zahlungserinnerungen vorbereiten",
          "Unterlagen für das Steuerbüro sortieren",
        ],
      },
      {
        titel: "Sichtbarkeit",
        punkte: [
          "Aus Notizen Beiträge schreiben",
          "Einen Text für mehrere Kanäle anpassen",
          "Newsletter nach deiner Vorlage entwerfen",
        ],
      },
    ],
  },
  grenze: {
    kicker: "Die Grenze",
    headline: "Was bei dir bleibt",
    absaetze: [
      "Automation heißt hier nicht, dass etwas ungeprüft an deine Kundschaft geht. Eine KI macht Fehler und erfindet manchmal Dinge. Du haftest für das, was unter deinem Namen rausgeht.",
      "Claude bereitet vor, du prüfst und gibst frei. Das gilt für jede Mail, jedes Angebot und jede Mahnung. Claude ersetzt keine Steuerberatung und keine Rechtsberatung.",
    ],
    scribble: "Du prüfst. Claude tippt.",
  },
  angebot: {
    kicker: "Dein Kurs",
    headline: "Business Automation mit KI",
    intro: "In fünf Schritten gibst du deine wiederkehrenden Aufgaben als feste Abläufe an Claude ab.",
    schritte: {
      kopf: ["Schritt", "Thema", "Was du dabei machst"],
      zeilen: [
        { nr: "01", thema: "Spielregeln", text: "Du klärst, welche Kundendaten du eingeben darfst, bevor die erste Aufgabe läuft" },
        { nr: "02", thema: "Deine Zeitfresser", text: "Du listest deine Woche auf und wählst die drei Aufgaben aus, die sich zuerst lohnen" },
        { nr: "03", thema: "Dein Business in Claude", text: "Du richtest ein Projekt mit Angebot, Preisen, Vorlagen und deinem Ton ein" },
        { nr: "04", thema: "Deine Abläufe als Skills", text: "Du baust aus einer echten Aufgabe einen festen Ablauf, testest ihn und schärfst nach" },
        { nr: "05", thema: "Dein Alltag", text: "Du legst fest, was Claude vorbereitet, was du freigibst und was du als Nächstes abgibst" },
      ],
    },
  },
  ergebnis: {
    kicker: "Das Ergebnis",
    headline: "Was du danach hast",
    punkte: [
      "Eine Liste deiner wiederkehrenden Aufgaben, sortiert nach Zeitaufwand",
      "Eine Datenschutz-Checkliste für den Umgang mit Kundendaten",
      "Ein Claude-Projekt mit deinem Angebot, deinen Preisen und deinem Ton",
      "Eigene Skills für deine wichtigsten Abläufe",
      "Eine Freigaberegel für alles, was an deine Kundschaft geht",
    ],
    hinweis: "Mindestens 60 Prozent der Zeit arbeitest du selbst, an Aufgaben aus deinem Business.",
  },
  zielgruppe: {
    kicker: "The Party",
    headline: "Für wen das ist",
    ja: [
      "Du arbeitest selbstständig, freiberuflich oder führst ein kleines Unternehmen",
      "Du erledigst Kundenkontakt, Büro und Marketing selbst",
      "Du hast Aufgaben, die jede Woche in derselben Form wiederkommen",
    ],
    neinHeadline: "Für wen das nicht ist",
    nein: "Wenn du Programmieren lernen oder Abläufe für ein ganzes Team einrichten willst, bist du hier falsch.",
  },
  ueber,
  paket,
  webinar: { ...webinar, cta: { label: "Zur Warteliste", to: "warteliste/?gruppe=business" } },
  fragen: {
    kicker: "Häufige Fragen",
    headline: "Fragen",
    liste: [
      ...fragenGemeinsam,
      {
        frage: "Läuft danach alles von allein?",
        antwort: "Nein, und das soll es auch nicht. Claude bereitet vor, du prüfst und gibst frei.",
      },
      {
        frage: "Darf ich Kundendaten eingeben?",
        antwort: "Das klären wir zuerst, bevor du die erste Aufgabe stellst. Du weißt danach, was geht und was nicht.",
      },
    ],
  },
  glow,
  footer: footer("Effizienz für Solo-Unternehmerinnen", "business"),
};
