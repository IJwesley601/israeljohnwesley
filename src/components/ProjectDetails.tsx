import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Briefcase, Tag } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <h2 className="text-3xl font-bold mb-4">Projet introuvable</h2>
                <Link to="/" className="text-blue-600 hover:underline flex items-center">
                    <ArrowLeft className="mr-2" /> Retour à l'accueil
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <Link
                    to="/"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Retour aux projets
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
                        {/* Header Image(s) */}
                        <div className={`w-full overflow-hidden relative ${Array.isArray(project.image) ? 'min-h-[300px]' : 'h-64 md:h-96'}`}>
                            {Array.isArray(project.image) ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 dark:bg-gray-900">
                                    {project.image.map((img, index) => (
                                        <div key={index} className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                                            <img
                                                src={img}
                                                alt={`${project.title} - flux ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md text-white text-xs px-2 py-1 rounded">
                                                Vue {index + 1}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                                </>
                            )}
                            <div className={`absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white ${Array.isArray(project.image) ? 'relative !bottom-auto !left-auto p-6 !text-gray-900 dark:!text-white' : ''}`}>
                                <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm ${project.type === 'automation' ? 'bg-emerald-500' : 'bg-blue-600'
                                    } mb-3 inline-block`}>
                                    {project.category}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex flex-wrap gap-8">
                                <div className="flex-1 min-w-[300px]">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">À propos du projet</h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                                            >
                                                <Tag size={14} className="mr-1.5" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full md:w-80 space-y-6">
                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Infos Projet</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <Briefcase className="w-5 h-5 text-gray-400 mt-0.5 mr-3" />
                                                <div>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Type</p>
                                                    <p className="text-gray-900 dark:text-gray-200 capitalize">{project.type}</p>
                                                </div>
                                            </div>
                                            {/* Add more metadata if available, e.g. client, date, etc. */}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
                                            >
                                                <ExternalLink size={18} className="mr-2" />
                                                Voir le site
                                            </a>
                                        )}
                                        {project.codeLink && (
                                            <a
                                                href={project.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-full px-6 py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg"
                                            >
                                                <Github size={18} className="mr-2" />
                                                Voir le code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
