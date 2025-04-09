import React from "react";
import logos from "../assets/logos"; // make sure this imports an object of logos
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <section id="clients" className="py-12 bg-black">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-10">
        Trusted by the Best
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 md:px-12">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 group relative"
          >
            <div className="bg-black rounded-lg p-4 flex items-center justify-center h-28 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <motion.img
                src={logo.src}
                alt={logo.name}
                className="h-12 object-contain animate-float group-hover:scale-110 transition-transform duration-500"
                whileHover={{ scale: 1.2, rotate: 5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
