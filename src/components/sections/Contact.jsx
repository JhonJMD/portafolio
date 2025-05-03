import { useState } from 'react';
import { Send, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../../config/portfolioConfig';
import SectionTitle from '../ui/SectionTitle';
import SocialIcons from '../ui/SocialIcons';

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Form submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setError('Por favor, completa todos los campos requeridos.');
            setIsSubmitting(false);
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            // In a real implementation, you would use a service like EmailJS
            // or submit to a backend API
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Reset submission status after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
                title="Contacto"
                subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>

                    <div className="space-y-6 mb-8">
                        <div className="flex items-start">
                            <div
                                className="p-3 rounded-full mr-4"
                                style={{ backgroundColor: `${siteConfig.colors.accent}20` }}
                            >
                                <MapPin size={20} style={{ color: siteConfig.colors.secondary }} />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Ubicación</h4>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    Ciudad, País
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div
                                className="p-3 rounded-full mr-4"
                                style={{ backgroundColor: `${siteConfig.colors.accent}20` }}
                            >
                                <Mail size={20} style={{ color: siteConfig.colors.secondary }} />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Email</h4>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    {siteConfig.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div
                                className="p-3 rounded-full mr-4"
                                style={{ backgroundColor: `${siteConfig.colors.accent}20` }}
                            >
                                <Phone size={20} style={{ color: siteConfig.colors.secondary }} />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">Teléfono</h4>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    +1 (123) 456-7890
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-4">Sígueme en redes sociales</h4>
                        <SocialIcons />
                    </div>

                    {/* Availability */}
                    <div
                        className="mt-12 p-6 rounded-lg relative overflow-hidden"
                        style={{ backgroundColor: siteConfig.colors.secondary }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-40 h-40 rounded-full" style={{ backgroundColor: '#fff' }}></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full" style={{ backgroundColor: '#fff' }}></div>
                        </div>

                        <div className="relative z-10">
                            <h4 className="text-xl font-bold mb-3 text-white">
                                Disponibilidad
                            </h4>
                            <p className="text-neutral-200 mb-4">
                                Actualmente disponible para proyectos freelance y oportunidades de colaboración.
                            </p>
                            <p className="text-neutral-200">
                                <strong>Respuesta típica:</strong> 24-48 horas
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8">
                        <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>

                        {isSubmitted ? (
                            <div
                                className="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 border border-green-200 dark:border-green-700 rounded-lg p-6 text-center"
                            >
                                <CheckCircle
                                    size={48}
                                    className="mx-auto mb-4 text-green-500"
                                />
                                <h4 className="text-xl font-bold mb-2 text-green-700 dark:text-green-300">
                                    ¡Mensaje enviado!
                                </h4>
                                <p className="text-green-600 dark:text-green-400">
                                    Gracias por contactarme. Te responderé lo antes posible.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                {/* Error message */}
                                {error && (
                                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900 dark:bg-opacity-20 border border-red-200 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300">
                                        {error}
                                    </div>
                                )}

                                <div className="mb-6">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                                    >
                                        Nombre *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 transition-all"
                                        style={{
                                            '--ring-color': siteConfig.colors.secondary,
                                            focusRingColor: 'var(--ring-color)'
                                        }}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 transition-all"
                                        style={{
                                            '--ring-color': siteConfig.colors.secondary,
                                            focusRingColor: 'var(--ring-color)'
                                        }}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                                    >
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 transition-all"
                                        style={{
                                            '--ring-color': siteConfig.colors.secondary,
                                            focusRingColor: 'var(--ring-color)'
                                        }}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2"
                                    >
                                        Mensaje *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 transition-all"
                                        style={{
                                            '--ring-color': siteConfig.colors.secondary,
                                            focusRingColor: 'var(--ring-color)'
                                        }}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-6 py-3 rounded-lg text-white font-medium flex items-center justify-center transition-all"
                                    style={{
                                        backgroundColor: isSubmitting ? '#ccc' : siteConfig.colors.secondary
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar mensaje
                                            <Send size={18} className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;