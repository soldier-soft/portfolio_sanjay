import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, ArrowRight } from 'lucide-react';

const HireMe = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-blue-500/30"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-block"
          >
            <Briefcase className="w-16 h-16 text-blue-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently available for full-time opportunities, freelance projects, 
            or collaboration on innovative ideas. Let's build something amazing!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Hire Me <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;