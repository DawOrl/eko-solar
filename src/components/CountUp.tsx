"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Nabijająca się liczba: parsuje wiodącą wartość („640+”, „4,9 ★”, „15 lat”)
 * i animuje ją od zera przy wejściu w viewport. Sufiks zostaje bez zmian.
 */
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+(?:,\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  const target = match ? Number(match[1].replace(",", ".")) : 0;
  const decimals = match?.[1].includes(",") ? 1 : 0;
  const suffix = match?.[2] ?? "";
  const [display, setDisplay] = useState(decimals ? "0,0" : "0");

  useEffect(() => {
    if (!match || !inView || reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.2,
      ease: [0.16, 0.8, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(
          v.toLocaleString("pl-PL", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }),
        ),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduceMotion]);

  // Bez animacji (lub gdy wartość nie zaczyna się liczbą) — statyczny tekst
  if (!match || reduceMotion) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
