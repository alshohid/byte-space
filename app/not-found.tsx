import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "404 — Page Not Found",
};

export default function NotFoundPage() {
  return (
    <section className="section-padding flex items-center justify-center min-h-[60vh]">
      <Container className="text-center">
        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-primary/20">
          404
        </h1>
        <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-text-primary">
          Page Not Found
        </h2>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি। হোম পেজে ফিরে যান।
        </p>
        <Link href="/" className="inline-block mt-8">
          <Button variant="primary" size="lg">
            ← Back to Home
          </Button>
        </Link>
      </Container>
    </section>
  );
}
