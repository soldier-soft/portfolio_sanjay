import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Database, Layout, Terminal, Brain } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      icon: <Server className="w-6 h-6 text-blue-500" />,
      title: "Backend",
      skills: ["Java", "Core Java", "JDBC", "Servlets", "JSP", "Spring MVC", "Hibernate"],
    },
    {
      icon: <Layout className="w-6 h-6 text-purple-500" />,
      title: "Frontend",
      skills: ["React JS", "JavaScript", "HTML", "CSS"],
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: "Database",
      skills: ["SQL", "MySQL"],
    },
    {
      icon: <Terminal className="w-6 h-6 text-yellow-500" />,
      title: "Languages",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-500" />,
      title: "Concepts",
      skills: ["OOPs", "Collections", "REST APIs", "CRUD", "Data Preprocessing"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gray-800/70 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-blue-500 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;