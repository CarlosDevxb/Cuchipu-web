import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const servicesList = [
    {
      title: "Desarrollo Frontend",
      description: "Interfaces de usuario rápidas y modernas usando React, Astro y Tailwind CSS, enfocadas en la mejor experiencia.",
      image: "/front.jpg", // Asegúrate de tener esta imagen en tu carpeta public
      icon: "💻"
    },
    {
      title: "Arquitectura Backend",
      description: "APIs robustas, bases de datos MySQL y servidores Node.js estructurados para soportar alto tráfico.",
      image: "/Backend.jpg",
      icon: "⚙️"
    },
    {
      title: "Infraestructura y Redes",
      description: "Configuración de servidores Linux, Docker, túneles Cloudflare y gestión de dominios seguros.",
      image: "/redes.jpeg",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-cuchipu-light font-semibold tracking-wide uppercase mb-2">Nuestra Experiencia</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-cuchipu-dark">
            Soluciones completas para tu ecosistema digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
              
              {/* Imagen de referencia del servicio */}
              <div className="w-full h-48 overflow-hidden bg-gray-200 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback visual si la imagen no se encuentra
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback en caso de no encontrar la imagen (Color sólido con el ícono) */}
                <div className="absolute inset-0 bg-blue-50 hidden items-center justify-center text-5xl">
                  {service.icon}
                </div>
              </div>

              {/* Contenido de texto */}
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-2xl mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-cuchipu-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/servicios" className="text-cuchipu-light font-medium hover:text-blue-700 inline-flex items-center gap-1 transition-colors">
                  Saber más
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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