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
        <p className="font-gotham text-sm text-slate-400">Admin Overview</p>
        <h1 className="font-serif text-3xl font-bold text-slate-800 mt-1">
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
          className="glass-light-card rounded-2xl p-6"
        >
          <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-slate-400 mb-4">
            Bootcamp Cohorts
          </h2>
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-slate-400 pb-3">
                  Cohort
                </th>
                <th className="text-center text-[10px] accent-font font-bold uppercase tracking-[2px] text-slate-400 pb-3">
                  Enrolled
                </th>
                <th className="text-center text-[10px] accent-font font-bold uppercase tracking-[2px] text-slate-400 pb-3">
                  Completion
                </th>
                <th className="text-right text-[10px] accent-font font-bold uppercase tracking-[2px] text-slate-400 pb-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {cohortData.map((c) => (
                <tr
                  key={c.cohort}
                  className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors"
                >
                  <td className="py-3">
                    <span className="font-gotham text-sm font-semibold text-slate-700">
                      {c.cohort}
                    </span>
                  </td>
                  <td className="py-3 text-center">
                    <span className="stat-font text-sm text-slate-500">{c.enrolled}</span>
                  </td>
                  <td className="py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#0891b2]/50"
                          style={{ width: `${c.completion}%` }}
                        />
                      </div>
                      <span className="stat-font text-xs text-slate-400">{c.completion}%</span>
                    </div>
                  </td>
                  <td className="py-3 text-right">
                    <span
                      className={`text-[10px] font-gotham font-bold px-2.5 py-1 rounded-full ${
                        c.status === "Active"
                          ? "bg-[#0891b2]/10 text-[#0891b2]"
                          : c.status === "Graduated"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
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
          className="glass-light-card rounded-2xl p-6"
        >
          <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-slate-400 mb-4">
            Internship Placements
          </h2>
          <div className="space-y-3">
            {placements.map((p) => (
              <div key={p.company}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span className="font-gotham text-xs font-semibold text-slate-600">
                      {p.company}
                    </span>
                  </div>
                  <span className="stat-font text-xs text-slate-400">{p.count}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0891b2]/30 to-[#0891b2]/60"
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
        className="glass-light-card rounded-2xl p-6 mb-6"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-slate-400 mb-4">
          Internship Placement Tracker
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-slate-400 pb-3">
                  Participant
                </th>
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-slate-400 pb-3">
                  Company
                </th>
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-slate-400 pb-3">
                  Role
                </th>
                <th className="text-right text-[10px] accent-font font-bold uppercase tracking-[2px] text-slate-400 pb-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {placementTracker.map((p) => (
                <tr
                  key={p.name}
                  className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors"
                >
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <span className="font-gotham text-sm font-semibold text-slate-700">
                        {p.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-3">
                    <span className="font-gotham text-xs text-slate-500">{p.company}</span>
                  </td>
                  <td className="py-3">
                    <span className="font-gotham text-xs text-slate-500">{p.role}</span>
                  </td>
                  <td className="py-3 text-right">
                    <span
                      className={`text-[10px] font-gotham font-bold px-2.5 py-1 rounded-full ${
                        p.status === "Active"
                          ? "bg-[#0891b2]/10 text-[#0891b2]"
                          : p.status === "Completed"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
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
        className="glass-light-card rounded-2xl p-6"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-slate-400 mb-4">
          Revenue Breakdown
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {revenue.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.label}
                className="p-4 rounded-xl bg-slate-50/60 hover:bg-slate-100/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-5 h-5 text-[#0891b2]/50" strokeWidth={1.5} />
                  <div className="flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3 text-[#0891b2]" />
                    <span className="text-xs font-gotham font-bold text-[#0891b2]">
                      {r.trend}
                    </span>
                  </div>
                </div>
                <span className="stat-font text-xl font-bold text-slate-700 block">
                  {r.value}
                </span>
                <p className="text-[10px] accent-font font-bold uppercase tracking-wider text-slate-400 mt-1">
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
