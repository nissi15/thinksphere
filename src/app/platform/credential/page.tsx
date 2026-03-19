"use client";

import { motion } from "framer-motion";
import {
  User,
  Award,
  BadgeCheck,
  CheckCircle2,
  Trophy,
  Briefcase,
  Share2,
  Download,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const skills = [
  "Hospitality Management",
  "Customer Service Excellence",
  "Digital Marketing",
  "Business Planning",
  "Tour Guiding & Narration",
  "French Language (B2 Certified)",
];

const experience = [
  {
    title: "Pitch Competition — 2nd Place",
    subtitle: '"Kicukiro Trails" — Guided eco-tours for urban tourists',
    icon: Trophy,
    date: "Feb 2026",
    highlight: true,
  },
  {
    title: "Internship — Radisson Blu Kigali",
    subtitle: "Guest Services Department",
    icon: Briefcase,
    date: "Jan 2026 — Mar 2026",
    highlight: false,
  },
  {
    title: "Volunteer Guide — Kicukiro Heritage Walk",
    subtitle: "Community tourism initiative",
    icon: MapPin,
    date: "Jun 2025 — Dec 2025",
    highlight: false,
  },
];

export default function CredentialPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
      className="max-w-[800px]"
    >
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.1 }}
        className="liquid-glass-grey-light rounded-2xl p-6 mb-6"
      >
        <div className="flex items-start gap-5">
          <div className="w-20 h-20 rounded-2xl liquid-glass-grey-light flex items-center justify-center shrink-0">
            <User className="w-10 h-10 text-white/50" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="font-serif text-2xl font-bold text-white">Marie Uwase</h1>
              <BadgeCheck className="w-6 h-6 text-[#00E5FF]" />
            </div>
            <p className="font-gotham text-sm text-white/60">
              Tourism & Hospitality &middot; Kicukiro, Rwanda
            </p>
            <div className="inline-flex items-center gap-2 mt-3 px-4 py-1.5 rounded-full bg-[#00E5FF] text-black">
              <Award className="w-4 h-4" />
              <span className="text-sm font-bold accent-font tracking-wider">
                THINKSPHERE VERIFIED — COHORT 3
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
        className="liquid-glass-grey-light rounded-2xl p-6 mb-6"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-3">
          About
        </h2>
        <p className="font-gotham text-sm text-white/70 leading-relaxed">
          Passionate about sustainable tourism and community-driven hospitality
          experiences. ThinkSphere Cohort 3 graduate with expertise in guest
          services, digital marketing, and eco-tourism planning. Currently
          interning at Radisson Blu Kigali while developing &quot;Kicukiro
          Trails&quot; — an eco-tour startup connecting visitors with local
          heritage sites and communities.
        </p>
      </motion.div>

      {/* Verified Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.3 }}
        className="liquid-glass-grey-light rounded-2xl p-6 mb-6"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
          Verified Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-[#00E5FF]/70 shrink-0" />
              <span className="font-gotham text-sm font-semibold text-white/85">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.4 }}
        className="liquid-glass-grey-light rounded-2xl p-6 mb-6"
      >
        <h2 className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
          Experience
        </h2>
        <div className="space-y-3">
          {experience.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className={`flex items-start gap-4 p-4 rounded-xl transition-colors ${
                  exp.highlight
                    ? "bg-[#00E5FF]/5 border border-[#00E5FF]/10"
                    : "bg-white/[0.02]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    exp.highlight
                      ? "bg-[#00E5FF]/10"
                      : "liquid-glass-grey-light"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      exp.highlight ? "text-[#00E5FF]/70" : "text-white/50"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-gotham text-sm font-bold text-white/90">
                    {exp.title}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">{exp.subtitle}</p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <Calendar className="w-3 h-3 text-white/30" />
                    <span className="text-[10px] font-gotham text-white/40">
                      {exp.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.5 }}
        className="flex flex-wrap gap-3"
      >
        <button className="inline-flex items-center gap-2 font-gotham text-sm font-semibold px-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition-colors">
          <Share2 className="w-4 h-4" /> Share Profile
        </button>
        <button className="inline-flex items-center gap-2 font-gotham text-sm font-semibold px-6 py-3 rounded-xl liquid-glass-grey-light text-white/80 hover:bg-white/10 transition-colors">
          <Download className="w-4 h-4" /> Download CV
        </button>
        <button className="inline-flex items-center gap-2 font-gotham text-sm font-semibold px-6 py-3 rounded-xl liquid-glass-grey-light text-white/80 hover:bg-white/10 transition-colors">
          <ExternalLink className="w-4 h-4" /> Public Link
        </button>
      </motion.div>
    </motion.div>
  );
}
