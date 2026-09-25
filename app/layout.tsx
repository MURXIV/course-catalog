import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Course Catalog",
  description: "A simple student course catalog for web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <NavBar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 sm:py-14">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-700 px-6 py-5 text-center text-sm text-neutral-500 dark:text-neutral-400">
          Course Catalog · Advanced Web Technologies
        </footer>
      </body>
    </html>
  );
}
