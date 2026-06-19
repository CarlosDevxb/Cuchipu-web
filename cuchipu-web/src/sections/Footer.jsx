import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#010409] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo Corporativo */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-black text-white tracking-widest bg-linear-to-r from-gray-200 to-gray-500 bg-clip-text">
              CUCHIPU ENTERTAINMENT
            </span>
          </div>

          {/* Enlaces de pie de página */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link to="/" className="text-gray-500 hover:text-cyan-400 transition-colors">Inicio</Link>
            <Link to="/servicios" className="text-gray-500 hover:text-cyan-400 transition-colors">Servicios</Link>
            <Link to="/nosotros" className="text-gray-500 hover:text-cyan-400 transition-colors">Nosotros</Link>
            <Link to="/contacto" className="text-gray-500 hover:text-cyan-400 transition-colors">Contacto</Link>
          </div>

          {/* Copyright e Info del Nodo */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-600 font-mono tracking-wide">
              &copy; {new Date().getFullYear()} Cuchipu. Todos los derechos reservados.
            </p>
            <p className="text-[10px] text-cyan-500/40 font-mono mt-1">
              Node Active // Saltillo, MX
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;