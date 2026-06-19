export type GitHubUserData = {
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

export type GitHubRepo = {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

export async function fetchGitHubUser(
  username: string,
): Promise<GitHubUserData | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function fetchGitHubRepos(
  username: string,
): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function aggregateGitHubStats(repos: GitHubRepo[]) {
  const stars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const forks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

  const languageCounts = repos.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    }
    return acc;
  }, {});

  const topLanguages = Object.entries(languageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }));

  return { stars, forks, topLanguages };
}
