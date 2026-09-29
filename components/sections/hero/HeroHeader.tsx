"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeroHeader() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto text-center pt-8 pb-4 sm:pt-12 sm:pb-6 relative z-20">
      {/* Main Headline — Clash Display Bold */}
      <h1 className="font-clash font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12]">
        Get Access to Hundreds
        <br />
        <span className="text-white">Courses Available</span>
      </h1>

      {/* Subtitle */}
      <p className="font-satoshi text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto mt-4 sm:mt-5 leading-relaxed font-normal">
        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
      </p>

      {/* Pill Search Bar */}
      <form
        onSubmit={handleSearch}
        className="mt-6 sm:mt-8 max-w-xl mx-auto bg-white rounded-full p-1.5 sm:p-2 pl-4 sm:pl-6 flex items-center shadow-2xl border border-white/40 transition-all focus-within:ring-4 focus-within:ring-electric-lime-400/30"
      >
        <span className="text-shuttle-gray-400 mr-2 sm:mr-3 shrink-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </span>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-shuttle-gray-900 placeholder:text-shuttle-gray-400 font-satoshi text-sm sm:text-base focus:outline-none"
        />

        <button
          type="submit"
          className="bg-electric-lime-500 hover:bg-electric-lime-400 active:scale-95 text-electric-lime-950 font-poppins font-semibold text-xs sm:text-sm px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all shrink-0 cursor-pointer shadow-sm"
        >
          Search
        </button>
      </form>
    </div>
  );
}
