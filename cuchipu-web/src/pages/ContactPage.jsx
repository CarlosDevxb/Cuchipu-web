import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    area: 'Cotización de Proyecto',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Iniciando transmisión...');

    try {
      const response = await fetch('https://api.cuchipu.cloud/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('¡Transmisión exitosa! Hemos recibido tu mensaje.');
        setFormData({ name: '', email: '', area: 'Cotización de Proyecto', message: '' }); 
      } else {
        setStatus('Error en el nodo. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error de conexión con el servidor principal.');
    }
  };

  const contactDirectory = [
    {
      area: "Nuevos Proyectos y Cotizaciones",
      person: "Paola Vazquez",
      role: "Project Manager",
      email: "proyectos@cuchipu.cloud",
      icon: "🚀",
      description: "Para iniciar un nuevo desarrollo, planificar tiempos y solicitar presupuestos operativos."
    },
    {
      area: "Consultoría y Arquitectura",
      person: "Sofia Star / Carlos Cepeda",
      role: "Consulting & Coordinación",
      email: "arquitectura@cuchipu.cloud",
      icon: "🏗️",
      description: "Asesoramiento técnico, evaluación de escalabilidad y diseño de infraestructura."
    },
    {
      area: "Reclutamiento y Talento",
      person: "Alondra Zuñiga",
      role: "Human Resources",
      email: "rrhh@cuchipu.cloud",
      icon: "👥",
      description: "Envío de perfiles, vacantes de ingeniería disponibles y gestión de capital humano."
    },
    {
      area: "Marketing y Alianzas",
      person: "Jonathan Perez",
      role: "Marketing Specialist",
      email: "marketing@cuchipu.cloud",
      icon: "📈",
      description: "Propuestas comerciales, publicidad y estrategias de crecimiento en el ecosistema digital."
    }
  ];

  return (
    <div className="bg-[#0A1128] min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Fondo Dinámico Ambiental */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf805_1px,transparent_1px),linear-gradient(to_bottom,#38bdf805_1px,transparent_1px)] bg-size-[40px_40px] z-0 pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-125 h-125 bg-sky-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-amber-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- CABECERA PRINCIPAL --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-[fadeInUp_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-900/30 border border-sky-400/20 text-sky-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Conexión Segura
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            Ponte en <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-500">Contacto</span>
          </h1>
          <p className="text-lg text-sky-100/70 font-light leading-relaxed">
            Estamos listos para desplegar tu idea en producción. Utiliza nuestro terminal de contacto general o comunícate directamente con el nodo encargado de tu solicitud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-32">
          
          {/* --- INFORMACIÓN GENERAL DE LA EMPRESA --- */}
          <div className="lg:col-span-1 bg-[#050A18]/60 backdrop-blur-xl border border-sky-400/20 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sky-400 to-amber-400"></div>
            
            <h3 className="text-2xl font-bold text-white mb-10 tracking-tight relative z-10">Información General</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0A1128] border border-sky-400/20 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-inner group-hover:border-sky-400/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
                  📧
                </div>
                <div>
                  <p className="text-xs text-sky-500 font-bold uppercase tracking-widest mb-1">Correo Principal</p>
                  <a href="mailto:contacto@cuchipu.cloud" className="text-base font-bold text-sky-100 hover:text-amber-400 transition-colors">contacto@cuchipu.cloud</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0A1128] border border-sky-400/20 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-inner group-hover:border-sky-400/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
                  🌐
                </div>
                <div>
                  <p className="text-xs text-sky-500 font-bold uppercase tracking-widest mb-1">Sitio Web y Soporte</p>
                  <a href="https://cuchipu.cloud" target="_blank" rel="noreferrer" className="text-base font-bold text-sky-100 hover:text-amber-400 transition-colors">cuchipu.cloud</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#0A1128] border border-sky-400/20 rounded-2xl flex items-center justify-center shrink-0 text-2xl shadow-inner group-hover:border-sky-400/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
                  📍
                </div>
                <div>
                  <p className="text-xs text-sky-500 font-bold uppercase tracking-widest mb-1">Ubicación del Nodo</p>
                  <p className="text-base font-bold text-sky-100">Saltillo, Coahuila, México</p>
                  <p className="text-xs text-sky-100/50 mt-1 font-mono tracking-wide">Infraestructura global activa</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- FORMULARIO CONECTADO AL BACKEND --- */}
          <div className="lg:col-span-2 bg-[#050A18]/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-sky-400/10 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Terminal de Transmisión</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-sky-100/60 uppercase tracking-widest mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#0A1128] border border-sky-400/20 rounded-xl focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 outline-none text-white placeholder-sky-100/30 transition-all shadow-inner font-light" 
                    placeholder="Ej. Juan Pérez" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-sky-100/60 uppercase tracking-widest mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#0A1128] border border-sky-400/20 rounded-xl focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 outline-none text-white placeholder-sky-100/30 transition-all shadow-inner font-light" 
                    placeholder="juan@empresa.com" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-sky-100/60 uppercase tracking-widest mb-2">Motivo / Área</label>
                <select 
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#0A1128] border border-sky-400/20 rounded-xl focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 outline-none text-white transition-all shadow-inner font-light [&>option]:bg-[#0A1128] [&>option]:text-white"
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
                <label className="block text-xs font-bold text-sky-100/60 uppercase tracking-widest mb-2">Mensaje</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5" 
                  className="w-full px-5 py-4 bg-[#0A1128] border border-sky-400/20 rounded-xl focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 outline-none text-white placeholder-sky-100/30 resize-none transition-all shadow-inner font-light" 
                  placeholder="Describe los requerimientos técnicos de tu proyecto..."
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button type="submit" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-[#0A1128] font-black text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:-translate-y-1 transition-all duration-300">
                  Enviar Transmisión
                </button>
                
                {status && (
                  <span className={`text-sm font-bold tracking-wide px-4 py-2 rounded-lg backdrop-blur-sm ${status.includes('exitos') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : status.includes('Error') ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 'bg-sky-500/10 text-sky-400 border border-sky-500/20 animate-pulse'}`}>
                    {status}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Separador */}
        <div className="w-full flex justify-center mb-24">
            <div className="w-48 h-px bg-linear-to-r from-transparent via-sky-400/50 to-transparent"></div>
        </div>

        {/* --- DIRECTORIO DE ÁREAS --- */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">Directorio de Operaciones</h2>
            <p className="text-sky-100/70 font-light">Comunícate directamente con los líderes de cada departamento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {contactDirectory.map((contact, index) => (
              <div 
                key={index} 
                className="bg-[#050A18]/50 backdrop-blur-xl p-8 rounded-3xl border border-sky-400/10 flex flex-col sm:flex-row gap-6 items-start group hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-[#0A1128] rounded-2xl flex items-center justify-center shrink-0 text-3xl border border-sky-400/20 group-hover:border-amber-400/50 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {contact.icon}
                </div>
                <div className="grow">
                  <h4 className="text-xl font-bold text-white tracking-wide mb-1 group-hover:text-sky-300 transition-colors">{contact.area}</h4>
                  <p className="text-[11px] font-bold text-amber-400 mb-4 uppercase tracking-widest">{contact.person} <span className="text-sky-100/40 font-normal mx-2">|</span> <span className="text-sky-400">{contact.role}</span></p>
                  <p className="text-sky-100/60 text-sm leading-relaxed font-light mb-4">{contact.description}</p>
                  <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-sm font-bold text-sky-100 hover:text-amber-400 transition-colors">
                    <span>Enviar correo</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx="true">{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default ContactPage;