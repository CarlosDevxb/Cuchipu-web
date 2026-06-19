import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const servicesList = [
    {
      title: "Desarrollo Full-Stack",
      description: "Ecosistemas web robustos construidos con React, Astro y arquitecturas API eficientes en Node.js, optimizados para rendimiento masivo.",
      image: "/Backend.jpg",
      icon: "💻",
      glowColor: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    },
    {
      title: "Ingeniería de Datos",
      description: "Modelado relacional y estructuración de bases de datos escalables en MySQL, diseñados para garantizar integridad y velocidad de respuesta.",
      image: "/front.jpg",
      icon: "⚙️",
      glowColor: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
    },
    {
      title: "Infraestructura & DevOps",
      description: "Alojamiento avanzado en servidores Linux, contenedores Docker y pasarelas de seguridad perimetral mediante túneles Cloudflare.",
      image: "/redes.jpeg",
      icon: "🌐",
      glowColor: "group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
    }
  ];

  return (
    <section className="py-28 bg-[#020617] relative overflow-hidden">
      
      {/* Sutil resplandor lateral */}
      <div className="absolute right-0 top-1/3 w-72 h-72 rounded-full bg-purple-500/5 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3">Core Capabilities</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Soluciones completas para tu ecosistema digital
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className={`bg-[#0b1329]/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden group transition-all duration-500 ${service.glowColor}`}
            >
              
              {/* Imagen del Servicio con Capa Tecnológica */}
              <div className="w-full h-52 overflow-hidden bg-slate-900 relative">
                <div className="absolute inset-0 bg-linear-to-t from-[#0b1329] via-transparent to-transparent z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-[#070d19] hidden items-center justify-center text-5xl">
                  {service.icon}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 relative z-20">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-inner">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm">
                  {service.description}
                </p>
                
                <Link 
                  to="/servicios" 
                  className="text-cyan-400 font-medium hover:text-cyan-300 inline-flex items-center gap-2 group/link transition-colors text-sm tracking-wider uppercase"
                >
                  Ver especificaciones
                  <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;