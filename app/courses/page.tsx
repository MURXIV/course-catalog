import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/lib/courses";

export default async function CoursesPage() {
  // Данные получаем на сервере, поэтому useEffect здесь не нужен.
  const courses = await getCourses();

  return (
    <section>
      <p className="sea-label mb-4">Меню знаний</p>
      <h1 className="text-4xl font-bold">Курсы Бикини-Боттом</h1>
      <p className="mt-3 font-medium">Выберите курс, чтобы прочитать описание и поставить лайк.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
