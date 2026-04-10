export function WelcomeNote() {
  return (
    <article className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-12">
      <header className="mb-10 border-b border-gray-100 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">Learning</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Welcome</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
          A place for notes and concepts I am working through. More topics will show up here over time.
        </p>
      </header>

      <section id="welcome" className="scroll-mt-28">
        <p className="max-w-2xl text-[15px] leading-relaxed text-gray-700">
          Thanks for stopping by. This section is intentionally minimal for now—when I add material, the sidebar will
          grow with it.
        </p>
      </section>
    </article>
  );
}
