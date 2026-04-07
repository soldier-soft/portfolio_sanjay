import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronRight, MessageCircle } from 'lucide-react';

import profilePic from '../assets/profile.png';
import resumePdf from '../assets/resume.pdf';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Sanjay_E_Resume.pdf';
    link.click();
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 relative rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl absolute top-0 left-0 hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={profilePic} 
                alt="Sanjay E" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full animate-pulse blur-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10 opacity-60"></div>
          </motion.div>

          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              SANJAY E
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-3"
          >
            Full Stack Developer | Java Developer
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 mb-8"
          >
            "Building scalable web apps & intelligent solutions"
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            View Projects <ChevronRight size={18} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl font-semibold flex items-center gap-2 hover:border-blue-500 transition-all"
          >
            Download Resume <Download size={18} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 bg-purple-600/20 backdrop-blur-sm border border-purple-500 rounded-xl font-semibold flex items-center gap-2 hover:bg-purple-600/30 transition-all"
          >
            Contact Me <MessageCircle size={18} />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="https://www.linkedin.com/in/sanjay-e-934764343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="https://github.com/elagosan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="mailto:sanjayit5029@gmail.com"
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;