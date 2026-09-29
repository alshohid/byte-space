import { cn } from "@/lib/utils";

export function UiUxCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-white rounded-[1.375rem] px-6 py-5 shadow-[0_0.75rem_2rem_rgba(0,0,0,0.12)] border border-white/80",
        "animate-float transition-all duration-300 hover:scale-105 select-none w-[15rem] sm:w-[16.25rem]",
        className
      )}
    >
      <h4 className="font-satoshi font-bold text-base text-[#111216] tracking-tight leading-tight">
        UI/UX Design
      </h4>
      <div className="font-satoshi text-xs font-medium text-[#82868e] mt-2 flex items-center gap-2">
        <span>200 Courses</span>
        <span className="w-1 h-1 rounded-full bg-[#abaeb5]" />
        <span>1000+ Students</span>
      </div>
    </div>
  );
}



export const ProgressCard = ({ title = "Learning Progress", percentage = 55, className }: { title?: string, percentage?: number, className?: string }) => {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-4 sm:p-6 shadow-sm w-full max-w-[320px] font-sans",
        "animate-float transition-all duration-300 hover:scale-105 select-none",
        className
      )}
    >
      {/* Title Section */}
      <h3 className="text-[#333333] text-lg font-medium mb-2">
        {title}
      </h3>

      {/* Percentage Text */}
      <div className="text-[#282828] text-[64px] font-extrabold leading-none tracking-tight mb-8">
        {percentage}%
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-[#f4f4f4] h-[10px] rounded-full">
        {/* Dynamic Progress Fill */}
        <div
          className="bg-[#c2f026] h-full rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};



export function HappyStudentsCard({ className }: { className?: string }) {
  const studentAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  ];

  return (
    <div
      className={cn(
        "bg-white rounded-[1.375rem] px-6 py-5 shadow-[0_0.75rem_2rem_rgba(0,0,0,0.12)] border border-white/80",
        "animate-float-slow transition-all duration-300 hover:scale-105 select-none min-w-[15rem] sm:min-w-[16.875rem]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-satoshi font-bold text-sm sm:text-base text-[#111216]">
          Happy Students
        </span>
        <div className="flex items-center gap-1 font-satoshi text-xs font-bold text-[#111216]">
          <span>4.5</span>
          <span className="text-[0.6875rem] text-[#82868e] font-normal">(240)</span>
          <span className="text-amber-400 text-sm">★</span>
        </div>
      </div>

      <div className="mt-4 flex items-center -space-x-2.5">
        {studentAvatars.map((src, i) => (
          <div
            key={i}
            className="relative w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-shuttle-gray-200 shrink-0 shadow-sm"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Student ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="relative w-9 h-9 rounded-full border-2 border-white bg-electric-lime-500 text-electric-lime-950 flex items-center justify-center font-poppins text-xs font-extrabold shrink-0 shadow-sm">
          2K+
        </div>
      </div>
    </div>
  );
}
