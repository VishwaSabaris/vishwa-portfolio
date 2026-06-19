import { GitHubStats } from "@/components/sections/GitHubStats";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  aggregateGitHubStats,
  fetchGitHubRepos,
  fetchGitHubUser,
} from "@/lib/github";
import { personal } from "@/data/portfolio";

export default async function GitHubSection() {
  const [user, repos] = await Promise.all([
    fetchGitHubUser(personal.githubUsername),
    fetchGitHubRepos(personal.githubUsername),
  ]);

  const stats = aggregateGitHubStats(repos);

  return (
    <section id="github" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title={`Live from @${personal.githubUsername}`}
          subtitle="Real-time open source activity and contributions"
        />

        <GitHubStats
          user={user}
          stats={stats}
          username={personal.githubUsername}
        />
      </div>
    </section>
  );
}
