"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export type CardStackItem = {
  id: string | number;
  title: string;
  description?: string;
  videoSrc?: string;
  imageSrc?: string;
  href?: string;
  tag?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];
  initialIndex?: number;
  maxVisible?: number;
  cardWidth?: number;
  cardHeight?: number;
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;
  showDots?: boolean;
  className?: string;
  onChangeIndex?: (index: number, item: T) => void;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 4,
  cardWidth = 460,
  cardHeight = 300,
  loop = true,
  autoAdvance = false,
  intervalMs = 3000,
  pauseOnHover = true,
  showDots = true,
  className,
  onChangeIndex,
}: CardStackProps<T>) {
  const len = items.length;
  const [active, setActive] = React.useState(() => wrapIndex(initialIndex, len));
  const [hovering, setHovering] = React.useState(false);
  const [exitDir, setExitDir] = React.useState<"left" | "right">("left");

  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  React.useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const next = React.useCallback(() => {
    if (!len) return;
    setExitDir("left");
    setActive((a) => wrapIndex(a + 1, len));
  }, [len]);

  const prev = React.useCallback(() => {
    if (!len) return;
    setExitDir("right");
    setActive((a) => wrapIndex(a - 1, len));
  }, [len]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Auto-advance
  React.useEffect(() => {
    if (!autoAdvance || !len) return;
    if (pauseOnHover && hovering) return;
    const id = window.setInterval(() => {
      if (loop || active < len - 1) next();
    }, Math.max(700, intervalMs));
    return () => window.clearInterval(id);
  }, [autoAdvance, intervalMs, hovering, pauseOnHover, len, loop, active, next]);

  if (!len) return null;

  // Build the visible stack: active card on top, then next few behind it
  const visibleCards: { item: T; stackIndex: number; originalIndex: number }[] = [];
  for (let s = 0; s < Math.min(maxVisible, len); s++) {
    const idx = wrapIndex(active + s, len);
    visibleCards.push({ item: items[idx]!, stackIndex: s, originalIndex: idx });
  }

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Card stage */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ height: cardHeight + 40 }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* Stack of cards */}
        <div className="relative" style={{ width: cardWidth, height: cardHeight }}>
          {/* Prev button — inside card bounds */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm hover:bg-black/60 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous card"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </motion.button>

          {/* Next button — inside card bounds */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm hover:bg-black/60 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next card"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </motion.button>
          <AnimatePresence mode="popLayout">
            {visibleCards
              .slice()
              .reverse()
              .map(({ item, stackIndex, originalIndex }) => {
                const isTop = stackIndex === 0;
                const offsetY = stackIndex * -8;
                const offsetX = stackIndex * 4;
                const scale = 1 - stackIndex * 0.04;
                const zIndex = maxVisible - stackIndex;
                const brightness = Math.max(0.5, 1 - stackIndex * 0.15);

                return (
                  <motion.div
                    key={item.id}
                    className={cn(
                      "absolute top-0 left-0 rounded-2xl border-2 border-white/20 overflow-hidden shadow-xl will-change-transform select-none",
                      isTop ? "cursor-grab active:cursor-grabbing" : "cursor-pointer",
                    )}
                    style={{
                      width: cardWidth,
                      height: cardHeight,
                      zIndex,
                    }}
                    initial={
                      isTop
                        ? { opacity: 0, x: exitDir === "left" ? 300 : -300, y: offsetY, scale, rotate: exitDir === "left" ? 15 : -15 }
                        : false
                    }
                    animate={{
                      opacity: 1,
                      x: offsetX,
                      y: offsetY,
                      scale,
                      rotate: 0,
                      filter: `brightness(${brightness})`,
                    }}
                    exit={{
                      x: exitDir === "left" ? -350 : 350,
                      y: -20,
                      opacity: 0,
                      rotate: exitDir === "left" ? -20 : 20,
                      scale: 0.9,
                      transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    drag={isTop ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={
                      isTop
                        ? (_e, info) => {
                            const travel = info.offset.x;
                            const v = info.velocity.x;
                            if (travel < -80 || v < -500) next();
                            else if (travel > 80 || v > 500) prev();
                          }
                        : undefined
                    }
                    onClick={!isTop ? () => setActive(originalIndex) : undefined}
                  >
                    <ShuffleCard item={item} active={isTop} loadVideo={stackIndex <= 1} />
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      {showDots && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((it, idx) => {
            const on = idx === active;
            return (
              <button
                key={it.id}
                onClick={() => setActive(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  on ? "bg-[#2A7D6E] w-6" : "bg-slate-300 w-1.5 hover:bg-slate-400",
                )}
                aria-label={`Go to ${it.title}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function ShuffleCard({
  item,
  active,
  loadVideo = false,
}: {
  item: CardStackItem;
  active: boolean;
  loadVideo?: boolean;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (!videoRef.current) return;
    if (active) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [active]);

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0">
        {item.videoSrc && loadVideo ? (
          <video
            ref={videoRef}
            src={item.videoSrc}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            preload={active ? "auto" : "none"}
          />
        ) : item.videoSrc && !loadVideo ? (
          <div className="flex h-full w-full items-center justify-center bg-slate-900" />
        ) : item.imageSrc ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-full w-full object-cover"
            draggable={false}
            loading="eager"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-sm text-slate-500">
            No media
          </div>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        {item.tag && (
          <span className="mb-2 inline-block w-fit rounded-full bg-[#2A7D6E]/80 px-3 py-0.5 text-[10px] font-bold uppercase tracking-[2px] text-white">
            {item.tag}
          </span>
        )}
        <div className="truncate text-base font-bold text-white">
          {item.title}
        </div>
        {item.description && (
          <div className="mt-1 line-clamp-2 text-sm text-white/80">
            {item.description}
          </div>
        )}
      </div>
    </div>
  );
}
