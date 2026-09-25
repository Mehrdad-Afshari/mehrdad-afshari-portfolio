import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto max-w-xl px-6 py-32">
      <h1 className="text-3xl font-semibold">Seite nicht gefunden</h1>
      <p className="mt-5">Diese Seite existiert nicht.</p>
      <Link
        className="mt-6 inline-block text-blue-600 underline dark:text-blue-400"
        href="/de"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
