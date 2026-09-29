import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  headerAction?: React.ReactNode;
  background?: "default" | "secondary" | "dark";
  id?: string;
}

const bgStyles: Record<NonNullable<SectionProps["background"]>, string> = {
  default: "bg-bg-primary",
  secondary: "bg-bg-secondary",
  dark: "bg-bg-dark text-text-inverse",
};

/**
 * Reusable page section with optional title, subtitle, and
 * action button. Handles responsive padding and container.
 */
export function Section({
  children,
  title,
  subtitle,
  className,
  containerClassName,
  headerAction,
  background = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding", bgStyles[background], className)}
    >
      <Container className={containerClassName}>
        {(title || subtitle) && (
          <div className="section-header flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {title && (
                <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p
                  className={cn(
                    "mt-2 text-sm sm:text-base max-w-2xl",
                    background === "dark"
                      ? "text-gray-400"
                      : "text-text-secondary"
                  )}
                >
                  {subtitle}
                </p>
              )}
            </div>
            {headerAction && (
              <div className="shrink-0 mt-4 sm:mt-0">{headerAction}</div>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
