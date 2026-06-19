"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { coreInterests } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading title="Engineering the intelligent stack." />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          I am a Computer Science Engineering student specializing in Artificial
          Intelligence and Machine Learning. I am passionate about building
          practical systems across AI, AWS Cloud, DevOps, Automation, Backend
          APIs, and Event-Driven Architecture. I enjoy combining AI engineering
          with cloud-native infrastructure to build real-world, scalable
          solutions.
        </motion.p>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {coreInterests.map((interest, i) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="interest-box group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-3 py-4 text-center backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-cyan-500/0 transition-all duration-300 group-hover:from-violet-500/10 group-hover:to-cyan-500/10" />
              <span className="relative text-[10px] font-semibold tracking-widest text-zinc-300 sm:text-xs">
                {interest}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
