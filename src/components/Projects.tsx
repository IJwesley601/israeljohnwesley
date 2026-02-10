import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [activeType, setActiveType] = useState<'web' | 'automation'>('automation');

  const filteredProjects = projects.filter(p => p.type === activeType);

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
        <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Projets Réalisés</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-8">
          Découvrez mes réalisations en développement web et mes workflows d'automatisation n8n.
        </p>

        {/* Category Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 p-1.5 rounded-full inline-flex shadow-inner">
            <button
              onClick={() => setActiveType('web')}
              className={`flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeType === 'web'
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
            >
              <Code size={18} className="mr-2" /> Développement Web
            </button>
            <button
              onClick={() => setActiveType('automation')}
              className={`flex items-center px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeType === 'automation'
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
            >
              <Workflow size={18} className="mr-2" /> Workflows n8n
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors z-10"></div>
                {/* Image Link */}
                {project.type === 'automation' ? (
                  <Link to={`/project/${project.id}`} className="block h-full w-full">
                    {Array.isArray(project.image) ? (
                      <div className="flex h-full w-full">
                        {project.image.map((img, index) => (
                          <img
                            key={index}
                            src={img}
                            alt={`${project.title} - part ${index + 1}`}
                            className="w-1/2 h-full object-cover transform group-hover:scale-110 transition-transform duration-700 cursor-pointer border-r border-gray-100 last:border-0"
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                      />
                    )}
                  </Link>
                ) : (
                  Array.isArray(project.image) ? (
                    <div className="flex h-full w-full">
                      {project.image.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${project.title} - part ${index + 1}`}
                          className="w-1/2 h-full object-cover transform group-hover:scale-110 transition-transform duration-700 border-r border-gray-100 last:border-0"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  )
                )}

                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 backdrop-blur-sm text-xs font-bold rounded-full shadow-sm text-white ${project.type === 'automation' ? 'bg-emerald-500/90' : 'bg-blue-600/90'
                    }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.type === 'automation' ? (
                    <Link to={`/project/${project.id}`}>{project.title}</Link>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 text-xs rounded-md">+{project.tags.length - 3}</span>
                  )}
                </div>

                {/* Links */}
                {(project.demoLink || project.codeLink || project.type === 'automation') && (
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <div className="flex space-x-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-1.5" /> Demo
                        </a>
                      )}
                      {project.codeLink && (
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <Github size={16} className="mr-1.5" /> Code
                        </a>
                      )}
                      {project.type === 'automation' && (
                        <Link
                          to={`/project/${project.id}`}
                          className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-1.5" /> Détails
                        </Link>
                      )}
                    </div>

                    {project.type === 'automation' ? (
                      <Link
                        to={`/project/${project.id}`}
                        className="p-2 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    ) : (
                      <a
                        href={project.demoLink || project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="text-center mt-16">
        <a
          href="https://github.com/IJwesley601"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <Github size={20} className="mr-2" />
          Voir plus sur GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
