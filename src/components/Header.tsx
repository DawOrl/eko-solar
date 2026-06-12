import { site } from "@/data/content";
import SunMark from "./SunMark";

export default function Header() {
  return (
    <header className="border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="EkoSolar — początek strony">
          <SunMark className="h-9 w-9 text-ink" />
          <span className="font-display text-xl font-extrabold tracking-tight">
            {site.name}
          </span>
        </a>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={`tel:${site.phone}`}
            className="nums hidden items-center gap-2 font-bold sm:flex hover:underline underline-offset-4"
          >
            <PhoneIcon />
            {site.phoneDisplay}
          </a>
          <a
            href={`tel:${site.phone}`}
            className="btn-base btn-press bg-cream p-2.5 sm:hidden"
            aria-label={`Zadzwoń: ${site.phoneDisplay}`}
          >
            <PhoneIcon />
          </a>
          <a href="#wycena" className="btn-base btn-press bg-sun px-4 py-2.5 text-sm sm:px-5 sm:text-base">
            Bezpłatna wycena
          </a>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 5.5c0-1.1.9-2 2-2h2.6c.5 0 .9.3 1 .8l1 3.5c.1.4 0 .9-.4 1.1l-1.6 1.2a13.6 13.6 0 0 0 6.8 6.8l1.2-1.6c.2-.4.7-.5 1.1-.4l3.5 1c.5.1.8.5.8 1v2.6c0 1.1-.9 2-2 2A16.5 16.5 0 0 1 2.5 5.5Z"
      />
    </svg>
  );
}
