import { siteConfig } from '../../config/portfolioConfig';

const SectionTitle = ({
    title,
    subtitle,
    alignment = 'center'
}) => {
    // Alignment classes
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
    };

    return (
        <div className={`mb-12 max-w-3xl ${alignmentClasses[alignment]}`}>
            <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: siteConfig.colors.primary }}
            >
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                    {subtitle}
                </p>
            )}
            <div
                className="h-1 w-20 mt-4 rounded"
                style={{
                    backgroundColor: siteConfig.colors.secondary,
                    margin: alignment === 'center' ? '0 auto' : alignment === 'right' ? '0 0 0 auto' : '0'
                }}
            ></div>
        </div>
    );
};

export default SectionTitle;