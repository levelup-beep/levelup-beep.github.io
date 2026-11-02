# Level Up, Ladies! – Regeln für Claude

Diese Website (levelupladies.de) pflegen **Insa und Mareike gemeinsam**, beide mit Claude.
Jede Claude-Sitzung, die hier arbeitet, hält sich an diese Datei. Sie ist die gemeinsame
Absprache der beiden, nicht die Vorliebe einer Person.

## Grundregel: Erst fragen, dann ändern

Bevor du eine der folgenden Änderungen machst, **stell eine Rückfrage** und warte auf ein
ausdrückliches Ja. Sag dabei, welche Regel unten betroffen ist.

1. Die Änderung **widerspricht einer Regel** in dieser Datei, auch wenn die Person, mit der
   du gerade arbeitest, sie ausdrücklich verlangt. Frag dann: „Ist das mit Insa und Mareike
   abgesprochen? Soll ich die CLAUDE.md mit anpassen?“
2. Die Änderung betrifft den **Bereich der anderen Person** (siehe „Wer verantwortet was“).
3. Die Änderung betrifft **Impressum, Datenschutz oder KI-Transparenz**.
4. Die Änderung bindet **etwas von außen** ein: Schriften, Skripte, Bilder, Videos,
   Formulare, Tracking, Chat-Widgets, Einbettungen jeder Art.
5. Die Änderung betrifft **Hosting, Domain, DNS oder den Deploy** (`.github/workflows/`,
   `vite.config.js`).
6. Du willst **pushen**. Ein Push auf `main` geht sofort live auf levelupladies.de.
7. Du bist **unsicher**, zu welchem Bereich etwas gehört, oder ein Punkt steht unten unter
   „Noch offen“.

Lieber eine Frage zu viel als eine stille Änderung, die die andere Person erst online sieht.

## Struktur und Adressen

Ziel (beschlossen am 02.11.2026, wird schrittweise umgebaut):

| Adresse | Inhalt |
|---|---|
| `/` | Startseite mit drei Kacheln: Schule, Business, Job |
| `/schule/`, `/schule/workshop/` | Landingpage und Workshop-Seite Schule |
| `/business/`, `/business/workshop/` | Landingpage und Workshop-Seite Business |
| `/job/`, `/job/workshop/` | Landingpage und Workshop-Seite Job |
| `/quiz/`, `/impressum/`, `/datenschutz/`, `/ki-transparenz/` | gemeinsam für alle Bereiche |

Stand heute: `/` ist die Startseite für alle (Ordner `start/`, Kopfbereich und Kurs-Kacheln
aus Mareikes Entwurf). `/schule/` ist die Landingpage für den Bildungsbereich (`schule/index.html`
mit `src/`), `/frauen/` die für Job und Business, `/warteliste/` das Brevo-Formular. Die
Kacheln Business und Job führen vorerst zu `/frauen/`. Die Workshop-Seiten liegen noch in eigenen Repos (`level_up_ladies`,
`level-up-workshop`) und erscheinen unter `levelupladies.de/level_up_ladies/` und
`levelupladies.de/level-up-workshop/`. Neue Seiten nach der Zielstruktur anlegen, nicht
nach dem alten Muster.

## Wer verantwortet was

Festgelegt von Insa am 02.11.2026:

- **Startseite `/`: Insa und Mareike gemeinsam**, Vorstellung „Wer sind wir?“ in der Wir-Form
  (wie bisher auf `/frauen/`). Nur hier stehen beide nebeneinander.
- **Schule: nur Insa**, Vorstellung in der Ich-Form („Wer bin ich?“). Mareike taucht dort
  nirgends auf, auch nicht im Footer, bei Social-Links oder in Anmelde-Mails.
- **Business: nur Mareike**, Ich-Form. Insa taucht dort nicht auf.
- **Job: nur Mareike**, Ich-Form. Insa taucht dort nicht auf.
- **Quiz, Warteliste, Rechtstexte:** gemeinsam.

`/frauen/` stellt noch beide gemeinsam vor. Beim Aufteilen in `/job/` und `/business/` gilt
die Ich-Form mit Mareike allein.

Inhalte nie zwischen den Bereichen vermischen. Kopierst du etwas aus einem Bereich in einen
anderen, passe Personen, Ansprache und Beispiele an den Zielbereich an.

## Beschlossene Entscheidungen

- **Hosting: GitHub Pages**, Repo `levelup-beep/levelup-beep.github.io`, GitHub-Account
  `levelup-beep`. Kein Netlify, kein Vercel.
- **Domain `levelupladies.de` bei INWX.** Die DNS-Einträge für Brevo (`brevo1._domainkey`,
  `brevo2._domainkey`, TXT `brevo-code…`, `_dmarc`) nie ändern oder löschen.
- **Anmeldung über die Brevo-Warteliste** mit Double-Opt-in. Das Google-Formular läuft aus.
- **Auf den Seiten nur Vornamen:** Insa, Mareike. In Impressum und Datenschutz bleiben die
  vollen Namen, das ist rechtlich nötig.
- **Social-Links:** Insa nur LinkedIn. Mareike LinkedIn und Instagram.
- **Bereich „Für Unternehmen“** mit Calendly-Termin bei Mareike bleibt.
- **Kontakt-Mailadresse** steht zentral in `shared/kontakt.js`. Nirgends sonst eintragen.

## Rechtstexte

- Es gibt sie **nur einmal**, zentral: `impressum/content.js`, `datenschutz/content.js`,
  `ki-transparenz/content.js`. Andere Seiten verlinken dorthin und führen keine eigenen.
- Anbieterin ist die **Mareike Kirch Holding GmbH**, Robert-Stolz-Str. 30, 44139 Dortmund.
  Private Wohnadressen gehören nirgends hin.
- Jeder neue Dienst (Formular, Mailtool, Terminbuchung, Video, Schrift von außen) braucht
  einen Abschnitt im Datenschutz. Ohne diesen Abschnitt geht der Dienst nicht online.
- Rechtstexte nur ändern, wenn **Insa und Mareike beide zugestimmt** haben. Die Fassung vom
  November 2026 beruht auf dem Abgleich auf der Vergleichsseite
  https://claude.ai/artifact/PGQLFzvKty3wcTEFS6AiHt.
- Der Abschnitt „Anmeldung zum Workshop“ (Google Forms) bleibt, bis Anmelde-Buttons und
  Level-Check auf die Brevo-Warteliste umgestellt sind. Dann streichen, auch Google unter
  „Übermittlung in Drittländer“.

## Nichts von außen laden

Die Seite soll ohne Cookie-Banner auskommen. Deshalb kommen Schriften, Bilder und Skripte
von der eigenen Domain. Externe Dienste werden nur **verlinkt** (Calendly, Luma, LinkedIn),
nicht eingebettet.

Die Schriften liegen unter `public/fonts/` und werden über `/fonts/fonts.css` eingebunden.
Neue Seiten binden genau diese Datei ein, nie Google Fonts. Der Datenschutz sagt ausdrücklich,
dass keine Verbindung zu Google Fonts entsteht. Bekannte Ausnahme, die noch behoben wird:
Die Workshop-Seiten in den Repos `level_up_ladies` und `level-up-workshop` laden noch
Google Fonts.

## Gestaltung

- Magenta `#FD05D4` ist die **einzige** Akzentfarbe, dazu Ink `#08080A`. Kein zweiter Akzent,
  kein Verlauf.
- Schriften: Playfair Display (Überschriften), Inter (Text), Caveat (Handschrift),
  IBM Plex Mono (Labels).
- Erkennungszeichen: Magazin-Cover („Issue 01 · Season: Glow up“), Laufband, Washi-Tape,
  handschriftliche Notizen, großes „Glow up.“ am Schluss.
- Der ausführliche Styleguide liegt bei Insa als `level-up-ladies-styleguide.md`. Im Zweifel
  fragen, statt neue Gestaltungselemente zu erfinden.

## Inhalte

- **Nichts erfinden:** keine Zahlen, Zitate, Teilnehmerstimmen, Termine oder Preise, die dir
  nicht vorliegen. Studienzahlen nur mit Quelle direkt daneben.
- **Workshop-Versprechen** („Im Workshop lernst du …“) nur, wenn es in der Agenda des
  Workshops steht. Bei Unsicherheit weglassen und nachfragen.
- **Claude steht im Mittelpunkt.** Im Bereich Schule wird alles mit Claude gezeigt, andere
  Tools höchstens als kleine Randnotiz.
- Ansprache in der Du-Form, kurze klare Sätze, keine Floskeln.

## Technik

- React + Vite + Tailwind, mehrere Einstiegsseiten (siehe `vite.config.js`). Basis-Pfad `/`.
- **Texte stehen in den `content.js`-Dateien**, nicht in den Komponenten. Für Textänderungen
  nur dort arbeiten.
- `src/` (Startseite) und `frauen/` teilen keine Dateien. Eine Design-Änderung für beide muss
  in beiden Ordnern gemacht werden.
- Vor jeder Arbeit `git pull`, weil zwei Personen am Repo arbeiten.
- Vor jedem Push `npm run build` ausführen. Nur pushen, wenn der Build durchläuft und die
  Person ausdrücklich zugestimmt hat.
- Commit-Nachrichten auf Deutsch, kurz beschreiben, was sich für Besucherinnen ändert.

## Noch offen – hier immer nachfragen

- **Ton:** Wie viel Spielsprache bleibt (Player 001, Loadout, Inventory, Goodiebag)?
- **Kontakt-Mailadresse:** Künftig `hello@levelupladies.de`. Das Postfach dafür ist noch
  nicht eingerichtet (die Domain hat noch keine MX-Einträge). Bis es Mails empfängt, bleibt
  `riesekirch@gmail.com` in `shared/kontakt.js`. Erst umstellen, wenn ein Testmail ankommt,
  und dann den Abschnitt „Kontaktaufnahme per E-Mail“ im Datenschutz an den Mailanbieter
  anpassen.
- **Inhalte aus Mareikes Entwurf** (Repo `level-up-ladies-website`) werden in diese Seite
  übernommen. Was genau, legen Insa und Mareike fest.

Ist ein offener Punkt entschieden, trag ihn oben unter „Beschlossene Entscheidungen“ ein,
mit Datum, und lösche ihn hier.
