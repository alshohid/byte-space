"use client";

import Image from "next/image";
import {
  UiUxCard,
  ProgressCard,
  HappyStudentsCard,
} from "./HeroBadges";

export function HeroVisual() {
  return (
    <div>

    </div>
    // <div className="relative w-full mt-4 sm:mt-8 flex items-center justify-center min-h-[30rem] sm:min-h-[38rem] lg:min-h-[42rem] z-20">
    //   <div className="absolute bottom-0 w-full max-w-[80rem] aspect-[1149/442] flex items-end justify-center">
    //     <Image
    //       src="/images/hero/man_bg-shape.svg"
    //       alt=""
    //       width={1149}
    //       height={442}
    //       className="w-full h-auto object-cover object-bottom select-none pointer-events-none"
    //       priority
    //     />
    //   </div>

    //   <div className="relative z-10 w-full max-w-[42rem] aspect-[540/620] flex items-end justify-center">
    //     <Image
    //       src="/images/hero/hero-man-img.png"
    //       alt="ByteSpace Student"
    //       width={540}
    //       height={620}
    //       className="w-full h-full object-contain object-bottom drop-shadow-[0_1.5rem_3rem_rgba(0,0,0,0.35)]"
    //       priority
    //     />
    //   </div>

    //   <div className="absolute top-[26%] sm:top-[28%] left-0 sm:left-[1rem] lg:left-[2rem] z-30">
    //     <UiUxCard />
    //   </div>

    //   <div className="absolute top-[24%] sm:top-[26%] right-0 sm:right-[1rem] lg:right-[2rem] z-30">
    //     <ProgressCard title="Course Completion" percentage={80} />
    //   </div>

    //   <div className="absolute bottom-[6%] sm:bottom-[8%] left-0 sm:left-[1.5rem] lg:left-[3rem] z-30">
    //     <HappyStudentsCard />
    //   </div>
    // </div>
  );
}
