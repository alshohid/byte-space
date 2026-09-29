"use client";

import { cn } from "@/lib/utils";

/**
 * 3D Floating Decorative Shapes around the Hero Section
 * Positioned responsively around the 1440x1024 frame.
 * 
 * Supports both:
 * 1. Custom Figma exported PNGs placed in /public/images/hero/
 * 2. High-fidelity vector fallbacks with 3D gradients matching Figma
 */
export function HeroShapes() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10"
      aria-hidden="true"
    >
      {/* ─────────────────────────────────────────
          1. TOP-LEFT: Lime Green 3D Spring / Coil
          ───────────────────────────────────────── */}
      <div className="absolute top-[35%] sm:top-[32%] -left-8 sm:left-4 lg:left-12 w-28 sm:w-36 lg:w-44 animate-float">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/shape-spring-lime.png"
          alt=""
          className="w-full h-auto drop-shadow-2xl"
          onError={(e) => {
            // If PNG not uploaded yet, show vector fallback
            e.currentTarget.style.display = "none";
            const fb = e.currentTarget.nextElementSibling as HTMLElement;
            if (fb) fb.style.display = "block";
          }}
        />
        <svg
          viewBox="0 0 160 200"
          fill="none"
          className="w-full h-auto drop-shadow-2xl hidden"
        >
          <path
            d="M30 40 C 90 20, 150 40, 130 80 C 110 120, 30 90, 50 130 C 70 170, 150 150, 120 180"
            stroke="#cbfc01"
            strokeWidth="34"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          2. MID-LEFT: White Zigzag Spring
          ───────────────────────────────────────── */}
      <div className="absolute top-[55%] sm:top-[52%] left-12 sm:left-24 lg:left-36 w-16 sm:w-20 lg:w-24 animate-float-reverse">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/shape-zigzag-white-left.png"
          alt=""
          className="w-full h-auto drop-shadow-2xl"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fb = e.currentTarget.nextElementSibling as HTMLElement;
            if (fb) fb.style.display = "block";
          }}
        />
        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="w-full h-auto drop-shadow-xl hidden"
        >
          <path
            d="M20 30 L 70 40 L 30 65 L 80 75"
            stroke="#ffffff"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          3. BOTTOM-LEFT: White 3D Torus / Donut Ring
          ───────────────────────────────────────── */}
      <div className="absolute -bottom-8 sm:bottom-4 left-2 sm:left-10 lg:left-16 w-36 sm:w-48 lg:w-60 animate-float-slow -rotate-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/shape-donut-white.png"
          alt=""
          className="w-full h-auto drop-shadow-2xl"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fb = e.currentTarget.nextElementSibling as HTMLElement;
            if (fb) fb.style.display = "block";
          }}
        />
        <svg
          viewBox="0 0 200 200"
          fill="none"
          className="w-full h-auto drop-shadow-2xl hidden"
        >
          <ellipse cx="100" cy="100" rx="75" ry="60" stroke="#f5f5f6" strokeWidth="42" />
          <ellipse cx="100" cy="100" rx="75" ry="60" stroke="#ffffff" strokeWidth="36" />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          4. TOP-RIGHT: Lime Green 3D Cylinder / Cone
          ───────────────────────────────────────── */}
      <div className="absolute top-[32%] sm:top-[30%] -right-6 sm:right-6 lg:right-16 w-28 sm:w-36 lg:w-48 animate-float-reverse rotate-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/shape-cylinder-lime.png"
          alt=""
          className="w-full h-auto drop-shadow-2xl"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fb = e.currentTarget.nextElementSibling as HTMLElement;
            if (fb) fb.style.display = "block";
          }}
        />
        <svg
          viewBox="0 0 140 180"
          fill="none"
          className="w-full h-auto drop-shadow-2xl hidden"
        >
          <ellipse cx="70" cy="35" rx="55" ry="25" fill="#e4ff54" />
          <path d="M15 35 L 35 155 Q 70 175 105 155 L 125 35 Z" fill="#cbfc01" />
          <ellipse cx="70" cy="155" rx="35" ry="15" fill="#8cb400" />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          5. MID-RIGHT: White 3D Pyramid / Tetrahedron
          ───────────────────────────────────────── */}
      <div className="absolute top-[52%] sm:top-[50%] right-16 sm:right-24 lg:right-36 w-16 sm:w-20 lg:w-24 animate-float -rotate-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/shape-pyramid-white.png"
          alt=""
          className="w-full h-auto drop-shadow-2xl"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fb = e.currentTarget.nextElementSibling as HTMLElement;
            if (fb) fb.style.display = "block";
          }}
        />
        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="w-full h-auto drop-shadow-xl hidden"
        >
          <polygon points="50,15 15,80 85,80" fill="#ffffff" />
          <polygon points="50,15 85,80 70,85" fill="#e5e6e8" />
        </svg>
      </div>

      {/* ─────────────────────────────────────────
          6. BOTTOM-RIGHT: White 3D Zigzag / Coil
          ───────────────────────────────────────── */}
      <div className="absolute -bottom-4 sm:bottom-6 right-2 sm:right-10 lg:right-20 w-24 sm:w-32 lg:w-40 animate-float-slow rotate-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/shape-zigzag-white-right.png"
          alt=""
          className="w-full h-auto drop-shadow-2xl"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const fb = e.currentTarget.nextElementSibling as HTMLElement;
            if (fb) fb.style.display = "block";
          }}
        />
        <svg
          viewBox="0 0 120 160"
          fill="none"
          className="w-full h-auto drop-shadow-2xl hidden"
        >
          <path
            d="M30 30 Q 90 40 80 75 Q 20 90 70 120 Q 95 135 70 150"
            stroke="#ffffff"
            strokeWidth="24"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
