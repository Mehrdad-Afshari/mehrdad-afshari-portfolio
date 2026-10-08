export type Locale = "en" | "de" | "fa";
export type LocaleProps = { locale?: Locale };
export const locales: Locale[] = ["en", "de", "fa"];

/** English URLs stay unchanged. German URLs use the /de prefix. */
export function localePath(locale: Locale, path = "/") {
  return locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`;
}
