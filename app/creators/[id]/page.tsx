import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCreatorById } from "@/services/creatorService";
import { Container } from "@/components/layout/Container";

interface CreatorProfilePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CreatorProfilePageProps): Promise<Metadata> {
  const { id } = await params;
  const creator = await getCreatorById(id);
  if (!creator) return { title: "Creator Not Found" };

  return {
    title: creator.name,
    description: creator.bio,
  };
}

export default async function CreatorProfilePage({
  params,
}: CreatorProfilePageProps) {
  const { id } = await params;
  const creator = await getCreatorById(id);

  if (!creator) {
    notFound();
  }

  return (
    <section className="section-padding">
      <Container>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary">
          {creator.name}
        </h1>
        <p className="mt-2 text-text-secondary">{creator.title}</p>
        {/* Creator profile UI will be built when design is provided */}
      </Container>
    </section>
  );
}
