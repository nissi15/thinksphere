"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Heart,
  Mic,
  Lightbulb,
  Globe,
} from "lucide-react";

const challenges = [
  {
    num: "01",
    title: "Problem Statement",
    subtitle: "Defining the Challenge",
    description:
      "Identified systemic barriers preventing youth and women in Kicukiro from benefiting from Rwanda's growing tourism sector using the SMART framework.",
    icon: FileText,
  },
  {
    num: "02",
    title: "Root Cause & PESTLE",
    subtitle: "Digging Deeper",
    description:
      "Traced unemployment to root causes: skills gaps, network-dependent hiring, lack of capital, and measurement blind spots across six environmental dimensions.",
    icon: Search,
  },
  {
    num: "03",
    title: "Empathy & Stakeholders",
    subtitle: "Understanding People",
    description:
      "Built empathy maps for youth job seekers and mapped all stakeholders on an influence-interest matrix to understand the human experience.",
    icon: Heart,
  },
  {
    num: "04",
    title: "Interviews & Data",
    subtitle: "Hearing Real Voices",
    description:
      "Conducted interviews with youth, women, tourism businesses, and government. Findings confirmed: willing workers lack skills, networks, and capital.",
    icon: Mic,
  },
  {
    num: "05",
    title: "Solution & Lean Canvas",
    subtitle: "Building the Answer",
    description:
      "Developed the three-step model — Recruit & Train, Compete & Place, The Credential — and mapped it onto a complete Lean Canvas.",
    icon: Lightbulb,
  },
  {
    num: "06",
    title: "Digital Print",
    subtitle: "Our Digital Presence",
    description:
      "This website itself — showcasing everything ThinkSphere has built, learned, and designed through creative web design and animation.",
    icon: Globe,
  },
];

export function ChallengesSection() {
  return (
    <section id="challenges" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-[#FAFAFA] to-white overflow-hidden">
      {/* Decorative blobs for glass depth */}
      <div className="absolute top-40 left-0 w-[300px] h-[300px] rounded-full bg-[#D4A843]/4 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[250px] h-[250px] rounded-full bg-[#1A3A5C]/4 blur-[80px] pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="accent-font inline-block text-[11px] font-bold uppercase tracking-[5px] text-black/25 mb-4">
            E-Lab Journey
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight text-black mb-3">
            Six Challenges
          </h2>
          <p className="font-gotham text-black/40 text-sm max-w-[480px] mx-auto leading-relaxed">
            Each challenge pushed our limits and shaped our approach to solving youth unemployment through tourism.
          </p>
        </motion.div>

        {/* Challenge cards — liquid glass with left-to-right stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((ch, i) => {
            const Icon = ch.icon;
            const row = Math.floor(i / 3);
            const col = i % 3;
            const delay = row * 0.2 + col * 0.12;

            return (
              <motion.div
                key={ch.num}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay,
                }}
              >
                <div className="liquid-glass liquid-glass-hover rounded-2xl p-6 h-full group cursor-default">
                  {/* Top row: number + icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="stat-font text-[11px] font-bold text-black/15 tracking-wider">
                      {ch.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl liquid-glass-subtle flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-black/25 group-hover:text-black/40 transition-colors" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-gotham text-[15px] font-bold text-black mb-1 tracking-tight">
                    {ch.title}
                  </h3>
                  <p className="text-[11px] text-black/25 accent-font font-bold uppercase tracking-[2px] mb-3">
                    {ch.subtitle}
                  </p>

                  {/* Description */}
                  <p className="font-gotham text-[13px] text-black/40 leading-relaxed">
                    {ch.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
