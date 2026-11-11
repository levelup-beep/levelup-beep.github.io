import SectionHeading from "./SectionHeading.jsx";
import { start } from "../content.js";

/**
 * "So startest du": drei Schritte vom ersten Kennenlernen bis zum Kurs.
 * Steht direkt unter dem Kopfbereich, damit neue Besucherinnen sofort sehen,
 * was es gibt und wo sie anfangen.
 */
export default function SoStartest() {
  return (
    <section id="so-startest-du" className="relative bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal">
          <SectionHeading kicker={start.kicker}>{start.headline}</SectionHeading>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-dim md:text-lg">{start.intro}</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {start.schritte.map((schritt) => (
            <li
              key={schritt.nr}
              className="reveal relative flex flex-col border-t-2 border-magenta pt-6"
            >
              <span className="font-display text-[56px] leading-none font-black italic text-magenta glow-text">
                {schritt.nr}
              </span>
              <h3 className="mt-4 font-display text-[26px] leading-tight font-black italic text-white">
                {schritt.titel}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-dim">{schritt.text}</p>
              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
                {schritt.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.to.startsWith("#") ? link.to : `${import.meta.env.BASE_URL}${link.to}`}
                    className="inline-flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-magenta underline decoration-magenta/40 underline-offset-[6px] transition-colors duration-300 hover:text-magenta-soft hover:decoration-magenta"
                  >
                    {link.label}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
