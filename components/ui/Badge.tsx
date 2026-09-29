import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info" | "accent";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-bg-tertiary text-text-secondary",
  success: "bg-success-light text-green-800",
  warning: "bg-warning-light text-yellow-800",
  error: "bg-error-light text-red-800",
  info: "bg-info-light text-blue-800",
  accent: "bg-accent text-accent-text",
};

const sizeStyles: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
};

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full whitespace-nowrap",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
