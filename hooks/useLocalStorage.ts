"use client";

import { useState, useEffect } from "react";

/**
 * Persist a value in localStorage with automatic
 * serialization/deserialization.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      // Silently fail if localStorage is full or unavailable.
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
