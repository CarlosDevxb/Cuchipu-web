import React from 'react';

function Services() {
  // Lista de servicios de ejemplo. Puedes modificarlos según lo que ofrezcan.
  const servicesList = [
    {
      id: 1,
      icon: '🌐', // Aquí luego puedes poner un SVG o un ícono de librerías como react-icons
      title: 'Desarrollo Web a Medida',
      description: 'Creamos plataformas web de alto rendimiento, escalables y seguras, utilizando las últimas tecnologías del mercado para garantizar la mejor experiencia de usuario.'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Aplicaciones Móviles',
      description: 'Llevamos tu idea a la palma de la mano de tus clientes con desarrollo de apps nativas o multiplataforma, optimizadas para iOS y Android.'
    },
    {
      id: 3,
      icon: '☁️',
      title: 'Arquitectura y Cloud',
      description: 'Diseñamos infraestructuras en la nube robustas y eficientes. Migramos y optimizamos tus sistemas para que nunca dejen de funcionar.'
    },
    {
      id: 4,
      icon: '⚙️',
      title: 'Mantenimiento y Soporte',
      description: 'No te dejamos solo después del lanzamiento. Ofrecemos soporte técnico continuo y actualizaciones para que tu software evolucione con tu negocio.'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-cuchipu-light font-semibold tracking-wide uppercase text-sm mb-2">
            Nuestras Especialidades
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-cuchipu-dark mb-4">
            Soluciones tecnológicas integrales
          </h3>
          <p className="text-gray-600 text-lg">
            Cubrimos todo el ciclo de vida del desarrollo de software, desde la concepción de la arquitectura hasta el despliegue y mantenimiento en producción.
          </p>
        </div>

        {/* Grid de Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Contenedor del ícono con animación sutil al hacer hover */}
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-cuchipu-light group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-cuchipu-dark mb-3">
                {service.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;