import { Target, Eye } from 'lucide-react';
import { siteConfig } from '../../config/portfolioConfig';
import SectionTitle from '../ui/SectionTitle';

const MissionVision = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
                title="Misión y Visión"
                subtitle="Mi enfoque y propósito profesional"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Mission */}
                <div
                    className="bg-white dark:bg-neutral-700 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
                    style={{
                        borderLeft: `4px solid ${siteConfig.colors.primary}`
                    }}
                >
                    {/* Background accent */}
                    <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                        style={{ backgroundColor: siteConfig.colors.primary }}
                    ></div>

                    <div className="relative z-10">
                        <div className="flex items-center mb-6">
                            <div
                                className="p-3 rounded-full mr-4"
                                style={{ backgroundColor: `${siteConfig.colors.accent}30` }}
                            >
                                <Target size={28} style={{ color: siteConfig.colors.primary }} />
                            </div>
                            <h3
                                className="text-2xl md:text-3xl font-bold"
                                style={{ color: siteConfig.colors.primary }}
                            >
                                Misión
                            </h3>
                        </div>

                        <p className="text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
                            {siteConfig.mission}
                        </p>

                        {/* Bullet points */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-start">
                                <div
                                    className="w-2 h-2 mt-2 mr-3 rounded-full"
                                    style={{ backgroundColor: siteConfig.colors.primary }}
                                ></div>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Crear soluciones centradas en el usuario.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="w-2 h-2 mt-2 mr-3 rounded-full"
                                    style={{ backgroundColor: siteConfig.colors.primary }}
                                ></div>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Implementar tecnologías que resuelvan problemas reales.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="w-2 h-2 mt-2 mr-3 rounded-full"
                                    style={{ backgroundColor: siteConfig.colors.primary }}
                                ></div>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Contribuir al crecimiento tecnológico de las organizaciones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision */}
                <div
                    className="bg-white dark:bg-neutral-700 rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden"
                    style={{
                        borderLeft: `4px solid ${siteConfig.colors.secondary}`
                    }}
                >
                    {/* Background accent */}
                    <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                        style={{ backgroundColor: siteConfig.colors.secondary }}
                    ></div>

                    <div className="relative z-10">
                        <div className="flex items-center mb-6">
                            <div
                                className="p-3 rounded-full mr-4"
                                style={{ backgroundColor: `${siteConfig.colors.accent}30` }}
                            >
                                <Eye size={28} style={{ color: siteConfig.colors.secondary }} />
                            </div>
                            <h3
                                className="text-2xl md:text-3xl font-bold"
                                style={{ color: siteConfig.colors.secondary }}
                            >
                                Visión
                            </h3>
                        </div>

                        <p className="text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
                            {siteConfig.vision}
                        </p>

                        {/* Bullet points */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-start">
                                <div
                                    className="w-2 h-2 mt-2 mr-3 rounded-full"
                                    style={{ backgroundColor: siteConfig.colors.secondary }}
                                ></div>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Liderar proyectos tecnológicos innovadores.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="w-2 h-2 mt-2 mr-3 rounded-full"
                                    style={{ backgroundColor: siteConfig.colors.secondary }}
                                ></div>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Fomentar la transformación digital de las empresas.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div
                                    className="w-2 h-2 mt-2 mr-3 rounded-full"
                                    style={{ backgroundColor: siteConfig.colors.secondary }}
                                ></div>
                                <p className="text-neutral-600 dark:text-neutral-300">
                                    Desarrollar soluciones que impacten positivamente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="mt-16">
                <h3
                    className="text-2xl font-bold text-center mb-10"
                    style={{ color: siteConfig.colors.primary }}
                >
                    Valores que me guían
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { title: "Innovación", description: "Búsqueda constante de nuevas soluciones" },
                        { title: "Calidad", description: "Excelencia en cada línea de código" },
                        { title: "Empatía", description: "Comprensión de las necesidades del usuario" },
                        { title: "Colaboración", description: "Trabajo en equipo para mejores resultados" }
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm text-center transition-transform duration-300 hover:-translate-y-2"
                        >
                            <h4
                                className="text-xl font-bold mb-2"
                                style={{ color: siteConfig.colors.secondary }}
                            >
                                {value.title}
                            </h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MissionVision;