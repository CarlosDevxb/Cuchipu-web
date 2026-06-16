import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Hero() {
  return (
    <div className="relative bg-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-cuchipu-dark tracking-tight mb-8">
            Construimos el futuro <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cuchipu-light to-blue-600">
              línea por línea
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transformamos tus ideas en soluciones de software escalables, rápidas y diseñadas para el éxito digital de tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contacto" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                Hablemos de tu proyecto
              </Button>
            </Link>
            
            <Link to="/servicios" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                Conoce nuestro trabajo
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cuchipu-light/10 blur-3xl opacity-50 z-0"></div>
    </div>
  );
}

export default Hero;