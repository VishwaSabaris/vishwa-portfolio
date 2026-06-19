"use client";

import dynamic from "next/dynamic";

const ParticleOrb = dynamic(() => import("@/components/three/ParticleOrb"), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div className="h-64 w-64 animate-pulse rounded-full bg-violet-500/10 blur-3xl" />
    </div>
  ),
});

export default ParticleOrb;
