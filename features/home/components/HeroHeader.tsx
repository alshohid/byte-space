"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SearchBar } from "@/components/ui/SearchBar";

export function HeroHeader() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (searchQuery: string) => {
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative z-20 mx-auto w-full max-w-5xl px-4 pb-8 pt-10 text-center sm:px-6 sm:pb-10 sm:pt-14 lg:pt-16"
    >
      <div className="mx-auto max-w-3xl">
        <h1
          id="hero-heading"
          className="font-clash text-[2.25rem] font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Get Access to Hundreds
          <br className="hidden sm:block" />
          <span className="sm:ml-3">Courses Available</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl font-satoshi text-sm font-normal leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
      </div>

      <div className="mx-auto mt-7 w-full max-w-2xl sm:mt-9">
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={handleSearch}
          placeholder="Search courses, topics, creators..."
          buttonLabel="Search"
        />
      </div>
    </section>
  );
}
