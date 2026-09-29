import Link from "next/link";
import type { Creator } from "@/types/creator";
import { cn, formatNumber } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import { Rating } from "@/components/ui/Rating";

export interface InstructorCardProps {
  creator: Creator;
  className?: string;
}

export function InstructorCard({ creator, className }: InstructorCardProps) {
  return (
    <Link href={`/creators/${creator.id}`} className="block group">
      <article
        className={cn(
          "flex flex-col items-center text-center p-5 sm:p-6 rounded-xl border border-border",
          "bg-bg-primary transition-all duration-300",
          "hover:shadow-card-hover hover:border-border-hover hover:-translate-y-1",
          className
        )}
      >
        <Avatar
          src={creator.avatar}
          alt={creator.name}
          size="xl"
          className="ring-4 ring-primary-light group-hover:ring-primary/30 transition-all duration-300"
        />
        <h3 className="mt-4 font-semibold text-sm sm:text-base text-text-primary group-hover:text-primary transition-colors">
          {creator.name}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-text-tertiary">
          {creator.shortBio || creator.title}
        </p>
        <Rating value={creator.rating} size="sm" className="mt-3" />
        <div className="mt-3 flex items-center gap-4 text-xs text-text-tertiary">
          <span>{formatNumber(creator.totalStudents)} students</span>
          <span>•</span>
          <span>{creator.totalCourses} courses</span>
        </div>
      </article>
    </Link>
  );
}
