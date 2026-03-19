"use client";

import { motion } from "framer-motion";
import { Play, ChevronDown, MapPin, TrendingUp, Users, Briefcase } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Counter } from "@/components/ui/counter";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

function useTypewriter(text: string, speed = 40, delay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

const stats = [
  { target: 1.36, decimals: 2, suffix: "M", label: "Tourists in Rwanda", prefix: "", icon: MapPin },
  { target: 647, decimals: 0, suffix: "M", label: "Tourism Revenue", prefix: "$", icon: TrendingUp },
  { target: 386, decimals: 0, suffix: "K", label: "Jobs Supported", prefix: "", icon: Briefcase },
  { target: 20.5, decimals: 1, suffix: "%", label: "Youth Unemployment", prefix: "", icon: Users },
];


const heroVideos: CardStackItem[] = [
  { id: 1, title: "Community Children", description: "Youth of Kicukiro", imageSrc: "/images/group-photo.jpeg", tag: "Community" },
  { id: 2, title: "The School", description: "Kicukiro school building", imageSrc: "/images/school-building.jpeg", tag: "Education" },
  { id: 3, title: "At the Gallery", description: "Envision Gallery visit", imageSrc: "/images/team-group-rotated.jpeg", tag: "Tourism" },
  { id: 4, title: "Field Visit", description: "Team on the ground in Kicukiro", imageSrc: "/images/team-selfie.jpeg", tag: "Fieldwork" },
  { id: 5, title: "Paying Fees", description: "Tuition for 10+ students", videoSrc: "/videos/paying-fees.mp4", tag: "Impact" },
  { id: 6, title: "Community Voices", description: "Stories from Kicukiro", videoSrc: "/videos/3-people.mp4", tag: "Voices" },
  { id: 7, title: "The Beginning", description: "Where it all started", videoSrc: "/videos/at-the-start.mp4", tag: "Origins" },
  { id: 8, title: "Our Journey", description: "ThinkSphere origins", videoSrc: "/videos/the-beginning.mp4", tag: "Journey" },
];

export function HeroSection() {
  const { displayed, done } = useTypewriter("The Credential That Gets You Hired");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-white via-[#FAFAFA] to-[#F5F0E8]/30"
    >
      {/* Grid background with radial mask */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          mask: "radial-gradient(ellipse 70% 60% at 30% 50%, black 0%, transparent 100%)",
          WebkitMask: "radial-gradient(ellipse 70% 60% at 30% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Teal blob behind brand text (left) */}
      <div className="absolute top-24 left-0 w-[500px] h-[500px] rounded-full bg-[#2A7D6E]/6 blur-[140px] pointer-events-none" />
      {/* Cyan blob behind 3D (right) */}
      <div className="absolute top-32 right-0 w-[400px] h-[400px] rounded-full bg-[#00E5FF]/4 blur-[120px] pointer-events-none" />

      {/* ─── Asymmetric Split: Left-Heavy Power ─── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-20 px-6">

        {/* ── Left Column: Brand Pillar — strictly left-aligned ── */}
        <div className="flex flex-col items-start justify-center space-y-6 w-full">
          {/* Big ThinkSphere brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="font-gotham text-[clamp(2.5rem,7vw,4.5rem)] font-black uppercase tracking-tighter leading-none text-slate-900">
              Think<span className="text-[#2A7D6E] drop-shadow-[0_0_10px_rgba(42,125,110,0.3)]">Sphere</span>
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <span className="accent-font inline-block text-[11px] font-semibold uppercase tracking-[5px] text-slate-500">
              ALU E-Lab Think Tank
            </span>
          </motion.div>

          {/* Typewriter Headline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-[1.08] tracking-[-1.5px] text-black text-left">
              {displayed}
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 16 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="font-gotham text-base md:text-lg text-slate-800 max-w-[520px] leading-relaxed text-left"
          >
            <span className="text-black font-semibold">$647M</span> in tourism revenue.{" "}
            <span className="text-black font-semibold">386,000</span> jobs. Yet Kicukiro&apos;s
            youth remain locked out.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: done ? 1 : 0, y: done ? 0 : 16 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="flex gap-3 items-start flex-wrap"
          >
            <a
              href="#solution"
              className={cn(
                buttonVariants({ size: "lg" }),
                "font-gotham rounded-full px-8 py-3 h-auto text-sm font-semibold bg-[#2A7D6E] text-white hover:bg-[#236B5E] transition-colors"
              )}
            >
              Explore Our Journey
            </a>
            <a
              href="https://www.youtube.com/@ALUTHINKSPHERE"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "font-gotham rounded-full px-8 py-3 h-auto text-sm font-semibold glass-panel text-slate-800 hover:bg-white/60 transition-all"
              )}
            >
              <Play className="w-3.5 h-3.5 mr-2 fill-current" />
              Watch Our Story
            </a>
          </motion.div>
        </div>

        {/* ── Right Column: Video Card Shuffle ── */}
        <div className="w-full relative flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: done ? 1 : 0, scale: done ? 1 : 0.95 }}
            transition={{ duration: 1, ease, delay: 0.5 }}
            className="relative w-full"
          >
            <CardStack
              items={heroVideos}
              initialIndex={0}
              autoAdvance
              intervalMs={3500}
              pauseOnHover
              showDots
              cardWidth={480}
              cardHeight={320}
              maxVisible={4}
              loop
            />
          </motion.div>
        </div>
      </div>

      {/* ─── Stats Bar: Centered Anchor ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: done ? 1 : 0, y: done ? 0 : 24 }}
        transition={{ duration: 0.8, ease, delay: 0.6 }}
        className="relative z-10 w-full pb-12"
      >
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="glass-panel py-6 md:py-8 px-6 md:px-10 border-b border-[#00E5FF]/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="relative flex flex-col items-center text-center">
                    <Icon className="w-5 h-5 text-[#2A7D6E] mb-2" strokeWidth={1.5} />
                    <div className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold text-black leading-none mb-1">
                      <Counter
                        target={stat.target}
                        decimals={stat.decimals}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        duration={2200}
                      />
                    </div>
                    <p className="text-[10px] md:text-[11px] text-slate-500 accent-font font-semibold uppercase tracking-wider">
                      {stat.label}
                    </p>

                    {/* Cyber-cyan vertical divider between stats */}
                    {i < stats.length - 1 && (
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-12 bg-[#00E5FF]/30 rounded-full hidden md:block"
                        style={{ boxShadow: "0 0 10px rgba(0, 229, 255, 0.2)" }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Source citation — centered */}
            <p className="text-[9px] text-slate-500 mt-5 accent-font tracking-wide text-center">
              RDB Annual Report 2024 &middot; NISR Q2 Labour Force Survey 2024 &middot; WTTC 2025
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — docked left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 left-6 md:left-12 lg:left-16 xl:left-24 z-10 flex flex-col items-start gap-1.5"
      >
        <span className="text-[9px] uppercase tracking-[4px] text-slate-500 accent-font font-semibold">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-[#2A7D6E] animate-bounce-hover" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
