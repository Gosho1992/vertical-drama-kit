/**
 * Site-wide configuration and content data.
 * Sections read from these arrays instead of hardcoding copy, so editing
 * the studio's messaging never requires touching component code.
 */

export const siteConfig = {
  /** Brand name — used in the nav mark, footer, and copyright line. */
  name: "Vertical Drama Kit",
  /** Short mark shown in the nav/footer brand lockup (matches the VDK favicon). */
  shortName: "VDK",
  /** Exact <title> tag content. */
  title: "Vertical Drama Kit | AI Vertical Drama Production Kits",
  /** Short tagline used in the hero eyebrow badge and footer subtitle. */
  tagline: "Production-Ready AI Vertical Drama Kits",
  /** Meta description, and OpenGraph/Twitter description. */
  description:
    "Production-ready AI Vertical Drama Kits for creators, filmmakers, and studios. Every kit includes Story Bibles, Character Bibles, 60-Episode Scripts, AI Image Prompts, AI Video Prompts, Marketing Assets, and Production Documentation.",
  url: "https://veriticaldramasscript.com",
  /** OpenGraph/Twitter share image. Temporary: first product poster, until a
   *  dedicated social banner is designed. */
  ogImage: "/posters/stay-away-from-me-straight.jpg",
  email: "zainzia1992@gmail.com",
  keywords: [
    "AI Vertical Drama",
    "Vertical Drama",
    "Vertical Drama Kit",
    "AI Filmmaking",
    "Story Bible",
    "Character Bible",
    "Production Scripts",
    "AI Image Prompts",
    "AI Video Prompts",
    "Drama Script",
    "Romance Drama",
    "Boys Love",
    "BL Drama",
    "Mafia Drama",
    "ReelShort",
    "DramaBox",
    "AI Video",
    "Veo",
    "Kling AI",
    "Runway AI",
    "Hailuo AI",
    "AI Storytelling",
  ],
};

export const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "What We Provide", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Showcase", href: "#showcase" },
  { label: "Workflow", href: "#workflow" },
];

/** "What is an AI Vertical Drama Production Kit?" — deliverables grid */
export const deliverables = [
  {
    icon: "BookOpen",
    title: "Story Bible",
    description:
      "Canon world rules, timeline, and plot engines locked before a single scene is written.",
  },
  {
    icon: "Users",
    title: "Character Bible",
    description:
      "Byte-identical identity blocks for every lead — built for AI consistency across hundreds of shots.",
  },
  {
    icon: "ListOrdered",
    title: "60 Episode Outline",
    description:
      "Full-season structure with cliffhanger rotation, romance ladder, and monetization blocks mapped out.",
  },
  {
    icon: "FileText",
    title: "Production Scripts",
    description:
      "Episode-by-episode scripts written for 60–90 second vertical format, zero filler dialogue.",
  },
  {
    icon: "ImageIcon",
    title: "AI Image Prompts",
    description:
      "Keyframe and identity prompts engineered for consistent characters across every generation.",
  },
  {
    icon: "Clapperboard",
    title: "AI Video Prompts",
    description:
      "Shot-by-shot image-to-video prompts — camera movement, subject movement, and expression, separated.",
  },
  {
    icon: "Mic",
    title: "Voice Direction",
    description:
      "Emotional-direction notes per line, ready for AI TTS pipelines and voice performance.",
  },
  {
    icon: "Megaphone",
    title: "Marketing Assets",
    description:
      "Hooks, captions, and trailer-ready quotable lines built into the scripts from episode one.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality Assurance",
    description:
      "Every kit passes a continuity, pacing, and identity-consistency QC pass before it ships.",
  },
  {
    icon: "BadgeCheck",
    title: "Commercial Ready",
    description:
      "Structured as a standalone, sellable package — ready for your own studio or platform.",
  },
];

/** "Why Choose Us" reasons */
export const reasons = [
  {
    icon: "Layers",
    title: "Professional Story Structure",
    description:
      "Season sizing, tension waves, and romance-ladder pacing engineered like a writers' room, not a prompt generator.",
  },
  {
    icon: "PackageCheck",
    title: "Production Ready",
    description:
      "Every module — bible to marketing — is delivered complete. No missing pieces, no guesswork.",
  },
  {
    icon: "Bot",
    title: "Designed for AI Filmmaking",
    description:
      "Built from the ground up for AI image-to-video pipelines, not adapted from traditional screenwriting.",
  },
  {
    icon: "Fingerprint",
    title: "Consistent Characters",
    description:
      "Master identity blocks stay byte-identical across every prompt, scene, and episode.",
  },
  {
    icon: "Wand2",
    title: "Cinematic Prompt Engineering",
    description:
      "Camera grammar, lighting, and staging encoded directly into every visual and video prompt.",
  },
  {
    icon: "Sparkles",
    title: "Ready for Veo",
    description: "Prompt structure tuned for Google Veo's image-to-video pipeline.",
  },
  {
    icon: "Sparkles",
    title: "Ready for Kling",
    description: "Compatible with Kling's motion and consistency requirements.",
  },
  {
    icon: "Sparkles",
    title: "Ready for Runway",
    description: "Structured for Runway's generation and camera-control workflow.",
  },
  {
    icon: "Sparkles",
    title: "Ready for Hailuo AI",
    description: "Formatted for Hailuo AI's shot and prompt conventions.",
  },
  {
    icon: "Building2",
    title: "Perfect for Studios and Indie Creators",
    description:
      "Scales from a solo creator's first drama to a studio's full slate.",
  },
];

/** Showcase carousel — replace with real production stills */
export const showcaseItems = [
  { id: 1, image: "/showcase/frame-1.svg", caption: "Keyframe still — forced proximity" },
  { id: 2, image: "/showcase/frame-2.svg", caption: "Identity block reference sheet" },
  { id: 3, image: "/showcase/frame-3.svg", caption: "Cliffhanger shot composition" },
  { id: 4, image: "/showcase/frame-4.svg", caption: "Night exterior lighting block" },
  { id: 5, image: "/showcase/frame-5.svg", caption: "Two-shot romance staging" },
];

/** Workflow timeline steps, in order */
export const workflowSteps = [
  { id: "01", label: "Idea" },
  { id: "02", label: "Story Bible" },
  { id: "03", label: "Character Bible" },
  { id: "04", label: "Episodes" },
  { id: "05", label: "Scripts" },
  { id: "06", label: "AI Images" },
  { id: "07", label: "AI Video" },
  { id: "08", label: "Voice" },
  { id: "09", label: "Marketing" },
  { id: "10", label: "Finished Vertical Drama" },
];

export const footerLinks = {
  contact: [
    { label: "Contact", href: `mailto:${siteConfig.email}` },
    { label: "Email", href: `mailto:${siteConfig.email}` },
  ],
};
