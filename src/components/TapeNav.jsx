/**
 * Drei Klebestreifen als Navigation zu den Bereichen Business, Schule und Job.
 * Steht im Kopfbereich ueber dem Bild, damit man gleich in der ersten Ansicht
 * in den passenden Bereich kommt. Der Bereich, auf dem man gerade ist, steht als
 * Negativ da (weisses Tape, dunkle Schrift) und ist kein Link.
 * Auf den Unterseiten (aktiv gesetzt) kommt vorne ein Streifen "Start" dazu,
 * der zurueck zur Startseite fuehrt. Auf der Startseite selbst fehlt er.
 * Gleiche Datei liegt in src/, start/ und bereich/ (Seiten teilen keine Dateien).
 */
const BEREICHE = [
  { id: "business", label: "Business", to: "business/", rotate: -5 },
  { id: "schule", label: "Schule", to: "schule/", rotate: 3 },
  { id: "job", label: "Job", to: "job/", rotate: -2 },
];

const START = { id: "start", label: "← Start", to: "", rotate: 2 };

export default function TapeNav({ aktiv = null, className = "" }) {
  const eintraege = aktiv ? [START, ...BEREICHE] : BEREICHE;
  return (
    <nav aria-label="Bereiche" className={className}>
      <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 sm:flex-nowrap md:justify-start">
        {eintraege.map((b) => {
          const istAktiv = b.id === aktiv;
          const basis =
            "tape relative inline-block whitespace-nowrap px-4 py-2 font-mono text-[12px] font-bold uppercase tracking-[0.16em] transition-transform duration-300 sm:px-5 sm:text-[13px]";
          return (
            <li key={b.id} style={{ transform: `rotate(${b.rotate}deg)` }}>
              {istAktiv ? (
                <span
                  aria-current="page"
                  className={`${basis} text-ink`}
                  style={{ background: "#ffffff", boxShadow: "none" }}
                >
                  {b.label}
                </span>
              ) : (
                <a
                  href={`${import.meta.env.BASE_URL}${b.to}`}
                  aria-label={b.id === "start" ? "Zurück zur Startseite" : undefined}
                  className={`${basis} text-white hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
                >
                  {b.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
