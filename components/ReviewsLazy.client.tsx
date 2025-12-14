"use client";

import dynamic from "next/dynamic";

const ReviewsSection = dynamic(
  () => import("@/components/ReviewsSection"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function ReviewsLazy() {
  return <ReviewsSection />;
}
