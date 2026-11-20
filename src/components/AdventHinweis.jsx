import { adventHinweis } from "../data/content.js";

/**
 * Adventskranz neben dem Magenta-Banner im Kopfbereich (dort, wohin der Pfeil
 * von "Hack the system" zeigt). Fuehrt zum KI-Adventskalender. Die Flammen flackern leicht (nicht bei reduzierter Bewegung).
 * Nach dem Datum in adventHinweis.bis erscheint er nicht mehr.
 */
export const adventAktiv = () => Date.now() < Date.parse(adventHinweis.bis);

export default function AdventHinweis({ className = "" }) {
  if (!adventAktiv()) return null;

  const kerzen = [14, 26, 38, 50];
  return (
    <a
      href={adventHinweis.href}
      aria-label={adventHinweis.label}
      className={`group flex shrink-0 flex-col items-center gap-2 ${className}`}
    >
      <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border-2 border-magenta bg-ink glow-box-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg] group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-white sm:h-[96px] sm:w-[96px]">
        <svg viewBox="0 0 64 48" aria-hidden="true" className="h-auto w-[54px] overflow-visible sm:w-[68px]">
          {kerzen.map((x, i) => (
            <g key={x}>
              <path
                className="advent-flamme"
                style={{ animationDelay: `${i * 0.35}s` }}
                d={`M${x} 6 C ${x + 3.5} 11, ${x + 3.5} 16, ${x} 17 C ${x - 3.5} 16, ${x - 3.5} 11, ${x} 6 Z`}
                fill="#fd05d4"
              />
              <rect x={x - 4} y="19" width="8" height="17" rx="1" fill="none" stroke="#ffffff" strokeWidth="1.6" />
            </g>
          ))}
          <path d="M4 38 C 18 34, 28 42, 32 38 S 48 34, 60 38" fill="none" stroke="#8a8995" strokeWidth="2" strokeLinecap="round" />
          {[10, 24, 40, 54].map((x, i) => (
            <circle key={x} cx={x} cy={i % 2 ? 41 : 36} r="1.8" fill="#fd05d4" />
          ))}
        </svg>
      </span>
      <span aria-hidden="true" className="whitespace-pre-line text-center font-mono text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-magenta sm:text-[11px]">
        {adventHinweis.notiz}
      </span>
    </a>
  );
}
