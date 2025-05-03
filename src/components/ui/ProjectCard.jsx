import { Github, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../config/portfolioConfig';

const ProjectCard = ({
    title,
    description,
    image,
    stack,
    challenges,
    demo,
    repo
}) => {
    return (
        <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                    {description}
                </p>
                {/* Tech Stack */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">
                        Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {stack.map((tech, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs rounded"
                                style={{
                                    backgroundColor: siteConfig.colors.accent,
                                    color: siteConfig.colors.dark
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Technical Challenges */}
                <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-1 text-neutral-700 dark:text-neutral-300">
                        Desafíos técnicos:
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {challenges}
                    </p>
                </div>
                {/* Project Links */}
                <div className="flex space-x-3 mt-6">
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 rounded text-sm transition-colors"
                            style={{
                                backgroundColor: siteConfig.colors.secondary,
                                color: siteConfig.colors.light
                            }}
                        >
                            <ExternalLink size={16} className="mr-1" />
                            Demo
                        </a>
                    )}
                    {repo && (
                        <a
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 py-2 rounded text-sm transition-colors border"
                            style={{
                                borderColor: siteConfig.colors.secondary,
                                color: siteConfig.colors.secondary
                            }}
                        >
                            <Github size={16} className="mr-1" />
                            Repositorio
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;