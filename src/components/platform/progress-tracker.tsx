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
    <div className="glass-light-card rounded-2xl p-6">
      <p className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-slate-400 mb-5">
        Your Journey
      </p>
      <div className="flex items-center gap-1">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  step.done
                    ? "bg-[#0891b2] text-white"
                    : step.active
                      ? "bg-[#0891b2]/80 text-white ring-4 ring-[#0891b2]/15"
                      : "bg-slate-100 text-slate-400"
                }`}
              >
                {step.done ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
              </div>
              <span
                className={`text-xs font-gotham font-semibold mt-2 text-center leading-tight ${
                  step.done || step.active ? "text-slate-700" : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-[2px] w-full mt-[-20px] rounded-full ${
                  step.done ? "bg-[#0891b2]/40" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
