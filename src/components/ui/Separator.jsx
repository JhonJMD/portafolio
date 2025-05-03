import { siteConfig } from '../../config/portfolioConfig';

const Separator = ({ className = '' }) => {
    return (
        <div className={`flex items-center my-8 ${className}`}>
            <div
                className="flex-grow h-0.5 rounded"
                style={{ backgroundColor: siteConfig.colors.secondary }}
            ></div>
            <div
                className="w-2 h-2 mx-2 rounded-full"
                style={{ backgroundColor: siteConfig.colors.secondary }}
            ></div>
            <div
                className="flex-grow h-0.5 rounded"
                style={{ backgroundColor: siteConfig.colors.secondary }}
            ></div>
        </div>
    );
};

export default Separator;