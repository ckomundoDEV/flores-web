import React from 'react';
import { HeartProps } from '../../domain/models/FlowersModel';

/**
 * Componente para mostrar un corazón animado
 */
const Heart: React.FC<HeartProps> = (props) => {
  return (
    <div 
      className="heart animate-heart-float"
      style={{
        top: props.top,
        left: props.left,
        opacity: props.opacity,
        fontSize: props.fontSize,
        animationDelay: props.animationDelay,
        animationDuration: props.animationDuration,
        transform: props.transform
      }}
    >
      ❤️
    </div>
  );
};

export default Heart; 