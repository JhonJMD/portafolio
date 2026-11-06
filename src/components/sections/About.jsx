import { Bot, Lightbulb, Zap } from 'lucide-react';
import { helpItems, skillGroups } from '../../config/portfolioConfig';
import { useLang } from '../../context/LanguageContext';
import Reveal from '../ui/Reveal';
import SectionTitle from '../ui/SectionTitle';

const icons = { Lightbulb, Zap, Bot };

export default function About() {
  const { t, tr } = useLang();

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <SectionTitle eyebrow={t('about_eyebrow')} title={t('about_title')} />

      <Reveal>
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted">{t('about_bio')}</p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {helpItems.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <Reveal key={item.id} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface/80 p-6 backdrop-blur">
                <Icon className="mb-4 text-accent" size={26} aria-hidden="true" />
                <h3 className="mb-2 font-display text-lg font-semibold">{tr(item.title)}</h3>
                <p className="text-sm leading-relaxed text-muted">{tr(item.text)}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="mb-4 font-mono text-sm text-accent">{t('skills_title')}</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.id}>
                <p className="mb-2 text-sm font-medium">{tr(group.label)}</p>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-md border border-line bg-surface/60 px-2.5 py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-mono text-sm text-accent">{t('languages_title')}</h3>
          <p className="text-sm text-muted">{t('languages_value')}</p>
        </div>
      </div>
    </div>
  );
}
