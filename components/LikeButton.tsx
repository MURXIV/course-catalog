"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      type="button"
      onClick={() => setLikes((previous) => previous + 1)}
      aria-label={`Поставить лайк. Лайков: ${likes}`}
      className="sea-button"
    >
      <span aria-live="polite">❤ {likes}</span>
    </button>
  );
}
