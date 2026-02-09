import React, { useState } from 'react';
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

interface Project {
  id: number;
  title: string;
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

  return (
    <div className="container mx-auto px-6">
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