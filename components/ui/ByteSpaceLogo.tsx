import Link from "next/link";
import { cn } from "@/lib/utils";

interface ByteSpaceLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
}

export function ByteSpaceLogo({
  className,
  variant = "light",
  showText = true,
}: ByteSpaceLogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 group select-none", className)}
      aria-label="ByteSpace Home"
    >
      {/* Brand Icon Mark */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <path
          d="M6 3C4.34315 3 3 4.34315 3 6V22C3 23.6569 4.34315 25 6 25H16C20.9706 25 25 20.9706 25 16C25 11.0294 20.9706 7 16 7H9V6C9 4.34315 7.65685 3 6 3Z"
          fill="#cbfc01"
        />
        <circle cx="16" cy="16" r="4" fill="#003be2" />
      </svg>

      {/* Brand Text */}
      {showText && (
        <span
          className={cn(
            "font-clash font-bold text-xl tracking-tight transition-colors",
            variant === "light" ? "text-white" : "text-shuttle-gray-950"
          )}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
