"use client";

import { motion } from "framer-motion";
import { Code2, Medal, Trophy } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/data/portfolio";
import { SiLeetcode } from "react-icons/si";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  code: Code2,
  leetcode: SiLeetcode,
} as const;

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title="Achievements & Milestones" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <GlassCard className="h-full text-center" glow>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 shadow-[0_0_24px_rgba(139,92,246,0.3)]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.detail}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
