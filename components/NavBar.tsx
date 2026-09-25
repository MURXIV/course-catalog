"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-6 py-4">
        <Link href="/" className="mr-auto w-full py-2 text-lg font-semibold sm:w-auto">Course Catalog</Link>
        {links.map(({ href, label }) => {
          const active = pathname === href || (href === "/courses" && pathname.startsWith("/courses/"));
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 ${active ? "bg-neutral-100 font-semibold dark:bg-neutral-800" : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
