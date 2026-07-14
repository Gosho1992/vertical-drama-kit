"use client";

import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-gold-dim via-gold to-gold-light text-studio-black shadow-glow hover:shadow-[0_0_55px_rgba(201,162,75,0.4)]",
  secondary:
    "glass text-white hover:border-gold/40 hover:bg-white/[0.06]",
  ghost: "text-white/80 hover:text-white",
};

type ConflictingHandlers =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers> & {
    href: string;
  };

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers>;

export function LinkButton({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
