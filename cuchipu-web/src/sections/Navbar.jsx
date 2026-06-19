import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  return (
    <nav className="fixed w-full bg-[#030712]/70 backdrop-blur-xl z-50 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo con Resplandor */}
          <div className="shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group relative">
              <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
              <img 
                src="/Logo.png" 
                alt="Logo Cuchipu" 
                className="h-9 w-auto relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-black text-white tracking-wider relative z-10 bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text">
                CUHIPU CLOUD
              </span>
            </Link>
          </div>

          {/* Enlaces de Escritorio */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-400 hover:text-cyan-400 font-medium tracking-wide transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto">
              <Button variant="primary" className="shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                Contacto
              </Button>
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
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
        <div className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 font-semibold hover:text-cyan-400 transition-colors py-3 text-base border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link to="/contacto" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full text-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  Contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;