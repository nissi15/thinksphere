"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Play,
  CheckCircle2,
  Clock,
  Lock,
  Star,
  Users,
  Award,
  ArrowRight,
  BarChart3,
  Video,
  FileText,
  MessageSquare,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const modules = [
  {
    id: 1,
    title: "Introduction to Tourism & Hospitality",
    lessons: 8,
    duration: "4h 30m",
    progress: 100,
    status: "completed" as const,
    skills: ["Industry Overview", "Career Paths"],
  },
  {
    id: 2,
    title: "Customer Service Excellence",
    lessons: 10,
    duration: "5h 15m",
    progress: 100,
    status: "completed" as const,
    skills: ["Communication", "Conflict Resolution"],
  },
  {
    id: 3,
    title: "Tour Guiding & Narration",
    lessons: 12,
    duration: "6h 00m",
    progress: 100,
    status: "completed" as const,
    skills: ["Storytelling", "Group Management"],
  },
  {
    id: 4,
    title: "Digital Marketing for Tourism",
    lessons: 9,
    duration: "5h 00m",
    progress: 65,
    status: "in-progress" as const,
    skills: ["Social Media", "Content Creation", "SEO"],
  },
  {
    id: 5,
    title: "Business Planning & Entrepreneurship",
    lessons: 11,
    duration: "6h 30m",
    progress: 30,
    status: "in-progress" as const,
    skills: ["Business Model Canvas", "Financial Planning"],
  },
  {
    id: 6,
    title: "Hotel & Restaurant Operations",
    lessons: 10,
    duration: "5h 45m",
    progress: 0,
    status: "locked" as const,
    skills: ["Front Office", "F&B Management"],
  },
  {
    id: 7,
    title: "Sustainable & Eco-Tourism",
    lessons: 8,
    duration: "4h 00m",
    progress: 0,
    status: "locked" as const,
    skills: ["Eco-Practices", "Community Tourism"],
  },
  {
    id: 8,
    title: "Pitch & Presentation Skills",
    lessons: 6,
    duration: "3h 30m",
    progress: 0,
    status: "locked" as const,
    skills: ["Public Speaking", "Pitch Deck"],
  },
];

const currentLesson = {
  module: "Digital Marketing for Tourism",
  title: "Creating Engaging Social Media Content",
  lesson: 6,
  totalLessons: 9,
  type: "Video + Exercise",
  duration: "35 min",
};

const leaderboard = [
  { name: "Marie Uwase", xp: 2840, rank: 1 },
  { name: "Jean Mugabo", xp: 2650, rank: 2 },
  { name: "Aline Ndayisaba", xp: 2510, rank: 3 },
  { name: "Eric Habimana", xp: 2380, rank: 4 },
  { name: "Grace Muhire", xp: 2200, rank: 5 },
];

const resources = [
  { title: "Rwanda Tourism Handbook 2026", type: "PDF", icon: FileText },
  { title: "Hospitality Industry Standards", type: "PDF", icon: FileText },
  { title: "BDF Funding Application Guide", type: "PDF", icon: FileText },
  { title: "Customer Service Role-Play Videos", type: "Video", icon: Video },
  { title: "Marketing Templates & Canva Assets", type: "Link", icon: FileText },
];

function statusIcon(status: string) {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-5 h-5 text-[#00E5FF]" />;
    case "in-progress":
      return <Play className="w-5 h-5 text-[#00E5FF]/70" />;
    default:
      return <Lock className="w-5 h-5 text-white/20" />;
  }
}

export default function TrainingPage() {
  const completedModules = modules.filter((m) => m.status === "completed").length;
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons, 0);
  const completedLessons = modules.reduce(
    (acc, m) => acc + Math.round((m.progress / 100) * m.lessons),
    0
  );
  const overallProgress = Math.round((completedLessons / totalLessons) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60">
            Bootcamp Curriculum
          </p>
          <h1 className="font-serif text-3xl font-bold text-white mt-1">
            Training Center
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl liquid-glass-grey-light">
            <Star className="w-4 h-4 text-[#00E5FF]" />
            <span className="stat-font text-sm font-bold text-white/90">2,840 XP</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl liquid-glass-grey-light">
            <Award className="w-4 h-4 text-[#00E5FF]/60" />
            <span className="text-xs font-gotham font-semibold text-white/70">
              Rank #1 in Cohort
            </span>
          </div>
        </div>
      </div>

      {/* Overall Progress + Continue Learning */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="liquid-glass-grey-light rounded-2xl p-6"
        >
          <p className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-white/60 mb-4">
            Overall Progress
          </p>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-28 h-28">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#00E5FF"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${overallProgress * 2.64} ${264 - overallProgress * 2.64}`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="stat-font text-2xl font-bold text-white">
                  {overallProgress}%
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div>
              <span className="stat-font text-lg font-bold text-white block">
                {completedModules}/{modules.length}
              </span>
              <span className="text-[10px] font-gotham text-white/40">Modules</span>
            </div>
            <div>
              <span className="stat-font text-lg font-bold text-white block">
                {completedLessons}/{totalLessons}
              </span>
              <span className="text-[10px] font-gotham text-white/40">Lessons</span>
            </div>
          </div>
        </motion.div>

        {/* Continue Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.15 }}
          className="lg:col-span-2 liquid-glass-grey-light rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <p className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-white/60 mb-2">
              Continue Where You Left Off
            </p>
            <p className="text-xs font-gotham text-white/40 mb-4">
              {currentLesson.module}
            </p>
            <h3 className="font-gotham text-xl font-bold text-white mb-2">
              {currentLesson.title}
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-white/40" />
                <span className="text-xs font-gotham text-white/50">
                  {currentLesson.type}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-white/40" />
                <span className="text-xs font-gotham text-white/50">
                  {currentLesson.duration}
                </span>
              </div>
              <span className="text-xs font-gotham text-white/50">
                Lesson {currentLesson.lesson} of {currentLesson.totalLessons}
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden mb-2 max-w-md">
              <div
                className="h-full rounded-full bg-[#00E5FF]/50"
                style={{
                  width: `${(currentLesson.lesson / currentLesson.totalLessons) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="inline-flex items-center gap-2 font-gotham text-sm font-semibold px-6 py-3 rounded-xl bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 transition-colors">
              <Play className="w-4 h-4" /> Resume Lesson
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modules + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Module List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <p className="text-[11px] accent-font font-bold uppercase tracking-[3px] text-white/60 mb-4">
            Curriculum Modules
          </p>
          <div className="space-y-3">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease, delay: 0.25 + i * 0.04 }}
                className={`liquid-glass-grey-light rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 ${
                  mod.status === "locked"
                    ? "opacity-50"
                    : "hover:bg-white/[0.06] cursor-pointer"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    mod.status === "completed"
                      ? "bg-[#00E5FF]/10"
                      : mod.status === "in-progress"
                        ? "bg-[#00E5FF]/5"
                        : "bg-white/[0.02]"
                  }`}
                >
                  {statusIcon(mod.status)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-gotham text-sm font-bold text-white/90 truncate">
                      {mod.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-gotham text-white/40">
                      {mod.lessons} lessons
                    </span>
                    <span className="text-[10px] font-gotham text-white/40">
                      {mod.duration}
                    </span>
                  </div>
                  {mod.status !== "locked" && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden max-w-[200px]">
                        <div
                          className="h-full rounded-full bg-[#00E5FF]/50"
                          style={{ width: `${mod.progress}%` }}
                        />
                      </div>
                      <span className="stat-font text-[10px] text-white/40">
                        {mod.progress}%
                      </span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {mod.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[9px] font-gotham font-semibold px-2 py-0.5 rounded-md liquid-glass-grey-light text-white/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {mod.status !== "locked" && (
                  <ArrowRight className="w-4 h-4 text-white/20 shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar: Leaderboard + Resources */}
        <div className="space-y-6">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
            className="liquid-glass-grey-light rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-[#00E5FF]/60" />
              <span className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-white/60">
                Cohort Leaderboard
              </span>
            </div>
            <div className="space-y-2.5">
              {leaderboard.map((p) => (
                <div
                  key={p.name}
                  className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
                    p.rank === 1 ? "bg-[#00E5FF]/5" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <span
                    className={`stat-font text-sm font-bold w-6 text-center ${
                      p.rank === 1
                        ? "text-[#00E5FF]"
                        : p.rank <= 3
                          ? "text-white/60"
                          : "text-white/30"
                    }`}
                  >
                    {p.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="font-gotham text-xs font-semibold text-white/80 truncate block">
                      {p.name}
                    </span>
                  </div>
                  <span className="stat-font text-xs text-white/50">{p.xp} XP</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.35 }}
            className="liquid-glass-grey-light rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#00E5FF]/60" />
              <span className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-white/60">
                Resources
              </span>
            </div>
            <div className="space-y-2">
              {resources.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors cursor-pointer"
                  >
                    <Icon className="w-4 h-4 text-white/30 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <span className="font-gotham text-xs text-white/70 truncate block">
                        {r.title}
                      </span>
                    </div>
                    <span className="text-[9px] font-gotham font-bold text-white/30 uppercase">
                      {r.type}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Discussion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.4 }}
            className="liquid-glass-grey-light rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-4 h-4 text-[#00E5FF]/60" />
              <span className="text-[11px] accent-font font-bold uppercase tracking-[2px] text-white/60">
                Discussion
              </span>
            </div>
            <p className="font-gotham text-xs text-white/50 mb-3">
              Connect with fellow participants and trainers.
            </p>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white/30" />
              <span className="text-xs font-gotham text-white/40">
                45 active in Cohort 4
              </span>
            </div>
            <button className="mt-3 inline-flex items-center gap-1.5 font-gotham text-xs font-semibold text-[#00E5FF]/70 hover:text-[#00E5FF] transition-colors">
              Open Forum <ArrowRight className="w-3 h-3" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
