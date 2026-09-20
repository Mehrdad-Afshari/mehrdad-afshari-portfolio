export default function About() {
  return (
    <section
      id="about"
      className="bg-[#fafafa] py-24 text-[#111111] dark:bg-[#080b12] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            01 — About
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Computer Science, software and AI.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">

          {/* Main Text */}
          <div className="space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            <p>
              I am an MSc Computer Science student at the University of
              Rostock, Germany, with a growing focus on artificial
              intelligence and software development.
            </p>

            <p>
              My background combines software development experience with
              academic work in computer science. I enjoy understanding how
              systems work and turning ideas into practical software.
            </p>

            <p>
              Currently, I am focusing on expanding my skills in AI,
              algorithms, software engineering and modern web technologies
              while building practical projects alongside my studies.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="rounded-3xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-white/5">
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-gray-500">
              Currently
            </p>

            <div className="space-y-6">

              <div>
                <p className="text-sm text-gray-500">Education</p>
                <p className="mt-1 font-medium">
                  MSc Computer Science
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">University</p>
                <p className="mt-1 font-medium">
                  University of Rostock
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-1 font-medium">
                  Rostock, Germany
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Focus</p>
                <p className="mt-1 font-medium">
                  AI · Software Development
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}