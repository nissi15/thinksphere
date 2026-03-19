"use client";

export function Sphere({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <div className="w-full h-full relative sphere-3d">
        <div className="absolute top-1/2 left-1/2 w-[87.5%] h-[87.5%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-foreground/15 animate-[tilt-1_10s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 w-[70%] h-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-foreground/10 animate-[tilt-2_13s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 w-[52.5%] h-[52.5%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-foreground/8 animate-[tilt-3_16s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground shadow-[0_0_12px_rgba(0,0,0,0.1)]" />
      </div>
    </div>
  );
}
