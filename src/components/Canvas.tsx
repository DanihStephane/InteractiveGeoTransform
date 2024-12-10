import React, { useRef, useEffect } from 'react';
import { useTransformationContext } from '../context/TransformationContext';
import { drawShape, applyTransformation } from '../utils/geometryUtils';

interface CanvasProps {
  width: number;
  height: number;
}

export const Canvas: React.FC<CanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { transformation, parameters } = useTransformationContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set origin to center of canvas
    ctx.translate(width / 2, height / 2);
    
    // Draw grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = -width/2; i < width/2; i += 20) {
      ctx.beginPath();
      ctx.moveTo(i, -height/2);
      ctx.lineTo(i, height/2);
      ctx.stroke();
    }
    for (let i = -height/2; i < height/2; i += 20) {
      ctx.beginPath();
      ctx.moveTo(-width/2, i);
      ctx.lineTo(width/2, i);
      ctx.stroke();
    }

    // Draw original shape
    const originalShape = { type: 'triangle', points: [[-50, -50], [50, -50], [0, 50]] };
    drawShape(ctx, originalShape, '#60a5fa');

    // Draw transformed shape
    const transformedShape = applyTransformation(originalShape, transformation, parameters);
    drawShape(ctx, transformedShape, '#f87171');

    // Reset transformation
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }, [transformation, parameters, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full h-full rounded-lg bg-gray-900/50"
    />
  );
};