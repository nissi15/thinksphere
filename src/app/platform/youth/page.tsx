"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  User,
  Clock,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { ProgressTracker } from "@/components/platform/progress-tracker";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  { label: "Applied", done: true },
  { label: "Bootcamp", done: true },
  { label: "Competition", active: true },
  { label: "Internship", done: false },
  { label: "Alumni", done: false },
];

const skills = [
  { name: "Hospitality Management", level: 92, earned: true },
  { name: "Customer Service", level: 78, earned: true },
  { name: "Digital Marketing", level: 65, earned: true },
  { name: "Business Planning", level: 54, earned: false },
  { name: "Tour Guiding", level: 88, earned: true },
  { name: "French Language (B2)", level: 70, earned: true },
];

const sessions = [
  { title: "Hospitality Skills Masterclass", date: "Mar 22, 2026", time: "10:00 AM", status: "upcoming", location: "Kicukiro Hub" },
  { title: "Digital Marketing Workshop", date: "Mar 25, 2026", time: "2:00 PM", status: "upcoming", location: "Online" },
  { title: "Pitch Practice Session", date: "Mar 28, 2026", time: "9:00 AM", status: "upcoming", location: "BDF Centre" },
  { title: "Customer Service Training", date: "Mar 20, 2026", time: "10:00 AM", status: "completed", location: "Kicukiro Hub" },
  { title: "Business Model Canvas", date: "Mar 18, 2026", time: "2:00 PM", status: "completed", location: "Online" },
];

export default function YouthDashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl liquid-glass-grey-light flex items-center justify-center">
            <User className="w-7 h-7 text-white/60" />
          </div>
          <div>
            <p className="font-gotham text-sm text-white/60">Welcome back,</p>
            <h1 className="font-serif text-2xl font-bold text-white">Marie Uwase</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl liquid-glass-grey-light">
          <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
          <span className="text-xs font-gotham font-semibold text-white/80">
            Active Participant
          </span>
        </div>
      </div>

      {/* Progress Tracker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="mb-6"
      >
        <ProgressTracker steps={steps} />
      </motion.div>

      {/* Current Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
        className="liquid-glass-grey-light rounded-2xl p-5 mb-6 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center shrink-0">
          <Clock className="w-6 h-6 text-[#00E5FF]/70" />
        </div>
        <div className="flex-1">
          <p className="font-gotham text-base font-bold text-white">
            Competition Phase — Pitching in Progress
          </p>
          <p className="text-sm text-white/60 mt-1">
            Team: Kigali Explorers (4 members) &middot; Round 2 of 3
          </p>
        </div>
        <div className="text-right shrink-0 hidden sm:block">
          <p className="text-xs font-gotham text-white/50">Next session</p>
          <p className="text-sm font-gotham font-semibold text-white/80">March 22, 2026</p>
        </div>
      </motion.div>

      {/* Skills + Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* My Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
        >
          <p className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
            My Skills
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((s) => (
              <div key={s.name} className="liquid-glass-grey-light rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-gotham text-sm font-bold text-white/90">
                    {s.name}
                  </span>
                  {s.earned ? (
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF]/70" />
                  ) : (
                    <BookOpen className="w-4 h-4 text-white/30" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#00E5FF]/50"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  <span className="stat-font text-xs text-white/50">{s.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.4 }}
        >
          <p className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
            Bootcamp Schedule
          </p>
          <div className="space-y-2">
            {sessions.map((s, i) => (
              <div
                key={i}
                className={`liquid-glass-grey-light rounded-xl p-4 flex items-center gap-4 ${
                  s.status === "completed" ? "opacity-50" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    s.status === "completed"
                      ? "bg-white/5"
                      : "bg-[#00E5FF]/10"
                  }`}
                >
                  {s.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5 text-white/30" />
                  ) : (
                    <Calendar className="w-5 h-5 text-[#00E5FF]/60" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-gotham text-sm font-semibold text-white/80 truncate">
                    {s.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-gotham text-white/40">
                      {s.date} &middot; {s.time}
                    </span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-white/30" />
                      <span className="text-[10px] font-gotham text-white/40">
                        {s.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.5 }}
      >
        <Link
          href="/platform/credential"
          className="inline-flex items-center gap-2 font-gotham text-sm font-semibold px-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition-colors"
        >
          <Award className="w-4 h-4" /> View My ThinkSphere Credential
        </Link>
      </motion.div>
    </motion.div>
  );
}
