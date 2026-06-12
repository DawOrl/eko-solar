import { site, testimonials } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const tilts = ["-rotate-1", "rotate-1", "-rotate-[0.5deg]"];

export default function Testimonials() {
  return (
    <section id="opinie" className="border-b-2 border-ink bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading
            no={testimonials.sectionNo}
            title={testimonials.title}
            sub={`Średnia ocena ${site.googleRating.toString().replace(".", ",")} ★ z ${site.reviewCount} opinii w Google.`}
          />
        </Reveal>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.items.map((opinion, i) => (
            <li key={opinion.name}>
              <Reveal delay={i * 0.1} className="h-full">
                <figure
                  className={`card-print flex h-full flex-col p-6 ${tilts[i % tilts.length]}`}
                >
                  <p className="text-sun-deep" aria-label="Ocena 5 na 5 gwiazdek">
                    ★★★★★
                  </p>
                  <blockquote className="mt-3 flex-1 text-ink/85">
                    „{opinion.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t-2 border-dashed border-ink/25 pt-4">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-sun font-display font-extrabold"
                      aria-hidden
                    >
                      {opinion.initials}
                    </span>
                    <span>
                      <span className="block font-bold">{opinion.name}</span>
                      <span className="block text-sm text-ink/60">{opinion.place}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
