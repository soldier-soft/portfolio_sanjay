import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Brain, Coffee } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Fraud Detection in Online Payments",
      tech: "Python, Machine Learning",
      description: "Built predictive model for fraud detection with data preprocessing and feature engineering achieving high accuracy classification.",
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      github: "https://github.com/elagosan/fraud-detection",
      tags: ["Python", "ML", "Data Science"],
    },
    {
      title: "Food Order Processing System",
      tech: "Java, SQL, JDBC",
      description: "Backend order validation system with automated workflow, pricing, and MySQL integration for secure data management.",
      icon: <Coffee className="w-12 h-12 text-purple-500" />,
      github: "https://github.com/elagosan/food-order-system",
      tags: ["Java", "SQL", "JDBC"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-3">{project.tech}</p>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;