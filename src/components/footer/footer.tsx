import { Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="h-[1px] bg-black/5 mb-8" />

        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4 max-sm:text-center">
          <div>
            <span className="font-gotham font-bold text-sm text-black">ThinkSphere</span>
            <p className="text-[11px] text-slate-600 accent-font font-semibold tracking-wide mt-0.5">
              The Credential That Gets You Hired
            </p>
          </div>

          <span className="text-[11px] text-slate-600 accent-font font-bold tracking-wider uppercase">
            ALU E-Lab &middot; 2026
          </span>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@ALUTHINKSPHERE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-[#2A7D6E] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:n.ishema@alustudent.com"
              className="text-slate-600 hover:text-[#2A7D6E] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <p className="text-[10px] text-slate-600 text-center mt-6 accent-font font-semibold tracking-wide">
          &copy; 2026 ThinkSphere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
