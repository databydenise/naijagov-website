/**
 * A deliberately generic seal for the fictional portal: a shield, a band, and
 * three chevrons. It is abstract on purpose — the real Nigerian coat of arms
 * is a restricted state emblem, and a page that reproduced it beside a
 * .gov.ng address could be read as an official site. Nothing here is drawn
 * from, or meant to evoke, any real crest, ministry, or agency.
 */
function Emblem() {
  return (
    <svg
      viewBox="0 0 56 56"
      width={40}
      height={40}
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <path
        d="M28 5 47 12v18c0 11-8 18.5-19 21-11-2.5-19-10-19-21V12L28 5Z"
        fill="var(--green-50)"
        stroke="var(--green-900)"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M11 24h34"
        stroke="var(--green-900)"
        strokeWidth={1.5}
        opacity={0.35}
      />
      <circle cx={28} cy={17} r={4} fill="var(--green-900)" opacity={0.8} />
      <path
        d="M20 32.5 28 37l8-4.5M20 39l8 4.5 8-4.5"
        fill="none"
        stroke="var(--green-900)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.55}
      />
    </svg>
  );
}

export { Emblem };
