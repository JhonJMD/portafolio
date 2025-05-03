import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig } from '../../config/portfolioConfig';

const Header = ({ activeSection, onSectionChange }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    // Navigation items
    const navItems = [
        { id: 'home', label: 'Inicio' },
        { id: 'about', label: 'Sobre mí' },
        { id: 'mission-vision', label: 'Misión y Visión' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'services', label: 'Servicios' },
        { id: 'contact', label: 'Contacto' },
    ];

    // Handle scroll event to change header style
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile menu toggle
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Handle navigation item click
    const handleNavClick = (sectionId) => {
        onSectionChange(sectionId);
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white bg-opacity-90 dark:bg-neutral-900 dark:bg-opacity-90 backdrop-blur-sm shadow-md py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a
                            href="#home"
                            className="text-xl md:text-2xl font-bold text-primary dark:text-accent"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('home');
                            }}
                            style={{ color: siteConfig.colors.primary }}
                        >
                            {siteConfig.name}
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`transition-colors duration-300 hover:text-secondary dark:hover:text-accent ${activeSection === item.id
                                    ? 'text-secondary dark:text-accent font-medium'
                                    : 'text-neutral-700 dark:text-neutral-300'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.id);
                                }}
                                style={{
                                    color: activeSection === item.id ? siteConfig.colors.secondary : ''
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                        {/* Theme toggle button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDarkMode ? (
                                <Sun size={20} className="text-accent" />
                            ) : (
                                <Moon size={20} className="text-primary" />
                            )}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {isDarkMode ? (
                                <Sun size={20} className="text-accent" />
                            ) : (
                                <Moon size={20} className="text-primary" />
                            )}
                        </button>

                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-neutral-900 shadow-lg">
                    <div className="py-4 px-4 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`block py-2 transition-colors duration-300 ${activeSection === item.id
                                    ? 'text-secondary dark:text-accent font-medium'
                                    : 'text-neutral-700 dark:text-neutral-300'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.id);
                                }}
                                style={{
                                    color: activeSection === item.id ? siteConfig.colors.secondary : ''
                                }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;