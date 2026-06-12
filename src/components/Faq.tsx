import { faq } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** FAQ na natywnych <details> — dostępne z klawiatury bez JS. */
export default function Faq() {
  return (
    <section id="faq" className="border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading no={faq.sectionNo} title={faq.title} />
        </Reveal>

        <div className="mt-10 space-y-4">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i * 0.05, 0.2)}>
              <details className="card-print faq-anim group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-lg font-bold transition-colors duration-200 hover:bg-paper motion-reduce:transition-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center border-2 border-ink bg-sun text-xl font-extrabold transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="border-t-2 border-dashed border-ink/25 px-5 pt-4 pb-5 text-ink/80">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
