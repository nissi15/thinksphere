"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Ishema Nissi",
    role: "Team Lead & Researcher",
    email: "n.ishema@alustudent.com",
    avatar: "/images/nissi-sm.jpeg",
  },
  {
    name: "Ntwali Axel Omega",
    role: "Web Designer & Developer",
    email: "n.omega@alustudent.com",
    avatar: "/images/axel-v2.jpeg",
  },
  {
    name: "Ntore Ruyonza Nissy",
    role: "Animation & Visual Design",
    email: "n.ntoreruyo@alustudent.com",
    avatar: "/images/ntore-sm.jpeg",
  },
  {
    name: "Nancy Chishala",
    role: "Content Strategy & Analysis",
    email: "n.chishala@alustudent.com",
    avatar: "/images/nancy-sm.jpeg",
  },
  {
    name: "Nyachol Obech Okuch",
    role: "Business Strategy & Design",
    email: "n.maclual@alustudent.com",
    avatar: "/images/nicole-sm.jpeg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-white via-[#FAFAFA] to-[#F5F0E8]/20 overflow-hidden">
      <div className="absolute top-10 right-20 w-[300px] h-[300px] rounded-full bg-[#2A7D6E]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-left mb-14 max-w-[420px]"
        >
          <span className="accent-font inline-block text-[11px] font-bold uppercase tracking-[5px] text-slate-500 mb-4">
            The People
          </span>
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight text-black mb-4">
            Meet the Team
          </h2>
          <p className="font-gotham text-slate-800 text-base leading-relaxed">
            Five ALU students united by curiosity and driven by purpose.
          </p>
        </motion.div>

        <div className="flex gap-5 justify-start flex-wrap">
          {teamMembers.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="glass-panel liquid-glass-hover px-5 py-6 text-center w-[190px] max-sm:w-[160px] group"
            >
              <div className="w-[72px] h-[72px] rounded-full overflow-hidden mx-auto mb-3 glass-panel">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  width={72}
                  height={72}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-gotham text-sm font-bold text-black mb-0.5">{m.name}</h4>
              <p className="text-[10px] text-slate-500 accent-font font-bold uppercase tracking-wider mb-3">
                {m.role}
              </p>
              <a
                href={`mailto:${m.email}`}
                className="inline-flex items-center gap-1 text-[#2A7D6E]/60 hover:text-[#2A7D6E] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
