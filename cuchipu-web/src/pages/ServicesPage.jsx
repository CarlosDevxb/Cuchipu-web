import React from 'react';

function ServicesPage() {
  const technicalServices = [
    {
      id: "frontend",
      title: "Desarrollo Frontend & UI/UX",
      icon: "💻",
      description: "Construimos interfaces de usuario dinámicas, rápidas y escalables. Nos enfocamos en la experiencia del usuario y en arquitecturas orientadas a componentes para sistemas complejos (como paneles de administración o e-commerce).",
      technologies: ["React", "Astro", "Tailwind CSS v4", "JavaScript/TypeScript"]
    },
    {
      id: "backend",
      title: "Arquitectura Backend & APIs",
      icon: "⚙️",
      description: "Desarrollamos el núcleo lógico de tu aplicación. Creamos APIs robustas y seguras capaces de manejar múltiples roles de usuario, procesamiento de datos en tiempo real y lógica de negocio compleja.",
      technologies: ["Node.js", "Express", "RESTful APIs", "JWT Authentication"]
    },
    {
      id: "database",
      title: "Diseño de Bases de Datos",
      icon: "🗄️",
      description: "Estructuramos tu información para que sea íntegra, segura y de rápido acceso. Diseñamos esquemas relacionales optimizados para sistemas de gestión, control de inventarios o registros médicos y empresariales.",
      technologies: ["MySQL", "Modelado Relacional", "Optimización de Consultas"]
    },
    {
      id: "infrastructure",
      title: "Infraestructura, Servidores y Redes",
      icon: "☁️",
      description: "No solo programamos, también desplegamos. Configuramos servidores dedicados, gestionamos túneles seguros y administramos redes para que tu software esté siempre en línea, seguro y bajo tu control.",
      technologies: ["Linux Servers", "Ubuntu", "Cloudflare Tunnels", "Cisco Networking"]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la página */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cuchipu-dark mb-6">
            Servicios <span className="text-transparent bg-clip-text bg-linear-to-r from-cuchipu-light to-blue-600">Técnicos Especializados</span>
          </h1>
          <p className="text-lg text-gray-600">
            Nuestra especialidad es el desarrollo de software de principio a fin. Dominamos todo el stack tecnológico para construir desde la interfaz hasta la configuración del servidor en producción.
          </p>
        </div>

        {/* Detalle técnico de los servicios */}
        <div className="space-y-12">
          {technicalServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="w-40 h-40 bg-gray-50 rounded-full flex items-center justify-center text-6xl shadow-inner border border-gray-100">
                  {service.icon}
                </div>
              </div>
              
              <div className="w-full lg:w-2/3 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-cuchipu-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Stack Tecnológico */}
                <div>
                  <h4 className="text-sm font-semibold text-cuchipu-light mb-3 uppercase tracking-wider">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-blue-50 text-cuchipu-dark text-sm font-medium rounded-md border border-blue-100"
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