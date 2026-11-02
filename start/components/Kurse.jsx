import SectionHeading from "./SectionHeading.jsx";
import Tape from "./Tape.jsx";
import { kurse } from "../content.js";

/**
 * Drei Kacheln: Business, Schule, Job. Ziel des Buttons "Finde deinen Kurs".
 */
export default function Kurse() {
  return (
    <section id="wege" className="relative bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal">
          <SectionHeading kicker={kurse.kicker}>{kurse.headline}</SectionHeading>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-dim md:text-lg">{kurse.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {kurse.karten.map((karte, i) => (
            <article
              key={karte.titel}
              className="reveal relative flex flex-col border border-magenta/40 bg-white/[0.03] p-7 glow-box-sm"
            >
              <Tape className={i % 2 ? "-right-4 -top-3" : "-left-4 -top-3"} rotate={i % 2 ? 12 : -12} width={96} />
              <h3 className="font-display text-[28px] leading-tight font-black italic text-white">
                {karte.titel}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-dim">{karte.versprechen}</p>
              <ul className="mt-5 space-y-2 text-[15px] leading-relaxed text-white/80">
                {karte.fakten.map((fakt) => (
                  <li key={fakt} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                    {fakt}
                  </li>
                ))}
              </ul>
              <a
                href={`${import.meta.env.BASE_URL}${karte.to}`}
                className="mt-auto inline-flex items-center gap-3 self-start pt-7 font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-magenta underline decoration-magenta/40 underline-offset-[6px] transition-colors duration-300 hover:text-magenta-soft hover:decoration-magenta"
              >
                {karte.button}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
