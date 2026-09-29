import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Search Courses",
};

export default function SearchPage() {
  return (
    <section className="section-padding">
      <Container>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
          Browse Courses
        </h1>
        <p className="mt-2 text-text-secondary">
          আপনার পছন্দের কোর্স খুঁজুন
        </p>
        {/* Search UI + filters + course grid will be built when design is provided */}
      </Container>
    </section>
  );
}
