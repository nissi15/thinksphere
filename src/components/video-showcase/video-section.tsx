"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

const videos = [
  {
    src: "/videos/video-1.mp4",
    title: "Our Tourism Vision",
    subtitle: "The GCGO Goal",
    description:
      "How ThinkSphere envisions transforming Kicukiro's tourism landscape into a youth employment engine — our Grand Challenges response.",
    tag: "Vision",
  },
  {
    src: "/videos/video-2.mp4",
    title: "Community Voices",
    subtitle: "The Kicukiro Gap",
    description:
      "Real stories from youth and women in Kicukiro seeking stable income through tourism — revealing the systemic barriers holding them back.",
    tag: "Research",
  },
  {
    src: "/videos/video-3.mp4",
    title: "The Training Model",
    subtitle: "Building Capacity",
    description:
      "Inside our bootcamp: hospitality, customer service, digital marketing, and business planning — equipping youth with credentials that work.",
    tag: "Training",
  },
  {
    src: "/videos/video-4.mp4",
    title: "Pitch & Compete",
    subtitle: "The Solution",
    description:
      "Watch youth present tourism business ideas for seed funding and internship placements — the ThinkSphere x BDF competition in action.",
    tag: "Compete",
  },
  {
    src: "/videos/video-5.mp4",
    title: "The Credential Journey",
    subtitle: "The Outcome",
    description:
      "From training to employment — every graduate leaves with proof they can do the job. The credential that gets you hired.",
    tag: "Outcome",
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[0];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const isLeft = index % 2 === 0; // Steps 01, 03, 05 on LEFT; 02, 04 on RIGHT

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1,
      }}
      className="relative"
    >
      {/* Timeline node — centered on the vertical line */}
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#2A7D6E] border-[3px] border-white z-10"
        style={{ boxShadow: "0 0 12px rgba(42, 125, 110, 0.4)" }}
      />

      {/* Z-Pattern Grid: 12-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
        {/* Video block */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "relative aspect-video rounded-2xl overflow-hidden glass-panel cursor-pointer",
            isLeft
              ? "md:col-span-5 md:col-start-1"   // LEFT cards: columns 1-5
              : "md:col-span-5 md:col-start-8"    // RIGHT cards: columns 8-12
          )}
          onClick={handlePlay}
        >
          <video
            ref={videoRef}
            src={video.src}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="none"
            onEnded={() => setIsPlaying(false)}
          />

          {/* Play overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
            } bg-black/5`}
          >
            <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <Play className="w-5 h-5 text-black ml-0.5" fill="black" />
            </div>
          </div>

          {/* Tag */}
          <div className="absolute top-3 left-3">
            <span className="accent-font inline-block text-[10px] font-bold uppercase tracking-[3px] text-white px-3 py-1 rounded-full bg-black/60 border border-white/10">
              {video.tag}
            </span>
          </div>
        </motion.div>

        {/* Text content */}
        <div
          className={cn(
            "md:py-4",
            isLeft
              ? "md:col-span-5 md:col-start-7"    // Text on right side
              : "md:col-span-5 md:col-start-1 md:row-start-1" // Text on left side (before video visually)
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.25,
            }}
          >
            <span className="stat-font text-[11px] font-bold text-[#2A7D6E]/50 mb-2 block tracking-wider">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-gotham text-[clamp(1.3rem,3vw,1.8rem)] font-bold tracking-tight text-black mb-1 leading-tight">
              {video.title}
            </h3>
            <p className="accent-font text-[10px] font-bold uppercase tracking-[3px] text-[#2A7D6E] mb-3">
              {video.subtitle}
            </p>
            <p className="font-gotham text-[15px] text-slate-800 leading-relaxed mb-5">
              {video.description}
            </p>
            <div className="h-[1px] w-12 bg-[#2A7D6E]/20" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function VideoShowcase() {
  return (
    <section id="journey" className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white to-[#FAFAFA]">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-left mb-16 md:mb-20 max-w-[520px]"
        >
          <span className="accent-font inline-block text-[11px] font-bold uppercase tracking-[5px] text-slate-500 mb-4">
            GCGO Journey
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-black mb-4">
            Tourism. Jobs. Impact.
          </h2>
          <p className="font-gotham text-slate-800 text-base leading-relaxed">
            Five moments documenting ThinkSphere&apos;s path from identifying the tourism employment gap in Kicukiro to building a system that closes it.
          </p>
        </motion.div>

        {/* Timeline with Electric Cyan glowing center line */}
        <div className="relative">
          {/* Vertical Electric Cyan glowing timeline */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#00E5FF]/40 z-0"
            style={{ boxShadow: "0 0 10px rgba(0, 229, 255, 0.3), 0 0 20px rgba(0, 229, 255, 0.15)" }}
          />

          {/* Video cards */}
          <div className="flex flex-col gap-16 md:gap-24">
            {videos.map((video, i) => (
              <VideoCard key={video.src} video={video} index={i} />
            ))}
          </div>
        </div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-left mt-20"
        >
          <a
            href="https://www.youtube.com/@ALUTHINKSPHERE"
            target="_blank"
            rel="noopener noreferrer"
            className="font-gotham inline-flex items-center gap-2 text-sm font-semibold text-[#2A7D6E] hover:text-[#236B5E] transition-colors tracking-wide"
          >
            View all on YouTube
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
