import { HeroHeader } from "./HeroHeader";
import { HeroVisual } from "./HeroVisual";
import { HeroShapes } from "./HeroShapes";
import { CompanyLogosStrip } from "./CompanyLogosStrip";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full hero-grid-pattern relative">

      <div className=" relative  w-full min-h-200 lg:min-h-232">
        <div className="absolute top-32 md:top-56 left-0 w-36 lg:w-64 animate-float">
          <Image
            src="/images/hero/snake-shape.png"
            alt=""
            width={360}
            height={360}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>
        <div className="absolute hidden md:block top-32 md:top-56 right-2  lg:w-64 animate-float-reverse">
          <Image
            src="/images/hero/right-cone-shape.svg"
            alt=""
            width={260}
            height={260}
            className="w-full h-auto drop-shadow-2xl object-contain"
            priority
          />
        </div>

      </div>
      {/* <div className="  relative px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-0 min-h-[55rem] lg:min-h-[61.25rem] flex flex-col justify-between">
        <HeroShapes />
        <HeroHeader />
        <HeroVisual />
      </div>

      <CompanyLogosStrip /> */}
    </section>
  );
}
