"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon, { type IconName } from "@/components/ui/Icon";
import { reasons } from "@/config/site";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for AI Filmmakers Who Ship"
          description="Every kit is engineered around the realities of AI video production — consistency, pacing, and platform compatibility."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass relative overflow-hidden rounded-2xl border border-white/10 p-7 shadow-card transition-colors duration-300 hover:border-gold/30"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-skyline/25 bg-skyline/[0.07] text-skyline-soft">
                <Icon name={reason.icon as IconName} size={22} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
