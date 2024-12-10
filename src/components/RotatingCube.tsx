import React from 'react';
import { motion } from 'framer-motion';

export const RotatingCube: React.FC = () => {
  return (
    <div className="relative w-64 h-64 perspective-1000">
      <motion.div
        className="w-full h-full transform-style-3d"
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Front face */}
        <div className="absolute w-full h-full bg-blue-500/30 border-2 border-blue-500 transform translate-z-32 backdrop-blur-sm" />
        {/* Back face */}
        <div className="absolute w-full h-full bg-blue-500/30 border-2 border-blue-500 transform -translate-z-32 backdrop-blur-sm" />
        {/* Right face */}
        <div className="absolute w-full h-full bg-blue-600/30 border-2 border-blue-500 transform translate-x-32 rotate-y-90 backdrop-blur-sm" />
        {/* Left face */}
        <div className="absolute w-full h-full bg-blue-600/30 border-2 border-blue-500 transform -translate-x-32 -rotate-y-90 backdrop-blur-sm" />
        {/* Top face */}
        <div className="absolute w-full h-full bg-blue-700/30 border-2 border-blue-500 transform translate-y-32 rotate-x-90 backdrop-blur-sm" />
        {/* Bottom face */}
        <div className="absolute w-full h-full bg-blue-700/30 border-2 border-blue-500 transform -translate-y-32 -rotate-x-90 backdrop-blur-sm" />
      </motion.div>
    </div>
  );
};