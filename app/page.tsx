import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-2xl space-y-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Advanced Web Technologies</p>
      <h1 className="text-4xl font-bold tracking-tight">Каталог курсов</h1>
      <p className="text-lg leading-8 text-slate-600">
        Добро пожаловать! Здесь собраны курсы по разработке современных веб-приложений.
        Выберите курс, узнайте о нём больше и поставьте лайк.
      </p>
      <Link href="/courses" className="inline-block rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800">
        Посмотреть курсы →
      </Link>
    </section>
  );
}
