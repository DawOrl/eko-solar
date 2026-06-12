import { site } from "@/data/content";
import SunMark from "./SunMark";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5">
            <SunMark className="h-8 w-8 text-sun" />
            <span className="font-display text-lg font-extrabold">{site.name}</span>
          </p>
          <p className="mt-3 text-sm text-paper/70">{site.tagline}</p>
          <p className="mt-1 text-sm text-paper/70">{site.serviceArea}</p>
        </div>

        <div className="text-sm">
          <h2 className="font-display font-bold text-sun">Kontakt</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`tel:${site.phone}`} className="nums font-bold underline-offset-4 hover:underline">
                ☎ {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                ✉ {site.email}
              </a>
            </li>
            <li className="text-paper/70">
              {site.address.street}, {site.address.zip} {site.address.city}
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h2 className="font-display font-bold text-sun">Dane firmy</h2>
          <ul className="mt-3 space-y-2 text-paper/70">
            <li>{site.legalName}</li>
            <li className="nums">NIP: {site.nip}</li>
            <li>woj. {site.address.region}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-paper/50 sm:px-6">
          © 2026 {site.name}. Strona demonstracyjna portfolio — firma i dane są fikcyjne.
          Zdjęcia: Unsplash.
        </p>
      </div>
    </footer>
  );
}
