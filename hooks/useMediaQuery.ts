"use client";

import { useState, useEffect } from "react";

/**
 * Detects if a CSS media query matches. Uses Tailwind v4
 * breakpoints by default.
 *
 * Usage:
 *   const isMobile = useMediaQuery("(max-width: 767px)");
 *   const isDesktop = useMediaQuery("(min-width: 1024px)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
