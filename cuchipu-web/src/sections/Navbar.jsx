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
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo y Nombre */}
          <div className="shrink-0 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/Logo.png" 
                alt="Logo Cuchipu" 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-extrabold text-cuchipu-light tracking-tight">
                Cuchipu Entertainment
              </span>
            </Link>
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-600 hover:text-cuchipu-light font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contacto">
              <Button variant="primary">Contacto</Button>
            </Link>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-cuchipu-dark focus:outline-none p-2"
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
        <div className="md:hidden bg-white border-b border-gray-100 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-cuchipu-dark font-semibold hover:text-cuchipu-light transition-colors py-2 text-base"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contacto" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full text-center">
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