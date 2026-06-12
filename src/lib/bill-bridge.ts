/**
 * Most kalkulator → formularz: kalkulator nadaje wybrany rachunek,
 * formularz wstępnie wypełnia pole. Bez globalnego stanu i providerów.
 */

const EVENT_NAME = "ekosolar:bill";

export function emitBill(bill: number) {
  window.dispatchEvent(new CustomEvent<number>(EVENT_NAME, { detail: bill }));
}

export function onBill(handler: (bill: number) => void): () => void {
  const listener = (event: Event) => handler((event as CustomEvent<number>).detail);
  window.addEventListener(EVENT_NAME, listener);
  return () => window.removeEventListener(EVENT_NAME, listener);
}
