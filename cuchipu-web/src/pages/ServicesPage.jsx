import React from 'react';

function ServicesPage() {
  const technicalServices = [
    {
      id: "frontend",
      title: "Desarrollo Frontend & UI/UX",
      icon: "💻",
      description: "Construimos interfaces de usuario dinámicas, rápidas y escalables. Arquitecturas orientadas a componentes para sistemas complejos y dashboards de alto rendimiento.",
      technologies: ["React", "Astro", "Tailwind CSS", "JavaScript"],
      glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] group-hover:border-sky-400/50",
      iconGlow: "bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20",
      tagColor: "text-sky-300 border-sky-500/20 bg-sky-900/20"
    },
    {
      id: "backend",
      title: "Arquitectura Backend & APIs",
      icon: "⚙️",
      description: "El núcleo lógico de tu aplicación. APIs robustas y seguras capaces de manejar múltiples roles de usuario, procesamiento masivo y lógica de negocio compleja.",
      technologies: ["Node.js", "Express", "RESTful APIs", "JWT"],
      glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:border-purple-400/50",
      iconGlow: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20",
      tagColor: "text-purple-300 border-purple-500/20 bg-purple-900/20"
    },
    {
      id: "database",
      title: "Diseño de Bases de Datos",
      icon: "🗄️",
      description: "Estructuramos tu información para que sea íntegra, segura y de rápido acceso. Diseñamos esquemas relacionales optimizados para sistemas de gestión.",
      technologies: ["MySQL", "Modelado Relacional", "Optimización"],
      glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:border-emerald-400/50",
      iconGlow: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
      tagColor: "text-emerald-300 border-emerald-500/20 bg-emerald-900/20"
    },
    {
      id: "infrastructure",
      title: "Servidores Cloud & Linux",
      icon: "☁️",
      description: "Configuramos servidores dedicados, gestionamos túneles seguros y administramos el entorno para que tu software esté siempre en línea bajo control riguroso.",
      technologies: ["Linux Servers", "Ubuntu", "Cloudflare Tunnels"],
      glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-blue-400/50",
      iconGlow: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20",
      tagColor: "text-blue-300 border-blue-500/20 bg-blue-900/20"
    },
    {
      id: "devops",
      title: "DevOps & Contenedores",
      icon: "🐳",
      description: "Automatización de despliegues para que las actualizaciones lleguen sin caídas. Creación de entornos aislados y diseño de pipelines de integración continua (CI/CD).",
      technologies: ["Docker", "CI/CD", "Automatización", "Scripts"],
      glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] group-hover:border-amber-400/50",
      iconGlow: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20",
      tagColor: "text-amber-300 border-amber-500/20 bg-amber-900/20"
    },
    {
      id: "networking",
      title: "Redes Físicas y Hardware",
      icon: "🔌",
      description: "Diseño y configuración de redes locales (LAN/WAN), ruteo avanzado, segmentación por VLANs e instalación de servidores físicos directamente en sitio.",
      technologies: ["Cisco", "VLANs", "Routing", "Hardware"],
      glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] group-hover:border-rose-400/50",
      iconGlow: "bg-rose-500/10 text-rose-400 group-hover:bg-rose-500/20",
      tagColor: "text-rose-300 border-rose-500/20 bg-rose-900/20"
    },
    {
      id: "maintenance",
      title: "Soporte Continuo",
      icon: "🛠️",
      description: "Actualización de sistemas legados, monitoreo de servidores en tiempo real 24/7 y resolución inmediata de alertas o caídas de servicio.",
      technologies: ["Monitoreo 24/7", "Mantenimiento", "Resolución"],
      glow: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] group-hover:border-teal-400/50",
      iconGlow: "bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20",
      tagColor: "text-teal-300 border-teal-500/20 bg-teal-900/20"
    },
    {
      id: "consulting",
      title: "Consultoría y Auditoría Tech",
      icon: "📊",
      description: "Asesoramiento especializado para empresas con sistemas lentos o vulnerabilidades de seguridad que necesitan reestructurar su arquitectura para escalar.",
      technologies: ["Auditoría de Código", "Escalabilidad", "Arquitectura"],
      glow: "group-hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] group-hover:border-fuchsia-400/50",
      iconGlow: "bg-fuchsia-500/10 text-fuchsia-400 group-hover:bg-fuchsia-500/20",
      tagColor: "text-fuchsia-300 border-fuchsia-500/20 bg-fuchsia-900/20"
    }
  ];

  return (
    <div className="bg-[#0A1128] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Fondo Dinámico Ambiental */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf808_1px,transparent_1px),linear-gradient(to_bottom,#38bdf808_1px,transparent_1px)] bg-size-[40px_40px] z-0 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-150 h-150 bg-sky-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- CABECERA --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-[fadeIn_1s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-900/30 border border-sky-400/20 text-sky-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Capacidades Técnicas
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Ecosistema de <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-blue-500 to-sky-300">Soluciones</span>
          </h1>
          <p className="text-lg text-sky-100/70 font-light leading-relaxed">
            Dominamos todo el stack tecnológico. Desde la interfaz visual que aman tus usuarios hasta la configuración de servidores dedicados en producción.
          </p>
        </div>

        {/* --- GRID ESTILO DASHBOARD / BENTO BOX --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {technicalServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`group relative bg-[#050A18]/60 backdrop-blur-xl rounded-2xl p-8 border border-sky-400/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col h-full ${service.glow}`}
              style={{ animation: `fadeInUp 0.6s ease-out ${(index * 0.1)}s both` }}
            >
              {/* Efecto de luz de barrido interno en hover */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="flex items-start gap-6 relative z-10">
                {/* Contenedor del Ícono con animación */}
                <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl border border-white/5 shadow-inner transition-colors duration-300 relative ${service.iconGlow}`}>
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                  {/* Círculo pulsante detrás del icono */}
                  <div className="absolute inset-0 rounded-2xl bg-current opacity-20 group-hover:animate-ping"></div>
                </div>

                {/* Textos Principales */}
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sky-100/60 leading-relaxed font-light text-sm mb-6">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Stack Tecnológico empujado siempre hacia abajo */}
              <div className="mt-auto pt-6 border-t border-white/5 relative z-10">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className={`px-3 py-1 text-xs font-bold tracking-wide rounded-md border backdrop-blur-sm transition-colors duration-300 ${service.tagColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Definición de Keyframes para las animaciones de entrada */}
      <style jsx="true">{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default ServicesPage;