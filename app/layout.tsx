import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Каталог курсов по современным веб-технологиям",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <nav aria-label="Основная навигация" className="mx-auto flex max-w-5xl flex-wrap items-center gap-6 px-6 py-5">
            <Link href="/" className="mr-auto text-lg font-bold text-blue-700">
              Course Catalog
            </Link>
            <Link href="/" className="hover:text-blue-700 hover:underline">Home</Link>
            <Link href="/courses" className="hover:text-blue-700 hover:underline">Courses</Link>
            <Link href="/about" className="hover:text-blue-700 hover:underline">About</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
