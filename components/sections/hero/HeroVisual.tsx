"use client";

import Image from "next/image";
import {
  UiUxCard,
  ProgressCard,
  HappyStudentsCard,
} from "./HeroBadges";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[840px] mx-auto mt-2 sm:mt-6 flex items-center justify-center min-h-[460px] sm:min-h-[560px] lg:min-h-[620px] z-20">
      {/* ─────────────────────────────────────────
          1. Large Electric Lime Background Circle
          ───────────────────────────────────────── */}
      <div className="absolute bottom-0 w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full bg-electric-lime-500 flex items-center justify-center shadow-2xl">
        {/* Subtle inner depth ring */}
        <div className="w-[88%] h-[88%] rounded-full border-4 border-electric-lime-400/40" />
      </div>

      {/* ─────────────────────────────────────────
          2. Center Student Cutout Image
          ───────────────────────────────────────── */}
      <div className="relative z-10 w-[290px] sm:w-[440px] lg:w-[520px] h-[380px] sm:h-[520px] lg:h-[600px] flex items-end justify-center">
        {/*
          Primary: /images/hero/hero-student.png (when user exports from Figma)
          Fallback: High-res matching portrait if PNG is not yet placed
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/hero-student.png"
          alt="Student learning on ByteSpace"
          className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          onError={(e) => {
            // High-resolution fallback showing smiling student with laptop & headphones
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85";
            e.currentTarget.className =
              "w-[260px] sm:w-[380px] lg:w-[460px] h-[320px] sm:h-[460px] lg:h-[520px] object-cover rounded-full border-4 border-white shadow-2xl mb-4";
          }}
        />
      </div>

      {/* ─────────────────────────────────────────
          3. Floating Badges Around Student
          ───────────────────────────────────────── */}

      {/* Top Left: UI/UX Design */}
      <div className="absolute top-[26%] sm:top-[28%] left-2 sm:left-4 lg:left-8 z-30">
        <UiUxCard />
      </div>

      {/* Top Right: Learning Progress 55% */}
      <div className="absolute top-[22%] sm:top-[26%] right-2 sm:right-4 lg:right-8 z-30">
        <ProgressCard />
      </div>

      {/* Bottom Left: Happy Students Rating */}
      <div className="absolute bottom-[6%] sm:bottom-[8%] left-1 sm:left-6 lg:left-10 z-30">
        <HappyStudentsCard />
      </div>
    </div>
  );
}
