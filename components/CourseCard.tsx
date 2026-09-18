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
      className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-500 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-700"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 flex-1 leading-7 text-slate-600">{description}</p>
      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="rounded-full bg-slate-100 px-3 py-1">Кредиты: {credits}</span>
        <span className="text-rose-700">❤ {likes}</span>
      </div>
    </Link>
  );
}
