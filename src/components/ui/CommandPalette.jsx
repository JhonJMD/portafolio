import { useEffect, useMemo, useRef, useState } from 'react';
import { CornerDownLeft, Search } from 'lucide-react';
import { projects, siteConfig } from '../../config/portfolioConfig';
import { useLang } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';

const SECTIONS = ['home', 'experience', 'projects', 'github', 'contact'];

function goTo(id) {
  window.location.hash = id;
}

function buildCommands({ t, tr, toggleTheme, toggleLang }) {
  return [
    ...SECTIONS.map((id) => ({ id: `s-${id}`, group: t('palette_section'), label: t(`nav_${id}`), run: () => goTo(id) })),
    ...projects.map((project) => ({
      id: `p-${project.id}`,
      group: t('palette_project'),
      label: `${tr(project.name)} · ${project.org}`,
      run: () => goTo('projects'),
    })),
    { id: 'a-theme', group: t('palette_action'), label: t('palette_toggle_theme'), run: toggleTheme },
    { id: 'a-lang', group: t('palette_action'), label: t('palette_toggle_lang'), run: toggleLang },
    { id: 'a-cv', group: t('palette_action'), label: t('palette_cv'), run: () => window.open(siteConfig.cvUrl, '_blank', 'noopener') },
  ];
}

export default function CommandPalette({ onClose }) {
  const { t, tr, toggleLang } = useLang();
  const { toggleTheme } = useTheme();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  const commands = useMemo(() => buildCommands({ t, tr, toggleTheme, toggleLang }), [t, tr, toggleTheme, toggleLang]);
  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle ? commands.filter((command) => command.label.toLowerCase().includes(needle)) : commands;
  }, [commands, query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const run = (command) => {
    onClose();
    command.run();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelected((index) => Math.min(index + 1, results.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelected((index) => Math.max(index - 1, 0));
    } else if (event.key === 'Enter' && results[selected]) {
      run(results[selected]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-bg/70 px-4 pt-[15vh] backdrop-blur-sm"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('search')}
        onKeyDown={handleKeyDown}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={18} className="text-muted" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelected(0);
            }}
            placeholder={t('palette_placeholder')}
            aria-label={t('palette_placeholder')}
            className="h-14 w-full bg-transparent text-ink outline-none placeholder:text-muted"
          />
        </div>

        <ul role="listbox" className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">{t('palette_empty')}</li>}
          {results.map((command, index) => (
            <li key={command.id} role="option" aria-selected={index === selected}>
              <button
                type="button"
                onClick={() => run(command)}
                onMouseEnter={() => setSelected(index)}
                className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm ${
                  index === selected ? 'bg-accent/15 text-ink' : 'text-muted'
                }`}
              >
                <span>{command.label}</span>
                <span className="flex items-center gap-2 font-mono text-xs">
                  {command.group}
                  {index === selected && <CornerDownLeft size={12} aria-hidden="true" />}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="border-t border-line px-4 py-2 font-mono text-xs text-muted">{t('palette_hint')}</p>
      </div>
    </div>
  );
}
