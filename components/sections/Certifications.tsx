"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title="Certifications & Badges" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.provider}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <GlassCard className="h-full" glow>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                    <Award className="h-5 w-5 text-violet-400" />
                  </div>
                  <h3 className="font-semibold text-white">{cert.provider}</h3>
                </div>
                <ul className="space-y-2">
                  {cert.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-zinc-400"
                    >
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
