/**
 * Cała treść strony w jednym miejscu — podmiana tekstów, liczb i zdjęć
 * nie wymaga dotykania komponentów.
 */

export const site = {
  name: "EkoSolar",
  legalName: "EkoSolar Jan Kowalczyk",
  tagline: "Fotowoltaika i pompy ciepła — Małopolska",
  phone: "+48123456789",
  phoneDisplay: "12 345 67 89",
  email: "biuro@ekosolar-demo.pl",
  address: {
    street: "ul. Słoneczna 14",
    city: "Wieliczka",
    zip: "32-020",
    region: "małopolskie",
  },
  nip: "123-456-78-90",
  serviceArea: "Kraków i okolice — do 60 km",
  googleRating: 4.9,
  reviewCount: 87,
} as const;

export const hero = {
  kicker: "Montaż w Małopolsce od 2014 roku",
  headlinePre: "Rachunki za prąd niższe",
  headlineMark: "nawet o 90%",
  sub: "Dobierzemy, zamontujemy i uruchomimy instalację fotowoltaiczną dopasowaną do Twojego dachu i zużycia. Bezpłatny audyt, wycena w 24 h, montaż w 3 tygodnie.",
  bullets: [
    "Bezpłatny audyt u Ciebie w domu",
    "Pomagamy w formalnościach i dotacjach",
    "Własne ekipy montażowe — bez podwykonawców",
  ],
  image: {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop",
    alt: "Panele fotowoltaiczne na tle zachodzącego słońca",
  },
  sticker: "Wycena w 24 h",
} as const;

export const trust = {
  stats: [
    { value: "640+", label: "instalacji w Małopolsce" },
    { value: "15 lat", label: "gwarancji na montaż" },
    { value: "4,9 ★", label: `ocena Google (${site.reviewCount} opinii)` },
    { value: "3 tyg.", label: "od umowy do uruchomienia" },
  ],
} as const;

export const problem = {
  sectionNo: "01",
  title: "Prąd z sieci drożeje. Twój dach może na Ciebie pracować.",
  pricePoints: [
    { year: "2020", value: 0.62 },
    { year: "2022", value: 0.77 },
    { year: "2024", value: 1.03 },
    { year: "2026", value: 1.21 },
  ],
  priceUnit: "zł/kWh",
  priceCaption:
    "Średnia cena energii dla gospodarstw domowych (taryfa G11, z dystrybucją) — dane poglądowe.",
  solution: [
    {
      title: "Własna energia ze słońca",
      text: "Instalacja 6 kWp w Małopolsce produkuje ok. 6 000 kWh rocznie — tyle, ile zużywa typowy dom jednorodzinny.",
    },
    {
      title: "Stałe koszty zamiast rosnących",
      text: "Po spłacie instalacji płacisz tylko opłaty stałe. Wzrosty cen prądu przestają być Twoim problemem.",
    },
    {
      title: "Zwrot szybszy, niż myślisz",
      text: "Z dotacją i ulgą termomodernizacyjną typowa instalacja zwraca się w 4–6 lat. Działa minimum 25.",
    },
  ],
} as const;

export const calculator = {
  sectionNo: "02",
  title: "Policz, ile zostaje w Twojej kieszeni",
  sub: "Przesuń suwak na swój miesięczny rachunek za prąd. Pokażemy szacunkową oszczędność i moc instalacji dobraną do Twojego zużycia.",
  minBill: 100,
  maxBill: 1200,
  step: 50,
  defaultBill: 350,
  /** Średnia cena energii zł/kWh przyjęta do przeliczeń */
  pricePerKwh: 1.15,
  /** Roczny uzysk z 1 kWp w Małopolsce (kWh) */
  yieldPerKwp: 1020,
  /** Część rachunku możliwa do zredukowania */
  savingsRate: 0.85,
  /** Orientacyjny koszt 1 kWp z montażem (zł) */
  costPerKwp: 5400,
  /** Orientacyjna dotacja (Mój Prąd, zł) */
  grant: 6000,
  disclaimer:
    "Wyliczenie poglądowe — dokładną moc i uzysk potwierdzamy podczas bezpłatnego audytu dachu.",
  cta: "Zamów dokładną wycenę",
} as const;

export const process = {
  sectionNo: "03",
  title: "Od pierwszego telefonu do własnego prądu",
  steps: [
    {
      no: "1",
      title: "Audyt",
      text: "Przyjeżdżamy, mierzymy dach, sprawdzamy instalację elektryczną i roczne zużycie. Bezpłatnie i bez zobowiązań.",
      time: "2–3 dni od zgłoszenia",
    },
    {
      no: "2",
      title: "Projekt i wycena",
      text: "Dobieramy moc, falownik i rozmieszczenie paneli. Dostajesz wycenę z symulacją oszczędności — czarno na białym.",
      time: "do 24 h po audycie",
    },
    {
      no: "3",
      title: "Montaż",
      text: "Własna ekipa montuje instalację w 1–2 dni. Zgłaszamy ją do zakładu energetycznego i pomagamy z wnioskiem o dotację.",
      time: "ok. 3 tygodnie od umowy",
    },
    {
      no: "4",
      title: "Serwis i opieka",
      text: "Monitorujemy uzyski przez aplikację i robimy bezpłatny przegląd po pierwszym roku. Gwarancja na montaż: 15 lat.",
      time: "przez cały okres gwarancji",
    },
  ],
} as const;

export const realizations = {
  sectionNo: "04",
  title: "Ostatnie montaże w Twojej okolicy",
  items: [
    {
      location: "Wieliczka",
      power: "6,2 kWp",
      detail: "Dach dwuspadowy, blachodachówka. Falownik hybrydowy pod przyszły magazyn energii.",
      saving: "ok. 4 100 zł/rok",
      image: {
        src: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1200&auto=format&fit=crop",
        alt: "Panele fotowoltaiczne na dachu domu jednorodzinnego",
      },
    },
    {
      location: "Niepołomice",
      power: "9,8 kWp",
      detail: "Instalacja z pompą ciepła — dom ogrzewany w całości własną energią.",
      saving: "ok. 7 300 zł/rok",
      image: {
        src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
        alt: "Rzędy paneli słonecznych na dachu",
      },
    },
    {
      location: "Skawina",
      power: "4,5 kWp",
      detail: "Mały dach, panele full-black o podwyższonej mocy. Komplet formalności po naszej stronie.",
      saving: "ok. 3 000 zł/rok",
      image: {
        src: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=1200&auto=format&fit=crop",
        alt: "Monter instalujący panel fotowoltaiczny na dachu",
      },
    },
    {
      location: "Dobczyce",
      power: "7,4 kWp",
      detail: "Montaż na gruncie — dach zacieniony przez drzewa, konstrukcja na południowej działce.",
      saving: "ok. 5 200 zł/rok",
      image: {
        src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
        alt: "Instalacja fotowoltaiczna o zachodzie słońca",
      },
    },
  ],
} as const;

export const testimonials = {
  sectionNo: "05",
  title: "Sąsiedzi już oszczędzają",
  items: [
    {
      name: "Marek W.",
      place: "Wieliczka",
      initials: "MW",
      text: "Rachunek spadł z 460 zł na 38 zł opłat stałych. Montaż w jeden dzień, ekipa posprzątała po sobie co do śrubki. Polecam każdemu sąsiadowi.",
    },
    {
      name: "Anna i Tomasz K.",
      place: "Niepołomice",
      initials: "AK",
      text: "Najbardziej baliśmy się papierologii. Okazało się, że wszystko — zgłoszenie, dotacja, ulga — załatwili za nas. My tylko podpisaliśmy.",
    },
    {
      name: "Stanisław B.",
      place: "Skawina",
      initials: "SB",
      text: "Porównywałem trzy firmy. EkoSolar jako jedyni przyjechali zmierzyć dach przed wyceną, a nie liczyli „na oko” przez telefon. To przekonało.",
    },
  ],
} as const;

export const grants = {
  sectionNo: "06",
  title: "Państwo dokłada się do Twojej instalacji",
  sub: "Pomagamy wypełnić i złożyć wszystkie wnioski — to część usługi, nie płatny dodatek.",
  items: [
    {
      name: "Program „Mój Prąd”",
      amount: "do 6 000 zł",
      text: "Bezzwrotna dotacja do instalacji fotowoltaicznej, więcej przy magazynie energii. Wniosek składamy w Twoim imieniu.",
    },
    {
      name: "Ulga termomodernizacyjna",
      amount: "do 53 000 zł",
      text: "Koszt instalacji odliczysz od dochodu w PIT. Przy drugim progu podatkowym to nawet 32% wartości inwestycji z powrotem.",
    },
    {
      name: "Czyste Powietrze",
      amount: "dla pomp ciepła",
      text: "Dotacja przy wymianie źródła ciepła — łączy się z fotowoltaiką w jeden wniosek modernizacyjny.",
    },
  ],
} as const;

export const faq = {
  sectionNo: "07",
  title: "Pytania, które słyszymy najczęściej",
  items: [
    {
      q: "Kiedy instalacja się zwróci?",
      a: "Przy obecnych cenach prądu typowa instalacja 6 kWp zwraca się w 4–6 lat (z dotacją i ulgą termomodernizacyjną). Panele mają gwarancję wydajności na 25 lat, więc przez kolejne kilkanaście lat produkują prąd praktycznie za darmo.",
    },
    {
      q: "Czy panele działają zimą i przy zachmurzeniu?",
      a: "Tak — produkują energię ze światła, nie z ciepła. Zimą uzysk jest mniejszy, ale w systemie net-billing nadwyżki z lata kompensują zimowe niedobory. Bilans liczy się w skali roku.",
    },
    {
      q: "Ile trwają formalności i kto się nimi zajmuje?",
      a: "My. Zgłoszenie do zakładu energetycznego, wymiana licznika, wniosek o dotację — wszystko przygotowujemy w ramach usługi. Ty podpisujesz dokumenty, my pilnujemy terminów.",
    },
    {
      q: "Czy mój dach się nadaje?",
      a: "Większość dachów tak — montujemy na blachodachówce, dachówce ceramicznej, blasze trapezowej i papie. Jeśli dach jest zacieniony lub zbyt mały, proponujemy konstrukcję na gruncie. To właśnie sprawdzamy podczas bezpłatnego audytu.",
    },
    {
      q: "Co z serwisem i gwarancją?",
      a: "Dajemy 15 lat gwarancji na montaż, panele mają 25 lat gwarancji wydajności, falownik 10–12 lat. Uzyski monitorujemy zdalnie — często wiemy o usterce, zanim zauważy ją właściciel.",
    },
    {
      q: "Czy muszę mieć trójfazową instalację?",
      a: "Nie, ale przy mocach powyżej 3,68 kWp jest wymagana przez operatora. Jeśli masz jedną fazę, sprawdzimy możliwość rozbudowy — często załatwia to jeden wniosek do zakładu energetycznego.",
    },
  ],
} as const;

export const leadForm = {
  sectionNo: "08",
  title: "Bezpłatna wycena dla Twojego domu",
  sub: "Zostaw numer — oddzwonimy tego samego dnia roboczego, umówimy audyt i przygotujemy wycenę w 24 h. Bez zobowiązań i bez nagabywania.",
  fields: {
    name: "Imię",
    phone: "Telefon",
    zip: "Kod pocztowy",
    bill: "Miesięczny rachunek za prąd (zł)",
  },
  rodo: "Wyrażam zgodę na kontakt telefoniczny w sprawie przygotowania wyceny. Administratorem danych jest EkoSolar. Dane posłużą wyłącznie do kontaktu w sprawie zapytania.",
  submit: "Zamawiam bezpłatną wycenę",
  thanks: {
    title: "Dziękujemy! Zgłoszenie przyjęte.",
    text: "Oddzwonimy tego samego dnia roboczego (zwykle w ciągu 2 godzin) i umówimy bezpłatny audyt. Do usłyszenia!",
  },
} as const;

export const stickyCta = {
  label: "Bezpłatna wycena ☀",
} as const;
