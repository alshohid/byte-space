/**
 * Merge class names, filtering out falsy values.
 * Usage: cn('base-class', condition && 'conditional-class', className)
 */
export function cn(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format price with currency symbol.
 */
export function formatPrice(
  amount: number,
  currency: string = "BDT"
): string {
  const formatter = new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
}

/**
 * Format a number with locale separators (e.g., 12,500).
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

/**
 * Format a date string to a readable format.
 */
export function formatDate(
  dateString: string,
  locale: string = "bn-BD"
): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

/**
 * Calculate discount percentage.
 */
export function getDiscountPercentage(
  price: number,
  originalPrice: number
): number {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

/**
 * Truncate text to a specified length with ellipsis.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

/**
 * Generate a URL-friendly slug from text.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
