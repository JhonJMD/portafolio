import { Code, Cog, Cable, HelpingHand } from 'lucide-react';
import { siteConfig } from '../../config/portfolioConfig';

const ServiceCard = ({ title, description, icon }) => {
    // Map icon string to component
    const IconComponent = () => {
        switch (icon) {
            case 'Code':
                return <Code size={32} />;
            case 'Cog':
                return <Cog size={32} />;
            case 'Cable':
                return <Cable size={32} />;
            case 'HelpingHand':
                return <HelpingHand size={32} />;
            default:
                return <Code size={32} />;
        }
    };

    return (
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 border-t-4" style={{ borderColor: siteConfig.colors.secondary }}>
            {/* Icon */}
            <div
                className="inline-block p-3 rounded-full mb-4"
                style={{ backgroundColor: `${siteConfig.colors.accent}20` }}
            >
                <IconComponent />
            </div>
            {/* Content */}
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;