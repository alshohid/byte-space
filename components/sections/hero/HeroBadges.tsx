import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * 1. UI/UX Design floating info card
 */
export function UiUxCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-2xl border border-white/60",
        "animate-float transition-transform hover:scale-105 select-none",
        className
      )}
    >
      <h4 className="font-poppins font-bold text-sm text-shuttle-gray-950 leading-tight">
        UI/UX Design
      </h4>
      <p className="font-satoshi text-xs text-shuttle-gray-500 mt-1 flex items-center gap-1.5">
        <span>200 Courses</span>
        <span className="inline-block w-1 h-1 rounded-full bg-shuttle-gray-400" />
        <span>1000+ Students</span>
      </p>
    </div>
  );
}

/**
 * 2. Learning Progress (55%) card with electric-lime progress indicator
 */
export function ProgressCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-2xl border border-white/60 min-w-[190px] sm:min-w-[210px]",
        "animate-float-reverse transition-transform hover:scale-105 select-none",
        className
      )}
    >
      <span className="font-satoshi text-xs text-shuttle-gray-500 font-medium block">
        Learning Progress
      </span>
      <div className="font-clash font-bold text-3xl text-shuttle-gray-950 mt-1 leading-none">
        55%
      </div>
      {/* Progress Bar */}
      <div className="mt-3 w-full h-2 rounded-full bg-shuttle-gray-100 overflow-hidden">
        <div
          className="h-full bg-electric-lime-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: "55%" }}
        />
      </div>
    </div>
  );
}

/**
 * 3. Happy Students card with rating & stacked student avatars
 */
export function HappyStudentsCard({ className }: { className?: string }) {
  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
  ];

  return (
    <div
      className={cn(
        "bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-2xl border border-white/60",
        "animate-float-slow transition-transform hover:scale-105 select-none",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-poppins font-bold text-xs sm:text-sm text-shuttle-gray-950">
          Happy Students
        </span>
        <div className="flex items-center gap-1 font-poppins text-xs font-semibold text-shuttle-gray-900">
          <span>4.5</span>
          <span className="text-[11px] text-shuttle-gray-400 font-normal">(240)</span>
          <span className="text-amber-400 text-sm">★</span>
        </div>
      </div>

      {/* Overlapping Avatar Stack */}
      <div className="mt-3 flex items-center -space-x-2">
        {studentAvatars.map((src, i) => (
          <div
            key={i}
            className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-shuttle-gray-200 shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Student ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* +2K Badge */}
        <div className="relative w-8 h-8 rounded-full border-2 border-white bg-electric-lime-400 text-electric-lime-950 flex items-center justify-center font-poppins text-[10px] font-bold shrink-0 shadow-sm">
          2K+
        </div>
      </div>
    </div>
  );
}
