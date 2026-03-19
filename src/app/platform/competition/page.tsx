"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  AlertCircle,
  Target,
  Banknote,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const teams = [
  { name: "Kigali Explorers", members: 4, status: "submitted", idea: "Urban eco-tour experiences" },
  { name: "Green Rwanda Tours", members: 3, status: "in-progress", idea: "Sustainable safari packages" },
  { name: "Heritage Voices", members: 5, status: "in-progress", idea: "Cultural storytelling walks" },
  { name: "Lake Kivu Adventures", members: 4, status: "not-started", idea: "Water sports & lake tours" },
  { name: "Kicukiro Crafts", members: 3, status: "submitted", idea: "Artisan marketplace tours" },
  { name: "Rwanda Roasters", members: 4, status: "in-progress", idea: "Coffee plantation experiences" },
];

const winners = [
  { place: "1st", team: "KicuTrails", idea: "Guided eco-tours for urban tourists", funding: "RWF 2.5M" },
  { place: "2nd", team: "RwandaBites", idea: "Local food tour & cooking classes", funding: "RWF 1.5M" },
  { place: "3rd", team: "CraftKigali", idea: "Artisan marketplace & workshops", funding: "RWF 1M" },
];

const timeline = [
  { label: "Applications Open", date: "Jan 15, 2026", done: true },
  { label: "Bootcamp Training", date: "Feb 1–28, 2026", done: true },
  { label: "Team Formation", date: "Mar 1, 2026", done: true },
  { label: "Pitch Submissions", date: "Mar 30, 2026", active: true },
  { label: "Finals & Judging", date: "Apr 5, 2026", done: false },
  { label: "Winners Announced", date: "Apr 10, 2026", done: false },
];

function statusIcon(status: string) {
  switch (status) {
    case "submitted":
      return <CheckCircle2 className="w-4 h-4 text-[#00E5FF]/70" />;
    case "in-progress":
      return <Clock className="w-4 h-4 text-yellow-400/70" />;
    default:
      return <AlertCircle className="w-4 h-4 text-white/20" />;
  }
}

function statusLabel(status: string) {
  switch (status) {
    case "submitted":
      return "Submitted";
    case "in-progress":
      return "In Progress";
    default:
      return "Not Started";
  }
}

export default function CompetitionPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* Header */}
      <div className="mb-8">
        <p className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-2">
          Pitch Day
        </p>
        <h1 className="font-serif text-3xl font-bold text-white">
          ThinkSphere &times; BDF Competition
        </h1>
        <p className="font-gotham text-sm text-white/50 mt-2">
          Cycle 3 — Kicukiro District &middot; March 2026
        </p>
      </div>

      {/* Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="liquid-glass-grey-light rounded-2xl p-5 mb-6 flex items-center gap-3"
      >
        <div className="w-3 h-3 rounded-full bg-[#00E5FF] animate-pulse" />
        <span className="font-gotham text-base font-semibold text-white">
          Pitching in Progress — Round 2 of 3
        </span>
        <span className="ml-auto text-xs font-gotham text-white/40">
          Prize Pool: RWF 5,000,000
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Competition Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="lg:col-span-2 liquid-glass-grey-light rounded-2xl p-6"
        >
          <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
            About the Competition
          </h2>
          <p className="font-gotham text-sm text-white/70 leading-relaxed mb-4">
            Teams of 3–5 ThinkSphere participants design and pitch a sustainable
            tourism business for Kicukiro District. Winners receive seed funding
            from BDF (Business Development Fund) to launch their ventures, plus
            mentorship from industry leaders and access to ThinkSphere&apos;s
            recruiter network.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 rounded-xl bg-white/[0.02]">
              <Users className="w-5 h-5 text-[#00E5FF]/50 mx-auto mb-1" />
              <span className="stat-font text-lg font-bold text-white block">6</span>
              <span className="text-[10px] font-gotham text-white/40">Teams</span>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/[0.02]">
              <Target className="w-5 h-5 text-[#00E5FF]/50 mx-auto mb-1" />
              <span className="stat-font text-lg font-bold text-white block">23</span>
              <span className="text-[10px] font-gotham text-white/40">Participants</span>
            </div>
            <div className="text-center p-3 rounded-xl bg-white/[0.02]">
              <Banknote className="w-5 h-5 text-[#00E5FF]/50 mx-auto mb-1" />
              <span className="stat-font text-lg font-bold text-white block">5M</span>
              <span className="text-[10px] font-gotham text-white/40">RWF Prize</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.25 }}
          className="liquid-glass-grey-light rounded-2xl p-6"
        >
          <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
            Timeline
          </h2>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full mt-0.5 ${
                      t.done
                        ? "bg-[#00E5FF]"
                        : t.active
                          ? "bg-[#00E5FF]/60 ring-4 ring-[#00E5FF]/15"
                          : "bg-white/10"
                    }`}
                  />
                  {i < timeline.length - 1 && (
                    <div
                      className={`w-[2px] h-6 mt-1 ${
                        t.done ? "bg-[#00E5FF]/30" : "bg-white/5"
                      }`}
                    />
                  )}
                </div>
                <div>
                  <p
                    className={`font-gotham text-xs font-semibold ${
                      t.done || t.active ? "text-white/80" : "text-white/30"
                    }`}
                  >
                    {t.label}
                  </p>
                  <span className="text-[10px] font-gotham text-white/35">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Participating Teams */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.3 }}
        className="liquid-glass-grey-light rounded-2xl p-6 mb-6"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
          Participating Teams
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3 pr-4">
                  Team
                </th>
                <th className="text-left text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3 pr-4">
                  Idea
                </th>
                <th className="text-center text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3 pr-4">
                  Members
                </th>
                <th className="text-right text-[10px] accent-font font-bold uppercase tracking-[2px] text-white/40 pb-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team) => (
                <tr
                  key={team.name}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3 pr-4">
                    <span className="font-gotham text-sm font-semibold text-white/85">
                      {team.name}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="font-gotham text-xs text-white/50">{team.idea}</span>
                  </td>
                  <td className="py-3 pr-4 text-center">
                    <span className="stat-font text-sm text-white/60">{team.members}</span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center justify-end gap-2">
                      {statusIcon(team.status)}
                      <span className="font-gotham text-xs text-white/50">
                        {statusLabel(team.status)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Previous Winners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.4 }}
        className="liquid-glass-grey-light rounded-2xl p-6 mb-4"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
          Previous Winners — Cohort 2
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {winners.map((w) => (
            <div
              key={w.place}
              className={`p-5 rounded-xl transition-all ${
                w.place === "1st"
                  ? "bg-[#00E5FF]/5 border border-[#00E5FF]/15"
                  : "bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    w.place === "1st"
                      ? "bg-[#00E5FF] text-black"
                      : "liquid-glass-grey-light text-white/50"
                  }`}
                >
                  <Trophy className="w-4 h-4" />
                </div>
                <span className="text-[10px] accent-font font-bold uppercase tracking-wider text-[#00E5FF]/60">
                  {w.place} Place
                </span>
              </div>
              <p className="font-gotham text-sm font-bold text-white/90 mb-1">
                {w.team}
              </p>
              <p className="text-xs text-white/50 mb-3">{w.idea}</p>
              <span className="stat-font text-lg font-bold text-white/80">
                {w.funding}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <p className="font-gotham text-xs text-white/40 italic">
        * ThinkSphere retains 10% equity in funded ventures for long-term
        sustainability and reinvestment into future cohorts.
      </p>
    </motion.div>
  );
}
