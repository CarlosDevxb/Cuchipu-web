import React from 'react';

function Button({ children, variant = 'primary', className = '', ...props }) {
  // Definimos los estilos base y las variantes según los colores del logo
  const baseStyles = 'px-5 py-2.5 font-bold rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md active:scale-95';
  
  const variants = {
    // Botón principal: Amarillo/Dorado del casco
    primary: 'bg-cuchipu-accent text-cuchipu-dark hover:bg-opacity-90',
    // Botón secundario: Azul Celeste/Cyan
    secondary: 'bg-cuchipu-light text-white hover:bg-opacity-90',
    // Botón delineado para menús
    outline: 'border-2 border-cuchipu-dark text-cuchipu-dark hover:bg-cuchipu-dark hover:text-white'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;