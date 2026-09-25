import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  // Get the course data on the server.
  const courses = await getCourses();

  return (
    <section>
      <p className="mb-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">Study program</p>
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Course catalog</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">Choose a course to see the details and leave a like.</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </section>
  );
}
