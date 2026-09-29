import { Container } from "@/components/layout/Container";

export function CompanyLogosStrip() {
  return (
    <div className="w-full bg-white py-8 border-b border-shuttle-gray-200 z-30 relative">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="flex items-center gap-2.5 font-clash font-bold text-xl sm:text-2xl text-shuttle-gray-800">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M7 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="flex items-center gap-2.5 font-clash font-bold text-xl sm:text-2xl text-shuttle-gray-800">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="flex items-center gap-2.5 font-clash font-bold text-xl sm:text-2xl text-shuttle-gray-800">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="flex items-center gap-2.5 font-clash font-bold text-xl sm:text-2xl text-shuttle-gray-800">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
            </svg>
            <span>Logoipsum</span>
          </div>

          <div className="flex items-center gap-2.5 font-clash font-bold text-xl sm:text-2xl text-shuttle-gray-800">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 15l-4-4h8l-4 4z" fill="#fff" />
            </svg>
            <span>Logoipsum</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
