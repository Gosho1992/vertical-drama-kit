"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { showcaseItems } from "@/config/site";

export default function Showcase() {
  const loop = [...showcaseItems, ...showcaseItems];

  return (
    <section id="showcase" className="relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Showcase"
          title="Production-Grade Cinematic Frames"
          description="A look at the visual standard every kit is built to hit. Replace with your own generated stills."
        />
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-studio-black to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-studio-black to-transparent sm:w-40" />

        <motion.div
          className="flex w-max gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="group relative h-[220px] w-[340px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-[280px] sm:w-[440px]"
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="440px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                unoptimized={item.image.toLowerCase().endsWith(".svg")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 text-xs uppercase tracking-widest2 text-white/70">
                {item.caption}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
