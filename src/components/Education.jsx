import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-wide">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative border-l border-gray-700 pl-6 space-y-10">

          {/* College */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={cardVariants}
            className="relative group"
          >
            <div className="absolute -left-[34px] top-2 bg-blue-500 p-2 rounded-full shadow-lg">
              <GraduationCap size={18} />
            </div>

            <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 
              group-hover:border-blue-500/60 group-hover:shadow-blue-500/20 
              shadow-lg transition-all duration-300">

              <h3 className="text-xl font-semibold">B.Tech Information Technology</h3>
              <p className="text-purple-400 text-sm mb-1">Anna University</p>
              <p className="text-green-400 text-sm mb-3">
                Sri Balaji Chokalingam Engineering College
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> 2021 – 2025
                </span>
                <span className="flex items-center gap-1">
                  <Award size={14} /> CGPA: 7.8
                </span>
              </div>

              <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                78.6%
              </span>
            </div>
          </motion.div>

          {/* 12th */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={cardVariants}
            className="relative group"
          >
            <div className="absolute -left-[34px] top-2 bg-purple-500 p-2 rounded-full shadow-lg">
              <School size={18} />
            </div>

            <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 
              group-hover:border-purple-500/60 group-hover:shadow-purple-500/20 
              shadow-lg transition-all duration-300">

              <h3 className="text-lg font-semibold">Higher Secondary (12th)</h3>

              <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30">
                82%
              </span>
            </div>
          </motion.div>

          {/* 10th */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : ""}
            variants={cardVariants}
            className="relative group"
          >
            <div className="absolute -left-[34px] top-2 bg-green-500 p-2 rounded-full shadow-lg">
              <School size={18} />
            </div>

            <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-800 
              group-hover:border-green-500/60 group-hover:shadow-green-500/20 
              shadow-lg transition-all duration-300">

              <h3 className="text-lg font-semibold">Secondary School (10th)</h3>

              <span className="inline-block mt-2 px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                81%
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;