import { siteConfig } from '../../config/portfolioConfig';
import { useLang } from '../../context/LanguageContext';
import SocialIcons from '../ui/SocialIcons';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-8 md:flex-row md:items-center md:px-8">
        <div className="flex flex-col gap-1 text-sm text-muted">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. {t('footer_rights')}
          </span>
          <span className="font-mono text-xs">{t('footer_built')}</span>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}
