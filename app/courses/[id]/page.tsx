import Link from "next/link";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";
import { getCourse, getCourses } from "@/lib/courses";

// Во время сборки Next.js заранее создаёт страницы всех шести курсов.
export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <article className="max-w-3xl space-y-6 rounded-lg border bg-white dark:bg-neutral-900 p-6 sm:p-8">
      <Link href="/courses" className="text-neutral-700 dark:text-neutral-300 hover:underline">← All courses</Link>
      <h1 className="text-3xl font-bold leading-tight">{course.title}</h1>
      <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">{course.description}</p>
      <p className="font-medium">Credits: {course.credits}</p>
      <LikeButton initialLikes={course.likes} />
    </article>
  );
}
