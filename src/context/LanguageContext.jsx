import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from '../content/ui';

const LanguageContext = createContext(undefined);
const STORAGE_KEY = 'lang';

function detectLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    // localStorage can be blocked (private mode); fall through to browser language.
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Persisting the choice is a convenience only.
    }
  }, [lang]);

  const toggleLang = useCallback(() => setLang((current) => (current === 'es' ? 'en' : 'es')), []);
  const t = useCallback((key) => ui[lang][key] ?? key, [lang]);
  // Resolves a bilingual { es, en } object; plain strings pass through.
  const tr = useCallback((value) => (typeof value === 'string' ? value : value?.[lang] ?? value?.es ?? ''), [lang]);

  const value = useMemo(() => ({ lang, toggleLang, t, tr }), [lang, toggleLang, t, tr]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
}
