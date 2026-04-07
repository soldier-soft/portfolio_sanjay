import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: "Full Stack Web Development Intern",
      company: "Flashinfolabs Pvt. Ltd.",
      period: "2024",
      location: "Chennai",
      points: [
        "Developed full-stack applications using Java, SQL, HTML, CSS, JavaScript",
        "Implemented CRUD operations and dynamic UI components",
        "Worked in Agile environment with cross-functional teams",
        "Improved application usability and data flow efficiency",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative mb-8 md:ml-20"
            >
              <div className="absolute left-[-42px] top-2 w-4 h-4 bg-blue-500 rounded-full hidden md:block"></div>
              <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;