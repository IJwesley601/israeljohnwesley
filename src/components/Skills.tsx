import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Database, Server, Globe, Workflow, Terminal, Layers, Zap, Code, Cloud, Package } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const Box = ({ size }: { size: number }) => <Package size={size} />;

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Data & Automation",
      color: "from-emerald-500 to-teal-500",
      skills: [
        { name: 'n8n', icon: <Workflow size={20} /> },
        { name: 'Make', icon: <Zap size={20} /> },
        { name: 'Python', icon: <Code size={20} /> },
        { name: 'dbt', icon: <Database size={20} /> },
        { name: 'Airflow', icon: <Cloud size={20} /> },
        { name: 'Dagster', icon: <Cloud size={20} /> },
        { name: 'ClickHouse', icon: <Database size={20} /> },
      ]
    },
    {
      title: "Web Development",
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: 'React', icon: <Code size={20} /> },
        { name: 'Next.js', icon: <Globe size={20} /> },
        { name: 'TypeScript', icon: <Code size={20} /> },
        { name: 'Node.js', icon: <Server size={20} /> },
        { name: 'Tailwind', icon: <Layers size={20} /> },
        { name: 'Laravel', icon: <Layers size={20} /> },
        { name: 'PostgreSQL', icon: <Database size={20} /> },
        { name: 'Mysql', icon: <Database size={20} /> },

      ]
    },
    {
      title: "DevOps & Tools",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: 'Git', icon: <Terminal size={20} /> },
        { name: 'GitHub', icon: <Terminal size={20} /> },
        { name: 'Docker', icon: <Box size={20} /> },
        { name: 'AWS', icon: <Cloud size={20} /> },
        
      ]
    }
  ];

=======

// Importation des images pour chaque compétence
import html5Icon from '../img/HTML.png';
import css3Icon from '../img/CSS.png';
import javascriptIcon from '../img/JS.png';
import typescriptIcon from '../img/Ts.png';
import reactIcon from '../img/REACT.png';
import tailwindIcon from '../img/TW.png';
import nodeIcon from '../img/Nodes.png';
import gitIcon from '../img/gIT.png';
import Laravel from '../img/Laravel.png'

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'HTML5', level: 95, icon: html5Icon },
    { name: 'CSS3', level: 90, icon: css3Icon },
    { name: 'JavaScript', level: 85, icon: javascriptIcon },
    { name: 'TypeScript', level: 80, icon: typescriptIcon },
    { name: 'React', level: 90, icon: reactIcon },
    { name: 'Tailwind CSS', level: 85, icon: tailwindIcon },
    { name: 'Node.js', level: 75, icon: nodeIcon },
    { name: 'Laravel', level: 75, icon: Laravel },
    { name: 'Git', level: 80, icon: gitIcon },
  ];

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
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
          Expertise Technique
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <span className="mr-2 opacity-70 group-hover:opacity-100">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
=======
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Mes Compétences</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={skill.icon} // Utilisation de l'image importée pour chaque compétence
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.level}%</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8"
      >
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Autres compétences et outils</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Figma','Docker', 'AWS', 'Canva', 'ChatGPT', 'Deepseek'].map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
>>>>>>> 272bdd068dd20352f7fef9bfd3caf7c0302778db
    </div>
  );
};

export default Skills;
