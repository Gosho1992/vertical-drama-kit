"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A handful of large, near-transparent planes acting as soft cinematic
 * light shafts. Additive blending keeps it glowy rather than flat.
 */
export default function LightRays() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = Math.sin(t * 0.05) * 0.03;
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      state.pointer.x * 0.4,
      0.015
    );
  });

  const rays = [
    { x: -3.2, rot: 0.18, color: "#c9a24b", opacity: 0.05, w: 2.6 },
    { x: 0, rot: -0.05, color: "#7ea6d8", opacity: 0.035, w: 3.4 },
    { x: 3, rot: -0.2, color: "#c9a24b", opacity: 0.045, w: 2.2 },
  ];

  return (
    <group ref={group} position={[0, 1.5, -6]}>
      {rays.map((r, i) => (
        <mesh key={i} position={[r.x, 0, 0]} rotation={[0, 0, r.rot]}>
          <planeGeometry args={[r.w, 14]} />
          <meshBasicMaterial
            color={r.color}
            transparent
            opacity={r.opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
