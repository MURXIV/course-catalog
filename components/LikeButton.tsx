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
      className="rounded-lg border border-rose-200 bg-rose-50 px-5 py-3 font-semibold text-rose-700 hover:bg-rose-100 focus-visible:outline-2 focus-visible:outline-rose-700"
    >
      <span aria-live="polite">❤ {likes}</span>
    </button>
  );
}
