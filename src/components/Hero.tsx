import Image from "next/image";
import { hero, site } from "@/data/content";

export default function Hero() {
  return (
    <section id="hero" className="overflow-x-clip border-b-2 border-ink bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-20">
        <div>
          <p className="mb-4 inline-block border-2 border-ink bg-cream px-3 py-1 text-sm font-bold shadow-hard-sm">
            {hero.kicker}
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {hero.headlinePre} <span className="mark-sun">{hero.headlineMark}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink/80">{hero.sub}</p>

          <ul className="mt-6 space-y-2.5">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 font-medium">
                <CheckIcon />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#wycena" className="btn-base btn-press bg-sun px-6 py-3.5 text-lg">
              Zamów bezpłatną wycenę
            </a>
            <a
              href={`tel:${site.phone}`}
              className="btn-base btn-press nums bg-cream px-6 py-3.5 text-lg"
            >
              ☎ {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="rotate-[1.5deg] border-2 border-ink bg-cream p-2.5 shadow-hard-lg">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={760}
              height={560}
              priority
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 32rem, 100vw"
              className="aspect-4/3 w-full border-2 border-ink object-cover"
            />
          </div>
          <p
            className="sticker-float absolute -top-4 -right-2 rotate-[5deg] border-2 border-ink bg-sun px-4 py-2 font-display text-lg font-extrabold shadow-hard-sm sm:-right-4"
            aria-hidden
          >
            {hero.sticker}
          </p>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-6 w-6 shrink-0 border-2 border-ink bg-sun p-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}
