import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/services/courseService";
import { Container } from "@/components/layout/Container";

interface LessonsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: LessonsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return { title: "Lessons Not Found" };

  return {
    title: `Lessons — ${course.title}`,
  };
}

export default async function LessonsPage({ params }: LessonsPageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <section className="section-padding">
      <Container>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
          {course.title} — Lessons
        </h1>
        {/* Lesson player + sidebar will be built when design is provided */}
      </Container>
    </section>
  );
}
