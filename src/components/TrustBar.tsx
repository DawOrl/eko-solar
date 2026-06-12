import { trust } from "@/data/content";

/** Pasek zaufania: odwrócony pasek atramentowy z dużymi liczbami. */
export default function TrustBar() {
  return (
    <section aria-label="Liczby, którym można zaufać" className="border-b-2 border-ink bg-ink text-paper">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px lg:grid-cols-4">
        {trust.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center gap-1 px-4 py-6 text-center ${
              i > 0 ? "border-l border-paper/20" : ""
            } ${i >= 2 ? "border-t border-paper/20 lg:border-t-0" : ""} ${
              i === 2 ? "border-l-0 lg:border-l" : ""
            }`}
          >
            <dt className="order-2 text-sm text-paper/70">{stat.label}</dt>
            <dd className="nums order-1 font-display text-3xl font-extrabold text-sun sm:text-4xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
