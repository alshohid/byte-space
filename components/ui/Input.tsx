"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      fullWidth = true,
      className,
      id,
      ...props
    },
    ref
  ) {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-text-primary"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "w-full px-4 py-2.5 text-sm rounded-lg border bg-bg-primary text-text-primary",
              "placeholder:text-text-tertiary",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
              error
                ? "border-error focus:ring-error/20 focus:border-error"
                : "border-border hover:border-border-hover",
              !!leftIcon && "pl-10",
              !!rightIcon && "pr-10",
              className
            )}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p className="text-xs text-error">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-xs text-text-tertiary">{helperText}</p>
        )}
      </div>
    );
  }
);
