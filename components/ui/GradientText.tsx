"use client";

import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
};

export default function GradientText({
  children,
  className,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag className={cn("gradient-text", className)}>{children}</Tag>
  );
}
