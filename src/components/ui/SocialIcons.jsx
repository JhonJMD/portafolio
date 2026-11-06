import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '../../config/portfolioConfig';

const links = [
  { label: 'GitHub', href: siteConfig.socials.github, Icon: Github },
  { label: 'LinkedIn', href: siteConfig.socials.linkedin, Icon: Linkedin },
  { label: 'WhatsApp', href: siteConfig.socials.whatsapp, Icon: MessageCircle },
  { label: 'Email', href: `mailto:${siteConfig.email}`, Icon: Mail },
];

export default function SocialIcons({ className = '' }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
