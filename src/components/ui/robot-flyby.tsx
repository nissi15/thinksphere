"use client";

import { cn } from "@/lib/utils";

export function SplineScene({ className }: { className?: string }) {
  return (
    <div className={cn("w-full h-full", className)}>
      <iframe
        src="https://my.spline.design/untitled-rv0hx3zVdoM6t2ydngxuS7zi/"
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        title="ThinkSphere 3D Scene"
        loading="lazy"
      />
    </div>
  );
}
