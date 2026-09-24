import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="space-y-5">
      <p className="font-semibold text-slate-500 dark:text-slate-400">404</p>
      <h1 className="text-3xl font-semibold">Course not found</h1>
      <p className="text-slate-600 dark:text-slate-300">Check the address or choose a course from the catalog.</p>
      <Link href="/courses" className="inline-block text-blue-700 dark:text-blue-300 hover:underline">
        ← Back to courses
      </Link>
    </section>
  );
}
