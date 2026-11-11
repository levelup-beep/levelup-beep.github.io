// Texte, die auf /job/ und /business/ gleich sind.
// Quelle: Mareikes Entwurf (Repo level-up-ladies-website, fuer-den-job.html und
// fuers-business.html), Stand 02.11.2026. Nur Vornamen, Ich-Form, nur Mareike.
import { kontaktEintrag, kontaktMail } from "../shared/kontakt.js";

export const ticker = [
  "Klick. Prompt. Done.",
  "Das ist dein Glow-up",
  "Level Up, Ladies",
  "Future is female",
  "Knowledge = Power",
  "Wir nehmen uns den Raum",
];

export const ueber = {
  kicker: "Wer dahintersteckt",
  headline: "Hi, ich bin Mareike",
  rolle: "Ingenieurin, Unternehmerin und KI-Trainerin",
  absaetze: [
    "Über 8 Jahre habe ich im Konzern gearbeitet. Sicherer Job, gutes Gehalt. Irgendwann hat das Gehalt nicht mehr aufgewogen, dass die Arbeit nicht zu mir passte. 2020 bin ich gegangen.",
    "2021 habe ich Coding Bootcamps Europe mitgegründet. Dann kam KI, unsere Teilnehmenden wurden immer seltener eingestellt, und wir haben entschieden, das Bootcamp auslaufen zu lassen. Das hat wehgetan.",
    "Die Technologie, die unser Geschäftsmodell getroffen hat, nutze ich heute jeden Tag. Mein KI-Wissen habe ich mir selbst aufgebaut. Meine Websites baue ich mit Claude Code, ohne Entwicklerin zu sein, und bei workshops.de schule ich Menschen ohne IT-Hintergrund in Claude und Microsoft 365 Copilot.",
    "KI rüttelt den Arbeitsmarkt durch. Mir ist wichtig, dass wir Frauen dabei gut aufgestellt sind und eine Rolle spielen.",
  ],
  scribble: "Du kannst alles lernen. Auch KI!",
  bild: {
    src: "mareike/mareike.jpg",
    width: 1200,
    height: 800,
    alt: "Mareike, Schwarz-Weiß-Porträt in einem Magenta-Rahmen",
  },
};

export const heroBild = {
  src: "mareike/mareike.jpg",
  width: 1200,
  height: 800,
  alt: "Mareike, Schwarz-Weiß-Porträt vor einer Ziegelwand",
};

export const heroFakten = [
  { label: "Format", wert: "Live über Zoom" },
  { label: "Plätze", wert: "maximal 12" },
  { label: "Start", wert: "Warteliste" },
];

export const paket = {
  kicker: "Im Kurs enthalten",
  headline: "Das ist dabei",
  dabei: [
    "Live-Termine über Zoom, in einer Gruppe von höchstens zwölf Frauen",
    "Handouts und Vorlagen",
    "Die Datenschutz-Checkliste",
    "Eine Teilnahmebestätigung für deine Unterlagen",
  ],
  brauchstHeadline: "Das brauchst du",
  brauchst: [
    "Einen Laptop",
    "Ein Claude Pro-Abo oder einen Firmenzugang. Das ist nicht im Preis enthalten",
    "Aufgaben, die dich regelmäßig Zeit kosten",
  ],
};

export const webinar = {
  kicker: "Noch nicht sicher?",
  headline: "Erst mal reinschauen. Kostenlos.",
  text: "Im Webinar „Claude kennt dich“ richtest du in 60 Minuten dein Claude-Profil ein und siehst, wie wir arbeiten. So weißt du vor dem Kurs, ob das zu dir passt. Die Einladung bekommst du über die Warteliste.",
};

export const fragenGemeinsam = [
  {
    frage: "Was kosten die Kurse?",
    antwort: "Preise und Termine nennen wir zum Start. Wer auf der Warteliste steht, erfährt sie zuerst.",
  },
  {
    frage: "Ist die Warteliste verbindlich?",
    antwort: "Nein. Du gehst keine Buchung ein. Du bekommst die Infos zuerst und entscheidest dann.",
  },
  {
    frage: "Brauche ich Vorkenntnisse?",
    antwort: "Nein. Du brauchst einen Laptop und Aufgaben, die dich regelmäßig Zeit kosten.",
  },
  {
    frage: "Was brauche ich technisch?",
    antwort: "Einen Laptop und ein Claude Pro-Abo oder einen Firmenzugang. Das Abo ist nicht im Preis enthalten.",
  },
  {
    frage: "Gibt es eine Aufzeichnung?",
    antwort:
      "Nein. Die Kurse finden live über Zoom statt und werden nicht aufgezeichnet. Du bekommst alle Handouts und Vorlagen.",
  },
  {
    frage: "Was passiert nach dem Eintragen?",
    antwort:
      "Du bekommst eine Mail mit einem Bestätigungslink. Nach dem Klick stehst du auf der Warteliste und bekommst die Einladung zum kostenlosen Webinar.",
  },
];

export const glow = {
  kicker: "Warteliste",
  headline: "Glow up.",
  zeilen: ["Maximal zwölf Plätze pro Kurs.", "Die Warteliste erfährt alles zuerst."],
  note: "Online. Nur für Frauen.",
  buchen: {
    frage: "Du möchtest mich für einen Workshop buchen?",
    link: "Schreib mir eine Nachricht.",
    href: `mailto:${kontaktMail}?subject=Workshop-Anfrage%3A%20Level%20Up%2C%20Ladies%21&body=Hallo%20Mareike%2C%0D%0A%0D%0A`,
  },
};

// Footer: nur Mareike (Ich-Form-Bereich), keine Social-Links von Insa.
export const footer = (tagline, eigeneSeite) => ({
  brand: "Level Up, Ladies!",
  tagline,
  linksHeadline: "Backstage",
  links: [
    { label: "Zur Startseite", to: "/" },
    { label: "Über mich", to: "#ueber-mich" },
    { label: "Warteliste", to: `/warteliste/?gruppe=${eigeneSeite}` },
    eigeneSeite === "job"
      ? { label: "Für dein Business", to: "/business/" }
      : { label: "Für den Job", to: "/job/" },
  ],
  contactHeadline: "Kontakt",
  contact: [kontaktEintrag],
  socialHeadline: "Social",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mareikekirch/" },
    { label: "Instagram", href: "https://www.instagram.com/mareike.kirch/" },
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
});
