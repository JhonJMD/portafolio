import { lazy, Suspense, useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import GitHub from './components/sections/GitHub';
import Contact from './components/sections/Contact';
import CommandPalette from './components/ui/CommandPalette';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const BackgroundScene = lazy(() => import('./components/sections/BackgroundScene'));

function Portfolio() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen text-ink">
      <Suspense fallback={null}>
        <BackgroundScene animated={!reduceMotion} />
      </Suspense>

      <Header onOpenPalette={() => setPaletteOpen(true)} />

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="github">
          <GitHub />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      {paletteOpen && <CommandPalette onClose={() => setPaletteOpen(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Portfolio />
      </LanguageProvider>
    </ThemeProvider>
  );
}
