import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque } from "next/font/google";
import { site } from "@/data/content";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${site.name} — fotowoltaika i pompy ciepła | Kraków i Małopolska`,
  description:
    "Rachunki za prąd niższe nawet o 90%. Bezpłatny audyt, wycena w 24 h, montaż w 3 tygodnie. 640+ instalacji w Małopolsce, 15 lat gwarancji. Zamów bezpłatną wycenę.",
  keywords: [
    "fotowoltaika Kraków",
    "panele fotowoltaiczne Małopolska",
    "pompy ciepła Kraków",
    "instalacja fotowoltaiczna cena",
    "Mój Prąd dotacja",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: site.name,
    title: `${site.name} — rachunki za prąd niższe nawet o 90%`,
    description:
      "Fotowoltaika i pompy ciepła w Małopolsce. Bezpłatny audyt, wycena w 24 h, 15 lat gwarancji na montaż.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_URL,
  name: site.name,
  legalName: site.legalName,
  description:
    "Montaż instalacji fotowoltaicznych i pomp ciepła dla domów jednorodzinnych w Małopolsce.",
  url: SITE_URL,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.zip,
    addressRegion: site.address.region,
    addressCountry: "PL",
  },
  areaServed: site.serviceArea,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.googleRating,
    reviewCount: site.reviewCount,
  },
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${bricolage.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
