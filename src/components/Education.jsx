import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* College */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 mb-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <GraduationCap className="w-8 h-8 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">B.Tech Information Technology</h3>
              <p className="text-purple-400 mb-2">Anna University (Affiliated College)</p>
              <span className="text-green-400 font-medium">Sri Balaji Chokalingam Engineering College</span>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> 2021 – 2025
                </span>
                <span className="flex items-center gap-1">
                  <Award size={14} /> CGPA: 7.8 (78.6%)
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 12th */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 mb-6"
        >
          <h3 className="text-lg font-semibold mb-1">Higher Secondary (12th)</h3>
          <p className="text-gray-400 text-sm">Percentage: <span className="text-purple-400 font-medium">82%</span></p>
        </motion.div>

        {/* 10th */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-green-500/50 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-1">Secondary School (10th)</h3>
          <p className="text-gray-400 text-sm">Percentage: <span className="text-green-400 font-medium">81%</span></p>
        </motion.div>

      </div >
    </section >
  );
};

export default Education;