# EkoSolar — landing usługi lokalnej z wyceną (demo)

Projekt autorski do biblioteki realizacji na **dorlowski.dev**.

## Cel demo

Domyka kategorię **„Landing page"** w bibliotece (usługa z oferty: „Pod kampanie
Ads, formularze leadowe, A/B testy, analityka" — pakiet Start od 990 zł), która
nie ma jeszcze żadnej realizacji. Pokazuje klientowi-usługodawcy (fotowoltaika,
ocieplenia, czyszczenie tapicerki itp.), jak wygląda strona, na którą kieruje się
ruch z reklam i która zamienia odwiedzających w zapytania o wycenę.

## Fikcyjny klient

**EkoSolar** — lokalna firma montująca panele fotowoltaiczne i pompy ciepła
(woj. małopolskie). Klient docelowy: właściciel domu jednorodzinnego 35–60 lat,
wchodzi z reklamy Google/Facebook, decyzję podejmuje na telefonie.

## Koncept wizualny

- **Jeden cel strony = wycena.** Każda sekcja prowadzi do formularza; sticky CTA.
- Paleta: ciepła zieleń + słoneczny żółty na jasnym tle (przełamanie ciemnej
  biblioteki — większość obecnych demo jest dark mode).
- Duże zdjęcia realizacji montażu (Unsplash: solar panels, roof installation).
- Energiczna, bezpośrednia typografia; liczby (oszczędności, kW, lata gwarancji)
  jako wyróżniki.
- Bez patternów „AI landing": zamiast pill-badge'y i gradient-tekstów —
  konkretne liczby, zdjęcia i social proof.

## Struktura sekcji (jedna strona)

1. **Hero** — obietnica („Rachunki za prąd niższe nawet o 90%"), zdjęcie
   instalacji, formularz skrócony (kod pocztowy + telefon) lub CTA do wyceny.
2. **Pasek zaufania** — liczby: X instalacji, Y lat gwarancji, ocena Google.
3. **Problem → rozwiązanie** — rosnące ceny prądu vs własna energia.
4. **Kalkulator oszczędności** (interaktywny) — suwak miesięcznego rachunku →
   szacowana oszczędność rocznie + dobrana moc instalacji. Wynik prowadzi do
   formularza wyceny.
5. **Jak działamy** — 4 kroki (audyt → projekt → montaż → serwis).
6. **Realizacje** — 3–4 karty ze zdjęciem, lokalizacją i mocą instalacji.
7. **Opinie klientów** — 3 testimoniale ze zdjęciem i miejscowością.
8. **Dofinansowania** — sekcja „Mój Prąd / ulga termomodernizacyjna" (trust).
9. **FAQ** — 5–6 pytań (zwrot z inwestycji, zima, formalności).
10. **Formularz wyceny** (główna konwersja) — imię, telefon, kod pocztowy,
    miesięczny rachunek; RODO checkbox; honeypot antyspam.
11. **Stopka** — NIP, adres, telefon klikany (`tel:`).

## Funkcjonalności kluczowe

- Kalkulator oszczędności (czysty React state, bez backendu).
- Formularz leadowy z walidacją (bez wysyłki — `console.log` / mock, jak w
  pozostałych demo) + stan „dziękujemy".
- Sticky mobile CTA bar („Bezpłatna wycena ☀") widoczny po przescrollowaniu hero.
- Płynne reveal-on-scroll (framer-motion), `prefers-reduced-motion` respektowane.
- Lighthouse 90+ (perf/SEO/a11y) — to landing pod Ads, szybkość to argument.

## Stack (spójny z resztą demo)

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 (bez tailwind.config —
theme w CSS) · framer-motion · TypeScript. Deploy: Vercel. Repo: GitHub
(`DawOrl/eko-solar`).

## Kroki wdrożenia

1. `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir`
2. Theme w `globals.css` (paleta, fonty przez `next/font` z `latin-ext`).
3. Dane treściowe w jednym pliku `src/data/content.ts` (jak `cv-data` w portfolio).
4. Sekcje jako komponenty w `src/components/` — kolejność składana w `page.tsx`.
5. Kalkulator + formularz (klienckie komponenty, walidacja, stany).
6. SEO: metadata, OG, JSON-LD `LocalBusiness`; responsywność 375/768/1440.
7. Deploy na Vercel + repo GitHub.

## Definicja ukończenia (publikacja w bibliotece)

- [ ] Live na Vercelu, repo na GitHubie
- [ ] Wpis w `portfolio_web/scripts/shots.config.json` + `npm run shots eko-solar`
- [ ] Kompresja PNG (sharp) — surowe zrzuty 2x potrafią ważyć 3–5 MB
- [ ] Obiekt projektu w `cv-data.ts` (kategoria: **Landing page**, kind: demo,
      problem/solution/result, stack, scope, liveUrl, githubUrl)
