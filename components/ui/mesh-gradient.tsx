"use client";

import { motion } from "framer-motion";

export const MeshGradient = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary Soft Green Mesh */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle at center, #16A34A, transparent 70%)' }}
      />
      
      {/* Secondary Deep Green Accent */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2.5, delay: 0.5 }}
        className="absolute bottom-[-10%] right-[-5%] w-[70%] h-[70%] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle at center, #15803D, transparent 70%)' }}
      />
      
      {/* Tertiary Light Green Highlight */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute top-[30%] right-[20%] w-[50%] h-[50%] rounded-full blur-[90px]"
        style={{ background: 'radial-gradient(circle at center, #DCFCE7, transparent 70%)' }}
      />

      {/* Center Softener */}
      <div 
        className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"
      />
    </div>
  );
};
