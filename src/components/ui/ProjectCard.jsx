import { ExternalLink } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';

export default function ProjectCard({ project }) {
  const { t, tr } = useLang();

  return (
    <article className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      <span className="font-mono text-xs uppercase tracking-wide text-accent2">{project.org}</span>
      <h3 className="font-display text-xl font-semibold">{tr(project.name)}</h3>
      <p className="text-sm leading-relaxed text-muted">{tr(project.description)}</p>
      {project.stack.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-2 pt-2 font-mono text-xs text-accent">
          {project.stack.map((item) => (
            <li key={item} className="rounded-md border border-line px-2 py-1">
              {item}
            </li>
          ))}
        </ul>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          {t('proj_visit')} <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
