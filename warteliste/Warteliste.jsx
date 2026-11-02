import { useState } from "react";
import { brevoFormUrl, warteliste } from "./content.js";

const GRUPPEN = ["job", "schule", "business"];

/**
 * Warteliste mit Brevo-Formular (Double-Opt-in).
 * Das Formular hat ein echtes action/method und schickt ohne JavaScript ab;
 * mit JavaScript sendet es im Hintergrund und zeigt die Rueckmeldung hier an.
 */
export default function Warteliste() {
  const param = new URLSearchParams(window.location.search).get("gruppe");
  const gruppe = GRUPPEN.includes(param) ? param : "allgemein";
  const text = gruppe === "schule" ? warteliste.schule : warteliste.allgemein;
  const [status, setStatus] = useState("");
  const [fertig, setFertig] = useState(false);

  async function absenden(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus(warteliste.senden);
    try {
      const antwort = await fetch(`${brevoFormUrl}?isAjax=1`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!antwort.ok) throw new Error(String(antwort.status));
      const daten = await antwort.json();
      if (!daten.success) throw new Error("Brevo hat abgelehnt");
      setStatus(warteliste.erfolg);
      setFertig(true);
      form.reset();
    } catch {
      setStatus(warteliste.fehler(warteliste.fallbackMail));
    }
  }

  const feld =
    "mt-2 block w-full border border-white/20 bg-ink-2 px-4 py-3 text-base text-white outline-none transition-colors focus:border-magenta";
  const label = "font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70";

  return (
    <main className="min-h-screen bg-ink pb-24 pt-14">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-magenta/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-2xl px-5 md:px-10">
        <a
          href={import.meta.env.BASE_URL}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-magenta transition-colors hover:text-magenta-soft"
        >
          <span aria-hidden="true">←</span>
          {warteliste.zurueck}
        </a>

        <p className="mt-12 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.34em] text-magenta glow-text">
          <span aria-hidden="true" className="h-px w-8 bg-magenta" />
          {text.kicker}
        </p>
        <h1 className="mt-3 font-display text-[42px] leading-[0.95] font-black italic text-white glow-text-white md:text-[60px]">
          {text.headline}
        </h1>
        {text.absaetze.map((absatz) => (
          <p key={absatz} className="mt-5 text-base leading-relaxed text-dim md:text-lg">
            {absatz}
          </p>
        ))}

        <form
          action={brevoFormUrl}
          method="post"
          onSubmit={absenden}
          className="mt-12 space-y-6 border-l-4 border-magenta bg-ink-2 p-6 md:p-8"
        >
          <input type="hidden" name="GRUPPE" value={gruppe} />
          <input type="hidden" name="locale" value="de" />
          <input type="hidden" name="html_type" value="simple" />
          <input type="text" name="email_address_check" defaultValue="" tabIndex={-1} autoComplete="off" hidden />

          <div>
            <label className={label} htmlFor="an-vorname">{warteliste.vorname}</label>
            <input className={feld} id="an-vorname" name="VORNAME" type="text" autoComplete="given-name" required />
          </div>
          <div>
            <label className={label} htmlFor="an-mail">{warteliste.email}</label>
            <input className={feld} id="an-mail" name="EMAIL" type="email" autoComplete="email" required />
          </div>

          {gruppe === "job" && (
            <fieldset>
              <legend className={label}>{warteliste.interesse.frage}</legend>
              <div className="mt-3 space-y-2">
                {warteliste.interesse.optionen.map((o) => (
                  <label key={o.value} className="flex items-center gap-3 text-[15px] text-white/85">
                    <input type="radio" name="INTERESSE" value={o.value} required className="accent-magenta" />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          <label className="flex gap-3 text-[14px] leading-relaxed text-dim">
            <input type="checkbox" name="OPT_IN" value="1" required className="mt-1 shrink-0 accent-magenta" />
            <span>
              {text.einwilligung}{" "}
              <a
                href={`${import.meta.env.BASE_URL}datenschutz/`}
                className="text-magenta underline decoration-magenta/40 underline-offset-4 hover:decoration-magenta"
              >
                {warteliste.datenschutzLink}
              </a>
              .
            </span>
          </label>

          <button
            type="submit"
            disabled={fertig}
            className="inline-flex items-center justify-center gap-3 bg-magenta px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-white glow-box transition-all duration-300 hover:bg-white hover:text-magenta disabled:cursor-default disabled:opacity-60 md:text-base"
          >
            {warteliste.button} <span aria-hidden="true">→</span>
          </button>
          <p className="text-[13px] text-faint">{warteliste.hinweis}</p>
          <p role="status" aria-live="polite" className="text-[15px] font-semibold text-white">
            {status}
          </p>
        </form>
      </div>
    </main>
  );
}
