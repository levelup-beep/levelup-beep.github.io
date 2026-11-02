// KI-Transparenz: freiwillige Offenlegung, wo KI bei Level Up, Ladies! im Spiel ist.
// Bei neuen Bildern oder Funktionen (z. B. Chatbot) diese Seite mitpflegen.
// Fassung nach dem Abgleich mit Mareikes "KI-Hinweis" (Entscheidungen Insa,
// 02.11.2026): Wir-Form, Gliederung von Mareike, "Kein KI-System" und
// Rechtsrahmen von Insa.
import { kontaktMail, kontaktHinweis } from "../shared/kontakt.js";

export const kiTransparenz = {
  kicker: "Offenlegung",
  headline: "KI-Transparenz",
  intro:
    "Wir zeigen in unseren Workshops, wie man gut mit KI arbeitet – und tun das selbst jeden Tag. Deshalb legen wir hier offen, wo KI bei dieser Website und in unseren Kursen im Spiel ist.",
  zurueck: "Zurück zur Startseite",

  abschnitte: [
    {
      titel: "Diese Website",
      text: "Die Seite ist mit Claude Code gebaut, einem KI-Werkzeug von Anthropic für Programmierung. Aufbau, Gestaltung und Code sind auf diesem Weg entstanden. Inhalte, Aussagen und Freigabe liegen bei uns.",
    },
    {
      titel: "Texte",
      text: "Die Texte auf dieser Seite sind im Gespräch mit Claude entstanden und von uns geprüft und freigegeben. Die Regeln dafür haben wir selbst gesetzt: Du-Form, keine Floskeln, keine erfundenen Zahlen, keine erfundenen Teilnehmerstimmen. Die KI ist dabei unser Werkzeug, nicht unsere Autorin – die Verantwortung für jeden Inhalt tragen wir.",
    },
    {
      titel: "Bilder",
      text: "Die Collage auf der Startseite ist mit Google Gemini in NotebookLM erstellt. Die Frauen darauf sind keine realen Personen und keine Teilnehmerinnen. Das große Porträt im Eingangsbereich der Unterseiten wurde ebenfalls mit einer Bild-KI erzeugt und zeigt keine reale Person. Die Fotos von Insa Riese und Mareike Kirch sind echte Aufnahmen.",
    },
    {
      titel: "Kein KI-System auf dieser Seite",
      text: "Auf dieser Website interagiert kein KI-System mit dir. Es gibt keinen Chatbot, der deine Eingaben verarbeitet, und keine automatische Profilbildung. Auch der Level-Check rechnet dein Ergebnis nach festen Regeln direkt in deinem Browser aus, ohne KI. Wenn du einem Link zu einem KI-Dienst wie Claude, ChatGPT oder Gemini folgst, gelten dort die Bedingungen des jeweiligen Anbieters.",
    },
    {
      titel: "In den Kursen",
      text: "In unseren Webinaren und Kursen arbeitest du selbst mit Claude. Du richtest ein eigenes Profil ein, legst ein Projekt an und baust eine Promptbibliothek. Was du dort eingibst, entscheidest du. Bevor die erste Übung läuft, klären wir, welche Daten hineingehören und welche nicht.",
    },
    {
      titel: "Was wir nicht tun",
      text: "Diese Grenzen setzen wir uns selbst:",
      liste: [
        "Keine erfundenen Teilnehmerstimmen, Fallbeispiele oder Zahlen. Was hier steht, ist belegt.",
        "Keine Studienzahlen ohne geprüfte Quelle. Wo wir Zahlen nennen, steht die Quelle daneben.",
        "Keine KI-erzeugten Gesichter, die wir als echte Teilnehmerinnen ausgeben.",
        "Keine ungeprüften KI-Texte, die wir als unsere Einschätzung ausgeben.",
        "Keine automatisierten Entscheidungen über Menschen.",
        "Keine Weitergabe deiner Daten an KI-Systeme ohne deine Zustimmung.",
      ],
    },
    {
      titel: "Wie wir prüfen",
      text: "Nichts geht ungelesen online. Zahlen, Quellen und Aussagen über andere Menschen prüfen wir gegen den Ursprung, bevor sie veröffentlicht werden.",
    },
    {
      titel: "Warum wir das offenlegen",
      text: "Eine gesetzliche Kennzeichnungspflicht gilt nur in bestimmten Fällen, etwa bei Chatbots oder bei KI-erzeugten Bildern, die echt wirken (Art. 50 der EU-KI-Verordnung, anwendbar ab August 2026). Wir kennzeichnen darüber hinaus freiwillig, weil ein offener Umgang mit KI für uns zu gutem KI-Einsatz dazugehört – und weil wir genau das auch in unseren Workshops vermitteln. Gleichzeitig ist diese Website selbst ein Beispiel: Wir wollen damit zeigen, was mit KI möglich ist, wenn man sie gezielt einsetzt.",
    },
    {
      titel: "Verantwortlich",
      text: `Mareike Kirch Holding GmbH, Robert-Stolz-Str. 30, 44139 Dortmund, ${kontaktMail || kontaktHinweis}. Fragen zu dieser Seite beantworten wir gern.`,
    },
  ],

  stand: "Stand: November 2026",
};
