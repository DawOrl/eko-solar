"use client";

import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { calculator } from "@/data/content";
import { emitBill } from "@/lib/bill-bridge";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const plnFormat = new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 });

/** Wynik kalkulatora goni wartość sprężyście zamiast skakać. */
function SpringNumber({
  value,
  format,
}: {
  value: number;
  format: (v: number) => string;
}) {
  const reduceMotion = useReducedMotion();
  const spring = useSpring(value, { stiffness: 170, damping: 26 });
  const text = useTransform(spring, (v) => format(v));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  if (reduceMotion) {
    return <span>{format(value)}</span>;
  }
  return <motion.span>{text}</motion.span>;
}

export default function Calculator() {
  const [bill, setBill] = useState<number>(calculator.defaultBill);

  const result = useMemo(() => {
    const yearlyKwh = (bill * 12) / calculator.pricePerKwh;
    const power = Math.max(2, Math.round((yearlyKwh / calculator.yieldPerKwp) * 2) / 2);
    const yearlySavings = Math.round((bill * 12 * calculator.savingsRate) / 100) * 100;
    const investment = Math.max(0, power * calculator.costPerKwp - calculator.grant);
    const paybackYears = Math.max(1, Math.round((investment / yearlySavings) * 10) / 10);
    return { power, yearlySavings, paybackYears };
  }, [bill]);

  const fillPercent =
    ((bill - calculator.minBill) / (calculator.maxBill - calculator.minBill)) * 100;

  return (
    <section id="kalkulator" className="border-b-2 border-ink bg-sun">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading no={calculator.sectionNo} title={calculator.title} sub={calculator.sub} />
        </Reveal>

        <Reveal>
          <div className="card-print mt-12 grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <label htmlFor="bill-slider" className="font-display text-lg font-bold">
                Twój miesięczny rachunek za prąd
              </label>
              <p className="nums mt-3 font-display text-5xl font-extrabold sm:text-6xl">
                {plnFormat.format(bill)} <span className="text-3xl">zł</span>
              </p>
              <input
                id="bill-slider"
                type="range"
                className="slider-sun mt-8"
                style={{ "--fill": `${fillPercent}%` } as React.CSSProperties}
                min={calculator.minBill}
                max={calculator.maxBill}
                step={calculator.step}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                aria-valuetext={`${bill} złotych miesięcznie`}
              />
              <div className="nums mt-2 flex justify-between text-sm font-bold text-ink/60">
                <span>{calculator.minBill} zł</span>
                <span>{calculator.maxBill} zł</span>
              </div>
              <p className="mt-6 text-sm text-ink/60">{calculator.disclaimer}</p>
            </div>

            <div className="flex flex-col justify-between gap-6 border-t-2 border-dashed border-ink/30 pt-6 lg:border-t-0 lg:border-l-2 lg:pt-0 lg:pl-10">
              <dl className="grid grid-cols-2 gap-5">
                <div className="col-span-2">
                  <dt className="text-sm font-bold tracking-wide text-ink/60 uppercase">
                    Oszczędzasz rocznie do
                  </dt>
                  <dd className="nums font-display text-4xl font-extrabold text-pine sm:text-5xl">
                    <SpringNumber
                      value={result.yearlySavings}
                      format={(v) => plnFormat.format(Math.round(v / 100) * 100)}
                    />{" "}
                    zł
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold tracking-wide text-ink/60 uppercase">
                    Dobrana moc
                  </dt>
                  <dd className="nums font-display text-2xl font-extrabold">
                    <SpringNumber
                      value={result.power}
                      format={(v) => (Math.round(v * 2) / 2).toString().replace(".", ",")}
                    />{" "}
                    kWp
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-bold tracking-wide text-ink/60 uppercase">
                    Zwrot z dotacją
                  </dt>
                  <dd className="nums font-display text-2xl font-extrabold">
                    ~
                    <SpringNumber
                      value={result.paybackYears}
                      format={(v) => ((Math.round(v * 10) / 10).toFixed(1)).replace(".", ",")}
                    />{" "}
                    lat
                  </dd>
                </div>
              </dl>

              <a
                href="#wycena"
                onClick={() => emitBill(bill)}
                className="btn-base btn-press bg-ink px-6 py-3.5 text-lg text-sun"
              >
                {calculator.cta} →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
