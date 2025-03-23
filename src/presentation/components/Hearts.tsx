import React from 'react';
import Heart from './Heart';
import { HeartProps } from '../../domain/models/FlowersModel';

interface HeartsProps {
  hearts: HeartProps[];
}

/**
 * Componente para mostrar una colección de corazones
 * Sigue el principio de responsabilidad única al encargarse solo de renderizar corazones
 */
const Hearts: React.FC<HeartsProps> = ({ hearts }) => {
  return (
    <>
      {hearts.map(heart => (
        <Heart key={heart.id} {...heart} />
      ))}
    </>
  );
};

export default Hearts; 