"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { href: "#journey", label: "GCGO Journey", external: false },
  { href: "#about", label: "About", external: false },
  { href: "#solution", label: "Platform", external: false },
  { href: "https://www.youtube.com/@ALUTHINKSPHERE", label: "YouTube", external: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[520px]">
      <div className="flex items-center justify-between px-5 py-2.5 rounded-full liquid-glass-strong">
        <a href="#home" className="font-gotham font-bold text-[0.9rem] text-black tracking-tight flex items-center gap-1">
          ThinkSphere
          <span className="w-1.5 h-1.5 rounded-full bg-[#2A7D6E] inline-block" />
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-0.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-gotham px-3 py-1.5 rounded-full text-[13px] font-medium text-slate-500 hover:text-black hover:bg-white/50 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="sm:hidden flex flex-col gap-[5px] p-1 cursor-pointer" aria-label="Menu">
            <span className="block w-4 h-[1.5px] bg-black rounded-full" />
            <span className="block w-4 h-[1.5px] bg-black rounded-full" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-white/90 backdrop-blur-2xl border-white/30">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col gap-6 mt-12">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="font-gotham text-lg font-semibold text-slate-500 hover:text-black transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
