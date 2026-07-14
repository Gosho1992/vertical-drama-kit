"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";
import LightRays from "./LightRays";

/**
 * Decorative cinematic background for the hero section.
 * Lazy-loaded (see Hero.tsx) and capped DPR to stay GPU-cheap.
 */
export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 55 }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#050608"]} />
        <fog attach="fog" args={["#050608", 4, 15]} />
        <ambientLight intensity={0.4} />
        <LightRays />
        <ParticleField count={800} color="#c9a24b" />
        <ParticleField count={400} color="#7ea6d8" />
      </Suspense>
    </Canvas>
  );
}
