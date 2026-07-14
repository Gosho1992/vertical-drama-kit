/**
 * Ambient type declaration for lucide-react.
 * The installed package version's dist/ does not ship a bundled
 * lucide-react.d.ts in this environment, so icons are typed manually here.
 * Safe to delete once you install a lucide-react version that includes types.
 */
declare module "lucide-react" {
  import { FC, SVGProps } from "react";

  export interface LucideProps extends Partial<SVGProps<SVGSVGElement>> {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }

  export type LucideIcon = FC<LucideProps>;

  export const BookOpen: LucideIcon;
  export const Users: LucideIcon;
  export const ListOrdered: LucideIcon;
  export const FileText: LucideIcon;
  export const Image: LucideIcon;
  export const Clapperboard: LucideIcon;
  export const Mic: LucideIcon;
  export const Megaphone: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const BadgeCheck: LucideIcon;
  export const Layers: LucideIcon;
  export const PackageCheck: LucideIcon;
  export const Bot: LucideIcon;
  export const Fingerprint: LucideIcon;
  export const Wand2: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Building2: LucideIcon;
}
