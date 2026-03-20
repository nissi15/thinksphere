"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Wallet,
  Users,
  Calendar,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { StatCard } from "@/components/platform/stat-card";
import { TrendChart } from "@/components/platform/trend-chart";

const ease = [0.16, 1, 0.3, 1] as const;

const kpis = [
  { label: "Youth Trained", value: "1,247", icon: GraduationCap, trend: "+18%" },
  { label: "Placement Rate", value: "85.3%", icon: Target, trend: "+12%" },
  { label: "Revenue", value: "$4.2M", icon: Wallet, trend: "+34%" },
  { label: "Active Trainers", value: "62", icon: Users, trend: "+9" },
];

const rates = [
  { label: "Hospitality", pct: 85 },
  { label: "Tour Guide", pct: 87 },
  { label: "Business Planning", pct: 72 },
  { label: "Recruiter Match", pct: 89 },
];

const recentActivity = [
  { text: "Marie Uwase completed Digital Marketing module", time: "2h ago", icon: GraduationCap },
  { text: "Radisson Blu posted 3 new internship positions", time: "4h ago", icon: MapPin },
  { text: "Cohort 4 bootcamp session completed", time: "6h ago", icon: Calendar },
  { text: "Jean Mugabo matched with Serena Hotel", time: "1d ago", icon: Target },
];

const upcomingEvents = [
  { title: "Cohort 4 — Hospitality Skills", date: "Mar 22, 2026", time: "10:00 AM" },
  { title: "Digital Marketing Workshop", date: "Mar 25, 2026", time: "2:00 PM" },
  { title: "Pitch Competition Finals", date: "Apr 5, 2026", time: "9:00 AM" },
  { title: "Recruiter Meet & Greet", date: "Apr 12, 2026", time: "3:00 PM" },
];

export default function MetricsPage() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-slate-400">
              Platform Overview
            </p>
            <h1 className="font-serif text-3xl font-bold text-slate-800 mt-1">
              Success Metrics
            </h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl glass-light-card">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-gotham font-bold text-slate-600">Live</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: i * 0.08 }}
            >
              <StatCard {...kpi} />
            </motion.div>
          ))}
        </div>

        {/* Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          className="mb-6"
        >
          <TrendChart />
        </motion.div>

        {/* Success Rates + Activity + Events */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Success Rates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.4 }}
            className="glass-light-card rounded-2xl p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-slate-400">
                Success Rates
              </span>
              <span className="text-[10px] font-gotham text-slate-400">Q1 2026</span>
            </div>
            <div className="space-y-4">
              {rates.map((r) => (
                <div key={r.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-gotham text-sm font-semibold text-slate-600">
                      {r.label}
                    </span>
                    <span className="stat-font text-xs text-slate-400">{r.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#0891b2]/50"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.5 }}
            className="glass-light-card rounded-2xl p-5"
          >
            <span className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-slate-400 block mb-4">
              Recent Activity
            </span>
            <div className="space-y-3">
              {recentActivity.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-[#0891b2]/50 mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div className="flex-1 min-w-0">
                      <p className="font-gotham text-xs text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                      <span className="text-[10px] font-gotham text-slate-400">
                        {item.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.6 }}
            className="glass-light-card rounded-2xl p-5"
          >
            <span className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-slate-400 block mb-4">
              Upcoming Events
            </span>
            <div className="space-y-3">
              {upcomingEvents.map((ev, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/60 hover:bg-slate-100/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg glass-light-card flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-[#0891b2]/50" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-gotham text-xs font-semibold text-slate-600 truncate">
                      {ev.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-gotham text-slate-400">{ev.date}</span>
                      <Clock className="w-2.5 h-2.5 text-slate-300" />
                      <span className="text-[10px] font-gotham text-slate-400">{ev.time}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
