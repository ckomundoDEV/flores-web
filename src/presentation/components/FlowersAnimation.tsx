import React from 'react';
import Hearts from './Hearts';
import { HeartProps } from '../../domain/models/FlowersModel';

interface FlowersAnimationProps {
  message?: string;
  hearts: HeartProps[];
}

const FlowersAnimation: React.FC<FlowersAnimationProps> = ({ message, hearts }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full overflow-hidden">
      <div className="night"></div>
      <div className="flowers" style={{ 
        position: 'absolute', 
        left: '50%', 
        transform: 'translateX(-50%)',
        bottom: '0'
      }}>
        <Hearts hearts={hearts} />
        
        {/* Flores principales */}
        <div className="flower flower--1" style={{ left: '50%' }}>
          <div className="flower__leafs flower__leafs--1">
            {[1, 2, 3, 4].map((leaf) => (
              <div key={leaf} className={`flower__leaf flower__leaf--${leaf}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {Array.from({length: 6}).map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>
        
        <div className="flower flower--2" style={{ left: '65%' }}>
          <div className="flower__leafs flower__leafs--2">
            {[1, 2, 3, 4].map((leaf) => (
              <div key={leaf} className={`flower__leaf flower__leaf--${leaf}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {Array.from({length: 4}).map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>
        
        <div className="flower flower--3" style={{ left: '35%' }}>
          <div className="flower__leafs flower__leafs--3">
            {[1, 2, 3, 4].map((leaf) => (
              <div key={leaf} className={`flower__leaf flower__leaf--${leaf}`}></div>
            ))}
            <div className="flower__white-circle"></div>
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className={`flower__light flower__light--${i + 1}`}></div>
            ))}
          </div>
          <div className="flower__line">
            {Array.from({length: 4}).map((_, i) => (
              <div key={i} className={`flower__line__leaf flower__line__leaf--${i + 1}`}></div>
            ))}
          </div>
        </div>

        {/* Ramas adicionales */}
        <div className="grow-ans" style={{ "--d": "1.2s" } as React.CSSProperties}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        {/* Nuevas ramas decorativas */}
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top"></div>
          <div className="flower__grass--bottom"></div>
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`}></div>
          ))}
          <div className="flower__grass__overlay"></div>
        </div>

        <div className="flower__g-front">
          <div className="flower__g-front__line"></div>
          {Array.from({length: 8}).map((_, i) => (
            <div key={i} className="flower__g-front__leaf-wrapper">
              <div className="flower__g-front__leaf"></div>
            </div>
          ))}
        </div>

        {/* Ramas largas de fondo */}
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <div key={num} className={`long-g long-g--${num}`}>
            <div className="leaf leaf--0"></div>
            <div className="leaf leaf--1"></div>
            <div className="leaf leaf--2"></div>
            <div className="leaf leaf--3"></div>
          </div>
        ))}

      </div>

      {message && (
        <div className="message">
          {message.split('').map((char, index) => (
            <span 
              key={index}
              className="mensaje-letra animate-pulse-slow text-xs sm:text-sm md:text-base lg:text-lg"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: char === ' ' ? 0.8 : 1,
                filter: `brightness(${0.9 + (index % 6) * 0.08})`,
                letterSpacing: '0.5px',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlowersAnimation;