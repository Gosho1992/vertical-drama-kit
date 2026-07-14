"use client";

import {
  BookOpen,
  Users,
  ListOrdered,
  FileText,
  Image as ImageIcon,
  Clapperboard,
  Mic,
  Megaphone,
  ShieldCheck,
  BadgeCheck,
  Layers,
  PackageCheck,
  Bot,
  Fingerprint,
  Wand2,
  Sparkles,
  Building2,
  type LucideProps,
} from "lucide-react";

export const iconMap = {
  BookOpen,
  Users,
  ListOrdered,
  FileText,
  ImageIcon,
  Clapperboard,
  Mic,
  Megaphone,
  ShieldCheck,
  BadgeCheck,
  Layers,
  PackageCheck,
  Bot,
  Fingerprint,
  Wand2,
  Sparkles,
  Building2,
} as const;

export type IconName = keyof typeof iconMap;

export default function Icon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp {...props} />;
}
