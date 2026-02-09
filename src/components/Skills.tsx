import React from 'react';
import { motion } from 'framer-motion';
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

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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
    </div>
  );
};

export default Skills;
