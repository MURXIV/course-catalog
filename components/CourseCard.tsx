import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block h-full rounded-lg">
      <Card className="h-full rounded-lg border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-400 ring-0 hover:shadow-md hover:border-neutral-300 transition">
        <CardHeader>
          <CardTitle className="text-lg leading-7">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <p className="flex-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{description}</p>
          <p className="flex items-center justify-between text-sm">
            <Badge variant="secondary">Credits: {credits}</Badge>
            {/* Render a span to avoid nesting a button inside a link. */}
            <Button asChild variant="ghost" size="sm">
              <span aria-label={`${likes} likes`}>♡ {likes}</span>
            </Button>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
