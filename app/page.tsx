import Link from "next/link";

export default function HomePage() {
  return (
    <section className="paper grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
      <div className="space-y-6">
        <p className="sea-label">Добро пожаловать в Бикини-Боттом</p>
        <h1 className="text-4xl leading-tight tracking-tight sm:text-5xl">Я готов!<br />Учиться, конечно.</h1>
        <p className="text-lg leading-8">
          Даже на дне океана нужны крутые разработчики. Выбирай курс,
          погружайся в веб-технологии и ставь лайк тому, что нравится!
        </p>
        <Link href="/courses" className="sea-button">Посмотреть курсы →</Link>
        <p className="text-sm font-bold">6 курсов · Море знаний · Никаких медуз</p>
      </div>
      <div aria-hidden="true">
        <div className="sponge">
          <div className="sponge-eyes"><i /><i /></div>
          <div className="sponge-smile" />
          <div className="sponge-pants" />
        </div>
        <p className="mt-8 text-center text-lg font-black">Лови волну знаний!</p>
      </div>
    </section>
  );
}
