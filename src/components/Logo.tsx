/**
 * The shop's logo, rebuilt from its roadside sign: a peddler's wagon heaped
 * with furniture (traced vector in /public/logo/wagon.svg) under the sign's
 * Goudy-style lettering. Both pieces paint in currentColor.
 */

const WAGON_VIEWBOX = "0 0 614 283";
const goudy = { fontFamily: "var(--font-goudy), 'Goudy Old Style', Georgia, serif" };

export function WagonMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={WAGON_VIEWBOX} className={className} aria-hidden focusable="false">
      <use href="/logo/wagon.svg#wagon" />
    </svg>
  );
}

/** Horizontal lockup for the nav: wagon mark beside the shop name. */
export function LogoInline({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <WagonMark className="h-[1.45em] w-auto shrink-0" />
      <span className="leading-none whitespace-nowrap" style={goudy}>
        Yankee Pedlars&apos; Shoppe
      </span>
    </span>
  );
}

/** The full sign lockup: arched name, "Shoppe", a rule, the trade, the wagon. */
export function SignLockup({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 530"
      className={className}
      role="img"
      aria-label="Yankee Pedlars' Shoppe, Furniture & Antiques"
    >
      <defs>
        <path id="sign-arc" d="M 58 178 A 330 330 0 0 1 542 178" />
      </defs>
      <g fill="currentColor" stroke="currentColor" strokeWidth="0.9" paintOrder="stroke" style={goudy}>
        <text fontSize="74" textAnchor="middle">
          <textPath href="#sign-arc" startOffset="50%">
            Yankee Pedlars<tspan dx="-5">&rsquo;</tspan>
          </textPath>
        </text>
        <text x="300" y="250" fontSize="68" textAnchor="middle">
          Shoppe
        </text>
        <text x="300" y="338" fontSize="37" textAnchor="middle">
          Furniture &amp; Antiques
        </text>
      </g>
      <line x1="150" y1="283" x2="450" y2="283" stroke="currentColor" strokeWidth="2.5" />
      <svg x="128" y="365" width="344" height="158" viewBox={WAGON_VIEWBOX}>
        <use href="/logo/wagon.svg#wagon" />
      </svg>
    </svg>
  );
}
