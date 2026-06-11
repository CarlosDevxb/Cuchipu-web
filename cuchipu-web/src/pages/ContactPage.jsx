import React, { useState } from 'react';
import Button from '../components/Button';

function ContactPage() {
  // --- ESTADOS DEL FORMULARIO ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: 'Cotización de Proyecto',
    message: ''
  });
  const [status, setStatus] = useState('');

  // --- MANEJO DE EVENTOS ---
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando mensaje...');

    try {
      // Llamada al backend de Node.js (Asegúrate de que esté corriendo en el puerto 3001)
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        // Limpiamos el formulario después de enviar
        setFormData({ name: '', email: '', area: 'Cotización de Proyecto', message: '' }); 
      } else {
        setStatus('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error de conexión con el servidor.');
    }
  };

  // --- DIRECTORIO DE ÁREAS ---
  const contactDirectory = [
    {
      area: "Nuevos Proyectos y Cotizaciones",
      person: "Paola Vazquez",
      role: "Project Manager",
      email: "proyectos@cuchipu.cloud",
      description: "Para iniciar un nuevo desarrollo, planificar tiempos y solicitar presupuestos."
    },
    {
      area: "Consultoría y Arquitectura",
      person: "Sofia Star / Carlos Cepeda",
      role: "Consulting & Coordinación",
      email: "arquitectura@cuchipu.cloud",
      description: "Asesoramiento técnico, evaluación de escalabilidad y diseño de infraestructura."
    },
    {
      area: "Reclutamiento y Talento",
      person: "Alondra Zuñiga",
      role: "Human Resources",
      email: "rrhh@cuchipu.cloud",
      description: "Envío de CVs, vacantes disponibles y gestión de capital humano."
    },
    {
      area: "Marketing y Alianzas",
      person: "Jonathan Perez",
      role: "Marketing Specialist",
      email: "marketing@cuchipu.cloud",
      description: "Propuestas comerciales, publicidad y estrategias de crecimiento digital."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- CABECERA PRINCIPAL --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cuchipu-dark mb-4">
            Ponte en <span className="text-cuchipu-light">Contacto</span>
          </h1>
          <p className="text-lg text-gray-600">
            Estamos listos para transformar tu idea en código. Encuentra la información de contacto general o comunícate directamente con el área encargada de tu solicitud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          
          {/* --- INFORMACIÓN GENERAL DE LA EMPRESA --- */}
          <div className="lg:col-span-1 bg-cuchipu-dark text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Información General</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-xl">📧</div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Correo Principal</p>
                  <a href="mailto:contacto@cuchipu.cloud" className="text-lg font-semibold hover:text-cuchipu-light transition-colors">contacto@cuchipu.cloud</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-xl">🌐</div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Sitio Web y Soporte</p>
                  <a href="https://cuchipu.cloud" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-cuchipu-light transition-colors">cuchipu.cloud</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 text-xl">📍</div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Ubicación</p>
                  <p className="text-lg font-semibold">Saltillo, Coahuila, México</p>
                  <p className="text-sm text-gray-400 mt-1">Operando servidores a nivel global</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- FORMULARIO CONECTADO AL BACKEND --- */}
          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-cuchipu-dark mb-6">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cuchipu-light focus:border-transparent outline-none bg-white transition-shadow" 
                    placeholder="Ej. Juan Pérez" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cuchipu-light focus:border-transparent outline-none bg-white transition-shadow" 
                    placeholder="juan@empresa.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Motivo / Área</label>
                <select 
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cuchipu-light focus:border-transparent outline-none bg-white transition-shadow"
                >
                  <option value="Cotización de Proyecto">Cotización de Proyecto</option>
                  <option value="Soporte Técnico">Soporte Técnico</option>
                  <option value="Consultoría">Consultoría</option>
                  <option value="Recursos Humanos">Recursos Humanos</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cuchipu-light focus:border-transparent outline-none bg-white resize-none transition-shadow" 
                  placeholder="Cuéntanos sobre tu proyecto o duda..."
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Enviar Mensaje
                </Button>
                
                {/* Mensaje de estado visual para el usuario */}
                {status && (
                  <span className={`text-sm font-medium ${status.includes('éxito') ? 'text-green-600' : status.includes('Error') || status.includes('error') ? 'text-red-600' : 'text-cuchipu-light'}`}>
                    {status}
                  </span>
                )}
              </div>
            </form>

          </div>
        </div>

        {/* --- DIRECTORIO DE ÁREAS --- */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-cuchipu-dark mb-4">Directorio de Áreas</h2>
            <p className="text-gray-600">Comunícate directamente con los líderes de cada departamento según tus necesidades.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactDirectory.map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-4 items-start group">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 text-xl border border-blue-100 group-hover:bg-cuchipu-light group-hover:text-white transition-colors duration-300">
                  👤
                </div>
                <div>
                  <h4 className="text-lg font-bold text-cuchipu-dark">{contact.area}</h4>
                  <p className="text-sm font-semibold text-cuchipu-light mb-2">{contact.person} <span className="text-gray-400 font-normal">| {contact.role}</span></p>
                  <p className="text-gray-600 text-sm mb-3">{contact.description}</p>
                  <a href={`mailto:${contact.email}`} className="text-sm font-medium text-cuchipu-dark hover:text-cuchipu-light border-b border-cuchipu-light pb-0.5 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactPage;