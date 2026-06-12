<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# EkoSolar — konwencje projektu

- Cała treść strony żyje w `src/data/content.ts` — komponenty nie zawierają tekstów na sztywno.
- Estetyka „solar print”: tokeny w `@theme` w `src/app/globals.css` (papier, atrament, słońce);
  twarde cienie (`--shadow-hard*`), obrysy 2px, utility `card-print` / `btn-base` / `mark-sun`.
- Animacje wyłącznie przez `src/components/Reveal.tsx` (framer-motion, respektuje
  `prefers-reduced-motion`).
- Kalkulator → formularz komunikują się przez `src/lib/bill-bridge.ts` (CustomEvent),
  bez globalnego stanu.
- Strona jest w pełni statyczna — brak backendu; formularz loguje zgłoszenie do konsoli.
