import Link from "next/link";

export default function CourseNotFound() {
  return (
    <section className="paper space-y-5">
      <p className="font-semibold text-slate-500">404</p>
      <h1 className="text-3xl font-bold">Курс не найден</h1>
      <p className="text-slate-600">Проверьте адрес или выберите курс из каталога.</p>
      <Link href="/courses" className="inline-block text-blue-700 hover:underline">
        ← Вернуться к курсам
      </Link>
    </section>
  );
}
