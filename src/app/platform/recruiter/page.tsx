"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  User,
  Search,
  Filter,
  Plus,
  BadgeCheck,
  ChevronRight,
  MapPin,
  Star,
  Briefcase,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const alumni = [
  { name: "Marie Uwase", skills: ["Hospitality", "Marketing", "Service"], winner: true, cohort: 3, available: true },
  { name: "Jean Mugabo", skills: ["Business Plan", "Tour Guide", "Service"], winner: false, cohort: 3, available: true },
  { name: "Aline Ndayisaba", skills: ["Marketing", "Hospitality", "Events"], winner: true, cohort: 3, available: false },
  { name: "Eric Habimana", skills: ["Tour Guide", "Service", "Planning"], winner: false, cohort: 2, available: true },
  { name: "Grace Muhire", skills: ["French", "Hospitality", "Marketing"], winner: false, cohort: 2, available: true },
  { name: "Patrick Nshuti", skills: ["Business Plan", "Events", "Service"], winner: true, cohort: 2, available: false },
  { name: "Diane Ingabire", skills: ["Tour Guide", "French", "Hospitality"], winner: false, cohort: 3, available: true },
  { name: "Samuel Bizimana", skills: ["Marketing", "Planning", "Events"], winner: false, cohort: 2, available: true },
  { name: "Claudine Uwera", skills: ["Hospitality", "Service", "French"], winner: true, cohort: 3, available: true },
];

export default function RecruiterPage() {
  const [search, setSearch] = useState("");

  const filtered = alumni.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-gotham text-sm text-white/60">Recruiter Dashboard</p>
          <h1 className="font-serif text-2xl font-bold text-white mt-1">
            Radisson Blu Kigali
          </h1>
        </div>
        <button className="inline-flex items-center gap-2 font-gotham text-sm font-bold px-5 py-2.5 rounded-xl bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 transition-colors">
          <Plus className="w-4 h-4" /> Post a Job
        </button>
      </div>

      {/* Search & Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-3 mb-6"
      >
        <div className="flex-1 flex items-center gap-3 liquid-glass-grey-light rounded-xl px-4 py-3">
          <Search className="w-5 h-5 text-white/40 shrink-0" />
          <input
            type="text"
            placeholder="Search alumni by skill, name, or availability..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm font-gotham text-white/80 placeholder:text-white/30 outline-none w-full"
          />
        </div>
        <div className="flex gap-2">
          <select className="liquid-glass-grey-light rounded-xl px-4 py-3 text-sm font-gotham text-white/70 bg-transparent outline-none appearance-none cursor-pointer">
            <option>All Skills</option>
            <option>Hospitality</option>
            <option>Marketing</option>
            <option>Tour Guide</option>
          </select>
          <select className="liquid-glass-grey-light rounded-xl px-4 py-3 text-sm font-gotham text-white/70 bg-transparent outline-none appearance-none cursor-pointer">
            <option>All Cohorts</option>
            <option>Cohort 3</option>
            <option>Cohort 2</option>
          </select>
          <button className="liquid-glass-grey-light rounded-xl px-4 py-3 flex items-center gap-2 text-sm font-gotham text-white/70 hover:bg-white/10 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </motion.div>

      {/* Results count */}
      <p className="text-xs font-gotham text-white/40 mb-4">
        {filtered.length} alumni found
      </p>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.15 + i * 0.05 }}
            className="liquid-glass-grey-light rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl liquid-glass-grey-light flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <User className="w-6 h-6 text-white/50" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-gotham text-sm font-bold text-white/90 truncate">
                    {a.name}
                  </span>
                  <BadgeCheck className="w-4 h-4 text-[#00E5FF]/70 shrink-0" />
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  {a.winner && (
                    <span className="text-[9px] accent-font font-bold text-[#00E5FF]/70 uppercase tracking-wider flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5" /> Winner
                    </span>
                  )}
                  <span className="text-[10px] font-gotham text-white/40">
                    Cohort {a.cohort}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {a.skills.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-gotham font-semibold px-2.5 py-1 rounded-lg liquid-glass-grey-light text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-2 h-2 rounded-full ${a.available ? "bg-green-400" : "bg-white/20"}`}
                />
                <span className="text-[10px] font-gotham text-white/40">
                  {a.available ? "Available" : "Placed"}
                </span>
              </div>
              <Link
                href="/platform/credential"
                className="font-gotham text-xs font-bold text-[#00E5FF]/70 flex items-center gap-0.5 hover:text-[#00E5FF] transition-colors"
              >
                View Profile <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
