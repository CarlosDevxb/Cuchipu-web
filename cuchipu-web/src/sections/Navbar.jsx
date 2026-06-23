import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  return (
    <nav className="fixed w-full bg-[#0A1128]/80 backdrop-blur-xl z-50 border-b border-sky-200/10 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo y Nombre */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/CuchipuCloud.png" 
                alt="Cuchipu Cloud Logo" 
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
              />
              <span className="text-2xl font-black text-white tracking-wide">
                Cuchipu<span className="text-sky-400">Cloud</span>
              </span>
            </Link>
          </div>

          {/* Enlaces de Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-sky-100 hover:text-amber-400 font-semibold tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto">
              <button className="bg-amber-400 hover:bg-amber-300 text-[#0A1128] font-bold py-2.5 px-6 rounded-lg shadow-[0_4px_14px_0_rgba(251,191,36,0.39)] hover:shadow-[0_6px_20px_rgba(251,191,36,0.23)] hover:-translate-y-0.5 transition-all duration-200">
                Contacto
              </button>
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-200 hover:text-white focus:outline-none p-2 rounded-lg bg-sky-900/30"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1128]/95 backdrop-blur-2xl border-b border-sky-200/10">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-sky-100 font-semibold hover:text-amber-400 transition-colors py-3 text-base border-b border-sky-900/50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/contacto" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-amber-400 hover:bg-amber-300 text-[#0A1128] font-bold py-3 px-6 rounded-lg transition-colors">
                  Contacto
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;