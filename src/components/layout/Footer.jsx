import { siteConfig } from '../../config/portfolioConfig';
import SocialIcons from '../ui/SocialIcons';

const Footer = ({ onSectionChange }) => {
    // Current year for copyright
    const currentYear = new Date().getFullYear();

    // Quick links
    const quickLinks = [
        { id: 'home', label: 'Inicio' },
        { id: 'about', label: 'Sobre mí' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'contact', label: 'Contacto' },
    ];

    // Handle navigation
    const handleNavClick = (sectionId) => {
        onSectionChange(sectionId);
    };

    return (
        <footer className="bg-neutral-900 text-neutral-100 pt-12 pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About section */}
                    <div>
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: siteConfig.colors.accent }}
                        >
                            {siteConfig.name}
                        </h3>
                        <p className="text-neutral-400 mb-4">
                            {siteConfig.title} especializado en crear soluciones digitales con impacto.
                        </p>
                        <SocialIcons />
                    </div>
                    {/* Quick links */}
                    <div>
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: siteConfig.colors.accent }}
                        >
                            Enlaces rápidos
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                        <a
                                        href={`#${link.id}`}
                                        className="text-neutral-400 hover:text-accent transition-colors duration-300"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.id);
                                        }}
                                        style={{
                                            '--hover-color': siteConfig.colors.accent
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Contact info */}
                    <div>
                        <h3
                            className="text-xl font-bold mb-4"
                            style={{ color: siteConfig.colors.accent }}
                        >
                            Contacto
                        </h3>
                        <p className="text-neutral-400 mb-2">
                            Para consultas y proyectos:
                        </p>
                        <p className="text-neutral-300 mb-4">
                            {siteConfig.email}
                        </p>
                        <a
                            href="#contact"
                            className="inline-block px-4 py-2 rounded transition-colors duration-300"
                            style={{
                                backgroundColor: siteConfig.colors.secondary,
                                color: siteConfig.colors.light
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('contact');
                            }}
                        >
                            Contáctame
                        </a>
                    </div>
                </div>
                {/* Copyright */}
                <div className="pt-6 mt-6 border-t border-neutral-800 text-center text-neutral-500 text-sm">
                    <p>© {currentYear} {siteConfig.name}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;