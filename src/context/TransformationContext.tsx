import React, { createContext, useContext, useState } from 'react';

type TransformationType = 
  | 'translation' 
  | 'rotation' 
  | 'homothety'
  | 'reflection'
  | 'dilation'
  | 'affine'
  | 'shear'
  | 'projection'
  | 'inverse-affine';

type Parameters = {
  dx?: number;
  dy?: number;
  angle?: number;
  scale?: number;
  axis?: 'x' | 'y';
  matrix?: [number, number, number, number];
  shearX?: number;
  shearY?: number;
  perspective?: number;
};

interface TransformationContextType {
  transformation: TransformationType;
  parameters: Parameters;
  setTransformation: (t: TransformationType) => void;
  setParameters: (p: Parameters) => void;
}

const TransformationContext = createContext<TransformationContextType | undefined>(undefined);

export const TransformationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [transformation, setTransformation] = useState<TransformationType>('translation');
  const [parameters, setParameters] = useState<Parameters>({ dx: 0, dy: 0 });

  return (
    <TransformationContext.Provider
      value={{ transformation, parameters, setTransformation, setParameters }}
    >
      {children}
    </TransformationContext.Provider>
  );
};

export const useTransformationContext = () => {
  const context = useContext(TransformationContext);
  if (!context) {
    throw new Error('useTransformationContext must be used within a TransformationProvider');
  }
  return context;
};