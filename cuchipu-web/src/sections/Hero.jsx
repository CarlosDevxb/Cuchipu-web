import React from 'react';
import Button from '../components/Button';

function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Columna de Texto */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-cuchipu-light font-semibold text-sm mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cuchipu-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cuchipu-light"></span>
              </span>
              Innovación en Desarrollo
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-cuchipu-dark leading-tight mb-6 tracking-tight">
              Transformamos ideas complejas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cuchipu-light to-blue-600">software excepcional</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              En <strong className="text-cuchipu-dark">Cuchipu Entertainment</strong>, somos un equipo técnico especializado en la creación de soluciones digitales a medida. Diseñamos, desarrollamos y optimizamos aplicaciones web robustas con una arquitectura estructurada para escalar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="text-lg px-8 py-3">
                Conoce nuestro trabajo
              </Button>
              <Button variant="outline" className="text-lg px-8 py-3">
                Hablemos de tu proyecto
              </Button>
            </div>

            {/* Pequeño bloque de confianza */}
            <div className="mt-10 flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-2">
                {/* Círculos simulando miembros del equipo técnico */}
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">{'</>'}</div>
                <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">⚡</div>
                <div className="w-8 h-8 rounded-full bg-cuchipu-dark border-2 border-white flex items-center justify-center text-xs font-bold text-white">⚙️</div>
              </div>
              <p>Respaldado por un equipo técnico experto</p>
            </div>
          </div>

          {/* Columna Visual (Placeholder para imagen.jpg o ilustración) */}
          <div className="relative lg:ml-10">
            {/* Fondo decorativo detrás de la imagen */}
            <div className="absolute inset-0 bg-linear-to-tr from-cuchipu-light/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            
            <div className="bg-white border border-gray-100 p-2 rounded-3xl shadow-2xl relative">
              <div className="aspect-4/3 bg-gray-50 rounded-2xl overflow-hidden flex flex-col items-center justify-center relative">
                
                {/* Aquí puedes reemplazar este bloque por tu etiqueta <img src={tuLogo} alt="Cuchipu Entertainment" /> más adelante */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-cuchipu-dark rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg transform -rotate-6">
                    <span className="text-4xl">💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-cuchipu-dark">Cuchipu Server</h3>
                  <p className="text-cuchipu-light font-mono text-sm mt-2">status: online</p>
                </div>

                {/* Elementos decorativos simulando código */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-md shadow-sm border border-gray-100 font-mono text-xs text-gray-600">
                  <span className="text-pink-500">import</span> {'{ Soluciones }'} <span className="text-pink-500">from</span> 'cuchipu';
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-md shadow-sm border border-gray-100 font-mono text-xs text-gray-600">
                  <span className="text-blue-500">npm</span> run build --production
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;