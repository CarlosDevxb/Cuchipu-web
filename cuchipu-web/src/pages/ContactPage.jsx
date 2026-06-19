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
      // Llamada al backend en producción
      const response = await fetch('https://api.cuchipu.cloud/api/contact', {
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
    <div className="bg-[#030712] min-h-screen pt-32 pb-20 relative overflow-hidden">
      
      {/* Patrón de Red Digital de Fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      {/* Resplandores de Neón de Fondo */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- CABECERA PRINCIPAL --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3">Conexión Segura</div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
            Ponte en <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Contacto</span>
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Estamos listos para transformar tu idea en código. Encuentra la información de contacto general o comunícate directamente con el área encargada de tu solicitud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-32">
          
          {/* --- INFORMACIÓN GENERAL DE LA EMPRESA --- */}
          <div className="lg:col-span-1 bg-[#0b1329]/60 backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight relative z-10">Información General</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#070d19] border border-white/10 rounded-xl flex items-center justify-center shrink-0 text-2xl shadow-inner group-hover:border-cyan-500/30 transition-colors">
                  📧
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Correo Principal</p>
                  <a href="mailto:contacto@cuchipu.cloud" className="text-base font-semibold text-gray-300 hover:text-cyan-400 transition-colors">contacto@cuchipu.cloud</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#070d19] border border-white/10 rounded-xl flex items-center justify-center shrink-0 text-2xl shadow-inner group-hover:border-blue-500/30 transition-colors">
                  🌐
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Sitio Web y Soporte</p>
                  <a href="https://cuchipu.cloud" target="_blank" rel="noreferrer" className="text-base font-semibold text-gray-300 hover:text-cyan-400 transition-colors">cuchipu.cloud</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[#070d19] border border-white/10 rounded-xl flex items-center justify-center shrink-0 text-2xl shadow-inner group-hover:border-purple-500/30 transition-colors">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Ubicación del Nodo</p>
                  <p className="text-base font-semibold text-gray-300">Saltillo, Coahuila, México</p>
                  <p className="text-sm text-cyan-500/50 mt-1 font-mono">Operando a nivel global</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- FORMULARIO CONECTADO AL BACKEND --- */}
          <div className="lg:col-span-2 bg-[#0b1329]/40 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/5 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#070d19] border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none text-white placeholder-gray-600 transition-all shadow-inner" 
                    placeholder="Ej. Juan Pérez" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#070d19] border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none text-white placeholder-gray-600 transition-all shadow-inner" 
                    placeholder="juan@empresa.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Motivo / Área</label>
                <select 
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#070d19] border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none text-white transition-all shadow-inner [&>option]:bg-[#070d19] [&>option]:text-white"
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
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Mensaje</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5" 
                  className="w-full px-4 py-3 bg-[#070d19] border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none text-white placeholder-gray-600 resize-none transition-all shadow-inner" 
                  placeholder="Describe los requerimientos técnicos de tu proyecto..."
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-3 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-shadow">
                  Iniciar Transmisión
                </Button>
                
                {/* Mensaje de estado visual para el usuario adaptado a modo oscuro */}
                {status && (
                  <span className={`text-sm font-medium tracking-wide ${status.includes('éxito') ? 'text-emerald-400' : status.includes('Error') || status.includes('error') ? 'text-rose-400' : 'text-cyan-400 animate-pulse'}`}>
                    {status}
                  </span>
                )}
              </div>
            </form>

          </div>
        </div>

        {/* Separador Visual Neón */}
        <div className="w-full flex justify-center mb-24">
            <div className="w-32 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
        </div>

        {/* --- DIRECTORIO DE ÁREAS --- */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white tracking-tight mb-4">Directorio de Áreas</h2>
            <p className="text-gray-400 font-light">Comunícate directamente con los líderes de cada departamento según tus necesidades operativas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {contactDirectory.map((contact, index) => (
              <div key={index} className="bg-[#0b1329]/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 flex flex-col sm:flex-row gap-6 items-start group hover:border-cyan-500/30 hover:bg-[#0b1329]/50 transition-all duration-300">
                <div className="w-14 h-14 bg-[#070d19] rounded-xl flex items-center justify-center shrink-0 text-2xl border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300">
                  👤
                </div>
                <div className="grow">
                  <h4 className="text-xl font-bold text-white tracking-wide mb-1">{contact.area}</h4>
                  <p className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-widest">{contact.person} <span className="text-gray-600 font-normal ml-2">| {contact.role}</span></p>
                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">{contact.description}</p>
                  <a href={`mailto:${contact.email}`} className="inline-block text-sm font-medium text-gray-300 hover:text-cyan-400 border-b border-cyan-500/30 hover:border-cyan-400 pb-0.5 transition-colors">
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