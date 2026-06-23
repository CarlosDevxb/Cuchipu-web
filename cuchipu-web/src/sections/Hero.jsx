import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative bg-[#0A1128] pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      
      {/* Fondo Dinámico y Cuadrícula en Perspectiva */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf815_1px,transparent_1px),linear-gradient(to_bottom,#38bdf815_1px,transparent_1px)] bg-size-[3rem_3rem] transform-[perspective(1000px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-30 z-0"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-sky-900/60 via-[#0A1128]/80 to-[#0A1128] z-0"></div>
      
      {/* Resplandores y Luces */}
      <div className="absolute bottom-0 left-1/4 w-125 h-125 rounded-full bg-sky-500/15 blur-[120px] z-0 animate-pulse duration-5000"></div>
      <div className="absolute top-20 right-1/4 w-100 h-100 rounded-full bg-amber-500/10 blur-[100px] z-0 animate-pulse duration-7000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Columna Izquierda: Texto Impactante */}
          <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-sky-900/40 border border-sky-400/40 text-sky-200 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              Infraestructura Activa
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
              Desarrollo y <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-500 to-sky-300 animate-gradient-x">
                Alojamiento Cloud
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-sky-100/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Desde el código fuente hasta la configuración de servidores y redes físicas. Construimos software seguro, estructurado y desplegado en ecosistemas de alto rendimiento.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/contacto" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-[#0A1128] font-black text-lg px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:-translate-y-1 transition-all duration-300">
                  Iniciar Proyecto
                </button>
              </Link>
              
              <Link to="/servicios" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#0A1128]/50 backdrop-blur-md hover:bg-sky-900/50 border border-sky-400/30 hover:border-sky-400/60 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 group">
                  Explorar Servicios
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Columna Derecha: El Logo y Elementos Flotantes */}
          <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-linear-to-tr from-sky-400/20 to-amber-400/10 blur-[100px] rounded-full scale-90"></div>
            
            {/* Animación central del Logo */}
            <div className="relative z-10 w-full max-w-md lg:max-w-xl animate-[float_6s_ease-in-out_infinite]">
              <img 
                src="/CuchipuCloud.png" 
                alt="Cuchipu Cloud Mascot" 
                className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
              
              {/* --- Badges Tecnológicos Flotantes --- */}
              <div className="absolute -top-6 right-0 bg-[#0A1128]/80 backdrop-blur-md border border-sky-400/30 px-4 py-2 rounded-lg text-sky-400 font-bold font-mono text-xs sm:text-sm shadow-xl animate-[float_5s_ease-in-out_infinite_reverse]">
                &lt;code/&gt;
              </div>
              
              <div className="absolute bottom-12 -left-4 sm:-left-10 bg-[#0A1128]/80 backdrop-blur-md border border-amber-400/30 px-4 py-2 rounded-lg text-amber-400 font-bold font-mono text-xs sm:text-sm shadow-xl animate-[float_7s_ease-in-out_infinite_1s]">
                sys.admin
              </div>
              
              <div className="absolute top-1/3 -right-6 sm:-right-12 bg-[#0A1128]/80 backdrop-blur-md border border-purple-400/30 px-4 py-2 rounded-lg text-purple-400 font-bold font-mono text-xs sm:text-sm shadow-xl animate-[float_6s_ease-in-out_infinite_0.5s]">
                CI/CD
              </div>

              <div className="absolute top-4 -left-2 sm:-left-8 bg-[#0A1128]/80 backdrop-blur-md border border-rose-400/30 px-4 py-2 rounded-lg text-rose-400 font-bold font-mono text-xs sm:text-sm shadow-xl animate-[float_8s_ease-in-out_infinite_1.5s]">
                sudo root
              </div>

              <div className="absolute bottom-4 right-4 sm:right-10 bg-[#0A1128]/80 backdrop-blur-md border border-emerald-400/30 px-4 py-2 rounded-lg text-emerald-400 font-bold font-mono text-xs sm:text-sm shadow-xl animate-[float_5.5s_ease-in-out_infinite_0.8s]">
                API_REST
              </div>

              <div className="absolute top-2/3 -left-6 sm:-left-12 bg-[#0A1128]/80 backdrop-blur-md border border-blue-400/30 px-4 py-2 rounded-lg text-blue-400 font-bold font-mono text-xs sm:text-sm shadow-xl animate-[float_6.5s_ease-in-out_infinite_2s]">
                {`{ JSON }`}
              </div>
              {/* --------------------------------------- */}

            </div>

            <style jsx="true">{`
              @keyframes float {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
                100% { transform: translateY(0px); }
              }
            `}</style>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;