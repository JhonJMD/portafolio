import { Linkedin, Github, MessageCircle, MessagesSquare } from 'lucide-react';
import { siteConfig } from '../../config/portfolioConfig';

const SocialIcons = () => {
    const { socials } = siteConfig;

    return (
        <div className="flex space-x-4">
            {/* LinkedIn */}
            <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 hover:text-blue-500 transition-colors duration-300"
            >
                <Linkedin size={20} />
            </a>
            {/* GitHub */}
            <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
            >
                <Github size={20} />
            </a>
            {/* WhatsApp */}
            <a
                href={socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-neutral-400 hover:text-green-500 transition-colors duration-300"
            >
                <MessageCircle size={20} />
            </a>
            {/* Discord */}
            <a
                href={socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="text-neutral-400 hover:text-indigo-400 transition-colors duration-300"
            >
                <MessagesSquare size={20} />
            </a>
        </div>
    );
};

export default SocialIcons;