"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal, projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title="Projects that ship" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
            >
              <GlassCard className="flex h-full flex-col" glow>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                    {project.title}
                  </h3>
                  <span className="shrink-0 rounded-lg bg-violet-500/10 px-2 py-1 text-[10px] font-bold tracking-wider text-violet-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                >
                  Explore
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
