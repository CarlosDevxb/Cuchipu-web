import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  // Lista condensada con los 8 servicios para la vista de la página de Inicio
  const servicesList = [
    {
      title: "Desarrollo Frontend",
      description: "Interfaces y lógicas de negocio escritas con código limpio y moderno.",
      icon: "</>",
      accentHover: "group-hover:border-cyan-400/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
      textColor: "group-hover:text-cyan-400"
    },
    {
      title: "Arquitectura Backend",
      description: "APIs robustas, seguras y capaces de manejar roles y procesamiento masivo.",
      icon: "⚙️",
      accentHover: "group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      textColor: "group-hover:text-purple-400"
    },
    {
      title: "Bases de Datos",
      description: "Modelado relacional estructurado para integridad y rápido acceso a la información.",
      icon: "🗄️",
      accentHover: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      textColor: "group-hover:text-emerald-400"
    },
    {
      title: "Infraestructura Cloud",
      description: "Alojamiento en ecosistemas Linux, túneles seguros y máxima disponibilidad.",
      icon: "☁️",
      accentHover: "group-hover:border-blue-400/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
      textColor: "group-hover:text-blue-400"
    },
    {
      title: "DevOps & Contenedores",
      description: "Automatización con Docker y CI/CD para despliegues sin interrupciones.",
      icon: "🐳",
      accentHover: "group-hover:border-amber-400/50 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
      textColor: "group-hover:text-amber-400"
    },
    {
      title: "Redes Físicas",
      description: "Configuración de redes locales, ruteo avanzado e instalación de hardware en sitio.",
      icon: "🔌",
      accentHover: "group-hover:border-rose-400/50 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
      textColor: "group-hover:text-rose-400"
    },
    {
      title: "Soporte & Monitoreo",
      description: "Supervisión de servidores 24/7 y resolución de incidentes en tiempo real.",
      icon: "🛠️",
      accentHover: "group-hover:border-teal-400/50 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]",
      textColor: "group-hover:text-teal-400"
    },
    {
      title: "Consultoría Tech",
      description: "Auditoría de sistemas lentos e inseguros para reestructurar y escalar operaciones.",
      icon: "📊",
      accentHover: "group-hover:border-fuchsia-400/50 group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]",
      textColor: "group-hover:text-fuchsia-400"
    }
  ];

  return (
    <section className="py-24 bg-[#060B19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-sm font-bold text-amber-400 tracking-widest uppercase mb-3">Ecosistema Tecnológico</div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Herramientas sólidas para construir tu empresa
          </h2>
        </div>

        {/* Cuadrícula ajustada para mostrar los 8 servicios perfectamente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className={`bg-[#0A1128] rounded-2xl border border-sky-900/50 overflow-hidden group transition-all duration-300 p-6 relative ${service.accentHover}`}
            >
              <div className="w-12 h-12 bg-sky-900/40 border border-sky-400/20 rounded-xl flex items-center justify-center text-2xl mb-5 text-white font-bold shadow-inner group-hover:bg-sky-800/60 transition-colors">
                {service.icon}
              </div>
              
              <h3 className={`text-xl font-bold text-white mb-3 tracking-tight transition-colors ${service.textColor}`}>
                {service.title}
              </h3>
              
              <p className="text-sky-100/70 font-light leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              
              <Link 
                to="/servicios" 
                className="text-sky-400/80 font-bold group-hover:text-sky-400 inline-flex items-center gap-2 group/link transition-colors text-xs uppercase tracking-wider absolute bottom-6"
              >
                Saber más
                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;