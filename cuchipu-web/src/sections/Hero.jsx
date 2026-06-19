import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Hero() {
  return (
    <div className="relative bg-[#030712] pt-36 pb-24 lg:pt-52 lg:pb-40 overflow-hidden min-h-screen flex items-center">
      
      {/* Patrón de Red Digital de Fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>
      
      {/* Resplandores de Neón de Fondo */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] z-0 animate-pulse duration-6000"></div>
      <div className="absolute bottom-12 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] z-0 animate-pulse duration-8000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Badge de Tecnología */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Sistemas de Próxima Generación
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 leading-none">
            Construimos el futuro <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
              línea por línea
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Especialistas en desarrollo full-stack, automatización avanzada y despliegue de infraestructuras seguras bajo los estándares tecnológicos más exigentes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/contacto" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] transition-all duration-300 transform hover:-translate-y-0.5">
                Hablemos de tu proyecto
              </Button>
            </Link>
            
            <Link to="/servicios" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                Conoce nuestro trabajo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;