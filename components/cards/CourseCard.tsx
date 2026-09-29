import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/types/course";
import { cn, formatPrice, getDiscountPercentage, formatNumber } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import { Avatar } from "@/components/ui/Avatar";

export interface CourseCardProps {
  course: Course;
  variant?: "default" | "compact" | "horizontal";
  className?: string;
  priority?: boolean;
}

export function CourseCard({
  course,
  variant = "default",
  className,
  priority = false,
}: CourseCardProps) {
  const discount = getDiscountPercentage(
    course.price,
    course.originalPrice ?? course.price
  );

  if (variant === "horizontal") {
    return (
      <Link href={`/courses/${course.slug}`} className="block group">
        <article
          className={cn(
            "flex flex-col sm:flex-row rounded-xl border border-border overflow-hidden",
            "transition-all duration-300 hover:shadow-card-hover hover:border-border-hover",
            className
          )}
        >
          {/* Thumbnail */}
          <div className="relative w-full sm:w-64 lg:w-72 shrink-0 aspect-video sm:aspect-auto sm:h-auto overflow-hidden">
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, 288px"
              priority={priority}
            />
            {course.isBestseller && (
              <Badge variant="accent" className="absolute top-3 left-3">
                Bestseller
              </Badge>
            )}
            {course.isNew && (
              <Badge variant="info" className="absolute top-3 left-3">
                New
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-4 sm:p-5 flex-1 min-w-0">
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="mt-1 text-sm text-text-secondary line-clamp-2 hidden sm:block">
                {course.description}
              </p>
              <div className="mt-2 flex items-center gap-2 text-sm text-text-tertiary">
                <span>{course.instructor.name}</span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <Rating value={course.rating} totalRatings={course.totalRatings} size="sm" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-text-primary">
                  {formatPrice(course.price, course.currency)}
                </span>
                {course.originalPrice && course.originalPrice > course.price && (
                  <span className="text-sm text-text-tertiary line-through">
                    {formatPrice(course.originalPrice, course.currency)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Default card and compact variant
  return (
    <Link href={`/courses/${course.slug}`} className="block group">
      <article
        className={cn(
          "rounded-xl border border-border overflow-hidden bg-bg-primary",
          "transition-all duration-300 hover:shadow-card-hover hover:border-border-hover",
          "h-full flex flex-col",
          className
        )}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
          {discount > 0 && (
            <Badge variant="error" className="absolute top-3 right-3">
              {discount}% OFF
            </Badge>
          )}
          {course.isBestseller && (
            <Badge variant="accent" className="absolute top-3 left-3">
              Bestseller
            </Badge>
          )}
          {course.isNew && !course.isBestseller && (
            <Badge variant="info" className="absolute top-3 left-3">
              New
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-sm sm:text-base text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>

          {variant !== "compact" && (
            <div className="mt-2 flex items-center gap-2">
              <Avatar
                src={course.instructor.avatar}
                alt={course.instructor.name}
                size="xs"
              />
              <span className="text-xs sm:text-sm text-text-secondary truncate">
                {course.instructor.name}
              </span>
            </div>
          )}

          <div className="mt-2">
            <Rating
              value={course.rating}
              totalRatings={course.totalRatings}
              size="sm"
            />
          </div>

          {variant !== "compact" && (
            <div className="mt-2 flex items-center gap-3 text-xs text-text-tertiary">
              <span>{course.totalLessons} lessons</span>
              <span>•</span>
              <span>{course.totalDuration}</span>
              <span>•</span>
              <span className="capitalize">{course.level}</span>
            </div>
          )}

          {/* Price — pushed to bottom */}
          <div className="mt-auto pt-3 flex items-center gap-2 border-t border-border">
            <span className="font-bold text-base sm:text-lg text-text-primary">
              {formatPrice(course.price, course.currency)}
            </span>
            {course.originalPrice && course.originalPrice > course.price && (
              <span className="text-sm text-text-tertiary line-through">
                {formatPrice(course.originalPrice, course.currency)}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
