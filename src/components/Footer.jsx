import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
           
            <h2 className="text-2xl font-bold">Kidjig</h2>
          </div>
          <p className="text-gray-300 text-sm leading-6">
            Building the future of AI Products. Empowering creators and
            developers with powerful AI tools.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <FaTwitter className="hover:text-cyan-400 transition" />
            <FaGithub className="hover:text-gray-400 transition" />
            <FaLinkedin className="hover:text-blue-500 transition" />
            <FaEnvelope className="hover:text-red-400 transition" />
            <FaDiscord className="hover:text-indigo-400 transition" />
          </div>
        </motion.div>

        {/* Center - Startup Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-start gap-6"
        >
          <div className="bg-white p-4 rounded-xl shadow-lg w-64 text-black">
            <p className="text-sm font-bold">Microsoft Startup</p>
            <p className="text-sm text-gray-600">Founders Hub Member</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-lg w-64 text-red-500 flex items-center gap-3 justify-center">
            <span className="text-3xl font-bold">P</span>
            <div>
              <p className="text-sm font-bold">Find us on</p>
              <p className="text-lg font-semibold">Product Hunt</p>
            </div>
          </div>
        </motion.div>

        {/* Right - Legal and Discord */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-3">LEGAL</h3>
            <ul className="text-gray-400 space-y-1">
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          {/* Discord Card */}
          <div className="bg-[#1a1a1a] p-4 rounded-xl shadow-md border border-gray-700">
            <p className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              Public Beta
            </p>
            <p className="text-sm text-gray-300 leading-5 mb-2">
              Join our early access program and shape the future of AI APIs
            </p>
            <p className="flex items-center gap-2 text-white font-medium mt-1">
              <FaDiscord /> Join Discord Community
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-16 pb-8">
        © 2025 Kidjig. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
