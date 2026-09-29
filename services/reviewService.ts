import { reviews, testimonials } from "@/data/reviews";
import type { Review, Testimonial } from "@/types/review";

export async function getReviewsByCourseId(
  courseId: string
): Promise<Review[]> {
  return reviews.filter((r) => r.courseId === courseId);
}

export async function getRecentReviews(limit: number = 5): Promise<Review[]> {
  return [...reviews]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return testimonials;
}
