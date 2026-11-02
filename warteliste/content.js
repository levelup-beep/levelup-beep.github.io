// Warteliste: Ziel des Buttons "Auf die Warteliste" auf der Startseite.
// Formular und Texte aus Mareikes Entwurf (warteliste.html), Versand ueber Brevo
// mit Double-Opt-in. Der Datenschutz-Abschnitt "E-Mail-Liste und Anmeldung zum
// Webinar oder Workshop" beschreibt genau dieses Formular.
//
// ?gruppe=schule|job|business setzt das Brevo-Feld GRUPPE und blendet die
// passenden Texte ein (wie bei Mareike). Ohne Parameter: "allgemein".
import { kontaktMail } from "../shared/kontakt.js";

export const brevoFormUrl =
  "https://88634621.sibforms.com/serve/MUIFAGLms70hxTWvxCAyc4ZmV1gfK54IPeZuXwMpjey3nTMH8i-NGImgLc0VT93zUPXaa0fJWPhLjc3sWnNu9k1Xo278CyIwt3Avh93zLHMnkdNVIvUthmwRqIp3oqobznAKpTNMyNMsivZyf8_pQrm3G3K-T_9nADae-QqUz0IsrHTgCpNTyPMhLa-Yfwcrw8i-BapgxE54S839mQ==";

export const warteliste = {
  zurueck: "Zurück zur Startseite",
  fallbackMail: kontaktMail,
  allgemein: {
    kicker: "Warteliste",
    headline: "Sicher dir deinen Platz auf der Warteliste.",
    absaetze: [
      "Im Dezember starten wir mit unseren neuen Kursen. Die Plätze sind begrenzt. Wer auf der Warteliste steht, bekommt Termine und alle Infos vor allen anderen.",
    ],
    einwilligung:
      "Ich möchte Infos zu den neuen Kursen, das PDF zum KI-Adventskalender, die Einladung zum nächsten Webinar und die Mails von Level Up, Ladies! bekommen. Abmelden geht jederzeit. Alles Weitere steht im",
  },
  schule: {
    kicker: "Anmeldung",
    headline: "Noch kein Termin. Sicher dir den ersten.",
    absaetze: [
      "Der nächste Workshop ist in Planung. Trag dich ein, dann bekommst du den Termin und den Link zur Anmeldung als Erste.",
    ],
    einwilligung:
      "Ich möchte Infos zum nächsten Workshop und die Mails von Level Up, Ladies! bekommen. Abmelden geht jederzeit. Alles Weitere steht im",
  },
  interesse: {
    frage: "Was interessiert dich am meisten?",
    optionen: [
      { value: "tag", label: "Der eine Tag" },
      { value: "sechs-wochen", label: "Sechs Wochen" },
      { value: "intensivwoche", label: "Die Intensivwoche" },
      { value: "offen", label: "Weiß ich noch nicht" },
    ],
  },
  vorname: "Vorname",
  email: "E-Mail",
  datenschutzLink: "Datenschutz",
  button: "Auf die Warteliste",
  hinweis: "Du bekommst eine Mail mit einem Bestätigungslink. Erst der Klick darin schließt die Anmeldung ab.",
  senden: "Wird gesendet.",
  erfolg: "Fast fertig. Schau in dein Postfach und klick den Bestätigungslink.",
  fehler: (mail) =>
    `Das Absenden hat nicht geklappt. Schreib bitte an ${mail}, dann tragen wir dich von Hand ein.`,
};
