"use client";

import Image from "next/image";

export function HeroShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      <div className="absolute top-[22%] left-[-1.5rem] sm:left-0 lg:left-[1.5rem] w-[9rem] sm:w-[13rem] lg:w-[16rem] animate-float">
        <Image
          src="/images/hero/snake-shape.png"
          alt=""
          width={260}
          height={260}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute top-[48%] left-[14%] sm:left-[16%] lg:left-[18%] w-[4.5rem] sm:w-[6rem] lg:w-[7.5rem] animate-float-reverse">
        <Image
          src="/images/hero/snake-shape-white.png"
          alt=""
          width={120}
          height={120}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute -bottom-[1rem] sm:bottom-0 left-[-1.5rem] sm:left-0 lg:left-[1rem] w-[12rem] sm:w-[16rem] lg:w-[22rem] animate-float-slow">
        <Image
          src="/images/hero/circle-shape.svg"
          alt=""
          width={350}
          height={350}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute top-[24%] right-[-1.5rem] sm:right-0 lg:right-[1.5rem] w-[10rem] sm:w-[14rem] lg:w-[18rem] animate-float-reverse">
        <Image
          src="/images/hero/right-cone-shape.svg"
          alt=""
          width={300}
          height={300}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute top-[48%] right-[14%] sm:right-[16%] lg:right-[18%] w-[5.5rem] sm:w-[7.5rem] lg:w-[9.5rem] animate-float">
        <Image
          src="/images/hero/Cone.svg"
          alt=""
          width={150}
          height={150}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute bottom-[2%] right-[1rem] sm:right-[2rem] lg:right-[3rem] w-[8rem] sm:w-[11rem] lg:w-[14rem] animate-float-slow rotate-45">
        <Image
          src="/images/hero/snake-shape-white.png"
          alt=""
          width={220}
          height={220}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </div>
    </div>
  );
}
