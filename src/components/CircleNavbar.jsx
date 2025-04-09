import React from 'react';
import { FaRocket, FaUsers, FaCube, FaQuestionCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'hero', icon: <FaRocket />, label: 'Hero' },
  { id: 'clients', icon: <FaUsers />, label: 'Clients' },
  { id: 'models', icon: <FaCube />, label: 'Models' },
  { id: 'faq', icon: <FaQuestionCircle />, label: 'FAQ' },
];

const CircleNavbar = () => {
  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
      {navItems.map((item) => (
        <motion.a
          key={item.id}
          href={`#${item.id}`}
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="relative group text-white p-3 rounded-full bg-black hover:shadow-[0_0_10px_#3EFFC0] transition-all duration-300 border border-white/10"
        >
          <div className="bg-gradient-to-tr from-[#3EFFC0] via-[#00f0ff] to-[#3EFFC0] p-[2px] rounded-full">
            <div className="bg-black rounded-full p-2 text-xl">{item.icon}</div>
          </div>

          {/* Tooltip */}
          <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 text-xs bg-gradient-to-r from-[#3EFFC0] to-[#00f0ff] text-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
            {item.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default CircleNavbar;
