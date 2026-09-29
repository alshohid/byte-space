import type { NavLink } from "@/types/common";

export const SITE_NAME = "ByteSpace";
export const SITE_DESCRIPTION =
  "বাংলায় সেরা অনলাইন লার্নিং প্ল্যাটফর্ম। ওয়েব ডেভেলপমেন্ট, ডেটা সায়েন্স, মোবাইল অ্যাপ এবং আরও অনেক কিছু শিখুন।";
export const SITE_URL = "https://bytespace.com";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/search" },
  { label: "Categories", href: "/search?view=categories" },
  { label: "Instructors", href: "/search?view=instructors" },
];

export const FOOTER_LINKS = {
  platform: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Help Center", href: "/help" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Sitemap", href: "/sitemap" },
  ],
  teaching: [
    { label: "Become an Instructor", href: "/teach" },
    { label: "Instructor Guidelines", href: "/guidelines" },
    { label: "Affiliate Program", href: "/affiliate" },
  ],
};

export const COURSE_LEVELS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
  { value: "all-levels", label: "All Levels" },
] as const;

export const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Highest Rated" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "most-reviewed", label: "Most Reviewed" },
] as const;

/**
 * Responsive breakpoint values matching Tailwind v4 defaults.
 * Use these in JS when you need programmatic breakpoint checks.
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
