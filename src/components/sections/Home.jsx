import { ArrowDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig } from '../../config/portfolioConfig';
import SocialIcons from '../ui/SocialIcons';
import ModelViewer from './ModelViewer';

const Home = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 pt-20 md:pt-0">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left md:pr-8 z-10">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        style={{ color: isDarkMode ? siteConfig.colors.accent : siteConfig.colors.primary }}
                    >
                        Full Stack Developer
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-neutral-700 dark:text-neutral-300">
                        Creando soluciones digitales con propósito e impacto
                    </p>
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full text-white font-medium transition-transform duration-300 hover:scale-105"
                            style={{ backgroundColor: siteConfig.colors.secondary }}
                        >
                            Ver proyectos
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full font-medium transition-transform duration-300 hover:scale-105 border-2"
                            style={{
                                borderColor: siteConfig.colors.secondary,
                                color: isDarkMode ? siteConfig.colors.light : siteConfig.colors.primary
                            }}
                        >
                            Contactar
                        </a>
                    </div>
                    <div className="mt-8">
                        <SocialIcons />
                    </div>
                </div>
                {/* 3D Model */}
                <div className="md:w-1/2 relative h-80 md:h-96 lg:h-[500px] w-full mt-8 md:mt-0">
                    <ModelViewer />
                </div>
            </div>
            {/* Scroll Down Indicator */}
            <div className="flex justify-center pb-8">
                <a
                    href="#about"
                    className="animate-bounce p-2"
                    aria-label="Scroll down"
                >
                    <ArrowDown
                        size={32}
                        className="text-neutral-400"
                    />
                </a>
            </div>
        </div>
    );
};

export default Home;