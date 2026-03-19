"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BarChart3,
  User,
  Award,
  Building2,
  Trophy,
  ChevronRight,
  Search,
  Download,
  Share2,
  CheckCircle2,
  Clock,
  Star,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  DollarSign,
  Filter,
  Plus,
  BadgeCheck,
  ArrowUpRight,
  Activity,
  Target,
  Wallet,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

type Screen =
  | "metrics"
  | "youth-dashboard"
  | "credential"
  | "recruiter"
  | "competition"
  | "admin";

const screens: { id: Screen; label: string; icon: typeof BarChart3 }[] = [
  { id: "metrics", label: "Metrics", icon: Activity },
  { id: "youth-dashboard", label: "Youth Dashboard", icon: User },
  { id: "credential", label: "Credential", icon: Award },
  { id: "recruiter", label: "Recruiter", icon: Building2 },
  { id: "competition", label: "Competition", icon: Trophy },
  { id: "admin", label: "Admin Panel", icon: BarChart3 },
];

/* ─── TREND CHART (SVG area chart) ─── */
function TrendChart() {
  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
  const placements = [42, 58, 71, 85, 102, 128, 156];
  const trained = [120, 180, 240, 310, 380, 450, 520];

  const w = 480;
  const h = 120;
  const padL = 32;
  const padR = 8;
  const padT = 8;
  const padB = 24;

  function toPath(data: number[]) {
    const max = Math.max(...data) * 1.1;
    return data.map((v, i) => ({
      x: padL + (i / (data.length - 1)) * (w - padL - padR),
      y: padT + (1 - v / max) * (h - padT - padB),
    }));
  }

  function pathD(pts: { x: number; y: number }[]) {
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  }

  function areaD(pts: { x: number; y: number }[]) {
    return `${pathD(pts)} L${pts[pts.length - 1].x.toFixed(1)},${(h - padB).toFixed(1)} L${pts[0].x.toFixed(1)},${(h - padB).toFixed(1)} Z`;
  }

  const trainedPts = toPath(trained);
  const placementPts = toPath(placements);

  return (
    <div className="liquid-glass-grey-light rounded-xl p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3 h-3 text-[#00E5FF]/60" />
          <span className="text-[9px] accent-font font-bold uppercase tracking-[2px] text-white/70">
            Growth Trend
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-[2px] rounded-full bg-[#00E5FF]" />
            <span className="text-[8px] font-gotham text-white/70">Trained</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-[2px] rounded-full bg-[#00E5FF]/40" />
            <span className="text-[8px] font-gotham text-white/70">Placed</span>
          </div>
        </div>
      </div>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
        {[0, 1, 2, 3].map((i) => {
          const y = padT + (i / 3) * (h - padT - padB);
          return (
            <line key={i} x1={padL} y1={y} x2={w - padR} y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          );
        })}
        <path d={areaD(trainedPts)} fill="rgba(0,229,255,0.08)" />
        <path d={areaD(placementPts)} fill="rgba(0,229,255,0.04)" />
        <path d={pathD(trainedPts)} fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={pathD(placementPts)} fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={trainedPts[trainedPts.length - 1].x} cy={trainedPts[trainedPts.length - 1].y} r="3" fill="#00E5FF" />
        <circle cx={placementPts[placementPts.length - 1].x} cy={placementPts[placementPts.length - 1].y} r="3" fill="rgba(0,229,255,0.5)" />
        {months.map((m, i) => (
          <text
            key={m}
            x={padL + (i / (months.length - 1)) * (w - padL - padR)}
            y={h - 4}
            textAnchor="middle"
            className="text-[9px] fill-white/40"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {m}
          </text>
        ))}
      </svg>
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
        <span className="text-[9px] font-gotham font-semibold text-white/70">Revenue (Q1 → Q3)</span>
        <div className="flex items-center gap-1">
          <span className="stat-font text-xs font-bold text-white/90">$0.8M → $4.2M</span>
          <ArrowUpRight className="w-2.5 h-2.5 text-[#00E5FF]" />
          <span className="text-[9px] font-gotham font-bold text-[#00E5FF]">+425%</span>
        </div>
      </div>
    </div>
  );
}

/* ─── METRICS DASHBOARD ─── */
function MetricsScreen() {
  const kpis = [
    { label: "Youth Trained", value: "1,247", icon: GraduationCap, trend: "+18%" },
    { label: "Placement Rate", value: "85.3%", icon: Target, trend: "+12%" },
    { label: "Revenue", value: "$4.2M", icon: Wallet, trend: "+34%" },
    { label: "Trainers", value: "62", icon: Users, trend: "+9" },
  ];

  const rates = [
    { label: "Hospitality", pct: 85 },
    { label: "Tour Guide", pct: 87 },
    { label: "Business", pct: 72 },
    { label: "Recruiter Match", pct: 89 },
  ];

  return (
    <div className="p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] accent-font font-bold uppercase tracking-[3px] text-white/70">Platform Overview</p>
          <h3 className="font-gotham text-base font-bold text-white mt-0.5">Success Metrics</h3>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg liquid-glass-grey-light">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="text-[9px] font-gotham font-bold text-white/80">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.label} className="liquid-glass-grey-light rounded-xl p-2.5">
              <Icon className="w-3 h-3 text-[#00E5FF]/60 mb-1.5" strokeWidth={1.5} />
              <span className="stat-font text-base font-bold text-white block leading-none">{kpi.value}</span>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[8px] accent-font font-bold uppercase tracking-wider text-white/70">{kpi.label}</p>
                <span className="text-[8px] font-gotham font-bold text-[#00E5FF]">{kpi.trend}</span>
              </div>
            </div>
          );
        })}
      </div>

      <TrendChart />

      <div className="liquid-glass-grey-light rounded-xl p-3 mt-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] accent-font font-bold uppercase tracking-[2px] text-white/70">Success Rates</span>
          <span className="text-[8px] font-gotham text-white/50">Q1 2026</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {rates.map((r) => (
            <div key={r.label}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-gotham text-[9px] font-semibold text-white/80">{r.label}</span>
                <span className="stat-font text-[8px] text-white/70">{r.pct}%</span>
              </div>
              <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full bg-[#00E5FF]/50" style={{ width: `${r.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── YOUTH DASHBOARD ─── */
function YouthDashboardScreen() {
  const steps = [
    { label: "Applied", done: true },
    { label: "Bootcamp", done: true },
    { label: "Competition", active: true },
    { label: "Internship", done: false },
    { label: "Alumni", done: false },
  ];

  const skills = [
    { name: "Hospitality", level: 92 },
    { name: "Customer Service", level: 78 },
    { name: "Digital Marketing", level: 65 },
    { name: "Business Planning", level: 54 },
  ];

  return (
    <div className="p-5 md:p-7">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-gotham text-xs text-white/70">Welcome back,</p>
          <h3 className="font-gotham text-lg font-bold text-white">Marie Uwase</h3>
        </div>
        <div className="w-9 h-9 rounded-full liquid-glass-grey-light flex items-center justify-center">
          <User className="w-4 h-4 text-white/70" />
        </div>
      </div>

      <div className="liquid-glass-grey-light rounded-xl p-4 mb-4">
        <p className="text-[10px] accent-font font-bold uppercase tracking-[3px] text-white/70 mb-3">Your Journey</p>
        <div className="flex items-center gap-1">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${
                  s.done ? "bg-[#00E5FF] text-black" : s.active ? "bg-[#00E5FF]/80 text-black ring-2 ring-[#00E5FF]/30 ring-offset-2 ring-offset-transparent" : "bg-white/5 text-white/50"
                }`}>
                  {s.done ? <CheckCircle2 className="w-3 h-3" /> : i + 1}
                </div>
                <span className="text-[8px] font-gotham font-semibold text-white/70 mt-1 text-center leading-tight">{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`h-[1px] w-full mt-[-12px] ${i < 2 ? "bg-[#00E5FF]/30" : "bg-white/5"}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 liquid-glass-grey-light rounded-xl p-3 mb-4">
        <Clock className="w-4 h-4 text-[#00E5FF]/60 shrink-0" />
        <div>
          <p className="font-gotham text-xs font-bold text-white">Competition Phase — Pitching in Progress</p>
          <p className="text-[10px] text-white/70">Next session: March 22, 2026 at 10:00 AM</p>
        </div>
      </div>

      <p className="text-[10px] accent-font font-bold uppercase tracking-[3px] text-white/70 mb-3">My Skills</p>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((s) => (
          <div key={s.name} className="liquid-glass-grey-light rounded-lg p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-gotham text-[11px] font-bold text-white/90">{s.name}</span>
              <span className="stat-font text-[10px] text-white/70">{s.level}%</span>
            </div>
            <div className="h-1 rounded-full bg-white/5">
              <div className="h-full rounded-full bg-[#00E5FF]/50" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>

      <button className="font-gotham mt-5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-white text-black flex items-center gap-1.5">
        <Award className="w-3 h-3" /> View My Credential
      </button>
    </div>
  );
}

/* ─── CREDENTIAL ─── */
function CredentialScreen() {
  const skills = ["Hospitality Management", "Customer Service Excellence", "Digital Marketing", "Business Planning"];
  return (
    <div className="p-5 md:p-7">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl liquid-glass-grey-light flex items-center justify-center shrink-0">
          <User className="w-7 h-7 text-white/70" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-gotham text-lg font-bold text-white">Marie Uwase</h3>
            <BadgeCheck className="w-4 h-4 text-[#00E5FF]" />
          </div>
          <p className="font-gotham text-xs text-white/70 mt-0.5">Tourism & Hospitality &middot; Kicukiro, Rwanda</p>
          <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-[#00E5FF] text-black text-[9px] font-bold accent-font tracking-wider">
            <Award className="w-2.5 h-2.5" /> THINKSPHERE VERIFIED
          </div>
        </div>
      </div>

      <p className="text-[10px] accent-font font-bold uppercase tracking-[3px] text-white/70 mb-2">Completed Skills</p>
      <div className="space-y-1.5 mb-5">
        {skills.map((s) => (
          <div key={s} className="flex items-center gap-2 liquid-glass-grey-light rounded-lg px-3 py-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]/80" />
            <span className="font-gotham text-xs font-semibold text-white/90">{s}</span>
          </div>
        ))}
      </div>

      <p className="text-[10px] accent-font font-bold uppercase tracking-[3px] text-white/70 mb-2">Experience</p>
      <div className="space-y-2 mb-5">
        <div className="liquid-glass-grey-light rounded-lg px-3 py-2.5">
          <div className="flex items-center justify-between">
            <span className="font-gotham text-xs font-bold text-white/90">Pitch Competition — 2nd Place</span>
            <Trophy className="w-3 h-3 text-[#00E5FF]/60" />
          </div>
          <p className="text-[10px] text-white/70 mt-0.5">&quot;Kicukiro Trails&quot; — Guided eco-tours</p>
        </div>
        <div className="liquid-glass-grey-light rounded-lg px-3 py-2.5">
          <div className="flex items-center justify-between">
            <span className="font-gotham text-xs font-bold text-white/90">Internship — Radisson Blu Kigali</span>
            <Briefcase className="w-3 h-3 text-[#00E5FF]/60" />
          </div>
          <p className="text-[10px] text-white/70 mt-0.5">Jan 2026 — Mar 2026 &middot; Guest Services</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="font-gotham text-[11px] font-semibold px-4 py-2 rounded-lg bg-white text-black flex items-center gap-1.5">
          <Share2 className="w-3 h-3" /> Share Profile
        </button>
        <button className="font-gotham text-[11px] font-semibold px-4 py-2 rounded-lg liquid-glass-grey-light text-white/80 flex items-center gap-1.5">
          <Download className="w-3 h-3" /> Download CV
        </button>
      </div>
    </div>
  );
}

/* ─── RECRUITER DASHBOARD ─── */
function RecruiterScreen() {
  const alumni = [
    { name: "Marie Uwase", skills: ["Hospitality", "Marketing", "Service"], winner: true },
    { name: "Jean Mugabo", skills: ["Business Plan", "Tour Guide", "Service"], winner: false },
    { name: "Aline Ndayisaba", skills: ["Marketing", "Hospitality", "Events"], winner: true },
    { name: "Eric Habimana", skills: ["Tour Guide", "Service", "Planning"], winner: false },
  ];
  return (
    <div className="p-5 md:p-7">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-gotham text-xs text-white/70">Recruiter Dashboard</p>
          <h3 className="font-gotham text-lg font-bold text-white">Radisson Blu Kigali</h3>
        </div>
        <button className="font-gotham text-[10px] font-bold px-3 py-1.5 rounded-lg bg-[#00E5FF] text-black flex items-center gap-1">
          <Plus className="w-3 h-3" /> Post Job
        </button>
      </div>

      <div className="flex gap-2 mb-5">
        <div className="flex-1 flex items-center gap-2 liquid-glass-grey-light rounded-lg px-3 py-2">
          <Search className="w-3.5 h-3.5 text-white/70" />
          <span className="font-gotham text-[11px] text-white/70">Search alumni by skill…</span>
        </div>
        <button className="liquid-glass-grey-light rounded-lg px-3 py-2 flex items-center gap-1">
          <Filter className="w-3 h-3 text-white/70" />
          <span className="font-gotham text-[10px] font-semibold text-white/80">Filter</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {alumni.map((a) => (
          <div key={a.name} className="liquid-glass-grey-light rounded-xl p-3 text-left transition-all duration-300 hover:bg-white/8">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full liquid-glass-grey-light flex items-center justify-center">
                <User className="w-3.5 h-3.5 text-white/70" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-gotham text-[11px] font-bold text-white/90">{a.name}</span>
                  <BadgeCheck className="w-3 h-3 text-[#00E5FF]/70" />
                </div>
                {a.winner && (
                  <span className="text-[8px] accent-font font-bold text-[#00E5FF]/60 uppercase tracking-wider">Competition Winner</span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              {a.skills.map((s) => (
                <span key={s} className="text-[8px] font-gotham font-semibold px-1.5 py-0.5 rounded liquid-glass-grey-light text-white/80">{s}</span>
              ))}
            </div>
            <button className="font-gotham text-[9px] font-bold text-[#00E5FF]/70 flex items-center gap-0.5 hover:text-[#00E5FF] transition-colors">
              View Profile <ChevronRight className="w-2.5 h-2.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── COMPETITION ─── */
function CompetitionScreen() {
  const winners = [
    { place: "1st", team: "KicuTrails", idea: "Guided eco-tours for urban tourists", funding: "RWF 2.5M" },
    { place: "2nd", team: "RwandaBites", idea: "Local food tour & cooking classes", funding: "RWF 1.5M" },
    { place: "3rd", team: "CraftKigali", idea: "Artisan marketplace & workshops", funding: "RWF 1M" },
  ];
  return (
    <div className="p-5 md:p-7">
      <div className="mb-5">
        <p className="text-[10px] accent-font font-bold uppercase tracking-[3px] text-white/70 mb-1">Pitch Day</p>
        <h3 className="font-serif text-xl font-bold text-white">ThinkSphere × BDF Competition</h3>
        <p className="font-gotham text-xs text-white/70 mt-1">Cycle 3 — Kicukiro District &middot; March 2026</p>
      </div>

      <div className="liquid-glass-grey-light rounded-xl p-3 mb-5 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
        <span className="font-gotham text-xs font-semibold text-white">Winners Announced</span>
      </div>

      <div className="space-y-2.5 mb-5">
        {winners.map((w) => (
          <div key={w.place} className="liquid-glass-grey-light rounded-xl p-4 flex items-start gap-3 transition-all duration-300 hover:bg-white/8">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              w.place === "1st" ? "bg-[#00E5FF] text-black" : "liquid-glass-grey-light text-white/70"
            }`}>
              <Trophy className="w-3.5 h-3.5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-gotham text-xs font-bold text-white/90">{w.team}</span>
                <span className="stat-font text-[10px] font-bold text-white/80">{w.funding}</span>
              </div>
              <p className="text-[10px] text-white/70 mt-0.5">{w.idea}</p>
              <span className="text-[8px] accent-font font-bold uppercase tracking-wider text-[#00E5FF]/50 mt-1 inline-block">{w.place} Place</span>
            </div>
          </div>
        ))}
      </div>

      <p className="font-gotham text-[10px] text-white/70 italic">ThinkSphere retains 10% equity in funded ventures.</p>
    </div>
  );
}

/* ─── ADMIN ─── */
function AdminScreen() {
  const stats = [
    { label: "Youth Trained", value: "1,247", icon: GraduationCap, trend: "+18%" },
    { label: "Placed", value: "892", icon: Briefcase, trend: "+24%" },
    { label: "Businesses Funded", value: "36", icon: Star, trend: "+8" },
    { label: "Active Recruiters", value: "48", icon: Building2, trend: "+5" },
  ];
  const cohort = [
    { name: "Marie Uwase", status: "Competition" },
    { name: "Jean Mugabo", status: "Bootcamp" },
    { name: "Aline Ndayisaba", status: "Internship" },
    { name: "Eric Habimana", status: "Bootcamp" },
  ];
  return (
    <div className="p-5 md:p-7">
      <div className="mb-5">
        <p className="font-gotham text-xs text-white/70">Admin Overview</p>
        <h3 className="font-gotham text-lg font-bold text-white">ThinkSphere HQ</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="liquid-glass-grey-light rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <Icon className="w-3.5 h-3.5 text-[#00E5FF]/60" />
                <span className="text-[9px] font-gotham font-bold text-[#00E5FF]">{s.trend}</span>
              </div>
              <span className="stat-font text-xl font-bold text-white block">{s.value}</span>
              <p className="text-[9px] accent-font font-bold uppercase tracking-wider text-white/70 mt-0.5">{s.label}</p>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] accent-font font-bold uppercase tracking-[3px] text-white/70 mb-2">Current Cohort</p>
      <div className="space-y-1.5 mb-5">
        {cohort.map((c) => (
          <div key={c.name} className="flex items-center justify-between liquid-glass-grey-light rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full liquid-glass-grey-light flex items-center justify-center">
                <User className="w-2.5 h-2.5 text-white/70" />
              </div>
              <span className="font-gotham text-[11px] font-semibold text-white/90">{c.name}</span>
            </div>
            <span className="text-[9px] font-gotham font-bold px-2 py-0.5 rounded-full liquid-glass-grey-light text-white/80">{c.status}</span>
          </div>
        ))}
      </div>

      <div className="liquid-glass-grey-light rounded-xl p-3">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="w-3.5 h-3.5 text-[#00E5FF]/60" />
          <span className="text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/70">Revenue</span>
        </div>
        <div className="flex gap-4">
          <div>
            <span className="stat-font text-sm font-bold text-white/90">RWF 4.2M</span>
            <p className="text-[8px] text-white/70 font-gotham">Recruitment Fees</p>
          </div>
          <div>
            <span className="stat-font text-sm font-bold text-white/90">12 Holdings</span>
            <p className="text-[8px] text-white/70 font-gotham">Equity Portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── SCREEN MAP ─── */
const screenMap: Record<Screen, () => React.JSX.Element> = {
  metrics: MetricsScreen,
  "youth-dashboard": YouthDashboardScreen,
  credential: CredentialScreen,
  recruiter: RecruiterScreen,
  competition: CompetitionScreen,
  admin: AdminScreen,
};

/* ─── MAIN COMPONENT ─── */
export function DashboardDemo() {
  const [active, setActive] = useState<Screen>("metrics");
  const ActiveScreen = screenMap[active];

  return (
    <section
      id="solution"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#FAFAFA] to-white overflow-hidden"
    >
      <div className="absolute top-20 left-[-100px] w-[500px] h-[500px] rounded-full bg-[#2A7D6E]/6 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-80px] w-[400px] h-[400px] rounded-full bg-[#1A3A5C]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#2A7D6E]/3 blur-[200px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="text-left mb-10 max-w-[560px]"
        >
          <span className="accent-font inline-block text-[11px] font-bold uppercase tracking-[5px] text-slate-500 mb-4">
            Platform Demo
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-black mb-3">
            The ThinkSphere Platform
          </h2>
          <p className="font-gotham text-slate-800 text-base leading-relaxed">
            A web-based tourism employment accelerator — connecting trained youth with recruiters through verified credentials, competitions, and direct placement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="liquid-glass-grey rounded-3xl p-3 md:p-5">
            <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-start">
              <div className="flex lg:flex-col gap-1.5 w-full lg:w-[170px] overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 shrink-0">
                {screens.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = active === s.id;
                  return (
                    <motion.button
                      key={s.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                      onClick={() => setActive(s.id)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-left whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                        isActive
                          ? "liquid-glass-grey-light text-white shadow-sm shadow-[#00E5FF]/10"
                          : "text-white/50 hover:text-white/80 hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#00E5FF]" : "text-white/40"}`} strokeWidth={1.5} />
                      <span className="font-gotham text-xs font-semibold">{s.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex-1 w-full">
                <div className="liquid-glass-grey-light rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                    </div>
                    <div className="flex-1 liquid-glass-grey-light rounded-md px-3 py-1 ml-2">
                      <span className="text-[10px] font-gotham text-white/50">thinksphere.rw/{active}</span>
                    </div>
                  </div>

                  <div className="min-h-[420px] relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.35, ease }}
                      >
                        <ActiveScreen />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-gotham text-[11px] text-white/50 mt-4 flex items-center gap-1.5 px-2">
              <TrendingUp className="w-3 h-3" />
              Interactive prototype — click tabs to explore each platform screen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
