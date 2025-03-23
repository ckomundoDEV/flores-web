import React from 'react';
import Hearts from './Hearts';
import { HeartProps } from '../../domain/models/FlowersModel';

interface FlowersButtonProps {
  onButtonClick: () => void;
  hearts: HeartProps[];
  title: string;
  message: string;
}

/**
 * Componente para mostrar el botón de inicio y el mensaje introductorio
 * Sigue principios SOLID:
 * - Responsabilidad única: Solo se encarga de mostrar el botón y no de la lógica
 * - Abierto/Cerrado: Extensible a través de props sin modificar el componente
 * - Inyección de dependencias: Recibe hearts desde fuera en lugar de generarlos
 */
const FlowersButton: React.FC<FlowersButtonProps> = ({ 
  onButtonClick, 
  hearts, 
  title, 
  message 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full overflow-hidden px-4 sm:px-0">
      <div className="full-screen-bg"></div>
      
      {/* Corazones flotantes en el fondo */}
      <Hearts hearts={hearts} />
      
      <div className="relative bg-yellow-100/30 p-4 sm:p-6 md:p-8 rounded-lg border border-yellow-300/50 shadow-lg mb-6 sm:mb-10 text-center w-full max-w-xs sm:max-w-md md:max-w-lg" 
           style={{
             boxShadow: "0 0 25px rgba(251, 191, 36, 0.3)",
             animation: "float 6s ease-in-out infinite"
           }}>
        <div className="absolute -top-3 -right-3 text-xl sm:text-2xl animate-heart-beat" style={{color: "#ef4444"}}>❤️</div>
        <div className="absolute -bottom-3 -left-3 text-xl sm:text-2xl animate-heart-beat" style={{color: "#ef4444", animationDelay: "0.5s"}}>❤️</div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-2 text-center mx-auto"
            style={{
              fontFamily: "'Segoe UI', sans-serif",
              letterSpacing: "1px",
              animation: "pulse-slow 3s ease-in-out infinite"
            }}>
          {title}
        </h1>
        <div className="text-lg sm:text-xl md:text-2xl text-yellow-500 font-medium text-center mx-auto" 
             style={{ fontFamily: "'Segoe UI', sans-serif" }}>
          {message}
          <span className="heart-message">❤️</span>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-500"></div>
        <button 
          onClick={onButtonClick} 
          className="relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-lg md:text-xl font-medium text-yellow-800 bg-yellow-100 bg-opacity-80 rounded-xl transition-all duration-300 transform hover:scale-105 group-hover:text-yellow-900 hover:bg-opacity-95 text-center"
          style={{
            fontFamily: "'Segoe UI', sans-serif",
            backdropFilter: "blur(4px)"
          }}
        >
          <span className="relative flex items-center justify-center">
            <span className="absolute left-0 top-0 w-full h-full bg-yellow-300 opacity-0 rounded-xl transform scale-x-0 group-hover:scale-x-100 group-hover:opacity-20 transition-transform origin-left duration-500"></span>
            <span className="text-red-500 mr-2 animate-heart-beat">❤️</span>
            <span className="relative z-10">Dame Click</span>
            <span className="text-red-500 ml-2 animate-heart-beat" style={{animationDelay: "0.5s"}}>❤️</span>
          </span>
        </button>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-yellow-300 bg-opacity-20 rounded-full"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FlowersButton; 