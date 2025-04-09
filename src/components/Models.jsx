// src/components/Models.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCommentAlt, FaImage } from "react-icons/fa";

const models = [
  {
    name: "Gemini Pro",
    type: "chat",
    provider: "Google",
    desc: "Text-only tasks like text generation, analysis, and complex reasoning",
    link: "#",
  },
  {
    name: "Gemini 1.5 Pro",
    type: "chat",
    provider: "Google",
    desc: "Complex reasoning tasks with support for audio, images, videos, and text",
    link: "#",
  },
  {
    name: "Gemini 1.5 Flash",
    type: "chat",
    provider: "Google",
    desc: "High-speed model optimized for rapid responses while maintaining quality",
    link: "#",
  },
  {
    name: "DALL·E 3",
    type: "image",
    provider: "OpenAI",
    desc: "Generate images from natural language prompts using powerful diffusion models",
    link: "#",
  },
  {
    name: "SDXL Turbo",
    type: "image",
    provider: "Stability AI",
    desc: "Real-time image generation with state-of-the-art performance",
    link: "#",
  },
  {
    name: "Midjourney V6",
    type: "image",
    provider: "Midjourney",
    desc: "High-quality artistic and photorealistic image synthesis",
    link: "#",
  },
  {
    name: "Claude 3 Opus",
    type: "chat",
    provider: "Anthropic",
    desc: "High-level language understanding with safer, steerable output",
    link: "#",
  },
  {
    name: "Mistral Large",
    type: "chat",
    provider: "Mistral AI",
    desc: "Open-weight high performance multilingual text generation",
    link: "#",
  },
  {
    name: "LLaMA 3",
    type: "chat",
    provider: "Meta",
    desc: "Efficient large language model for multilingual reasoning",
    link: "#",
  },
];

const Models = () => {
  return (
    <section id="models" className="bg-black py-20 px-4 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Explore Available Models
        </motion.h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 text-white font-semibold flex items-center gap-2 shadow-lg transition"
          >
            <FaBolt className="animate-bounce" /> ALL
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 rounded-full bg-slate-800 border border-purple-400 text-white flex items-center gap-2 hover:bg-slate-700 transition"
          >
            <FaCommentAlt className="animate-pulse" /> CHAT
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 rounded-full bg-slate-800 border border-cyan-400 text-white flex items-center gap-2 hover:bg-slate-700 transition"
          >
            <FaImage className="animate-pulse" /> IMAGE
          </motion.button>
        </div>

        {/* Search bar */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search models..."
            className="px-5 py-3 w-full max-w-xs rounded-xl shadow-lg bg-slate-900 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>
      </div>

      {/* Models Grid */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {models.map((model, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-2xl p-6 shadow-2xl backdrop-blur-xl border border-gray-700 hover:border-purple-500 transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 text-sm rounded-full font-medium text-white bg-gradient-to-r ${model.type === "image" ? "from-pink-500 to-rose-500" : "from-purple-600 to-indigo-600"} shadow-lg`}>
                {model.type === "image" ? <FaImage /> : <FaCommentAlt />}{" "}
                {model.type.toUpperCase()}
              </span>
            </div>
            <h3 className="text-xl font-bold">{model.name}</h3>
            <p className="text-sm text-gray-400">{model.provider}</p>
            <p className="mt-3 text-gray-300 text-sm">{model.desc}</p>
            <a
              href={model.link}
              className="mt-6 inline-block w-full text-center px-5 py-2 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 transition-all font-semibold shadow-md"
            >
              Try {model.name}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Models;
