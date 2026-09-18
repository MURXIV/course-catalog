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
      <body className="min-h-screen flex flex-col">
        <header className="sea-header">
          <nav aria-label="Основная навигация" className="mx-auto flex max-w-5xl flex-wrap items-center gap-6 px-6 py-5">
            <Link href="/" className="brand mr-auto text-xl">
              🍍 Bikini Bottom Academy
            </Link>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/courses" className="nav-link">Courses</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">{children}</main>
        <footer className="sea-footer px-6 py-5 text-center text-sm font-bold">🍍 Bikini Bottom Academy · Знания на глубине!</footer>
      </body>
    </html>
  );
}
