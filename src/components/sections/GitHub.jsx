import { ExternalLink, Star } from 'lucide-react';
import githubData from '../../data/github.json';
import { siteConfig } from '../../config/portfolioConfig';
import { useLang } from '../../context/LanguageContext';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

function languageBreakdown(repos) {
  const counts = repos.reduce((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

export default function GitHub() {
  const { t } = useLang();
  const repos = githubData.repos ?? [];
  const languages = languageBreakdown(repos);
  const top = languages[0]?.[1] ?? 1;

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle eyebrow={t('gh_eyebrow')} title={t('gh_title')} intro={t('gh_intro')} />

      {repos.length === 0 ? (
        <p className="text-muted">{t('gh_empty')}</p>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <h3 className="mb-4 font-mono text-sm text-accent">{t('gh_languages')}</h3>
            <ul className="flex flex-col gap-3">
              {languages.map(([language, count]) => (
                <li key={language} className="text-sm">
                  <div className="mb-1 flex justify-between">
                    <span>{language}</span>
                    <span className="font-mono text-xs text-muted">{count}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-line">
                    <div className="h-full rounded-full bg-accent" style={{ width: `${(count / top) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {repos.slice(0, 6).map((repo, index) => (
              <li key={repo.name}>
                <Reveal delay={index * 0.05} className="h-full">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-surface/80 p-5 backdrop-blur transition-colors hover:border-accent"
                  >
                    <span className="font-display font-semibold">{repo.name}</span>
                    {repo.description && <span className="text-sm text-muted">{repo.description}</span>}
                    <span className="mt-auto flex items-center gap-3 pt-2 font-mono text-xs text-muted">
                      {repo.language && <span className="text-accent">{repo.language}</span>}
                      {repo.stars > 0 && (
                        <span className="inline-flex items-center gap-1">
                          <Star size={12} aria-hidden="true" /> {repo.stars}
                        </span>
                      )}
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 font-medium text-accent hover:underline"
      >
        {t('gh_profile')} <ExternalLink size={14} aria-hidden="true" />
      </a>
    </div>
  );
}
