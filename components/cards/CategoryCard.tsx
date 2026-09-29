import Link from "next/link";
import type { Category } from "@/types/category";
import { cn } from "@/lib/utils";

export interface CategoryCardProps {
  category: Category;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link href={`/search?category=${category.slug}`} className="block group">
      <article
        className={cn(
          "relative p-5 sm:p-6 rounded-xl border border-border overflow-hidden",
          "bg-bg-primary transition-all duration-300",
          "hover:shadow-card-hover hover:border-border-hover hover:-translate-y-1",
          className
        )}
      >
        {/* Accent color top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
          style={{ backgroundColor: category.color }}
        />

        <div className="text-3xl sm:text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-sm sm:text-base text-text-primary group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-text-tertiary">
          {category.courseCount} courses
        </p>
      </article>
    </Link>
  );
}
