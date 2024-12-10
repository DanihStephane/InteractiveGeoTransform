import React from 'react';
import { useTransformationContext } from '../context/TransformationContext';
import { 
  RotateCw, 
  MoveRight, 
  Maximize,
  FlipHorizontal,
  Expand,
  Grid,
  ScissorsLineDashed,
  Box,
  Undo
} from 'lucide-react';
import { motion } from 'framer-motion';

export const Controls: React.FC = () => {
  const { setTransformation, setParameters } = useTransformationContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-col gap-4 p-6 bg-white/10 backdrop-blur-lg rounded-lg border border-white/10 overflow-y-auto max-h-[600px]"
    >
      <h2 className="text-xl font-bold text-blue-300">Transformations</h2>
      
      <button
        onClick={() => {
          setTransformation('translation');
          setParameters({ dx: 100, dy: 0 });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-all transform hover:scale-105"
      >
        <MoveRight size={20} />
        Translation
      </button>

      <button
        onClick={() => {
          setTransformation('rotation');
          setParameters({ angle: 45 });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-300 rounded-lg transition-all transform hover:scale-105"
      >
        <RotateCw size={20} />
        Rotation
      </button>

      <button
        onClick={() => {
          setTransformation('homothety');
          setParameters({ scale: 1.5 });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-all transform hover:scale-105"
      >
        <Maximize size={20} />
        Homothétie
      </button>

      <button
        onClick={() => {
          setTransformation('reflection');
          setParameters({ axis: 'x' });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-all transform hover:scale-105"
      >
        <FlipHorizontal size={20} />
        Symétrie
      </button>

      <button
        onClick={() => {
          setTransformation('dilation');
          setParameters({ matrix: [2, 0, 0, 0.5] });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 rounded-lg transition-all transform hover:scale-105"
      >
        <Expand size={20} />
        Dilatation
      </button>

      <button
        onClick={() => {
          setTransformation('affine');
          setParameters({ matrix: [1.2, 0.3, -0.1, 0.8] });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-all transform hover:scale-105"
      >
        <Grid size={20} />
        Affine
      </button>

      <button
        onClick={() => {
          setTransformation('shear');
          setParameters({ shearX: 0.5, shearY: 0 });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 rounded-lg transition-all transform hover:scale-105"
      >
        <ScissorsLineDashed size={20} />
        Cisaillement
      </button>

      <button
        onClick={() => {
          setTransformation('projection');
          setParameters({ perspective: 0.005 });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg transition-all transform hover:scale-105"
      >
        <Box size={20} />
        Projection
      </button>

      <button
        onClick={() => {
          setTransformation('inverse-affine');
          setParameters({ matrix: [1.2, 0.3, -0.1, 0.8] });
        }}
        className="flex items-center gap-2 px-4 py-3 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded-lg transition-all transform hover:scale-105"
      >
        <Undo size={20} />
        Affine Inverse
      </button>
    </motion.div>
  );
};