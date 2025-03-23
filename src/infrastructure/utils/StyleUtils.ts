/**
 * Carga estilos CSS dinámicamente en el documento
 * @param estilos - String con reglas CSS para aplicar
 * @returns Función para eliminar los estilos añadidos
 */
export const cargarEstilos = (estilos: string): () => void => {
  const style = document.createElement('style');
  style.innerHTML = estilos;
  document.head.appendChild(style);

  // Retornar una función para limpiar los estilos
  return () => {
    document.head.removeChild(style);
  };
}; 