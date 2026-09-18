import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  // Данные получаем на сервере, поэтому useEffect здесь не нужен.
  const courses = await getCourses();

  return (
    <section>
      <h1 className="text-3xl font-bold">Курсы</h1>
      <p className="mt-3 text-slate-600">Выберите курс, чтобы прочитать описание и поставить лайк.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </section>
  );
}
