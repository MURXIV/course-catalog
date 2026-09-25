import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="space-y-5">
      <p className="font-semibold text-neutral-500 dark:text-neutral-400">404</p>
      <h1 className="text-3xl font-semibold">Course not found</h1>
      <p className="text-neutral-600 dark:text-neutral-300">Check the address or choose a course from the catalog.</p>
      <Link href="/courses" className="inline-block text-neutral-700 dark:text-neutral-300 hover:underline">
        ← Back to courses
      </Link>
    </section>
  );
}
