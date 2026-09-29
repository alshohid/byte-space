import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/services/courseService";
import { Container } from "@/components/layout/Container";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <section className="section-padding">
      <Container>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary">
          {course.title}
        </h1>
        <p className="mt-3 text-text-secondary">{course.description}</p>
        {/* Course detail UI will be built when design is provided */}
      </Container>
    </section>
  );
}
