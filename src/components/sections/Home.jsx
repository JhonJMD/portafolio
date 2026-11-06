import { lazy, Suspense } from 'react';
import { useReducedMotion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import { heroSkills, siteConfig } from '../../config/portfolioConfig';
import { useLang } from '../../context/LanguageContext';
import SocialIcons from '../ui/SocialIcons';

const ModelViewer = lazy(() => import('./ModelViewer'));

export default function Home() {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center gap-8 px-4 pb-16 pt-28 md:px-8 lg:flex-row lg:gap-4">
      <div
        aria-hidden="true"
        className="aurora pointer-events-none absolute -left-20 top-24 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="flex flex-1 flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 font-mono text-xs text-accent backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {t('hero_status')}
        </span>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Jhon Jairo
          <br />
          Marín Díaz
        </h1>
        <p className="font-display text-xl font-medium text-accent2 md:text-2xl">{t('hero_role')}</p>
        <p className="max-w-xl text-lg leading-relaxed text-muted">{t('hero_intro')}</p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#experience"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-accent px-6 font-semibold text-onaccent transition-transform hover:-translate-y-0.5"
          >
            {t('hero_cta_experience')} <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-xl border border-line px-6 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            {t('hero_cta_contact')}
          </a>
          <a
            href={siteConfig.cvUrl}
            download
            className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-line px-6 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <Download size={16} aria-hidden="true" /> {t('hero_cta_cv')}
          </a>
        </div>

        <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
          {heroSkills.map((skill) => (
            <li key={skill} className="rounded-md border border-line bg-surface/60 px-2.5 py-1">
              {skill}
            </li>
          ))}
        </ul>
        <SocialIcons />
      </div>

      <div className="h-[340px] w-full flex-1 sm:h-[440px] lg:h-[560px]">
        <Suspense fallback={null}>
          <ModelViewer animated={!reduceMotion} />
        </Suspense>
      </div>
    </div>
  );
}
