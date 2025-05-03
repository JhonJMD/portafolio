import { User, Award, Briefcase, GraduationCap } from 'lucide-react';
import { siteConfig } from '../../config/portfolioConfig';
import SectionTitle from '../ui/SectionTitle';
import Separator from '../ui/Separator';

const About = () => {
    // Career timeline data
    const timeline = [
        {
            year: '2025',
            role: 'Desarrollador Full Stack',
            company: 'ClonAI',
            description: 'Desarrollo de aplicaciones full stack utilizando tecnologías modernas, ademas de desarollo de agentes de inteligencia artificial y chatbots.'
        }
    ];

    // Skills data
    const skills = [
        { category: 'Frontend', items: ['React', 'Lit', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'MySQL', 'PostgreSQL', 'Java', 'SpringBoot'] },
        { category: 'Herramientas', items: ['Docker', 'Git', 'Linux', 'WordPress'] }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
                title="Sobre mí"
                subtitle="Conóceme más allá del código"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Bio */}
                <div>
                    <div className="flex items-start mb-6">
                        <div
                            className="p-3 rounded-full mr-4"
                            style={{ backgroundColor: `${siteConfig.colors.accent}20` }}
                        >
                            <User size={24} style={{ color: siteConfig.colors.secondary }} />
                        </div>
                        <h3 className="text-2xl font-bold">Quién soy</h3>
                    </div>

                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                        {siteConfig.bio}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm">
                            <span className="text-sm text-neutral-500 dark:text-neutral-400">Email</span>
                            <p className="font-medium">{siteConfig.email}</p>
                        </div>
                        <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm">
                            <span className="text-sm text-neutral-500 dark:text-neutral-400">Rol</span>
                            <p className="font-medium">{siteConfig.title}</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-8">
                        <div className="flex items-start mb-6">
                            <div
                                className="p-3 rounded-full mr-4"
                                style={{ backgroundColor: `${siteConfig.colors.accent}20` }}
                            >
                                <Award size={24} style={{ color: siteConfig.colors.secondary }} />
                            </div>
                            <h3 className="text-2xl font-bold">Habilidades</h3>
                        </div>

                        <div className="space-y-6">
                            {skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h4 className="text-lg font-semibold mb-3">{skillGroup.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-sm rounded"
                                                style={{
                                                    backgroundColor: siteConfig.colors.accent,
                                                    color: siteConfig.colors.dark
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Experience & Education */}
                <div>
                    <div className="flex items-start mb-6">
                        <div
                            className="p-3 rounded-full mr-4"
                            style={{ backgroundColor: `${siteConfig.colors.accent}20` }}
                        >
                            <Briefcase size={24} style={{ color: siteConfig.colors.secondary }} />
                        </div>
                        <h3 className="text-2xl font-bold">Experiencia</h3>
                    </div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px]" style={{
                                '--before-bg': siteConfig.colors.secondary,
                                beforeBackground: 'var(--before-bg)'
                            }}>
                                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full" style={{ backgroundColor: siteConfig.colors.secondary }}></div>
                                <div className="text-sm font-medium mb-1" style={{ color: siteConfig.colors.secondary }}>{item.year}</div>
                                <h4 className="text-lg font-bold mb-1">{item.role}</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">{item.company}</p>
                                <p className="text-neutral-700 dark:text-neutral-300">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <Separator />

                    {/* Education */}
                    <div className="flex items-start mb-6">
                        <div
                            className="p-3 rounded-full mr-4"
                            style={{ backgroundColor: `${siteConfig.colors.accent}20` }}
                        >
                            <GraduationCap size={24} style={{ color: siteConfig.colors.secondary }} />
                        </div>
                        <h3 className="text-2xl font-bold">Educación</h3>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm">
                        <div className="text-sm font-medium mb-1" style={{ color: siteConfig.colors.secondary }}>2022 - Presente</div>
                        <h4 className="text-lg font-bold mb-1">Tecnologia en Desarrollo de Sistemas Informaticos</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">Unidades Tecnologicas de Santander</p>
                        <p className="text-neutral-700 dark:text-neutral-300">Especialización en desarrollo de software y sistemas de información.</p>
                        <div className="text-sm font-medium mb-1 mt-4" style={{ color: siteConfig.colors.secondary }}>2023 - 2024</div>
                        <h4 className="text-lg font-bold mb-1">Tecnico Laboral en Desarrollo de Software</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">CampusLands</p>
                        <p className="text-neutral-700 dark:text-neutral-300">Especialización en desarrollo de software y sistemas de información.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;