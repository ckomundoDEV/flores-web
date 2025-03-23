import React, { useState, useEffect } from 'react';
import { FlowersProps } from '../domain/models/FlowersModel';
import { generarCorazonesUseCase } from '../domain/usecases/generarCorazonesUseCase';
import { cargarEstilos } from '../infrastructure/utils';
import { estilosAnimacion } from '../infrastructure/styles/animaciones';
import FlowersButton from '../presentation/components/FlowersButton';
import FlowersAnimation from '../presentation/components/FlowersAnimation';

/**
 * Controlador para la aplicación de Flores, maneja toda la lógica de aplicación
 * siguiendo el patrón MVC y los principios SOLID:
 * - Responsabilidad única: Coordina la lógica de negocio y la presentación
 * - Abierto/Cerrado: Extensible sin modificar su comportamiento base
 * - Inversión de dependencias: Depende de abstracciones (props, hooks), no implementaciones
 */
const FlowersController: React.FC<FlowersProps> = ({ 
  message = "estas son para ti miBbyGirl"
}) => {
  // Estado
  const [mostrarAnimacion, setMostrarAnimacion] = useState(false);
  
  // Uso de casos de uso para obtener datos del modelo
  const heartsBotones = generarCorazonesUseCase(15);
  const heartsAnimacion = generarCorazonesUseCase(10);

  // Iniciar animación (acción del usuario)
  const iniciarAnimacion = () => {
    setMostrarAnimacion(true);
    console.log("DEBUG: Iniciando animación");
  };

  // Hook de efecto para cargar los estilos de animación
  useEffect(() => {
    console.log("DEBUG: Cargando estilos de animación");
    const limpiarEstilos = cargarEstilos(estilosAnimacion);
    
    // Limpiar cuando el componente se desmonte
    return limpiarEstilos;
  }, []);

  // Renderizado condicional basado en el estado
  return (
    <>
      {!mostrarAnimacion ? (
        <FlowersButton 
          onButtonClick={iniciarAnimacion} 
          hearts={heartsBotones}
          title="Flores Amarillas"
          message={message.split('\n')[0]}
        />
      ) : (
        <FlowersAnimation 
          message="estas son para ti mi pastelito, te AMOO Cx" 
          hearts={heartsAnimacion} 
        />
      )}
    </>
  );
};

export default FlowersController; 