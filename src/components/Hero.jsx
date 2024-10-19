import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
    className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 3 }}
  >
    <section className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" 
             style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}>
      <div className="text-center bg-gray-900 bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-4">Hi, I'm Soham Patil</h2>
        <p className="text-xl text-gray-300 mb-6">MERN Stack & Blockchain Developer</p>
        <a href="#projects" className="px-6 py-3 bg-primary text-white rounded hover:bg-secondary transition">
          See My Work
        </a>
      </div>
    </section>
    </motion.section>
  );
}

export default Hero;
