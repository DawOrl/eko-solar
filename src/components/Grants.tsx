import { grants } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Sekcja dofinansowań — odwrócona kolorystyka (atrament), łamie rytm strony. */
export default function Grants() {
  return (
    <section id="dotacje" className="border-b-2 border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading no={grants.sectionNo} title={grants.title} sub={grants.sub} inverted />
        </Reveal>

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {grants.items.map((grant, i) => (
            <li key={grant.name}>
              <Reveal delay={i * 0.1} className="h-full">
                <div className="flex h-full flex-col border-2 border-sun bg-ink p-6 shadow-hard-sun">
                  <p className="nums font-display text-3xl font-extrabold text-sun">
                    {grant.amount}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-cream">
                    {grant.name}
                  </h3>
                  <p className="mt-2 flex-1 text-paper/75">{grant.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
