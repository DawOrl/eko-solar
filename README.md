# EkoSolar ☀

> Demo do portfolio — **landing page usługi lokalnej pod kampanie Ads**, z jednym celem:
> zamienić odwiedzającego w zapytanie o wycenę.

Fikcyjna firma „EkoSolar" (montaż fotowoltaiki i pomp ciepła, woj. małopolskie).
Persona: właściciel domu jednorodzinnego 35–60 lat, wchodzi z reklamy Google/Facebook,
decyzję podejmuje na telefonie — stąd mobile-first, klikany telefon w każdym miejscu
strony i sticky pasek CTA.

Estetyka **„solar print"** — energetyczna ulotka drukarska zamiast typowego
„AI landing": kremowy papier, atramentowa zieleń, słoneczny żółty jak zakreślacz,
twarde offsetowe cienie i grube obrysy zamiast soft-glow, naklejkowe badge,
numeracja sekcji jak w folderze reklamowym. Zero gradient-tekstów i pill-badge'y —
zamiast nich konkretne liczby, zdjęcia i social proof.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS 4** (design system w `@theme`, bez `tailwind.config`)
- **framer-motion** (reveal-on-scroll z poszanowaniem `prefers-reduced-motion`)
- **next/font** (Bricolage Grotesque + Archivo, subset `latin-ext`), **next/image** (Unsplash)
- Strona w pełni statyczna — zero backendu, zero baz danych

## Funkcje

- **Kalkulator oszczędności** — suwak miesięcznego rachunku → roczna oszczędność,
  dobrana moc instalacji (kWp) i szacowany zwrot z dotacją. Wynik prowadzi do formularza
  i **wstępnie wypełnia pole rachunku** (CustomEvent, bez globalnego stanu).
- **Formularz wyceny** — walidacja inline (telefon, kod pocztowy), checkbox RODO,
  honeypot antyspam, stan „dziękujemy" z alternatywą `tel:`. Demo: zgłoszenie trafia
  do konsoli (bez wysyłki).
- **Sticky mobile CTA** — pojawia się po przescrollowaniu hero, chowa się przy sekcji
  formularza, żeby nie zasłaniać przycisku wysyłki.
- **Sekcje konwersyjne** — pasek zaufania z liczbami, wykres rosnących cen prądu
  (czyste divy, bez biblioteki), 4 kroki współpracy, realizacje z mocą i oszczędnością,
  opinie, dofinansowania (Mój Prąd / ulga termomodernizacyjna), FAQ na natywnych
  `<details>`.
- **SEO lokalne** — JSON-LD `LocalBusiness` (z `aggregateRating`), Open Graph
  (obraz generowany przez `next/og`), `sitemap.xml`, `robots.txt`, nagłówki bezpieczeństwa.
- **Dostępność** — etykiety i `aria-*` w formularzu, `sr-only` opis wykresu,
  fokus widoczny, animacje wyłączane przez `prefers-reduced-motion`.

## Wyniki Lighthouse (build produkcyjny)

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :-----------: | :------------: | :-: |
|     91      |      100      |      100       | 100 |

## Szybki start

```bash
npm install
npm run dev          # http://localhost:3000
```

Build produkcyjny:

```bash
npm run build
npm run start
```

## Struktura

```
src/
├── app/             # layout (fonty, metadata, JSON-LD), strona, OG, sitemap, robots
├── components/      # sekcje strony — kolejność składana w page.tsx
├── data/content.ts  # CAŁA treść strony w jednym pliku (teksty, liczby, zdjęcia)
└── lib/             # site.ts (adres produkcyjny), bill-bridge.ts (kalkulator → formularz)
```

Podmiana treści = edycja jednego pliku `src/data/content.ts`.
Adres produkcyjny (metadata, JSON-LD, sitemap) ustawia się w [`src/lib/site.ts`](src/lib/site.ts).

---

Strona demonstracyjna portfolio — firma, dane i opinie są fikcyjne. Zdjęcia: Unsplash.
