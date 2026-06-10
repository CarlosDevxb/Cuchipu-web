import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cuchipu-dark pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Marca y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cuchipu-light rounded-md flex items-center justify-center font-bold text-white">
                C
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Cuchipu<span className="text-cuchipu-light font-medium text-sm block -mt-1 tracking-wider uppercase">Entertainment</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Transformamos ideas complejas en software excepcional. Especialistas en desarrollo web, arquitecturas escalables y soluciones digitales a medida para llevar tu proyecto al siguiente nivel.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#inicio" className="hover:text-cuchipu-light transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-cuchipu-light transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-cuchipu-light transition-colors">Equipo Técnico</a></li>
              <li><a href="#contacto" className="hover:text-cuchipu-light transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:contacto@cuchipu.cloud" className="hover:text-cuchipu-light transition-colors flex items-center gap-2">
                  <span>✉️</span> contacto@cuchipu.cloud
                </a>
              </li>
              <li>
                <a href="https://cuchipu.cloud" target="_blank" rel="noopener noreferrer" className="hover:text-cuchipu-light transition-colors flex items-center gap-2">
                  <span>🌐</span> cuchipu.cloud
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Cuchipu Entertainment. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-cuchipu-light transition-colors">Términos</a>
            <a href="#" className="hover:text-cuchipu-light transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;