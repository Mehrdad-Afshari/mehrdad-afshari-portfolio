import de from "@/messages/de.json";
import type { Locale } from "./i18n";

/** Original English copy is the message key, as in gettext. Brand names stay unchanged. */
export function getTranslator(locale: Locale) {
  const messages: Readonly<Record<string, string>> = locale === "de" ? de : {};
  return (text: string) => messages[text] ?? text;
}
