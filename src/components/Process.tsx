import { process } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="proces" className="border-b-2 border-ink bg-paper-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading no={process.sectionNo} title={process.title} />
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {process.steps.map((step, i) => (
            <li key={step.no} className="relative flex lg:px-4 lg:first:pl-0 lg:last:pr-0">
              {/* Łącznik między krokami na desktopie */}
              {i < process.steps.length - 1 ? (
                <span
                  className="dash-line absolute top-7 -right-4 hidden h-0.5 w-8 lg:block"
                  aria-hidden
                />
              ) : null}
              <Reveal delay={i * 0.1} className="flex w-full">
                <div className="card-print flex w-full flex-col p-5">
                  <span
                    className="nums inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-sun font-display text-2xl font-extrabold shadow-[3px_3px_0_0_var(--color-ink)]"
                    aria-hidden
                  >
                    {step.no}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/75">{step.text}</p>
                  <p className="mt-4 border-t-2 border-dashed border-ink/25 pt-3 text-sm font-bold text-pine">
                    ⏱ {step.time}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
