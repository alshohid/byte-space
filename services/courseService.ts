import { courses } from "@/data/courses";
import type { Course } from "@/types/course";
import type { SearchFilters } from "@/types/common";

export async function getCourses(): Promise<Course[]> {
  return courses;
}

export async function getCourseBySlug(
  slug: string
): Promise<Course | undefined> {
  return courses.find((c) => c.slug === slug);
}

export async function getFeaturedCourses(): Promise<Course[]> {
  return courses.filter((c) => c.isFeatured);
}

export async function getBestsellerCourses(): Promise<Course[]> {
  return courses.filter((c) => c.isBestseller);
}

export async function getNewCourses(): Promise<Course[]> {
  return courses.filter((c) => c.isNew);
}

export async function getCoursesByCategory(
  categorySlug: string
): Promise<Course[]> {
  return courses.filter((c) => c.category === categorySlug);
}

export async function getCoursesByInstructor(
  instructorId: string
): Promise<Course[]> {
  return courses.filter((c) => c.instructor.id === instructorId);
}

export async function searchCourses(
  filters: SearchFilters
): Promise<Course[]> {
  let results = [...courses];

  if (filters.query) {
    const q = filters.query.toLowerCase();
    results = results.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (filters.category) {
    results = results.filter((c) => c.category === filters.category);
  }

  if (filters.level) {
    results = results.filter((c) => c.level === filters.level);
  }

  if (filters.rating) {
    results = results.filter((c) => c.rating >= filters.rating!);
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    results = results.filter((c) => c.price >= min && c.price <= max);
  }

  if (filters.sortBy) {
    switch (filters.sortBy) {
      case "price-low":
        results.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        results.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        results.sort((a, b) => b.totalStudents - a.totalStudents);
        break;
      case "newest":
        results.sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
        );
        break;
      case "most-reviewed":
        results.sort((a, b) => b.totalRatings - a.totalRatings);
        break;
    }
  }

  return results;
}
