import React from 'react';
import { Canvas } from '../components/Canvas';
import { Controls } from '../components/Controls';
import { Header } from '../components/Header';
import { TransformationProvider } from '../context/TransformationContext';
import { motion } from 'framer-motion';

export const GeometryApp: React.FC = () => {
  return (
    <TransformationProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 text-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/10"
            >
              <Canvas width={800} height={600} />
            </motion.div>
            
            <Controls />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/10"
          >
            <h2 className="text-xl font-bold text-blue-300 mb-4">Guide des Transformations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <TransformationCard
                title="Translation"
                description="Déplace la figure selon un vecteur dans le plan, conservant sa forme et son orientation."
                color="blue"
              />
              <TransformationCard
                title="Rotation"
                description="Fait pivoter la figure autour d'un point fixe (l'origine) d'un angle donné."
                color="green"
              />
              <TransformationCard
                title="Homothétie"
                description="Agrandit ou rétrécit la figure depuis l'origine, modifiant sa taille tout en conservant ses proportions."
                color="purple"
              />
              <TransformationCard
                title="Symétrie"
                description="Reflète la figure par rapport à un axe (x ou y), créant son image miroir."
                color="red"
              />
              <TransformationCard
                title="Dilatation"
                description="Étire ou compresse la figure selon des facteurs différents en x et y."
                color="yellow"
              />
              <TransformationCard
                title="Affine"
                description="Combine plusieurs transformations linéaires, permettant des déformations complexes."
                color="indigo"
              />
              <TransformationCard
                title="Cisaillement"
                description="Déforme la figure en décalant progressivement ses points parallèlement à un axe."
                color="pink"
              />
              <TransformationCard
                title="Projection"
                description="Simule une perspective en projetant la figure sur un plan, créant un effet de profondeur."
                color="cyan"
              />
              <TransformationCard
                title="Affine Inverse"
                description="Inverse une transformation affine, permettant de retrouver la figure d'origine."
                color="orange"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </TransformationProvider>
  );
};

interface TransformationCardProps {
  title: string;
  description: string;
  color: string;
}

const TransformationCard: React.FC<TransformationCardProps> = ({ title, description, color }) => (
  <div className={`p-4 bg-${color}-500/10 rounded-lg border border-${color}-500/30`}>
    <h3 className={`text-lg font-semibold text-${color}-300 mb-2`}>{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);