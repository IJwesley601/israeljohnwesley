import Pandemiotech from '../img/Pandemiotech.png';
import solarfocus from '../img/Solarfocus.png';
import tsenak from '../img/tsenaK.png';

// n8n Workflow Images
import n8nScraping from '../img/n8nscrapping+apify.png';
import n8nAgentRAG from '../img/n8nAGENTRAG.png';
import n8n1 from '../img/n8n1.png';
import n8n2 from '../img/n8n2.png';

export interface Project {
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

export const projects: Project[] = [
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
