import { useState } from 'react';
import { projectsData } from '../../config/portfolioConfig';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
    // State for filtering projects (could be expanded for more sophisticated filtering)
    const [filter, setFilter] = useState('all');

    // Get all unique tech stacks for filtering
    const allTechnologies = Array.from(
        new Set(projectsData.flatMap(project => project.stack))
    );

    // Filter projects based on selected filter
    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.stack.includes(filter));

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
                title="Proyectos"
                subtitle="Explorando mis trabajos más destacados"
            />

            {/* Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-2">
                <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                        }`}
                    style={filter === 'all' ? { backgroundColor: '#A64669' } : {}}
                >
                    Todos
                </button>

                {allTechnologies.map((tech, index) => (
                    <button
                        key={index}
                        onClick={() => setFilter(tech)}
                        className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === tech ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                            }`}
                        style={filter === tech ? { backgroundColor: '#A64669' } : {}}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        stack={project.stack}
                        challenges={project.challenges}
                        demo={project.demo}
                        repo={project.repo}
                    />
                ))}
            </div>

            {/* No results message */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-neutral-600 dark:text-neutral-400">
                        No se encontraron proyectos con la tecnología seleccionada.
                    </p>
                    <button
                        onClick={() => setFilter('all')}
                        className="mt-4 px-4 py-2 text-white rounded-full"
                        style={{ backgroundColor: '#A64669' }}
                    >
                        Ver todos los proyectos
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projects;