import React from 'react';
import { Link } from 'react-router-dom';
import { RotatingCube } from '../components/RotatingCube';
import { motion } from 'framer-motion';
import { Shapes, Brain, ArrowRight } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Découvrez les Transformations Géométriques
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Une approche interactive et visuelle pour comprendre les concepts de base de la géométrie transformationnelle.
            </p>
            <div className="space-y-4 mb-8">
              <Feature icon={<Shapes />} text="Visualisez les transformations en temps réel" />
              <Feature icon={<Brain />} text="Apprenez par la pratique interactive" />
            </div>
            <Link
              to="/app"
              className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              C'est parti ! <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <RotatingCube />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Feature: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="p-2 bg-blue-500/20 rounded-lg">
      {icon}
    </div>
    <span className="text-gray-300">{text}</span>
  </div>
);