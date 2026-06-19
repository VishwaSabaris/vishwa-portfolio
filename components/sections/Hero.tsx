"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Sparkles } from "lucide-react";
import ParticleOrbLoader from "@/components/three/ParticleOrbLoader";
import { heroRoles, heroStats, personal } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-[#050508]" />

      <ParticleOrbLoader />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-sm md:text-sm"
        >
          <Sparkles size={14} className="text-cyan-400" />
          {personal.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="gradient-text-hero">{personal.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-4 text-base text-zinc-400 md:text-lg"
        >
          {personal.role} · {personal.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 flex min-h-[2.5rem] items-center justify-center text-lg font-medium text-cyan-400 md:text-xl"
        >
          <TypeAnimation
            sequence={heroRoles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#projects" className="btn-primary group">
            View Projects
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="stat-glow rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 backdrop-blur-xl"
            >
              <p className="text-lg font-bold text-white md:text-xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-zinc-500 md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-2 w-1 rounded-full bg-gradient-to-b from-violet-400 to-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
