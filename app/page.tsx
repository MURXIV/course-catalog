import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="max-w-2xl space-y-6 py-8 sm:py-16">
      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Learn step by step</p>
      <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        A simple place to find your next course.
      </h1>
      <p className="max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
        Explore six courses in web development. Read about each subject,
        check the credits, and find something you want to learn.
      </p>
      <Button asChild variant="study"><Link href="/courses">Browse courses →</Link></Button>
    </section>
  );
}
