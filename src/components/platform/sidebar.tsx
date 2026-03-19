"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Activity,
  User,
  Award,
  Building2,
  Trophy,
  BarChart3,
  BookOpen,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";

const navItems = [
  { href: "/platform/metrics", label: "Metrics", icon: Activity },
  { href: "/platform/youth", label: "Youth Dashboard", icon: User },
  { href: "/platform/training", label: "Training", icon: BookOpen },
  { href: "/platform/credential", label: "Credential", icon: Award },
  { href: "/platform/recruiter", label: "Recruiter", icon: Building2 },
  { href: "/platform/competition", label: "Competition", icon: Trophy },
  { href: "/platform/admin", label: "Admin Panel", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl liquid-glass-grey-light text-white/80"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[260px] z-50 flex flex-col liquid-glass-grey border-r border-white/5 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF] flex items-center justify-center text-black font-bold text-sm font-gotham">
              TS
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white block leading-none">
                ThinkSphere
              </span>
              <span className="text-[9px] accent-font font-bold uppercase tracking-[2px] text-white/50">
                Platform
              </span>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-white/50 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-gotham font-semibold transition-all duration-200 ${
                  isActive
                    ? "liquid-glass-grey-light text-white shadow-sm shadow-[#00E5FF]/10"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-[#00E5FF]" : "text-white/40"}`}
                  strokeWidth={1.5}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/5">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors text-xs font-gotham"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Website
          </Link>
        </div>
      </aside>
    </>
  );
}
