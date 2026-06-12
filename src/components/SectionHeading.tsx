type SectionHeadingProps = {
  no: string;
  title: string;
  sub?: string;
  /** Wariant na ciemnym tle */
  inverted?: boolean;
};

/** Nagłówek sekcji w stylu folderu drukowanego: „01 — Tytuł” */
export default function SectionHeading({
  no,
  title,
  sub,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-3 flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase ${
          inverted ? "text-sun" : "text-pine"
        }`}
      >
        <span
          className={`nums inline-flex h-8 w-8 items-center justify-center border-2 ${
            inverted
              ? "border-sun text-sun"
              : "border-ink bg-sun text-ink shadow-hard-xs"
          }`}
          aria-hidden
        >
          {no}
        </span>
        Sekcja {no}
      </p>
      <h2
        className={`font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
          inverted ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-lg ${inverted ? "text-cream/80" : "text-ink/75"}`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
