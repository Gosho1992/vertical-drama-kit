"use client";

import { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Product } from "@/config/products";

type Props = {
  product: Product;
  index?: number;
};

function openGumroad(url: string) {
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function ProductCard({ product, index = 0 }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(mx, [-0.5, 0.5], ["10%", "90%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["10%", "90%"]);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    setHovered(false);
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="animate-float-slow"
      style={{ animationDelay: `${index * 0.6}s` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        className="perspective-1000 group relative"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          animate={{ y: hovered ? -10 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="glass card-surface relative overflow-hidden rounded-2xl border border-white/10 p-3 shadow-card"
        >
          {/* soft cursor-follow spotlight */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(320px circle at ${glowX} ${glowY}, rgba(201,162,75,0.18), transparent 65%)`,
            }}
          />

          {/* poster */}
          <button
            type="button"
            onClick={() => openGumroad(product.gumroad)}
            aria-label={`View ${product.title} (${product.version}) on Gumroad — opens in a new tab`}
            className="relative block w-full overflow-hidden rounded-xl"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-studio-panel">
              <motion.div
                animate={{ scale: hovered ? 1.08 : 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={product.image}
                  alt={`${product.title} poster`}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 320px"
                  className="object-cover"
                  priority={index === 0}
                  unoptimized={product.image.toLowerCase().endsWith(".svg")}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div
                className={`absolute inset-0 rounded-xl ring-1 ring-inset transition-all duration-500 ${
                  hovered ? "ring-gold/50 shadow-glow" : "ring-white/10"
                }`}
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-widest2 text-white/80 backdrop-blur">
                {product.genre}
              </span>
            </div>
          </button>

          {/* info */}
          <div
            className="relative z-10 space-y-3 px-2 pb-2 pt-4"
            style={{ transform: "translateZ(30px)" }}
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                {product.title}
              </h3>
              {product.tagline && (
                <p className="mt-1 line-clamp-2 text-sm text-white/50">
                  {product.tagline}
                </p>
              )}
            </div>

            <p className="text-xs uppercase tracking-widest2 text-skyline-soft/80">
              {product.version}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => openGumroad(product.gumroad)}
                aria-label={`View details for ${product.title} (${product.version}) on Gumroad — opens in a new tab`}
                className="flex-1 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-white/80 transition-all duration-300 hover:border-gold/40 hover:bg-white/[0.08] hover:text-white"
              >
                View Details
              </button>
              <button
                type="button"
                onClick={() => openGumroad(product.gumroad)}
                aria-label={`Buy ${product.title} (${product.version}) on Gumroad — opens in a new tab`}
                className="flex-1 rounded-full bg-gradient-to-r from-gold-dim via-gold to-gold-light px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-studio-black transition-shadow duration-300 hover:shadow-glow"
              >
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
