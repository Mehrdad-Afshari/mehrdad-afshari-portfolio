export type Locale = "en" | "de";
export type LocaleProps = { locale?: Locale };
export const locales: Locale[] = ["en", "de"];

/** English URLs stay unchanged. German URLs use the /de prefix. */
export function localePath(locale: Locale, path = "/") {
  return locale === "de" ? `/de${path === "/" ? "" : path}` : path;
}
