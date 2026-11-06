import { experience } from '../../config/portfolioConfig';
import { useLang } from '../../context/LanguageContext';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

function Chips({ items }) {
  return (
    <ul className="flex flex-wrap gap-2 font-mono text-xs text-accent">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-line px-2.5 py-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

function TimelineItem({ item, index }) {
  const { tr, t } = useLang();
  const isWork = item.type === 'work';

  return (
    <Reveal delay={index * 0.05}>
      <article className="relative ml-6 rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur transition-colors hover:border-accent md:ml-8">
        <span
          aria-hidden="true"
          className={`absolute -left-[1.2rem] top-7 h-3 w-3 rounded-full border-2 border-bg md:-left-[1.45rem] ${isWork ? 'bg-accent' : 'bg-accent2'}`}
        />
        <div className="mb-1 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-mono text-xs text-muted">{tr(item.period)}</span>
          {!isWork && <span className="font-mono text-xs uppercase text-accent2">{t('exp_education')}</span>}
        </div>
        <h3 className="font-display text-xl font-semibold">{tr(item.role)}</h3>
        <p className="mb-3 mt-1 font-medium text-accent2">
          {item.org}
          {tr(item.note) && <span className="font-normal text-muted"> — {tr(item.note)}</span>}
        </p>
        {tr(item.summary) && <p className="mb-4 leading-relaxed text-muted">{tr(item.summary)}</p>}
        {item.projects.length > 0 && <Chips items={item.projects} />}
      </article>
    </Reveal>
  );
}

export default function Experience() {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle eyebrow={t('exp_eyebrow')} title={t('exp_title')} />
      <div className="relative flex flex-col gap-5">
        <span aria-hidden="true" className="absolute bottom-2 left-[0.7rem] top-2 w-px bg-line md:left-[0.95rem]" />
        {experience.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
