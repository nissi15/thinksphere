"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { stats } from "@/lib/data";

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    function tick(now: number) {
      const p = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {target >= 1000 ? count.toLocaleString() : count}
    </span>
  );
}

export function ScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-100vw"]);

  return (
    <section ref={sectionRef} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex">
          {/* Panel 1: Group photo */}
          <div className="flex-none w-screen h-screen flex items-center justify-center px-6">
            <div className="relative rounded-3xl overflow-hidden max-w-[900px] w-full shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/group-photo.jpeg"
                alt="ThinkSphere team group photo"
                width={900}
                height={600}
                className="w-full object-cover max-h-[70vh]"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="text-xl font-bold">The Think Tank</h3>
                <p className="text-sm opacity-85">United by curiosity, driven by purpose</p>
              </div>
            </div>
          </div>

          {/* Panel 2: Stats */}
          <div className="flex-none w-screen h-screen flex items-center justify-center px-6">
            <div className="flex gap-5 flex-wrap justify-center">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-3xl px-9 py-7 text-center min-w-[140px]">
                  <span className="block text-[2.8rem] font-bold tracking-tight text-foreground leading-none">
                    <Counter target={s.target} />
                  </span>
                  <span className="text-sm text-muted-foreground font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
