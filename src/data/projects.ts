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
    image: string | string[];
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
        title: 'LinkedIn Jobs Scraper + Assistante IA',
        type: 'automation',
        category: 'Assistante + Scraper',
        description: `Ces deux workflows forment un système complet d'assistance IA avec scraping d'offres d'emploi LinkedIn. Le premier workflow ("LinkedIn Jobs Scraper") extrait automatiquement les offres d'emploi via l'API Apify selon des critères de poste et localisation, formate les données (titre, entreprise, salaire, description) et les sauvegarde dans Google Sheets. Le second workflow ("Assistante Scraper LinkedIn") sert d'interface conversationnelle qui orchestre le premier en plus de gérer le calendrier Google et les emails Gmail. L'utilisateur peut demander à l'assistant de rechercher des offres d'emploi via une conversation naturelle, et le système déclenche automatiquement le scraping avec les paramètres appropriés.`,
        image: [n8n1, n8n2],
        tags: ['n8n', 'Gmail', 'MinIO', 'Security', 'Apify', 'LinkedIn', 'Calendar'],
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
];
