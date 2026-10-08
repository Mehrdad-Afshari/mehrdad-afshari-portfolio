import Image from "next/image";
import Link from "next/link";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { projects } from "@/data/projects";

export const metadata = pageMetadata(
  "fa",
  "/",
  "مهرداد افشاری | توسعه‌دهنده نرم‌افزار و هوش مصنوعی",
  "وب‌سایت شخصی مهرداد افشاری؛ توسعه‌دهنده نرم‌افزار و پایگاه داده با بیش از ۱۳ سال سابقه حرفه‌ای و دانشجوی کارشناسی ارشد علوم کامپیوتر دانشگاه روستوک آلمان. پروژه‌های کاربردی هوش مصنوعی و توسعه نرم‌افزار.",
);

const selectedIds = [
  "ai-operations-agent",
  "ai-meeting-assistant",
  "ai-job-application-assistant",
  "ai-knowledge-assistant",
];
const selected = selectedIds.flatMap((id) => {
  const project = projects.find((item) => item.id === id);
  return project ? [project] : [];
});
const descriptions: Record<string, string> = {
  "ai-operations-agent": "پلتفرم خودکارسازی فرایندها با عامل هوشمند، کنترل‌های سیاست‌محور، تأیید انسانی و ثبت رویدادها. معماری AWS این پروژه با Terraform تعریف و اعتبارسنجی شده است؛ پروژه به‌عنوان یک سرویس عملیاتی دائمی روی AWS مستقر نشده است.",
  "ai-meeting-assistant": "دستیار محلی برای تبدیل گفتار به متن، استخراج خلاصه و اقدامات جلسه، و پاسخ به پرسش‌ها بر اساس متن ثبت‌شده.",
  "ai-job-application-assistant": "ابزار تحلیل تطابق رزومه با آگهی شغلی، با امتیازدهی شفاف، بررسی شواهد و تولید متن با محدودیت‌هایی برای جلوگیری از ادعاهای بدون پشتوانه.",
  "ai-knowledge-assistant": "دستیار اسناد مبتنی بر بازیابی اطلاعات و تولید پاسخ (RAG)، با مدل‌های محلی، جستجوی برداری و نمایش منابع پاسخ.",
};
const linkStyle = "inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition hover:border-blue-300 hover:bg-white/10 hover:text-blue-200";

export default function PersianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": siteUrl + "/fa#profile",
            url: siteUrl + "/fa",
            name: "مهرداد افشاری | توسعه‌دهنده نرم‌افزار و هوش مصنوعی",
            inLanguage: "fa",
            mainEntity: { "@id": siteUrl + "/#person" },
          }),
        }}
      />
      <header className="border-b border-white/10 bg-[#080b12] text-white">
        <nav aria-label="انتخاب زبان" className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-8 sm:py-5">
          <Link href="/fa" className="shrink-0 text-sm font-bold sm:text-base">مهرداد افشاری</Link>
          <div className="flex items-center gap-1 text-xs sm:gap-2 sm:text-sm" dir="ltr">
            <Link href="/" lang="en" className="inline-flex min-h-11 items-center rounded-lg px-1.5 hover:bg-white/10 hover:text-blue-300 sm:px-2">English</Link>
            <Link href="/de" lang="de" className="inline-flex min-h-11 items-center rounded-lg px-1.5 hover:bg-white/10 hover:text-blue-300 sm:px-2">Deutsch</Link>
            <span lang="fa" aria-current="page" className="inline-flex min-h-11 items-center rounded-lg bg-white/10 px-1.5 font-[family-name:var(--font-vazirmatn)] font-semibold text-blue-300 sm:px-2">فارسی</span>
          </div>
        </nav>
      </header>

      <main id="main-content" className="min-h-screen bg-[#080b12] text-white">
        <div className="mx-auto max-w-6xl space-y-16 px-5 py-10 sm:space-y-20 sm:px-8 sm:py-14">
          <section className="grid items-center gap-9 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-12">
            <div className="min-w-0">
              <p className="text-sm font-medium text-blue-300" dir="ltr">Mehrdad Afshari · Rostock, Germany</p>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-6xl">مهرداد افشاری</h1>
              <h2 className="mt-5 text-xl font-medium leading-relaxed text-blue-200 sm:text-2xl">توسعه‌دهنده نرم‌افزار، پایگاه داده و هوش مصنوعی</h2>
              <p className="mt-6 max-w-3xl text-base leading-loose text-slate-300 sm:text-lg">
                بیش از ۱۳ سال تجربه حرفه‌ای در توسعه نرم‌افزار و پایگاه داده دارم. اکنون دانشجوی کارشناسی ارشد علوم کامپیوتر در دانشگاه روستوک آلمان هستم و بر توسعه کاربردهای عملی هوش مصنوعی، عامل‌های هوشمند و سامانه‌های نرم‌افزاری مدرن تمرکز دارم.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">مشاهده پروژه‌ها</a>
                <a href="/cv/mehrdad-afshari-cv.pdf" target="_blank" rel="noopener noreferrer" className={linkStyle}>رزومه انگلیسی (PDF)</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-2xl shadow-black/30 lg:max-w-md">
              <div className="relative aspect-[4/5]">
                <Image src="/images/mehrdad-afshari.png" alt="تصویر مهرداد افشاری" fill priority sizes="(max-width: 1024px) 90vw, 400px" className="object-cover object-[center_35%]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </section>

          <aside className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-6 sm:p-8" aria-label="نسخه‌های کامل سایت">
            <h2 className="text-xl font-bold">اطلاعات و پروژه‌های بیشتر</h2>
            <p className="mt-3 leading-loose text-slate-200">
              این صفحه، معرفی کوتاه فارسی من است. برای مشاهده همه پروژه‌ها، مطالعات موردی فنی، جزئیات سوابق حرفه‌ای، مهارت‌ها و گواهینامه‌ها، نسخه‌های کامل انگلیسی و آلمانی سایت را ببینید.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/" lang="en" className={linkStyle}>نسخه کامل انگلیسی <span dir="ltr" className="inline-block">↗</span></Link>
              <Link href="/de" lang="de" className={linkStyle}>نسخه کامل آلمانی <span dir="ltr" className="inline-block">↗</span></Link>
            </div>
          </aside>

          <section id="about" className="max-w-4xl">
            <h2 className="text-3xl font-bold">درباره من</h2>
            <p className="mt-5 leading-loose text-slate-300">
              سابقه حرفه‌ای من شامل توسعه نرم‌افزارهای سازمانی با <bdi dir="ltr">C#</bdi> و <bdi dir="ltr">.NET</bdi>، کار با <bdi dir="ltr">SQL Server</bdi>، گزارش‌گیری و طراحی راهکارهای نرم‌افزاری است. در پروژه‌های جدید، این تجربه را با <bdi dir="ltr">Python</bdi>، <bdi dir="ltr">FastAPI</bdi>، <bdi dir="ltr">Next.js</bdi>، <bdi dir="ltr">LangGraph</bdi> و مدل‌های زبانی محلی ترکیب کرده‌ام. هدفم ساخت سامانه‌هایی قابل‌اعتماد، قابل‌نگهداری و کاربردی است.
            </p>
          </section>

          <section id="projects">
            <h2 className="text-3xl font-bold">پروژه‌های منتخب</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {selected.map((project) => (
                <article key={project.id} className="flex flex-col rounded-3xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-blue-400/40 sm:p-8">
                  <h3 className="text-left text-xl font-semibold" dir="ltr">{project.title}</h3>
                  <p className="mt-5 flex-1 leading-loose text-slate-300">{descriptions[project.id]}</p>
                  <div className="mt-6 flex flex-wrap gap-5 text-sm">
                    <Link className="text-blue-300 hover:text-blue-200" href={`/projects/${project.id}`}>جزئیات فنی به انگلیسی ←</Link>
                    {project.github && <a className="text-blue-300 hover:text-blue-200" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">تحصیلات و تجربه</h2>
            <div className="mt-6 space-y-5 leading-loose text-slate-300">
              <p><strong className="text-white">تحصیلات:</strong> دانشجوی کارشناسی ارشد علوم کامپیوتر، دانشگاه روستوک آلمان</p>
              <p><strong className="text-white">تجربه حرفه‌ای:</strong> بیش از ۱۳ سال سابقه در توسعه نرم‌افزار، پایگاه داده و راهکارهای سازمانی</p>
              <p><strong className="text-white">فناوری‌ها:</strong> <bdi dir="ltr">Python</bdi>، <bdi dir="ltr">FastAPI</bdi>، <bdi dir="ltr">LangGraph</bdi>، <bdi dir="ltr">RAG</bdi>، <bdi dir="ltr">Next.js</bdi>، <bdi dir="ltr">TypeScript</bdi>، <bdi dir="ltr">C#</bdi>، <bdi dir="ltr">.NET</bdi> و <bdi dir="ltr">SQL Server</bdi></p>
            </div>
          </section>

          <section id="contact">
            <h2 className="text-3xl font-bold">ارتباط با من</h2>
            <p className="mt-4 text-slate-300">برای همکاری حرفه‌ای یا آشنایی بیشتر با پروژه‌ها می‌توانید از راه‌های زیر با من در ارتباط باشید.</p>
            <div className="mt-6 flex flex-wrap gap-5 text-blue-300">
              <a href="mailto:afshari@outlook.com">ایمیل</a>
              <a href="https://github.com/Mehrdad-Afshari" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/mehrdadafshari" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-[#080b12] px-5 py-8 text-center text-sm text-slate-400">© Mehrdad Afshari · <Link href="/">English</Link> · <Link href="/de">Deutsch</Link></footer>
    </>
  );
}
