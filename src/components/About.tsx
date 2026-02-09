import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
// import AI from '../img/IA.jpeg';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">A propos de Moi </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <div className="w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group bg-gray-900">
              <img
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Data Engineering & AI"
                className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg hidden md:block -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-500/20 rounded-full hidden md:block -z-10"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Data Engineer & <span className="text-blue-600 dark:text-blue-400">Automation IA </span>
            <span className="text-xl md:text-2xl text-gray-500 dark:text-gray-400">& Développeur Web</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            Passionné par la transformation des données en valeur actionnable, je suis un <span className="font-semibold text-gray-800 dark:text-gray-100">Data Engineer</span> et <span className="font-semibold text-gray-800 dark:text-gray-100">Automation & IA Engineer</span>.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Je conçois et déploie des <strong>pipelines de données robustes</strong> et des <strong>workflows d'automatisation complexes</strong>, notamment avec <strong>n8n</strong>. Mon expertise couvre l'ensemble du cycle de vie de la donnée, de l'ingestion à l'analyse, en passant par l'intégration de modèles d'Intelligence Artificielle pour optimiser les processus métier.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Mon objectif est de bâtir des systèmes scalables et résilients qui permettent aux entreprises d'automatiser leurs tâches répétitives et de prendre des décisions éclairées. Je m'engage à fournir des solutions complètes, techniquement solides et maintenables.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Né le : 30 Septembre 2001</span>
            </div>
            <div className="flex items-center">
              <MapPin size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Basé à : Fianarantsoa, Madagascar</span>
            </div>
            <div className="flex items-center">
              <Briefcase size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Expérience : 2+ Ans</span>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-start space-x-3 mt-2 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                <span className="font-bold block text-gray-900 dark:text-white mb-1">Master II en Sciences des Données et Intelligence Artificielle</span>
                <span className="block">École de Management et d'Innovation Technologique</span>
                <span className="opacity-75">Université de Fianarantsoa</span>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex items-start space-x-3 mt-2 bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
              <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
              <div className="text-gray-700 dark:text-gray-300 text-sm">
                <span className="font-bold block text-gray-900 dark:text-white mb-1">Diplôme Science Technologique</span>
                <span className="block">École de Management et d'Innovation Technologique</span>
                <span className="opacity-75">Université de Fianarantsoa</span>
              </div>
            </div>

          </div>

          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block"
          >
            Discutons de vos données
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;