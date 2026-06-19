"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-24 bg-gradient-to-r from-violet-500 via-cyan-400 to-transparent",
          align === "center" && "mx-auto",
        )}
      />
    </motion.div>
  );
}
