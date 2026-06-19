"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
};

export default function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "glass-card rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl",
        glow && "glow-border",
        hover && "transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
