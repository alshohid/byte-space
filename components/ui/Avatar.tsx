import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeStyles: Record<NonNullable<AvatarProps["size"]>, string> = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
};

const imageSizeMap: Record<NonNullable<AvatarProps["size"]>, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export function Avatar({ src, alt, size = "md", className }: AvatarProps) {
  const initials = alt
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (!src) {
    return (
      <div
        className={cn(
          "rounded-full bg-primary-light text-primary flex items-center justify-center font-semibold shrink-0",
          sizeStyles[size],
          className
        )}
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={imageSizeMap[size]}
      height={imageSizeMap[size]}
      className={cn(
        "rounded-full object-cover shrink-0",
        sizeStyles[size],
        className
      )}
    />
  );
}
