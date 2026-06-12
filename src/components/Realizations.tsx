import Image from "next/image";
import { realizations } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Realizations() {
  return (
    <section id="realizacje" className="border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading no={realizations.sectionNo} title={realizations.title} />
        </Reveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {realizations.items.map((item, i) => (
            <li key={item.location}>
              <Reveal delay={(i % 2) * 0.08} className="h-full">
                <article className="card-print group flex h-full flex-col overflow-hidden">
                  <div className="relative overflow-hidden border-b-2 border-ink">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={640}
                      height={420}
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="aspect-3/2 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <p
                      className="nums absolute top-3 left-3 -rotate-2 border-2 border-ink bg-sun px-3 py-1 font-display font-extrabold shadow-hard-xs"
                    >
                      {item.power}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-bold">📍 {item.location}</h3>
                    <p className="mt-2 flex-1 text-ink/75">{item.detail}</p>
                    <p className="nums mt-4 border-t-2 border-dashed border-ink/25 pt-3 font-bold text-pine">
                      Oszczędność: {item.saving}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
