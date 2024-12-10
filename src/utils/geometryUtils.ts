interface Point {
  x: number;
  y: number;
}

interface Shape {
  type: string;
  points: [number, number][];
}

export const drawShape = (
  ctx: CanvasRenderingContext2D,
  shape: Shape,
  color: string
) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.fillStyle = color + '33';
  
  shape.points.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point[0], point[1]);
    } else {
      ctx.lineTo(point[0], point[1]);
    }
  });
  
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

export const applyTransformation = (
  shape: Shape,
  transformation: string,
  parameters: any
): Shape => {
  const transformedPoints = shape.points.map(point => {
    let [x, y] = point;
    
    switch (transformation) {
      case 'translation':
        return [x + (parameters.dx || 0), y + (parameters.dy || 0)];
        
      case 'rotation':
        const angle = (parameters.angle || 0) * Math.PI / 180;
        return [
          x * Math.cos(angle) - y * Math.sin(angle),
          x * Math.sin(angle) + y * Math.cos(angle)
        ];
        
      case 'homothety':
        const scale = parameters.scale || 1;
        return [x * scale, y * scale];
        
      case 'reflection':
        if (parameters.axis === 'x') {
          return [x, -y];
        } else {
          return [-x, y];
        }
        
      case 'dilation':
        const dilationX = parameters.matrix?.[0] || 1;
        const dilationY = parameters.matrix?.[3] || 1;
        return [x * dilationX, y * dilationY];
        
      case 'affine':
        const [a, b, c, d] = parameters.matrix || [1, 0, 0, 1];
        return [
          a * x + b * y,
          c * x + d * y
        ];
        
      case 'shear':
        const shearX = parameters.shearX || 0;
        const shearY = parameters.shearY || 0;
        return [
          x + shearX * y,
          y + shearY * x
        ];
        
      case 'projection':
        const z = parameters.perspective || 1;
        return [
          x / (1 + z * y),
          y / (1 + z * y)
        ];
        
      case 'inverse-affine':
        const [m1, m2, m3, m4] = parameters.matrix || [1, 0, 0, 1];
        const det = m1 * m4 - m2 * m3;
        if (det === 0) return [x, y];
        return [
          (m4 * x - m2 * y) / det,
          (-m3 * x + m1 * y) / det
        ];
        
      default:
        return [x, y];
    }
  });

  return {
    ...shape,
    points: transformedPoints
  };
};