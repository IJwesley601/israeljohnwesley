import React, { useState } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code, Workflow } from 'lucide-react';

// Web Project Images
import Pandemiotech from '../img/Pandemiotech.png';
// import StationMeteo from '../img/Capture d'écran(46).png';
import solarfocus from '../img/Solarfocus.png';
import tsenak from '../img/tsenaK.png';

// n8n Workflow Images
import n8nScraping from '../img/n8nscrapping+apify.png';
import n8nAgentRAG from '../img/n8nAGENTRAG.png';
import n8n1 from '../img/n8n1.png';
import n8n2 from '../img/n8n2.png';
=======
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Pandemiotech from '../img/Pandemiotech.png'
import StationMeteo from '../img/Capture d’écran (46).png'
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db

interface Project {
  id: number;
  title: string;
<<<<<<< HEAD
  type: 'web' | 'automation';
  category: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
}

const Projects: React.FC = () => {
  const [activeType, setActiveType] = useState<'web' | 'automation'>('automation');

  const projects: Project[] = [
    // Web Development Projects
    {
      id: 1,
      title: 'Solar Focus',
      type: 'web',
      category: 'Web & Energy',
      description: 'Plateforme moderne d\'optimisation et de suivi de production d\'énergie solaire. Interface intuitive pour visualiser les données de consommation et de production en temps réel.',
      image: solarfocus,
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Recharts'],
      demoLink: 'https://solar-focus.vercel.app/',
    },
    {
      id: 2,
      title: 'Tsenak',
      type: 'web',
      category: 'E-commerce',
      description: 'Solution e-commerce complète (Frontend) offrant une expérience utilisateur fluide pour la navigation, le panier et le paiement.',
      image: tsenak,
      tags: ['React', 'Redux', 'Node.js', 'Stripe'],
      demoLink: 'https://fronttsenak.onrender.com',
    },
    {
      id: 3,
      title: 'APIs DVF (Data)',
      type: 'web',
      category: 'Backend Freelance',
      description: 'Développement d\'APIs robustes pour le traitement et la distribution des données de Valeur Foncière (DVF). Traitement de gros volumes de données.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['Node.js', 'Express.js', 'Backend', 'APIs'],
      codeLink: 'https://github.com/IJwesley601/APIs_DVF.git',
    },
    {
      id: 4,
      title: 'Pandemiotech',
      type: 'web',
      category: 'Health Tech',
      description: 'Plateforme de gestion d\'épidémie complète avec fonctionnalités de recherche, filtrage et cartographie interactive.',
      image: Pandemiotech,
      tags: ['React', 'Node.js', 'MongoDB', 'OpenStreetMap'],
      codeLink: 'https://github.com/IJwesley601/EMIHACK-3.0.git',
    },
    {
      id: 5,
      title: 'Station Météo IoT',
      type: 'web',
      category: 'IoT & Data',
      description: 'Dashboard temps réel pour station météo connectée. Visualisation des données environnementales et système d\'alertes intelligent.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Firebase', 'IoT', 'Express'],
      codeLink: 'https://github.com/IJwesley601/Projet-IOT',
    },

    // n8n Automation Workflows
    {
      id: 6,
      title: 'Scraping + Crawler',
      type: 'automation',
      category: 'Web Automation',
      description: 'Automatise l\'extraction et la réécriture de contenu web via Apify et IA. Récupère le contenu (jusqu\'à 10 pages), utilise GPT-4o-mini pour réécrire les articles dans un style professionnel, puis sauvegarde dans Google Sheets.',
      image: n8nScraping,
      tags: ['n8n', 'Apify', 'GPT-4', 'Google Sheets'],
    },
    {
      id: 7,
      title: 'Email Processing Workflow',
      type: 'automation',
      category: 'Email Automation',
      description: 'Système automatisé de gestion des emails avec validation de sécurité. Vérifie l\'identité des expéditeurs, contrôle leur statut, gère les pièces jointes (conversion, upload MinIO), et les liens Google Drive.',
      image: n8n1,
      tags: ['n8n', 'Gmail', 'MinIO', 'Security'],
    },
    {
      id: 8,
      title: 'Assistant RAG Pâtisserie',
      type: 'automation',
      category: 'AI Agent',
      description: 'Assistant conversationnel intelligent basé sur RAG. Télécharge des documents depuis Google Drive, les indexe dans PostgreSQL via embeddings OpenAI, et répond aux questions clients avec mémoire conversationnelle.',
      image: n8nAgentRAG,
      tags: ['n8n', 'RAG', 'OpenAI', 'PostgreSQL'],
    },
    {
      id: 9,
      title: 'LinkedIn Jobs Scraper',
      type: 'automation',
      category: 'Data Pipeline',
      description: 'Système complet d\'assistance IA avec scraping d\'offres LinkedIn. Extrait automatiquement les offres via Apify, formate les données et permet une recherche via conversation naturelle avec gestion de calendrier et emails.',
      image: n8n2,
      tags: ['n8n', 'Apify', 'LinkedIn', 'Gmail', 'Calendar'],
    },
  ];

  const filteredProjects = projects.filter(p => p.type === activeType);
=======
  description: string;
  image: string;
  tags: string[];
  // demoLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Pandemiotech',
      description: 'Une plateforme de gestion d\'épidemie complète construite avec React, Node.js et MongoDB. Les fonctionnalités incluent la recherche , le filtrage et la fonctionnalité Map.',
      image: Pandemiotech,
      tags: ['Tailwind CSS','React', 'Node.js', 'MongoDB','OpenStreetMap'],
      codeLink: 'https://github.com/IJwesley601/EMIHACK-3.0.git',
      
      // demoLink: 'https://example.com',
    },
    {
      id: 2,
      title: 'Station Meteo',
      description: 'Une plateforme une station météo  qui mesure les conditions environnementales (température, humidité, pression atmosphérique, qualité de l\'air) et affiche les données en temps réel sur un dashboard web. Le système envoie également des alertes personnalisées (par exemple, en cas de pluie imminente ou de mauvaise qualité de l\'air).',
      image: StationMeteo,
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Express'],
      // demoLink: 'https://example.com',
      codeLink: 'https://github.com/IJwesley601/Projet-IOT',
    },
    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'A weather application that provides current conditions and forecasts for any location. Features include interactive maps, hourly forecasts, and weather alerts.',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   tags: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    //   // demoLink: 'https://example.com',
    //   // codeLink: 'https://github.com',
    // },
    // {
    //   id: 4,
    //   title: 'Social Media Dashboard',
    //   description: 'A dashboard for managing and analyzing social media accounts. Features include post scheduling, analytics, and audience insights.',
    //   image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    //   tags: ['React', 'Redux', 'Express', 'Social APIs'],
    //   // demoLink: 'https://example.com',
    //   // codeLink: 'https://github.com',
    // },
  ];

  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
<<<<<<< HEAD
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
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
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
                  {project.title}
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
                {(project.demoLink || project.codeLink) && (
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
                    </div>

                    <a
                      href={project.demoLink || project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-50 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="text-center mt-16">
=======
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Mes Projets</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <div className="md:hidden mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="relative h-60 overflow-hidden">
            <img
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              {projects[currentProject].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {projects[currentProject].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projects[currentProject].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                // href={projects[currentProject].demoLink}
                // href={projects[currentProject]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={16} className="mr-1" /> Demo
              </a>
              <a
                href={projects[currentProject].codeLink}
                // href={projects[currentProject]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Github size={16} className="mr-1" /> Code
              </a>
            </div>
          </div>
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <button
              onClick={prevProject}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-md"
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-white shadow-md"
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Projects Grid (Desktop) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-60 overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex justify-between">
                    {/* <a
                      // href={project.demoLink}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-blue-300 transition-colors duration-300"
                    >
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a> */}
                    <a
                      href={project.codeLink}
                      // href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white hover:text-blue-300 transition-colors duration-300"
                    >
                      <Github size={18} className="mr-1" /> View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-12"
      >
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db
        <a
          href="https://github.com/IJwesley601"
          target="_blank"
          rel="noopener noreferrer"
<<<<<<< HEAD
          className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <Github size={20} className="mr-2" />
          Voir plus sur GitHub
        </a>
      </div>
=======
          className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300"
        >
          <Github size={20} className="mr-2" /> View More on GitHub
        </a>
      </motion.div>
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db
    </div>
  );
};

export default Projects;