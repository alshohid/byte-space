export interface SearchFilters {
  query?: string;
  category?: string;
  level?: CourseLevel;
  priceRange?: [number, number];
  rating?: number;
  language?: string;
  sortBy?: SortOption;
}

export type SortOption =
  | "popular"
  | "newest"
  | "price-low"
  | "price-high"
  | "rating"
  | "most-reviewed";

export type CourseLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "all-levels";

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLinks {
  website?: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
  twitter?: string;
  facebook?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
