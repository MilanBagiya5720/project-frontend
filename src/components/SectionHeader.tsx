import { motion } from "framer-motion";
import React from "react";

const SectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <motion.h2
      className="text-4xl font-extrabold mb-12 tracking-wide relative inline-block"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {title}
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full animate-pulse"></span>
    </motion.h2>
  );
};

export default SectionHeader;
