import { problem } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ProblemSolution() {
  const maxPrice = Math.max(...problem.pricePoints.map((p) => p.value));

  return (
    <section id="problem" className="border-b-2 border-ink bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading no={problem.sectionNo} title={problem.title} />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Wykres słupkowy cen prądu — czyste divy, bez biblioteki */}
          <Reveal>
            <figure className="card-print p-6 sm:p-8">
              <figcaption className="mb-6 font-display text-lg font-bold">
                Ile kosztuje 1 kWh z sieci? <span className="text-clay">↗</span>
              </figcaption>
              <div className="flex items-end justify-between gap-3 sm:gap-5" aria-hidden>
                {problem.pricePoints.map((point, i) => {
                  const isLast = i === problem.pricePoints.length - 1;
                  return (
                    <div key={point.year} className="flex flex-1 flex-col items-center gap-2">
                      <span className={`nums font-display font-extrabold ${isLast ? "text-xl text-clay" : "text-ink/80"}`}>
                        {point.value.toFixed(2).replace(".", ",")}
                      </span>
                      <div
                        className={`w-full border-2 border-ink ${
                          isLast ? "bg-clay" : "bg-paper-deep"
                        }`}
                        style={{ height: `${Math.round((point.value / maxPrice) * 160)}px` }}
                      />
                      <span className="nums text-sm font-bold">{point.year}</span>
                    </div>
                  );
                })}
              </div>
              <p className="sr-only">
                Cena energii rosła z {problem.pricePoints[0].value} zł/kWh w roku{" "}
                {problem.pricePoints[0].year} do{" "}
                {problem.pricePoints[problem.pricePoints.length - 1].value} zł/kWh w roku{" "}
                {problem.pricePoints[problem.pricePoints.length - 1].year}.
              </p>
              <p className="mt-5 border-t-2 border-dashed border-ink/30 pt-4 text-sm text-ink/60">
                {problem.priceCaption}
              </p>
            </figure>
          </Reveal>

          <div className="space-y-5">
            {problem.solution.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card-print flex gap-4 p-5 sm:p-6">
                  <span
                    className="nums mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center border-2 border-ink bg-sun font-display font-extrabold"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="mt-1.5 text-ink/75">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
