import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">ISRAEL John Wesley</h2>
            <p className="text-gray-400">
              Data Engineer & <span className="font-semibold text-emerald-400">Automation IA</span> & Développeur Web
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">Accueil</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">À propos</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300">Compétences</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projets</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear - 1} ISRAEL John Wesley. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;