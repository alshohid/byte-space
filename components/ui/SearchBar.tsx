"use client";

import type { FormEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
};

export function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Course, topic, creator",
  buttonLabel = "Search",
  className = "",
}: SearchBarProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = value.trim();
    if (!query) return;
    onSearch(query);
  };

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`group flex w-full items-center gap-2 rounded-full border border-black/[0.06] bg-white p-1.5 pl-4 shadow-[0_0.75rem_2.5rem_rgba(0,0,0,0.16)] transition-shadow duration-200 focus-within:shadow-[0_0.75rem_2.5rem_rgba(0,0,0,0.22)] sm:gap-3 sm:p-2 sm:pl-6 ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex shrink-0 items-center justify-center text-[#82868E]"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="7.5" />
          <path d="m16.5 16.5 4 4" />
        </svg>
      </span>

      <input
        type="search"
        aria-label="Search courses, topics, or creators"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 min-w-0 flex-1 border-0 bg-transparent font-satoshi text-sm font-normal text-[#17191F] placeholder:text-[#92959D] outline-none ring-0 focus:outline-none sm:h-12 sm:text-base"
      />

      <button
        type="submit"
        className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-electric-lime-500 px-5 font-poppins text-sm font-semibold text-electric-lime-950 transition-colors duration-200 hover:bg-electric-lime-400 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-lime-500 focus-visible:ring-offset-2 sm:h-12 sm:px-8 sm:text-base cursor-pointer"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
