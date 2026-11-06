// Build-time snapshot of public GitHub repos -> src/data/github.json.
// Never fails the build: on any error the committed JSON is kept.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const USER = 'JhonJMD';
const OUTPUT = resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/github.json');
const API_URL = `https://api.github.com/users/${USER}/repos?per_page=100&type=owner&sort=pushed`;
const REQUEST_TIMEOUT_MS = 10_000;

export function shapeRepos(apiRepos) {
  return apiRepos
    .filter((repo) => !repo.fork && !repo.private && !repo.archived && repo.name.toLowerCase() !== USER.toLowerCase())
    .map((repo) => ({
      name: repo.name,
      description: repo.description ?? '',
      language: repo.language ?? '',
      stars: repo.stargazers_count ?? 0,
      url: repo.html_url,
      pushedAt: repo.pushed_at,
    }))
    .sort((a, b) => b.stars - a.stars || b.pushedAt.localeCompare(a.pushedAt));
}

async function fetchRepos() {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'portfolio-build' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const response = await fetch(API_URL, { headers, signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS) });
  if (!response.ok) throw new Error(`GitHub API responded ${response.status}`);
  return response.json();
}

async function ensureFile() {
  try {
    await readFile(OUTPUT, 'utf8');
  } catch {
    await mkdir(dirname(OUTPUT), { recursive: true });
    await writeFile(OUTPUT, JSON.stringify({ user: USER, fetchedAt: null, repos: [] }, null, 2));
  }
}

async function main() {
  await ensureFile();
  try {
    const repos = shapeRepos(await fetchRepos());
    await writeFile(OUTPUT, `${JSON.stringify({ user: USER, fetchedAt: new Date().toISOString(), repos }, null, 2)}\n`);
    process.stdout.write(`github: saved ${repos.length} public repos\n`);
  } catch (error) {
    process.stderr.write(`github: keeping existing data (${error.message})\n`);
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
