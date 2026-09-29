"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-padding flex items-center justify-center min-h-[60vh]">
      <Container className="text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-text-primary">
          Something went wrong!
        </h2>
        <p className="mt-2 text-text-secondary max-w-md mx-auto">
          একটি ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।
        </p>
        <Button
          variant="primary"
          size="lg"
          className="mt-6"
          onClick={() => reset()}
        >
          Try Again
        </Button>
      </Container>
    </section>
  );
}
