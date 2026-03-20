import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
}

export function StatCard({ label, value, icon: Icon, trend }: StatCardProps) {
  return (
    <div className="glass-light-card rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <Icon className="w-5 h-5 text-[#0891b2]/60" strokeWidth={1.5} />
        {trend && (
          <span className="text-xs font-gotham font-bold text-[#0891b2]">
            {trend}
          </span>
        )}
      </div>
      <span className="stat-font text-3xl font-bold text-slate-800 block leading-none">
        {value}
      </span>
      <p className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-slate-400 mt-2">
        {label}
      </p>
    </div>
  );
}
