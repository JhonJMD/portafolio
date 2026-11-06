import { lazy, Suspense, useEffect, useState } from 'react';
import { LazyMotion, domAnimation, useReducedMotion } from 'motion/react';
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
const FALLBACK_IDLE_DELAY_MS = 1200;
const IDLE_TIMEOUT_MS = 3000;

// True once the page has loaded and the browser is idle, so heavy 3D work never competes with first paint.
function useIdleReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId;
    let timerId;
    const arm = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(() => setReady(true), { timeout: IDLE_TIMEOUT_MS });
      } else {
        timerId = setTimeout(() => setReady(true), FALLBACK_IDLE_DELAY_MS);
      }
    };
    if (document.readyState === 'complete') arm();
    else window.addEventListener('load', arm, { once: true });

    return () => {
      window.removeEventListener('load', arm);
      if (idleId) window.cancelIdleCallback(idleId);
      clearTimeout(timerId);
    };
  }, []);

  return ready;
}

function Portfolio() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const sceneReady = useIdleReady();

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
      {sceneReady && (
        <Suspense fallback={null}>
          <BackgroundScene animated={!reduceMotion} />
        </Suspense>
      )}

      <Header onOpenPalette={() => setPaletteOpen(true)} />

      <main>
        <section id="home">
          <Home sceneReady={sceneReady} />
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
        <LazyMotion features={domAnimation}>
          <Portfolio />
        </LazyMotion>
      </LanguageProvider>
    </ThemeProvider>
  );
}
