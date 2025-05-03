import { servicesData } from '../../config/portfolioConfig';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
                title="Servicios"
                subtitle="Soluciones que ofrezco para impulsar tu proyecto"
            />
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {servicesData.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                    />
                ))}
            </div>
            {/* Benefits Section */}
            <div className="mt-20">
                <h3 className="text-2xl font-bold text-center mb-10">
                    ¿Por qué trabajar conmigo?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Enfoque personalizado",
                            description: "Cada proyecto es único y recibe atención especializada según sus necesidades específicas."
                        },
                        {
                            title: "Comunicación efectiva",
                            description: "Mantengo canales de comunicación abiertos durante todo el proceso de desarrollo."
                        },
                        {
                            title: "Soluciones escalables",
                            description: "Desarrollo con visión de futuro, permitiendo expansión y crecimiento de las aplicaciones."
                        }
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-sm"
                        >
                            <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {/* CTA Section */}
            <div className="mt-20 text-center">
                <h3 className="text-2xl font-bold mb-4">
                    ¿Listo para comenzar tu proyecto?
                </h3>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
                    Contáctame para discutir cómo puedo ayudarte a llevar tu idea al siguiente nivel.
                </p>
                <a
                    href="#contact"
                    className="inline-block px-8 py-3 rounded-full text-white font-medium transition-transform duration-300 hover:scale-105"
                    style={{ backgroundColor: '#A64669' }}
                >
                    Hablemos de tu proyecto
                </a>
            </div>
        </div>
    );
};

export default Services;