import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import MissionVision from './components/sections/MissionVision';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  const handleSectionChange = (section) => {
    setActiveSection(section);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
        
        <main>
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          
          <section id="about" className="min-h-screen py-20">
            <About />
          </section>
          
          <section id="mission-vision" className="min-h-screen py-20 bg-neutral-100 dark:bg-neutral-800">
            <MissionVision />
          </section>
          
          <section id="projects" className="min-h-screen py-20">
            <Projects />
          </section>
          
          <section id="services" className="min-h-screen py-20 bg-neutral-100 dark:bg-neutral-800">
            <Services />
          </section>
          
          <section id="contact" className="min-h-screen py-20">
            <Contact />
          </section>
        </main>
        
        <Footer onSectionChange={handleSectionChange} />
      </div>
    </ThemeProvider>
  );
}

export default App;