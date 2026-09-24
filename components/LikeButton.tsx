"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <Button
      type="button"
      onClick={() => setLikes((previous) => previous + 1)}
      aria-label={`Like this course. ${likes} likes`}
    >
      <span aria-live="polite">♡ {likes} · Like course</span>
    </Button>
  );
}
