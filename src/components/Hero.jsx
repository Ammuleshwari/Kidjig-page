import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden relative">
      {/* Gradient animation background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-900 via-black to-indigo-900 animate-gradientBlur z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="z-10 text-center px-4 sm:px-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Enterprise <br className="hidden md:block" /> 
          <span className="text-gradient">AI Gateway</span>
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Unify, secure, and scale your enterprise AI infrastructure through a single, powerful gateway. Access and manage multiple AI providers with enterprise-grade security.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="relative px-6 py-3 rounded-full border border-white text-white font-semibold backdrop-blur-lg bg-white/10 hover:bg-white/20 transition duration-300 flex items-center gap-2"
          >
            Get API Key
            <motion.span
              className="ml-2 text-lg"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="relative px-6 py-3 rounded-full border border-white text-white font-semibold backdrop-blur-lg bg-white/10 hover:bg-white/20 transition duration-300 flex items-center gap-2"
          >
            Schedule Demo
            <motion.span
              className="ml-2 text-lg"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
