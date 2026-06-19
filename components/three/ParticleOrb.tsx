"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as random from "maath/random";
import * as THREE from "three";

function OrbParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const coords = new Float32Array(6000);
    random.inSphere(coords, { radius: 1.8 });
    return coords;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.08;
    ref.current.rotation.y -= delta * 0.12;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function InnerGlow() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.05;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.85, 32, 32]} />
      <meshBasicMaterial
        color="#6366f1"
        transparent
        opacity={0.06}
        wireframe
      />
    </mesh>
  );
}

export default function ParticleOrb() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="h-[min(520px,80vw)] w-[min(520px,80vw)]">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 45 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[-10, -5, -5]} intensity={0.5} color="#06b6d4" />
          <OrbParticles />
          <InnerGlow />
        </Canvas>
      </div>
    </div>
  );
}
