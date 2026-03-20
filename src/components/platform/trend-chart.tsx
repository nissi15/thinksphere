"use client";

import { TrendingUp, ArrowUpRight } from "lucide-react";

export function TrendChart() {
  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const placements = [42, 58, 71, 85, 102, 128, 156];
  const trained = [120, 180, 240, 310, 380, 450, 520];

  const w = 640;
  const h = 160;
  const padL = 40;
  const padR = 12;
  const padT = 12;
  const padB = 28;

  function toPath(data: number[]) {
    const max = Math.max(...data) * 1.1;
    return data.map((v, i) => ({
      x: padL + (i / (data.length - 1)) * (w - padL - padR),
      y: padT + (1 - v / max) * (h - padT - padB),
    }));
  }

  function pathD(pts: { x: number; y: number }[]) {
    return pts
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
      .join(" ");
  }

  function areaD(pts: { x: number; y: number }[]) {
    return `${pathD(pts)} L${pts[pts.length - 1].x.toFixed(1)},${(h - padB).toFixed(1)} L${pts[0].x.toFixed(1)},${(h - padB).toFixed(1)} Z`;
  }

  const trainedPts = toPath(trained);
  const placementPts = toPath(placements);

  return (
    <div className="glass-light-card rounded-2xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#0891b2]/60" />
          <span className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-slate-500">
            Growth Trend
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-[2px] rounded-full bg-[#0891b2]" />
            <span className="text-[10px] font-gotham text-slate-400">Trained</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-[2px] rounded-full bg-[#0891b2]/40" />
            <span className="text-[10px] font-gotham text-slate-400">Placed</span>
          </div>
        </div>
      </div>

      <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
        {[0, 1, 2, 3].map((i) => {
          const y = padT + (i / 3) * (h - padT - padB);
          return (
            <line
              key={i}
              x1={padL}
              y1={y}
              x2={w - padR}
              y2={y}
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1"
            />
          );
        })}
        <path d={areaD(trainedPts)} fill="rgba(8,145,178,0.08)" />
        <path d={areaD(placementPts)} fill="rgba(8,145,178,0.04)" />
        <path
          d={pathD(trainedPts)}
          fill="none"
          stroke="#0891b2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={pathD(placementPts)}
          fill="none"
          stroke="rgba(8,145,178,0.4)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx={trainedPts[trainedPts.length - 1].x}
          cy={trainedPts[trainedPts.length - 1].y}
          r="4"
          fill="#0891b2"
        />
        <circle
          cx={placementPts[placementPts.length - 1].x}
          cy={placementPts[placementPts.length - 1].y}
          r="4"
          fill="rgba(8,145,178,0.5)"
        />
        {months.map((m, i) => (
          <text
            key={m}
            x={padL + (i / (months.length - 1)) * (w - padL - padR)}
            y={h - 4}
            textAnchor="middle"
            className="text-[11px] fill-slate-400"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {m}
          </text>
        ))}
      </svg>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200/60">
        <span className="text-xs font-gotham font-semibold text-slate-400">
          Revenue (Q1 → Q3)
        </span>
        <div className="flex items-center gap-2">
          <span className="stat-font text-sm font-bold text-slate-700">
            $0.8M → $4.2M
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#0891b2]" />
          <span className="text-xs font-gotham font-bold text-[#0891b2]">+425%</span>
        </div>
      </div>
    </div>
  );
}
