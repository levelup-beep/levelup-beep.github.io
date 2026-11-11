import SectionHeading from "./SectionHeading.jsx";
import { lernen } from "../data/content.js";

/**
 * "Das bekommst du": was in Insas Workshops steckt, in drei Gruppen.
 * Ersetzt die ausfuehrliche Level-01-Vorstellung (WorkshopDeepDive).
 * Aufbau angelehnt an Mareikes "Das gibst du ab" (bereich/KursSeite.jsx).
 */
export default function LernenMitMir() {
  return (
    <section id="lernen" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="reveal max-w-3xl">
          <SectionHeading kicker={lernen.kicker} tone="dark">
            {lernen.headline}
          </SectionHeading>
          <p className="mt-6 text-base leading-relaxed text-black/75 md:text-lg">{lernen.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {lernen.gruppen.map((g) => (
            <div key={g.titel} className="reveal border-t-4 border-magenta pt-5">
              <h3 className="font-display text-[26px] font-black italic text-black">{g.titel}</h3>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-black/75">
                {g.punkte.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mt-12 max-w-3xl font-display text-[24px] font-black italic text-black md:text-[30px]">
          {lernen.pointe}
        </p>
      </div>
    </section>
  );
}
