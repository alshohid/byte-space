import { categories } from "@/data/categories";
import type { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | undefined> {
  return categories.find((c) => c.slug === slug);
}
