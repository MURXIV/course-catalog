import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="course-card flex h-full flex-col p-6"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="rounded-full border-2 border-current bg-white/60 px-3 py-1 font-bold">Кредиты: {credits}</span>
        <span className="text-rose-700">❤ {likes}</span>
      </div>
    </Link>
  );
}
