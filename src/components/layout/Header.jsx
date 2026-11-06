import { useEffect, useState } from 'react';
import { Menu, Moon, Search, Sun, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLang } from '../../context/LanguageContext';

const SECTIONS = ['home', 'experience', 'projects', 'github', 'contact'];

function useActiveSection() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Header({ onOpenPalette }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  const iconButton =
    'flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent';

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#home" className="font-display text-xl font-bold">
          JM<span className="text-accent">.</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 text-sm md:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`transition-colors hover:text-ink ${active === id ? 'text-accent' : 'text-muted'}`}
            >
              {t(`nav_${id}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="hidden h-11 items-center gap-2 rounded-lg border border-line px-3 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            <Search size={14} aria-hidden="true" /> {t('search')} <kbd className="rounded border border-line px-1">⌘K</kbd>
          </button>
          <button type="button" onClick={toggleLang} aria-label={`${lang === 'es' ? 'EN' : 'ES'} — ${t('lang_switch')}`} className={`${iconButton} font-mono text-xs`}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button type="button" onClick={toggleTheme} aria-label={isDarkMode ? t('to_light') : t('to_dark')} className={iconButton}>
            {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t('menu')}
            aria-expanded={menuOpen}
            className={`${iconButton} md:hidden`}
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Móvil" className="border-t border-line/60 bg-bg/95 px-4 py-3 md:hidden">
          <ul className="flex flex-col">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-muted hover:bg-surface hover:text-ink"
                >
                  {t(`nav_${id}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
