"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, GitFork, Star, Users } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import type { GitHubUserData } from "@/lib/github";
import { personal } from "@/data/portfolio";

type GitHubStatsProps = {
  user: GitHubUserData | null;
  stats: {
    stars: number;
    forks: number;
    topLanguages: { name: string; count: number }[];
  };
  username: string;
};

const statCards = (
  user: GitHubUserData | null,
  stats: GitHubStatsProps["stats"],
) => [
  {
    label: "Public Repos",
    value: user?.public_repos ?? "—",
    icon: ExternalLink,
  },
  { label: "Followers", value: user?.followers ?? "—", icon: Users },
  { label: "Stars", value: stats.stars, icon: Star },
  { label: "Forks", value: stats.forks, icon: GitFork },
];

export function GitHubStats({ user, stats, username }: GitHubStatsProps) {
  const [snakeError, setSnakeError] = useState(false);
  const cards = statCards(user, stats);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <GlassCard hover={false} className="text-center">
              <card.icon className="mx-auto mb-2 h-5 w-5 text-violet-400" />
              <p className="text-2xl font-bold text-white">{card.value}</p>
              <p className="mt-1 text-xs text-zinc-500">{card.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {stats.topLanguages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard hover={false}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-violet-400">
              Top Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {stats.topLanguages.map((lang) => (
                <span
                  key={lang.name}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
                >
                  {lang.name}
                  <span className="ml-1.5 text-zinc-600">({lang.count})</span>
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&bg_color=00000000&title_color=a78bfa&icon_color=06b6d4&text_color=e4e4e7&count_private=false`}
            alt={`GitHub stats for ${username}`}
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github-readme-streak-stats.demolab.com/?user=${username}&theme=transparent&hide_border=true&background=00000000&ring=a78bfa&fire=a78bfa&currStreakLabel=a78bfa&sideLabels=e4e4e7&dates=e4e4e7&sideNums=e4e4e7&currStreakNum=06b6d4`}
            alt={`GitHub streak for ${username}`}
            className="w-full"
            loading="lazy"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&bg_color=0d1117&color=a78bfa&line=06b6d4&point=e4e4e7&area=true&area_color=8b5cf6`}
          alt={`Contribution graph for ${username}`}
          className="w-full rounded-xl"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117] p-4"
      >
        <h3 className="mb-4 text-center text-sm font-semibold text-zinc-400">
          Contribution Snake
        </h3>
        <div className="flex justify-center overflow-x-auto">
          {!snakeError ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={`https://raw.githubusercontent.com/${username}/${username}/output/github-contribution-grid-snake.svg`}
              alt={`GitHub contribution snake for ${username}`}
              className="max-w-full"
              loading="lazy"
              onError={() => setSnakeError(true)}
            />
          ) : (
            <p className="py-8 text-center text-sm text-zinc-500">
              Snake animation will appear once the GitHub Actions workflow runs
              on your profile repository.{" "}
              <a
                href={personal.github}
                className="text-violet-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View profile →
              </a>
            </p>
          )}
        </div>
      </motion.div>

      <div className="text-center">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
        >
          View GitHub Profile
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
