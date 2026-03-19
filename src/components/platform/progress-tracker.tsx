"use client";

import { CheckCircle2 } from "lucide-react";

interface Step {
  label: string;
  done?: boolean;
  active?: boolean;
}

interface ProgressTrackerProps {
  steps: Step[];
}

export function ProgressTracker({ steps }: ProgressTrackerProps) {
  return (
    <div className="liquid-glass-grey-light rounded-2xl p-6">
      <p className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-5">
        Your Journey
      </p>
      <div className="flex items-center gap-1">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step.done
                    ? "bg-[#00E5FF] text-black"
                    : step.active
                      ? "bg-[#00E5FF]/80 text-black ring-4 ring-[#00E5FF]/20"
                      : "bg-white/5 text-white/40"
                }`}
              >
                {step.done ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
              </div>
              <span
                className={`text-xs font-gotham font-semibold mt-2 text-center leading-tight ${
                  step.done || step.active ? "text-white/90" : "text-white/40"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-[2px] w-full mt-[-20px] rounded-full ${
                  step.done ? "bg-[#00E5FF]/40" : "bg-white/5"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
