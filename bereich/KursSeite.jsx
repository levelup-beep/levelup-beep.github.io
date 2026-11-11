import TapeNav from "./components/TapeNav.jsx";
import Button from "./components/Button.jsx";
import Marker from "./components/Marker.jsx";
import Tape from "./components/Tape.jsx";
import SectionHeading from "./components/SectionHeading.jsx";
import Ticker from "./components/Ticker.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";
import { useHashScroll } from "../shared/useHashScroll.js";

/**
 * Seitenvorlage fuer Mareikes Bereiche (/job/ und /business/).
 * Alle Texte kommen aus der content.js der jeweiligen Seite.
 * Vorstellung in der Ich-Form, nur Mareike (siehe CLAUDE.md).
 */

const base = import.meta.env.BASE_URL;
const href = (to) => (to.startsWith("http") || to.startsWith("#") ? to : `${base}${to}`);

function Punkte({ items, className = "" }) {
  return (
    <ul className={`space-y-2.5 text-[15px] leading-relaxed text-dim ${className}`}>
      {items.map((p) => (
        <li key={p} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
          {p}
        </li>
      ))}
    </ul>
  );
}

function Cta({ cta, className = "" }) {
  return (
    <div className={`reveal mt-12 ${className}`}>
      <Button href={href(cta.to)}>{cta.label}</Button>
    </div>
  );
}

function Abschnitt({ id, hell = false, children }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${hell ? "bg-white text-black" : "bg-ink"}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-10">{children}</div>
    </section>
  );
}

function Hero({ hero, cta }) {
  return (
    <section id="start" className="relative overflow-hidden bg-ink pt-10 pb-16 md:pt-14 md:pb-20">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[620px] w-[620px] rounded-full bg-magenta/25 blur-[140px]"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-10">
        <div className="reveal relative">
          <TapeNav aktiv={hero.bereich} className="mb-8 md:hidden" />
          <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta">
            <span className="glow-text">{hero.kicker}</span>
            <span aria-hidden="true" className="h-px w-10 bg-magenta/60" />
            <span className="text-white/70">{hero.kicker2}</span>
          </p>
          <h1 className="font-display text-[48px] leading-[0.88] font-black italic tracking-[-0.02em] text-white glow-text-white sm:text-[68px] lg:text-[96px]">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <div className="relative mt-7 inline-block">
            <p
              className="bg-magenta px-6 py-3.5 text-[19px] leading-tight font-bold text-white glow-box sm:text-[24px]"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 78%, 92% 100%, 4% 100%, 0 84%)" }}
            >
              {hero.banner}
            </p>
            <Marker arrow="up-right" className="absolute -left-2 top-full mt-2 hidden text-xl sm:block">
              {hero.scribble}
            </Marker>
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-dim sm:mt-20 md:text-lg">{hero.lead}</p>

          <dl className="mt-8 grid max-w-md grid-cols-3 gap-4 border-y border-white/15 py-4">
            {hero.fakten.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.24em] text-magenta">{f.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-white">{f.wert}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href={href(cta.to)} pulse className="w-full sm:w-auto">
              {cta.label}
            </Button>
            <Button variant="outline" scrollTo="#angebot" className="w-full sm:w-auto">
              {hero.ctaAngebot}
            </Button>
          </div>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-faint">{hero.byline}</p>
        </div>

        <div className="reveal relative mx-auto w-full max-w-[520px]">
          <TapeNav aktiv={hero.bereich} className="mb-8 hidden md:block" />
          <div className="relative border border-magenta/50 glow-box">
          <Tape className="-left-4 -top-3 z-20" rotate={-12} width={120} />
          <Tape className="-right-5 bottom-8 z-20" rotate={-16} width={100} />
            <img
              src={`${base}${hero.bild.src}`}
              alt={hero.bild.alt}
              width={hero.bild.width}
              height={hero.bild.height}
              fetchPriority="high"
              className="block h-auto w-full grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Kurse({ kurse }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
      {kurse.map((k, i) => (
        <article key={k.titel} className="reveal relative flex flex-col border border-magenta/40 bg-white/[0.03] p-7 glow-box-sm">
          <Tape className={i % 2 ? "-right-4 -top-3" : "-left-4 -top-3"} rotate={i % 2 ? 12 : -12} width={90} />
          <h3 className="font-display text-[28px] leading-tight font-black italic text-white">{k.titel}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-dim">{k.text}</p>
          <Punkte items={k.fakten} className="mt-5 text-white/80" />
        </article>
      ))}
    </div>
  );
}

function Schritte({ schritte }) {
  return (
    <div className="reveal mt-12 overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className="border-b border-magenta/50 font-mono text-[11px] uppercase tracking-[0.24em] text-magenta">
            {schritte.kopf.map((k) => (
              <th key={k} className="py-3 pr-6 font-semibold">
                {k}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schritte.zeilen.map((z) => (
            <tr key={z.nr} className="border-b border-white/10 align-top">
              <td className="py-4 pr-6 font-mono text-magenta">{z.nr}</td>
              <td className="py-4 pr-6 font-semibold text-white">{z.thema}</td>
              <td className="py-4 text-[15px] leading-relaxed text-dim">{z.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function KursSeite({ seite }) {
  useReveal();
  useHashScroll();
  const { hero, cta } = seite;

  return (
    <>
      <main id="hauptinhalt">
        <Ticker items={seite.ticker} />
        <Hero hero={hero} cta={cta} />
        <Ticker items={seite.ticker} tone="light" reverse />

        {/* Das kennst du */}
        <Abschnitt>
          <div className="reveal max-w-3xl">
            <SectionHeading kicker={seite.problem.kicker}>{seite.problem.headline}</SectionHeading>
            {seite.problem.absaetze.map((a) => (
              <p key={a} className="mt-6 text-base leading-relaxed text-dim md:text-lg">
                {a}
              </p>
            ))}
            {seite.problem.pointe && (
              <p className="mt-8 font-display text-[24px] font-black italic text-white md:text-[30px]">
                {seite.problem.pointe}
              </p>
            )}
          </div>
        </Abschnitt>

        {/* Das gibst du ab */}
        <Abschnitt hell>
          <div className="reveal">
            <SectionHeading kicker={seite.aufgaben.kicker} tone="dark">
              {seite.aufgaben.headline}
            </SectionHeading>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {seite.aufgaben.gruppen.map((g) => (
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
          <Cta cta={cta} />
        </Abschnitt>

        {/* Nur Business: Was bei dir bleibt */}
        {seite.grenze && (
          <Abschnitt>
            <div className="reveal max-w-3xl">
              <SectionHeading kicker={seite.grenze.kicker}>{seite.grenze.headline}</SectionHeading>
              {seite.grenze.absaetze.map((a) => (
                <p key={a} className="mt-6 text-base leading-relaxed text-dim md:text-lg">
                  {a}
                </p>
              ))}
              <Marker underline className="mt-8 inline-block text-3xl">
                {seite.grenze.scribble}
              </Marker>
            </div>
          </Abschnitt>
        )}

        {/* Angebot: Kurse (Job) oder Schritte (Business) */}
        <section id="angebot" className="relative bg-ink py-20 md:py-28">
          <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative mx-auto max-w-6xl px-5 md:px-10">
            <div className="reveal max-w-3xl">
              <SectionHeading kicker={seite.angebot.kicker}>{seite.angebot.headline}</SectionHeading>
              {seite.angebot.intro && (
                <p className="mt-6 text-base leading-relaxed text-dim md:text-lg">{seite.angebot.intro}</p>
              )}
            </div>
            {seite.angebot.kurse && <Kurse kurse={seite.angebot.kurse} />}
            {seite.angebot.schritte && <Schritte schritte={seite.angebot.schritte} />}
          </div>
        </section>

        {/* Was du danach hast */}
        <Abschnitt>
          <div className="reveal max-w-3xl">
            <SectionHeading kicker={seite.ergebnis.kicker}>{seite.ergebnis.headline}</SectionHeading>
            <Punkte items={seite.ergebnis.punkte} className="mt-8 md:text-lg" />
            <p className="mt-8 border-l-4 border-magenta pl-5 text-base font-semibold text-white">
              {seite.ergebnis.hinweis}
            </p>
          </div>
          <Cta cta={cta} />
        </Abschnitt>

        {/* Für wen */}
        <Abschnitt hell>
          <div className="reveal">
            <SectionHeading kicker={seite.zielgruppe.kicker} tone="dark">
              {seite.zielgruppe.headline}
            </SectionHeading>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <ul className="reveal space-y-3 text-base leading-relaxed text-black/80">
              {seite.zielgruppe.ja.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden="true" className="font-bold text-magenta">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="reveal border-l-4 border-black/80 pl-6">
              <h3 className="font-display text-[26px] font-black italic text-black">{seite.zielgruppe.neinHeadline}</h3>
              <p className="mt-3 text-base leading-relaxed text-black/75">{seite.zielgruppe.nein}</p>
            </div>
          </div>
        </Abschnitt>

        {/* Hi, ich bin Mareike */}
        <Abschnitt id="ueber-mich">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div className="reveal relative mx-auto w-full max-w-[460px]">
              <Tape className="-left-4 -top-3 z-20" rotate={-10} width={110} />
              <div className="border-[6px] border-magenta glow-box">
                <img
                  src={`${base}${seite.ueber.bild.src}`}
                  alt={seite.ueber.bild.alt}
                  width={seite.ueber.bild.width}
                  height={seite.ueber.bild.height}
                  loading="lazy"
                  className="block aspect-[4/5] h-auto w-full object-cover object-[60%_30%] grayscale"
                />
              </div>
            </div>
            <div className="reveal">
              <SectionHeading kicker={seite.ueber.kicker}>{seite.ueber.headline}</SectionHeading>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-[0.22em] text-magenta">{seite.ueber.rolle}</p>
              {seite.ueber.absaetze.map((a) => (
                <p key={a} className="mt-5 text-base leading-relaxed text-dim">
                  {a}
                </p>
              ))}
              <Marker underline className="mt-8 inline-block text-3xl">
                {seite.ueber.scribble}
              </Marker>
              <Cta cta={cta} className="mt-10" />
            </div>
          </div>
        </Abschnitt>

        {/* Das ist dabei / Das brauchst du */}
        <Abschnitt hell>
          <div className="reveal">
            <SectionHeading kicker={seite.paket.kicker} tone="dark">
              {seite.paket.headline}
            </SectionHeading>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            <ul className="reveal space-y-3 text-base leading-relaxed text-black/80">
              {seite.paket.dabei.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden="true" className="font-bold text-magenta">✓</span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="reveal">
              <h3 className="font-display text-[26px] font-black italic text-black">{seite.paket.brauchstHeadline}</h3>
              <ul className="mt-4 space-y-3 text-base leading-relaxed text-black/80">
                {seite.paket.brauchst.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-magenta" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Abschnitt>

        {/* Kostenlos reinschauen */}
        <Abschnitt>
          <div className="reveal max-w-3xl border border-magenta/50 bg-white/[0.03] p-8 glow-box-sm md:p-12">
            <SectionHeading kicker={seite.webinar.kicker}>{seite.webinar.headline}</SectionHeading>
            <p className="mt-6 text-base leading-relaxed text-dim md:text-lg">{seite.webinar.text}</p>
            <div className="mt-8">
              <Button href={href(seite.webinar.cta.to)} variant="outline">
                {seite.webinar.cta.label}
              </Button>
            </div>
          </div>
        </Abschnitt>

        {/* Fragen */}
        <Abschnitt hell>
          <div className="reveal">
            <SectionHeading kicker={seite.fragen.kicker} tone="dark">
              {seite.fragen.headline}
            </SectionHeading>
          </div>
          <div className="mt-10 max-w-3xl divide-y divide-black/15 border-y border-black/15">
            {seite.fragen.liste.map((f) => (
              <details key={f.frage} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-black">
                  {f.frage}
                  <span aria-hidden="true" className="font-mono text-magenta transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-black/75">
                  {f.antwort}
                  {f.link && (
                    <>
                      {" "}
                      <a
                        href={f.link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-magenta-deep underline underline-offset-4"
                      >
                        {f.link.label}
                      </a>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </Abschnitt>

        {/* Glow up: gleiches Design wie der Schlussblock auf /schule/ (src/components/CtaSection.jsx) */}
        <section id="anmeldung" className="relative overflow-hidden bg-magenta py-24 md:py-32">
          {/* Dunkler Verlauf fuer Kontrast + Rasterlinien */}
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-black/55" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(90deg,#000_0_1px,transparent_1px_88px)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[140px]"
          />

          <div className="reveal relative mx-auto max-w-3xl px-5 text-center md:px-10">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-white/90">
              {seite.glow.kicker}
            </p>
            <h2 className="mt-4 font-display text-[64px] leading-[0.85] font-black italic text-white [text-shadow:0_0_28px_rgba(255,255,255,0.45)] sm:text-[88px] md:text-[112px]">
              {seite.glow.headline}
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white md:text-lg">
              {seite.glow.zeilen.map((z) => (
                <span key={z} className="block">
                  {z}
                </span>
              ))}
            </p>
            {seite.glow.song && (
              <p className="mt-8 font-marker text-3xl text-white [text-shadow:0_0_18px_rgba(255,255,255,0.6)] md:text-4xl">
                {seite.glow.song}
              </p>
            )}
            <div className="mt-10 flex justify-center">
              <Button href={href(cta.to)} variant="light" size="lg" className="w-full sm:w-auto">
                {cta.label}
              </Button>
            </div>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-white/85">{seite.glow.note}</p>
            {seite.glow.buchen && (
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/85">
                {seite.glow.buchen.frage}{" "}
                <a
                  href={seite.glow.buchen.href}
                  className="font-bold text-white underline underline-offset-4 hover:no-underline"
                >
                  {seite.glow.buchen.link}
                </a>
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer footer={seite.footer} />
    </>
  );
}
