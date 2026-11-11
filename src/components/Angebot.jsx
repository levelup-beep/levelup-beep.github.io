import SectionHeading from "./SectionHeading.jsx";
import Button from "./Button.jsx";
import Tape from "./Tape.jsx";
import { angebot, signupHref } from "../data/content.js";

/**
 * "Mein Angebot": drei Karten unter "Wer bin ich".
 * Gleicher Aufbau wie Mareikes "Deine Kurse" in bereich/KursSeite.jsx,
 * damit sich die Bereiche gleich anfuehlen.
 */
export default function Angebot() {
  return (
    <section id="angebot" className="relative bg-ink py-20 md:py-28">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <div className="reveal max-w-3xl">
          <SectionHeading kicker={angebot.kicker}>{angebot.headline}</SectionHeading>
          <p className="mt-6 text-base leading-relaxed text-dim md:text-lg">{angebot.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {angebot.wege.map((weg, i) => (
            <article
              key={weg.titel}
              className="reveal relative flex flex-col border border-magenta/40 bg-white/[0.03] p-7 glow-box-sm"
            >
              <Tape className={i % 2 ? "-right-4 -top-3" : "-left-4 -top-3"} rotate={i % 2 ? 12 : -12} width={90} />
              <h3 className="font-display text-[28px] leading-tight font-black italic text-white">{weg.titel}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-dim">{weg.text}</p>
              <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-white/80">
                {weg.fakten.map((fakt) => (
                  <li key={fakt} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                    {fakt}
                  </li>
                ))}
              </ul>
              {weg.link && (
                <a
                  href={weg.link.to}
                  className="mt-auto inline-flex items-center gap-2 self-start pt-7 font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-magenta underline decoration-magenta/40 underline-offset-[6px] transition-colors duration-300 hover:text-magenta-soft hover:decoration-magenta"
                >
                  {weg.link.label}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="reveal mt-12">
          <Button href={signupHref}>{angebot.button}</Button>
        </div>
      </div>
    </section>
  );
}
