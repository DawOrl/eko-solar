"use client";

import { useEffect, useState } from "react";
import { site, stickyCta } from "@/data/content";

/**
 * Sticky pasek CTA na mobile — pojawia się po przescrollowaniu hero,
 * znika przy sekcji formularza (żeby nie zasłaniać przycisku wysyłki).
 */
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const form = document.getElementById("wycena");
    if (!hero || !form) return;

    let heroInView = true;
    let formInView = false;
    const update = () => setVisible(!heroInView && !formInView);

    const heroObserver = new IntersectionObserver(([entry]) => {
      heroInView = entry.isIntersecting;
      update();
    });
    const formObserver = new IntersectionObserver(([entry]) => {
      formInView = entry.isIntersecting;
      update();
    });
    heroObserver.observe(hero);
    formObserver.observe(form);
    return () => {
      heroObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t-2 border-ink bg-cream p-3 transition-transform duration-300 motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-stretch gap-3">
        <a
          href="#wycena"
          tabIndex={visible ? 0 : -1}
          className="btn-base btn-press flex-1 bg-sun px-4 py-3"
        >
          {stickyCta.label}
        </a>
        <a
          href={`tel:${site.phone}`}
          tabIndex={visible ? 0 : -1}
          className="btn-base btn-press bg-cream px-4 py-3"
          aria-label={`Zadzwoń: ${site.phoneDisplay}`}
        >
          ☎
        </a>
      </div>
    </div>
  );
}
