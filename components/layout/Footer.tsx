"use client";

import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-studio-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {siteConfig.shortName}
            <span className="text-gold">.</span>
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest2 text-white/50">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm text-white/50">
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold-light">
            Contact
          </a>
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold-light">
            {siteConfig.email}
          </a>
        </div>

        <div className="text-xs text-white/50">
          <p>© {year} {siteConfig.name}</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
