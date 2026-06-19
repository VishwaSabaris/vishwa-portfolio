"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Telescope } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { roadmap } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const phaseIcons = {
  Shipped: CheckCircle2,
  "In Flight": Rocket,
  Horizon: Telescope,
} as const;

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title="From code to cloud-native" />

        <div className="grid gap-6 lg:grid-cols-3">
          {roadmap.map((phase, i) => {
            const Icon = phaseIcons[phase.phase as keyof typeof phaseIcons];
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <GlassCard
                  className={cn("h-full shadow-lg", phase.glow)}
                  glow
                >
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-white",
                        phase.accent,
                      )}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {phase.phase}
                      </h3>
                      <p className="text-xs text-zinc-500">{phase.subtitle}</p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
