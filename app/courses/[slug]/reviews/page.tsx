import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/services/courseService";
import { Container } from "@/components/layout/Container";

interface ReviewsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ReviewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return { title: "Reviews Not Found" };

  return {
    title: `Reviews — ${course.title}`,
  };
}

export default async function ReviewsPage({ params }: ReviewsPageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <section className="section-padding">
      <Container>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
          {course.title} — Reviews
        </h1>
        {/* Review list + form will be built when design is provided */}
      </Container>
    </section>
  );
}
