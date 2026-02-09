import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Facebook, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-7 h-7" />,
      href: 'mailto:israeljohnwesley80@gmail.com',
      label: 'israeljohnwesley80@gmail.com',
      color: 'hover:bg-red-500',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-7 h-7" />,
      href: 'https://www.linkedin.com/in/john-wesley-israel-37718b290/',
      label: 'John Wesley ISRAEL',
      color: 'hover:bg-blue-700',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-7 h-7" />,
      href: 'https://web.facebook.com/braxx.izak/',
      label: 'Braxx Izak',
      color: 'hover:bg-blue-600',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-7 h-7" />,
      href: 'https://github.com/IJwesley601',
      label: 'IJwesley601',
      color: 'hover:bg-gray-800 dark:hover:bg-gray-600',
    },
  ];

  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Contactez-moi
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discutons de vos projets data, automatisation ou développement web.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700"
        >
          {/* Location Section */}
          <div className="flex items-center justify-center mb-10 text-gray-600 dark:text-gray-400">
            <MapPin className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
            <span>Fianarantsoa, Madagascar</span>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex items-center p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${link.color} hover:text-white`}
              >
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:bg-white/20 transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                    {link.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80 transition-colors truncate max-w-[200px]">
                    {link.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Préférez-vous m'envoyer un email directement ?
            </p>
            <a
              href="mailto:israeljohnwesley80@gmail.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Envoyer un Email
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;