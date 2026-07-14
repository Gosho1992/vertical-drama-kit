"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { workflowSteps } from "@/config/site";

export default function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="workflow" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Workflow"
          title="Idea to Finished Vertical Drama"
          description="One continuous pipeline. Every module builds on the last — nothing is improvised mid-production."
        />

        <div ref={containerRef} className="relative mt-20 pl-10 sm:pl-14">
          <div className="absolute left-[7px] top-0 h-full w-px bg-white/10 sm:left-[11px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-0 w-px bg-gradient-to-b from-gold via-gold-light to-skyline sm:left-[11px]"
          />

          <ol className="space-y-10">
            {workflowSteps.map((step, i) => {
              const isLast = i === workflowSteps.length - 1;
              return (
                <motion.li
                  key={step.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center gap-5"
                >
                  <span
                    className={`absolute -left-10 flex h-4 w-4 items-center justify-center rounded-full border sm:-left-14 ${
                      isLast
                        ? "border-gold bg-gold shadow-glow"
                        : "border-gold/50 bg-studio-black"
                    }`}
                  >
                    {isLast && <span className="h-1.5 w-1.5 rounded-full bg-studio-black" />}
                  </span>

                  <div
                    className={`flex w-full items-center justify-between rounded-xl border px-6 py-4 transition-colors duration-300 ${
                      isLast
                        ? "glass border-gold/40"
                        : "border-white/10 bg-white/[0.02] hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`font-display text-lg font-medium ${
                        isLast ? "text-gradient-gold" : "text-white/85"
                      }`}
                    >
                      {step.label}
                    </span>
                    <span className="text-xs uppercase tracking-widest2 text-white/50">
                      {step.id}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
