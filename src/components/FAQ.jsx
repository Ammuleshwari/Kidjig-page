import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is KidJig API ?",
    answer:
      "KidJig API Provider – your gateway to multiple AI language models through a single, unified API interface. Our API allows you to interact with various AI models from different providers while maintaining a consistent request and response format.",
  },
  {
    question: "How to get started ?",
    answer: "Sign up, generate your API key, and start making requests to any supported model using a unified API format.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach us via the contact form on our site or by emailing support@kidjig.ai.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full px-6 py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-transparent bg-clip-text"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-10 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f172a] border border-white/10 shadow-lg rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-white/5 transition-all"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  <FaChevronDown />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-white text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
