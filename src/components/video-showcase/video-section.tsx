"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const videos = [
  {
    youtubeId: "dgu6Zl9TY24",
    title: "Challenge 1: Introduction",
    subtitle: "The GCGO Goal",
    description:
      "How ThinkSphere envisions transforming Kicukiro\u2019s tourism landscape into a youth employment engine \u2014 our Grand Challenges response.",
    tag: "Vision",
  },
  {
    youtubeId: "-Yv3ogpgAws",
    title: "Challenge 2: Discover Africa",
    subtitle: "Kicukiro\u2019s Story",
    description:
      "Real stories of Kicukiro and the story that the world needs to know.",
    tag: "Research",
  },
  {
    youtubeId: "SEU1w4vOqWw",
    title: "Challenge 3: Help-Lab",
    subtitle: "Our Community Impact",
    description:
      "We helped the community by paying tuition for over 10 students in Kicukiro.",
    tag: "Training",
  },
  {
    youtubeId: "lEsdeRA88cc",
    title: "Challenge 4: Hunt for Treasure",
    subtitle: "Business in Kicukiro",
    description:
      "We visited Envision Gallery and interviewed the CEO to discuss their impact on tourism and their platform for Kicukiro\u2019s artists.",
    tag: "Compete",
  },
  {
    youtubeId: "dgu6Zl9TY24",
    title: "Challenge 5: Launch Your Mission",
    subtitle: "Our Solution",
    description:
      "We discussed our solution towards the job creation problem in the community.",
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
  const isLeft = index % 2 === 0;

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
      {/* Timeline node */}
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#2A7D6E] border-[3px] border-white z-10"
        style={{ boxShadow: "0 0 12px rgba(42, 125, 110, 0.4)" }}
      />

      {/* Z-Pattern Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
        {/* YouTube embed */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "relative aspect-video rounded-2xl overflow-hidden glass-panel",
            isLeft
              ? "md:col-span-5 md:col-start-1"
              : "md:col-span-5 md:col-start-8"
          )}
        >
          <iframe
            srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:48px;width:68px;left:50%;transform:translateX(-50%);text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 12px rgba(0,0,0,.5)}</style><a href=https://www.youtube.com/embed/${video.youtubeId}?autoplay=1><img src=https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg alt='${video.title}'><span>&#x25BA;</span></a>`}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
            loading="lazy"
          />

          {/* Tag */}
          <div className="absolute top-3 left-3 pointer-events-none">
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
              ? "md:col-span-5 md:col-start-7"
              : "md:col-span-5 md:col-start-1 md:row-start-1"
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
        {/* Section header */}
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
            Five challenges documenting ThinkSphere&apos;s path from identifying the tourism employment gap in Kicukiro to building a system that closes it.
          </p>
        </motion.div>

        {/* Timeline with Electric Cyan glowing center line */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#00E5FF]/40 z-0"
            style={{ boxShadow: "0 0 10px rgba(0, 229, 255, 0.3), 0 0 20px rgba(0, 229, 255, 0.15)" }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {videos.map((video, i) => (
              <VideoCard key={video.youtubeId + i} video={video} index={i} />
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
