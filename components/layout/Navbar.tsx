"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { ByteSpaceLogo } from "@/components/ui/ByteSpaceLogo";

interface NavbarProps {
  variant?: "hero" | "default";
}

export function Navbar({ variant = "hero" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Creators", href: "/creators" },
  ];

  const isHero = variant === "hero";

  return (
    <header
      className={cn(
        "w-full z-[var(--z-navbar)] transition-colors",
        isHero
          ? "hero-grid-pattern text-white border-b border-white/10"
          : "bg-bg-primary/95 backdrop-blur-md text-text-primary border-b border-border shadow-navbar sticky top-0"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <ByteSpaceLogo src="/icons/logo.svg" variant={isHero ? "light" : "dark"} />

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-satoshi text-sm font-medium transition-colors",
                    isHero
                      ? "text-white/80 hover:text-white"
                      : "text-shuttle-gray-600 hover:text-shuttle-gray-950"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Action Area */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className={cn(
                "font-satoshi text-sm font-medium transition-colors",
                isHero
                  ? "text-white/90 hover:text-white"
                  : "text-shuttle-gray-700 hover:text-shuttle-gray-950"
              )}
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className={cn(
                "font-poppins text-sm font-semibold transition-colors",
                isHero
                  ? "text-white hover:text-electric-lime-400"
                  : "text-primary hover:text-primary-hover"
              )}
            >
              Join Us
            </Link>

            {/* Shopping Bag Icon */}
            <Link
              href="/cart"
              className={cn(
                "p-1.5 rounded-full transition-colors",
                isHero
                  ? "text-white hover:text-electric-lime-400"
                  : "text-shuttle-gray-700 hover:text-shuttle-gray-950"
              )}
              aria-label="Shopping Cart"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isHero
                ? "text-white hover:bg-white/10"
                : "text-shuttle-gray-900 hover:bg-shuttle-gray-100"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "md:hidden border-t px-4 py-6 animate-fade-in",
            isHero
              ? "bg-shuttle-gray-950/95 border-white/10 text-white backdrop-blur-xl"
              : "bg-white border-border text-shuttle-gray-900"
          )}
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-base font-medium hover:text-electric-lime-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              className="w-full text-center py-2.5 rounded-xl border border-white/20 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="w-full text-center py-2.5 rounded-xl bg-electric-lime-500 text-electric-lime-950 font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
