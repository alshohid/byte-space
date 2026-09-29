import { creators } from "@/data/creators";
import type { Creator } from "@/types/creator";

export async function getCreators(): Promise<Creator[]> {
  return creators;
}

export async function getCreatorById(
  id: string
): Promise<Creator | undefined> {
  return creators.find((c) => c.id === id);
}

export async function getCreatorBySlug(
  slug: string
): Promise<Creator | undefined> {
  return creators.find((c) => c.slug === slug);
}

export async function getTopCreators(limit: number = 4): Promise<Creator[]> {
  return [...creators]
    .sort((a, b) => b.totalStudents - a.totalStudents)
    .slice(0, limit);
}
