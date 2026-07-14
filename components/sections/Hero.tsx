"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-studio-black"
    >
      {/* 3D atmosphere, lazy loaded, purely decorative */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* static gradients to guarantee a good first paint before Canvas mounts */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-grid-fade" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest2 text-gold-light/90 backdrop-blur"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-semibold leading-[1.08] text-white sm:text-6xl md:text-7xl"
        >
          Create AI Vertical Dramas
          <br />
          <span className="text-gradient-gold">Faster</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-white/60 sm:text-lg"
        >
          Build complete AI Vertical Dramas using professionally developed
          production kits including Story Bibles, Character Bibles,
          60-Episode Structures, Production Scripts, AI Image Prompts, AI
          Video Prompts, Voice Direction, Marketing Assets, and Quality
          Assurance documentation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <LinkButton href="#collection" variant="primary" className="text-sm">
            Browse Collection
          </LinkButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
