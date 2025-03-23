import { HeartProps } from "../models/FlowersModel";

/**
 * Caso de uso para generar una colección de corazones con propiedades aleatorias
 * @param cantidad - El número de corazones a generar
 * @returns Array de objetos HeartProps
 */
export const generarCorazonesUseCase = (cantidad: number): HeartProps[] => {
  return [...Array(cantidad)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: 0.7 + Math.random() * 0.3,
    fontSize: `${Math.random() * 20 + 15}px`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 6 + 6}s`,
    transform: `rotate(${Math.random() * 40 - 20}deg)`,
  }));
}; 