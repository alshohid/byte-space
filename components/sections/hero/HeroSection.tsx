import { Container } from "@/components/layout/Container";
import { HeroHeader } from "./HeroHeader";
import { HeroVisual } from "./HeroVisual";
import { HeroShapes } from "./HeroShapes";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[920px] lg:min-h-[1024px] hero-grid-pattern overflow-hidden flex flex-col justify-between">
      {/* 3D Floating Shapes across the 1440x1024 plane */}
      <HeroShapes />

      {/* Main Content Area */}
      <Container className="relative z-20 flex-1 flex flex-col justify-between pt-6 sm:pt-10 pb-0">
        {/* Top Header & Search */}
        <HeroHeader />

        {/* Centerpiece Student & Floating Badges */}
        <HeroVisual />
      </Container>
    </section>
  );
}
