export default function AboutPage() {
  return (
    <section className="max-w-2xl space-y-5">
      <h1 className="text-3xl font-semibold tracking-tight">About this project</h1>
      <p className="leading-8 text-slate-600 dark:text-slate-300">
        This is a student project for Advanced Web Technologies.
        It shows a list of courses, a detail page for each course, and a like button.
      </p>
      <p className="leading-8 text-slate-600 dark:text-slate-300">
        The project uses Next.js, React, and TypeScript.
        Tailwind CSS and shadcn/ui keep the layout simple and responsive.
      </p>
    </section>
  );
}
