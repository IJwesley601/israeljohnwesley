import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import photo from '../img/ISRAEL.jpg';
const Hero: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="relative min-h-screen flex items-center justify-center bg-light dark:bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5 dark:opacity-10 pointer-events-none"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-300/20 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm">
              Portfolio 2025
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Bonjour, Je suis <br />
              <span className="text-gradient">John Wesley</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 font-light">
              Data Engineer & <span className="font-semibold text-secondary">Automation IA</span><br />
              <span className="text-xl md:text-2xl text-gray-500 dark:text-gray-400">& Développeur Web</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg text-lg leading-relaxed mx-auto md:mx-0">
              Je construis des pipelines de données robustes et des automatisations intelligentes, tout en créant des expériences web modernes et performantes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="group relative px-8 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/30 overflow-hidden"
              >
                <span className="relative z-10">Voir mon travail</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-blue-700/50"></div>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-medium rounded-full transition-colors duration-300"
=======
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Bonjour, Je suis <span className="text-blue-600 dark:text-blue-400">John Wesley</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Développeur Full Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Je crée de magnifiques sites vitrines et applications web, en utilisant des technologies modernes pour offrir une expérience utilisateur exceptionnelle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Voir mon travail
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 font-medium rounded-lg transition-colors duration-300"
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db
              >
                Contactez-moi
              </a>
            </div>
          </motion.div>
<<<<<<< HEAD

          <motion.div
            className="md:w-1/2 flex justify-center relative"
=======
          
          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
<<<<<<< HEAD
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <img
                  src={photo}
                  alt="John Wesley"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
=======
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src={photo}
                alt="John Wesley"
                className="w-full h-full object-cover"
              />
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db
            </div>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary transition-colors duration-300"
=======
      
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </div>
  );
};

export default Hero;