import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#040814] border-t border-sky-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo Corporativo */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-white tracking-wide">
              Cuchipu<span className="text-sky-400">Cloud</span>
            </span>
          </div>

          {/* Enlaces de pie de página */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold">
            <Link to="/" className="text-sky-200/60 hover:text-amber-400 transition-colors">Inicio</Link>
            <Link to="/servicios" className="text-sky-200/60 hover:text-amber-400 transition-colors">Servicios</Link>
            <Link to="/nosotros" className="text-sky-200/60 hover:text-amber-400 transition-colors">Nosotros</Link>
            <Link to="/contacto" className="text-sky-200/60 hover:text-amber-400 transition-colors">Contacto</Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-xs text-sky-200/40 font-mono tracking-wide">
              &copy; {new Date().getFullYear()} Cuchipu Cloud.
            </p>
            <p className="text-[10px] text-sky-500/30 font-mono mt-1">
              Solid Infrastructure // Saltillo, MX
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;