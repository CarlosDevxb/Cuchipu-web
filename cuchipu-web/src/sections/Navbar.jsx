import React, { useState } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Enlaces de navegación de la landing
const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Contacto', path: '/contacto' },
];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div className="shrink-0 flex items-center gap-2">
            {/* Aquí irá tu imagen.jpg optimizada más adelante */}
            <div className="w-10 h-10 bg-cuchipu-light rounded-lg flex items-center justify-center font-bold text-white text-xl">
              C
            </div>
            <span className="font-bold text-xl text-cuchipu-dark tracking-tight">
              Cuchipu<span className="text-cuchipu-light font-medium text-sm block -mt-1 tracking-wider uppercase">Entertainment</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-cuchipu-dark font-semibold hover:text-cuchipu-light transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button variant="primary">
              Iniciar Proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cuchipu-dark hover:text-cuchipu-light focus:outline-none p-2"
              aria-label="Toggle menu"
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
{/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <Link /* <--- Asegúrate de que sea Link y no 'a' */
                key={link.name}
                to={link.path} /* <--- Asegúrate de usar 'to' y no 'href' */
                onClick={() => setIsOpen(false)} /* <--- Esto cierra el menú al instante */
                className="block text-cuchipu-dark font-semibold hover:text-cuchipu-light transition-colors py-2 text-base"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contacto" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full text-center">
                  Iniciar Proyecto
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