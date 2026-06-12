"use client";

import { useEffect, useId, useState } from "react";
import { leadForm, site } from "@/data/content";
import { onBill } from "@/lib/bill-bridge";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Values = {
  name: string;
  phone: string;
  zip: string;
  bill: string;
  rodo: boolean;
  /** Honeypot — pole niewidoczne dla ludzi, boty je wypełniają */
  company: string;
};

type Errors = Partial<Record<"name" | "phone" | "zip" | "rodo", string>>;

const initialValues: Values = {
  name: "",
  phone: "",
  zip: "",
  bill: "",
  rodo: false,
  company: "",
};

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Podaj imię (min. 2 znaki).";
  }
  const phoneDigits = values.phone.replace(/[\s\-+]/g, "");
  if (!/^(48)?\d{9}$/.test(phoneDigits)) {
    errors.phone = "Podaj 9-cyfrowy numer telefonu.";
  }
  if (!/^\d{2}-\d{3}$/.test(values.zip.trim())) {
    errors.zip = "Kod w formacie 00-000.";
  }
  if (!values.rodo) {
    errors.rodo = "Zgoda jest wymagana, żebyśmy mogli oddzwonić.";
  }
  return errors;
}

export default function LeadForm() {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formId = useId();

  // Kalkulator podaje rachunek — wypełniamy pole z wyprzedzeniem
  useEffect(() => onBill((bill) => setValues((v) => ({ ...v, bill: String(bill) }))), []);

  function set<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.company) return; // honeypot: cicho ignorujemy boty
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Demo: brak backendu — zgłoszenie trafia do konsoli (jak w pozostałych demo)
    console.log("[EkoSolar] Nowe zapytanie o wycenę:", {
      name: values.name.trim(),
      phone: values.phone.trim(),
      zip: values.zip.trim(),
      bill: values.bill || null,
    });
    setSent(true);
  }

  return (
    <section id="wycena" className="border-b-2 border-ink bg-paper-deep scroll-mt-6">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <SectionHeading no={leadForm.sectionNo} title={leadForm.title} sub={leadForm.sub} />
        </Reveal>

        <Reveal>
          {sent ? (
            <div
              className="card-print mt-10 p-8 text-center sm:p-12"
              role="status"
              aria-live="polite"
            >
              <p className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-sun text-3xl shadow-[3px_3px_0_0_var(--color-ink)]" aria-hidden>
                ✓
              </p>
              <h3 className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">
                {leadForm.thanks.title}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-ink/75">{leadForm.thanks.text}</p>
              <a
                href={`tel:${site.phone}`}
                className="btn-base btn-press nums mt-7 bg-cream px-6 py-3"
              >
                Wolisz zadzwonić? ☎ {site.phoneDisplay}
              </a>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-print mt-10 grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
            >
              <Field
                id={`${formId}-name`}
                label={leadForm.fields.name}
                error={errors.name}
                input={
                  <input
                    id={`${formId}-name`}
                    className="field-print"
                    type="text"
                    autoComplete="given-name"
                    placeholder="np. Marek"
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? `${formId}-name-err` : undefined}
                  />
                }
              />
              <Field
                id={`${formId}-phone`}
                label={leadForm.fields.phone}
                error={errors.phone}
                input={
                  <input
                    id={`${formId}-phone`}
                    className="field-print nums"
                    type="tel"
                    autoComplete="tel"
                    placeholder="np. 600 700 800"
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? `${formId}-phone-err` : undefined}
                  />
                }
              />
              <Field
                id={`${formId}-zip`}
                label={leadForm.fields.zip}
                error={errors.zip}
                input={
                  <input
                    id={`${formId}-zip`}
                    className="field-print nums"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="np. 32-020"
                    value={values.zip}
                    onChange={(e) => set("zip", e.target.value)}
                    aria-invalid={!!errors.zip}
                    aria-describedby={errors.zip ? `${formId}-zip-err` : undefined}
                  />
                }
              />
              <Field
                id={`${formId}-bill`}
                label={`${leadForm.fields.bill} — opcjonalnie`}
                input={
                  <input
                    id={`${formId}-bill`}
                    className="field-print nums"
                    type="number"
                    min={0}
                    step={10}
                    placeholder="np. 350"
                    value={values.bill}
                    onChange={(e) => set("bill", e.target.value)}
                  />
                }
              />

              {/* Honeypot antyspam — ukryte dla ludzi i czytników */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor={`${formId}-company`}>Firma</label>
                <input
                  id={`${formId}-company`}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company}
                  onChange={(e) => set("company", e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/75">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-5 w-5 shrink-0 accent-(--color-pine)"
                    checked={values.rodo}
                    onChange={(e) => set("rodo", e.target.checked)}
                    aria-invalid={!!errors.rodo}
                    aria-describedby={errors.rodo ? `${formId}-rodo-err` : undefined}
                  />
                  {leadForm.rodo}
                </label>
                {errors.rodo ? (
                  <p id={`${formId}-rodo-err`} className="mt-1.5 text-sm font-bold text-clay">
                    {errors.rodo}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="btn-base btn-press bg-sun px-6 py-4 text-lg sm:col-span-2"
              >
                {leadForm.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  input,
}: {
  id: string;
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-bold">
        {label}
      </label>
      {input}
      {error ? (
        <p id={`${id}-err`} className="mt-1.5 text-sm font-bold text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}
