import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    "Full Stack Development – Besant Technologies",
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-4"
            >
              <Award className="w-8 h-8 text-blue-500" />
              <p className="text-lg text-gray-300">{cert}</p>
              <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;