import { useState } from 'react';
import { projects } from '../../config/portfolioConfig';
import { useLang } from '../../context/LanguageContext';
import ProjectCard from '../ui/ProjectCard';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

const FILTERS = ['all', 'ai', 'fullstack', 'freelance'];

export default function Projects() {
  const { t } = useLang();
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle eyebrow={t('proj_eyebrow')} title={t('proj_title')} intro={t('proj_intro')} />

      <div role="group" aria-label={t('proj_title')} className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
            className={`min-h-11 rounded-full border px-5 text-sm transition-colors ${
              filter === id ? 'border-accent bg-accent font-semibold text-onaccent' : 'border-line text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {t(`filter_${id}`)}
          </button>
        ))}
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <li key={project.id}>
            <Reveal delay={Math.min(index, 5) * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
