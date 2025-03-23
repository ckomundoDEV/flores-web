export const estilosAnimacion = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  @keyframes bounce-x {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(4px); }
  }
  @keyframes heart-beat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.15); }
  }
  @keyframes heart-float {
    0% { transform: translateY(0) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(5deg); }
    66% { transform: translateY(5px) rotate(-5deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
  @keyframes letra-animada {
    0% { transform: translateY(0); }
    25% { transform: translateY(-2px); }
    50% { transform: translateY(0); }
    75% { transform: translateY(2px); }
    100% { transform: translateY(0); }
  }
  @keyframes color-shift {
    0% { color: #d97706; }
    33% { color: #b45309; }
    66% { color: #92400e; }
    100% { color: #d97706; }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
  .animate-bounce-x {
    animation: bounce-x 1.2s infinite;
  }
  .animate-heart-beat {
    animation: heart-beat 1.5s ease-in-out infinite;
  }
  .animate-heart-float {
    animation: heart-float 8s ease-in-out infinite;
  }
  .full-screen-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #fef3c7, #fde68a);
    z-index: -10;
  }
  .message {
    position: fixed;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 1.2rem;
    padding: 0.8rem 1.2rem;
    margin: 0 auto;
    width: 90%;
    max-width: 600px;
    border-radius: 1rem;
    white-space: pre-line;
    z-index: 50;
    background-color: rgba(255, 249, 219, 0.07);
    box-shadow: 0 8px 32px rgba(251, 191, 36, 0.2);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(251, 191, 36, 0.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .mensaje-letra {
    display: inline-block;
    font-weight: 700;
    animation: letra-animada 2s ease-in-out infinite, color-shift 4s ease-in-out infinite;
    margin: 0 1px;
    text-shadow: 0 2px 6px rgba(180, 83, 9, 0.5);
  }
  .mensaje-letra:nth-child(even) {
    animation-duration: 2.5s;
  }
  .mensaje-letra:nth-child(3n) {
    animation-duration: 3s;
  }
  .heart {
    color: #ef4444;
    display: inline-block;
    font-size: 24px;
    position: absolute;
    z-index: 5;
  }
  .heart-message {
    display: inline-block;
    margin: 0 5px;
    color: #ef4444;
    animation: heart-beat 1.5s ease-in-out infinite;
  }
  
  /* Estilos responsive */
  @media (max-width: 768px) {
    .message {
      font-size: 1rem;
      padding: 0.7rem 1rem;
      bottom: 4rem;
      width: 92%;
      max-width: 500px;
    }
    
    .heart {
      font-size: 18px;
    }
  }
  
  @media (max-width: 480px) {
    .message {
      font-size: 0.9rem;
      padding: 0.6rem 0.8rem;
      border-radius: 0.8rem;
      bottom: 3rem;
      width: 94%;
      max-width: 400px;
    }
  }
`; 