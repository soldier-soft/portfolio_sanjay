import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute text-white text-xl font-semibold mt-24"
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Preloader;