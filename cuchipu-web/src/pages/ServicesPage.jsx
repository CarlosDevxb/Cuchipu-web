import React from 'react';

function ServicesPage() {
  const technicalServices = [
    {
      id: "frontend",
      title: "Desarrollo Frontend & UI/UX",
      icon: "💻",
      description: "Construimos interfaces de usuario dinámicas, rápidas y escalables. Nos enfocamos en la experiencia del usuario y en arquitecturas orientadas a componentes para sistemas complejos (como paneles de administración o e-commerce).",
      technologies: ["React", "Astro", "Tailwind CSS v4", "JavaScript/TypeScript"],
      accentBorder: "group-hover:border-cyan-500/50",
      accentShadow: "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]",
      tagColor: "text-cyan-300"
    },
    {
      id: "backend",
      title: "Arquitectura Backend & APIs",
      icon: "⚙️",
      description: "Desarrollamos el núcleo lógico de tu aplicación. Creamos APIs robustas y seguras capaces de manejar múltiples roles de usuario, procesamiento de datos en tiempo real y lógica de negocio compleja.",
      technologies: ["Node.js", "Express", "RESTful APIs", "JWT Authentication"],
      accentBorder: "group-hover:border-purple-500/50",
      accentShadow: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
      tagColor: "text-purple-300"
    },
    {
      id: "database",
      title: "Diseño de Bases de Datos",
      icon: "🗄️",
      description: "Estructuramos tu información para que sea íntegra, segura y de rápido acceso. Diseñamos esquemas relacionales optimizados para sistemas de gestión, control de inventarios o registros médicos y empresariales.",
      technologies: ["MySQL", "Modelado Relacional", "Optimización de Consultas"],
      accentBorder: "group-hover:border-emerald-500/50",
      accentShadow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
      tagColor: "text-emerald-300"
    },
    {
      id: "infrastructure",
      title: "Infraestructura, Servidores y Redes",
      icon: "☁️",
      description: "No solo programamos, también desplegamos. Configuramos servidores dedicados, gestionamos túneles seguros y administramos redes para que tu software esté siempre en línea, seguro y bajo tu control.",
      technologies: ["Linux Servers", "Ubuntu", "Cloudflare Tunnels", "Cisco Networking"],
      accentBorder: "group-hover:border-blue-500/50",
      accentShadow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
      tagColor: "text-blue-300"
    }
  ];

  return (
    <div className="bg-[#030712] min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      {/* Patrón de Red Digital de Fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      {/* Resplandores Ambientales */}
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- CABECERA DE LA PÁGINA --- */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3">Nuestras Capacidades</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Servicios <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">Técnicos Especializados</span>
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Nuestra especialidad es el desarrollo de software de principio a fin. Dominamos todo el stack tecnológico para construir desde la interfaz visual hasta la configuración profunda del servidor en producción.
          </p>
        </div>

        {/* --- DETALLE TÉCNICO DE LOS SERVICIOS --- */}
        <div className="space-y-16 lg:space-y-24">
          {technicalServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Esfera del Ícono */}
              <div className="w-full lg:w-1/3 flex justify-center relative">
                <div className={`w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#070d19] border border-white/10 flex items-center justify-center text-6xl shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-500 relative z-10 ${service.accentBorder} ${service.accentShadow}`}>
                  <span className="relative z-20 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </span>
                  {/* Círculo interior sutil */}
                  <div className="absolute inset-4 rounded-full border border-white/5 bg-white/1"></div>
                </div>
                {/* Conector visual (línea de fondo en pantallas grandes) */}
                <div className="hidden lg:block absolute top-1/2 -z-10 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
              </div>
              
              {/* Tarjeta de Contenido */}
              <div className="w-full lg:w-2/3 bg-[#0b1329]/40 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors shadow-2xl relative">
                
                {/* Decoración de esquina */}
                <div className="absolute top-0 left-0 w-20 h-20 overflow-hidden rounded-tl-2xl">
                    <div className="absolute -top-2.5 -left-2.5 w-20 h-20 bg-linear-to-br from-white/10 to-transparent rotate-45 transform origin-bottom-right opacity-20"></div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
                  {service.description}
                </p>
                
                {/* Stack Tecnológico */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className={`px-4 py-2 bg-[#070d19] ${service.tagColor} text-xs font-bold tracking-wide rounded-lg border border-white/10 shadow-inner`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ServicesPage;