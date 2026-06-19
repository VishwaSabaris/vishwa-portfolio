"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { TechIcon } from "@/lib/tech-icons";
import { techStack } from "@/data/portfolio";

export default function TechStack() {
  return (
    <section id="stack" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title="Tools of the trade" />

        <div className="grid gap-6 md:grid-cols-2">
          {techStack.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.08, duration: 0.5 }}
            >
              <GlassCard className="h-full">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-violet-400">
                  {group.category}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="group flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:border-violet-500/30 hover:bg-violet-500/5"
                    >
                      <TechIcon
                        name={item}
                        className="h-6 w-6 text-zinc-400 transition-colors group-hover:text-violet-400"
                      />
                      <span className="text-center text-[11px] font-medium text-zinc-400 group-hover:text-zinc-200 sm:text-xs">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
