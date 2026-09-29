import type { Testimonial } from "@/types/review";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col p-5 sm:p-6 rounded-xl border border-border bg-bg-primary",
        "transition-all duration-300 hover:shadow-card-hover",
        "h-full",
        className
      )}
    >
      <Rating value={testimonial.rating} showValue={false} size="sm" />
      <p className="mt-3 flex-1 text-sm sm:text-base text-text-secondary leading-relaxed">
        &ldquo;{testimonial.comment}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
        <Avatar
          src={testimonial.userAvatar}
          alt={testimonial.userName}
          size="md"
        />
        <div className="min-w-0">
          <p className="font-semibold text-sm text-text-primary truncate">
            {testimonial.userName}
          </p>
          <p className="text-xs text-text-tertiary truncate">
            {testimonial.userTitle}
          </p>
        </div>
      </div>
    </article>
  );
}
