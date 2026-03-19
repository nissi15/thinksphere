"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Star,
  Building2,
  User,
  DollarSign,
  TrendingUp,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { StatCard } from "@/components/platform/stat-card";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { label: "Youth Trained", value: "1,247", icon: GraduationCap, trend: "+18%" },
  { label: "Placed in Jobs", value: "892", icon: Briefcase, trend: "+24%" },
  { label: "Businesses Funded", value: "36", icon: Star, trend: "+8" },
  { label: "Active Recruiters", value: "48", icon: Building2, trend: "+5" },
];

const cohortData = [
  { cohort: "Cohort 4", enrolled: 45, completion: 62, status: "Active" },
  { cohort: "Cohort 3", enrolled: 52, completion: 100, status: "Graduated" },
  { cohort: "Cohort 2", enrolled: 48, completion: 100, status: "Alumni" },
  { cohort: "Cohort 1", enrolled: 38, completion: 100, status: "Alumni" },
];

const placements = [
  { company: "Marriott Kigali", count: 8, pct: 42 },
  { company: "Serena Hotel", count: 6, pct: 32 },
  { company: "Radisson Blu", count: 5, pct: 26 },
  { company: "Local SMEs", count: 19, pct: 100 },
  { company: "Kigali Convention", count: 4, pct: 21 },
  { company: "RwandAir Tourism", count: 3, pct: 16 },
];

const placementTracker = [
  { name: "Marie Uwase", company: "Radisson Blu", role: "Guest Services", status: "Active" },
  { name: "Jean Mugabo", company: "Marriott Kigali", role: "Front Desk", status: "Active" },
  { name: "Aline Ndayisaba", company: "Serena Hotel", role: "Events Coord.", status: "Active" },
  { name: "Eric Habimana", company: "Local SME — KigaliTours", role: "Tour Guide", status: "Active" },
  { name: "Grace Muhire", company: "Kigali Convention Centre", role: "Hospitality", status: "Completing" },
  { name: "Patrick Nshuti", company: "RwandAir Tourism", role: "Marketing", status: "Completed" },
];

const revenue = [
  { label: "Recruitment Fees", value: "RWF 4.2M", trend: "+22%", icon: DollarSign },
  { label: "Equity Returns", value: "12 Holdings", trend: "+3", icon: TrendingUp },
  { label: "Partner Sponsors", value: "RWF 1.8M", trend: "+15%", icon: Building2 },
];

export default function AdminPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* Header */}
      <div className="mb-8">
        <p className="font-gotham text-sm text-white/60">Admin Overview</p>
        <h1 className="font-serif text-3xl font-bold text-white mt-1">
          ThinkSphere HQ
        </h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: i * 0.08 }}
          >
            <StatCard {...s} />
          </motion.div>
        ))}
      </div>

      {/* Cohorts + Placements Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Bootcamp Cohorts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          className="liquid-glass-grey-light rounded-2xl p-6"
        >
          <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
            Bootcamp Cohorts
          </h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Cohort
                </th>
                <th className="text-center text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Enrolled
                </th>
                <th className="text-center text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Completion
                </th>
                <th className="text-right text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {cohortData.map((c) => (
                <tr
                  key={c.cohort}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3">
                    <span className="font-gotham text-sm font-semibold text-white/85">
                      {c.cohort}
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <span className="stat-font text-sm text-white/60">{c.enrolled}</span>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#00E5FF]/50"
                          style={{ width: `${c.completion}%` }}
                        />
                      </div>
                      <span className="stat-font text-xs text-white/50">{c.completion}%</span>
                    </div>
                  </td>
                  <td className="py-3 text-right">
                    <span
                      className={`text-[10px] font-gotham font-bold px-2.5 py-1 rounded-full ${
                        c.status === "Active"
                          ? "bg-[#00E5FF]/10 text-[#00E5FF]/80"
                          : c.status === "Graduated"
                            ? "bg-green-400/10 text-green-400/80"
                            : "bg-white/5 text-white/40"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Internship Placement Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.35 }}
          className="liquid-glass-grey-light rounded-2xl p-6"
        >
          <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
            Internship Placements
          </h2>
          <div className="space-y-3">
            {placements.map((p) => (
              <div key={p.company}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-white/30" />
                    <span className="font-gotham text-xs font-semibold text-white/70">
                      {p.company}
                    </span>
                  </div>
                  <span className="stat-font text-xs text-white/50">{p.count}</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00E5FF]/30 to-[#00E5FF]/60"
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Placement Tracker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.4 }}
        className="liquid-glass-grey-light rounded-2xl p-6 mb-6"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
          Internship Placement Tracker
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Participant
                </th>
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Company
                </th>
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Role
                </th>
                <th className="text-right text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {placementTracker.map((p) => (
                <tr
                  key={p.name}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full liquid-glass-grey-light flex items-center justify-center">
                        <User className="w-3.5 h-3.5 text-white/50" />
                      </div>
                      <span className="font-gotham text-sm font-semibold text-white/85">
                        {p.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3">
                    <span className="font-gotham text-xs text-white/60">{p.company}</span>
                  </td>
                  <td className="py-3">
                    <span className="font-gotham text-xs text-white/60">{p.role}</span>
                  </td>
                  <td className="py-3 text-right">
                    <span
                      className={`text-[10px] font-gotham font-bold px-2.5 py-1 rounded-full ${
                        p.status === "Active"
                          ? "bg-[#00E5FF]/10 text-[#00E5FF]/80"
                          : p.status === "Completed"
                            ? "bg-green-400/10 text-green-400/80"
                            : "bg-yellow-400/10 text-yellow-400/80"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Revenue */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.45 }}
        className="liquid-glass-grey-light rounded-2xl p-6"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
          Revenue Breakdown
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {revenue.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.label}
                className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-5 h-5 text-[#00E5FF]/50" strokeWidth={1.5} />
                  <div className="flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-[#00E5FF]" />
                    <span className="text-xs font-gotham font-bold text-[#00E5FF]">
                      {r.trend}
                    </span>
                  </div>
                </div>
                <span className="stat-font text-xl font-bold text-white/90 block">
                  {r.value}
                </span>
                <p className="text-[10px] accent-font font-bold uppercase tracking-wider text-white/50 mt-1">
                  {r.label}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
