import React from 'react';

function AboutUsPage() {
    // Datos de los proyectos
    const projects = [
        {
            id: "meditec",
            name: "MediTec-ITS",
            description: "Sistema integral de gestión institucional. Implementa una arquitectura multi-rol con control de acceso basado en permisos (RBAC), permitiendo flujos de trabajo independientes para Administradores, Enfermeras, Médicos y Nutricionistas. Incluye expedientes digitales, gestión de inventario de suministros y generación de reportes automatizados en tiempo real.",
            image: "/meditec-logo.png",
            technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
            glowColor: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        },
        {
            id: "CuchiNetworks",
            name: "CuchiNetworks",
            description: "Plataforma centralizada de gestión de redes y servidores para entornos corporativos. Integra monitoreo activo de latencia, uso de CPU/RAM de nodos y alertas configurables. Facilita la administración de túneles seguros y accesos remotos mediante un panel de control con gráficos interactivos y logs del sistema.",
            image: "/cuchilogov2.png",
            technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
            glowColor: "group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        },
        {
            id: "Chafatec",
            name: "Chafatec",
            description: "Sistema avanzado para la gestión académica y administrativa. Automatiza el registro de calificaciones, control de asistencia y seguimiento del rendimiento. Su arquitectura soporta alta concurrencia durante periodos de evaluación y cuenta con módulos de comunicación asíncrona entre estudiantes y cuerpo docente.",
            image: "/Chafatec.png",
            technologies: ["Angular", "Node.js", "Express", "MySQL", "Bootstrap"],
            glowColor: "group-hover:border-amber-500/40 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]"
        },
        {
            id: "Cuchitienda",
            name: "Cuchitienda",
            description: "Motor de comercio electrónico B2C altamente escalable. Presenta un catálogo dinámico con filtros avanzados, carrito con persistencia de sesión e integración de pasarelas de pago. El módulo administrativo permite control de stock en tiempo real, gestión de estados de pedidos y análisis de métricas de conversión.",
            image: "https://placehold.co/600x400/0A1128/38bdf8?text=Cuchitienda",
            technologies: ["Angular", "Node.js", "Express", "MySQL", "Bootstrap"],
            glowColor: "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
        }
    ];

    // Datos del equipo técnico
    const teamMembers = [
        {
            id: "carlos",
            name: "Carlos Cepeda",
            role: "Full-Stack Developer & Coordinador",
            icon: "👨‍💻",
            description: "Arquitectura de software, bases de datos y gestión de servidores. Coordina el desarrollo técnico general.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=CC" 
        },
        {
            id: "frontend-dev",
            name: "Rodolfo Torres",
            role: "UI/UX & Desarrollo Web",
            icon: "🎨",
            description: "Traduce el diseño en código limpio, creando interfaces fluidas, estructuradas y responsivas.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=RT"
        },
        {
            id: "backend-dev",
            name: "Alejandro Ramos",
            role: "Ingeniería de Datos & APIs",
            icon: "⚙️",
            description: "Lógica de negocio, manejo de conexiones a bases de datos y seguridad del servidor.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=AR"
        },
        {
            id: "database-dev",
            name: "Javier Gaitan",
            role: "Database Architect & Data Eng.",
            icon: "🗄️",
            description: "Modelado relacional, optimización de consultas y diseño de esquemas de datos.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=JG"
        },
        {
            id: "infrastructure-dev",
            name: "Monserrat Dominguez",
            role: "Infrastructure Engineer",
            icon: "☁️",
            description: "Diseño e implementación de infraestructura, despliegue y monitoreo de redes.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=MD"
        },
        {
            id: "devops",
            name: "Miguel Guzman",
            role: "DevOps Engineer",
            icon: "🐳",
            description: "Automatización de despliegues, gestión de contenedores y orquestación cloud.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=MG"
        },
        {
            id: "Consultoring Engineer",
            name: "Sofia Star",
            role: "Consulting Engineer",
            icon: "💡",
            description: "Asesoramiento técnico estratégico para optimizar la arquitectura y escalabilidad.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=SS"
        },
        {
            id: "Network Engineer",
            name: "Jose Mares",
            role: "Network Engineer",
            icon: "🌐",
            description: "Implementación y gestión de redes seguras para garantizar un rendimiento óptimo.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=JM"
        },
        {
            id: "Test Engineer",
            name: "Jose Puente",
            role: "Test Engineer",
            icon: "🧪",
            description: "Diseño y ejecución de planes de prueba para asegurar la funcionalidad y rendimiento.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=JP"
        },
        {
            id: "Human Resources",
            name: "Alondra Zuñiga",
            role: "Human Resources Specialist",
            icon: "👥",
            description: "Gestión del talento, incluyendo reclutamiento y desarrollo profesional.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=AZ"
        },
        {
            id: "qa-engineer",
            name: "Mariana Mota",
            role: "QA Engineer",
            icon: "✅",
            description: "Pruebas exhaustivas, automatización de tests y validación de funcionalidades.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=MM"
        },
        {
            id: "Marketing Specialist",
            name: "Jonathan Perez",
            role: "Marketing Specialist",
            icon: "📈",
            description: "Estrategias de posicionamiento técnico para promover los servicios cloud.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=JP"
        },
        {
            id: "Project Manager",
            name: "Paola Vazquez",
            role: "Project Manager",
            icon: "📋",
            description: "Planificación, ejecución y supervisión de proyectos bajo metodologías ágiles.",
            photo: "https://placehold.co/150x150/050A18/38bdf8?text=PV"
        }
    ];

    return (
        <div className="bg-[#0A1128] min-h-screen pt-32 pb-20 relative overflow-hidden">
            
            {/* Fondo Dinámico Ambiental */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf805_1px,transparent_1px),linear-gradient(to_bottom,#38bdf805_1px,transparent_1px)] bg-size-[40px_40px] z-0 pointer-events-none"></div>
            <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-sky-500/5 blur-[120px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px] z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- SECCIÓN 1: PROYECTOS TERMINADOS --- */}
                <div className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-[fadeInUp_0.8s_ease-out]">
                        <div className="text-xs font-bold text-amber-400 tracking-widest uppercase mb-3">Portafolio Tecnológico</div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                            Nuestros <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-500">Sistemas</span>
                        </h1>
                        <p className="text-lg text-sky-100/70 font-light leading-relaxed">
                            Desarrollamos soluciones de software escalables y a medida. Aquí presentamos infraestructuras implementadas y operando en entornos reales de producción.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {projects.map((project, index) => (
                            <div 
                              key={project.id} 
                              className={`bg-[#050A18]/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-sky-400/10 transition-all duration-500 group flex flex-col hover:-translate-y-2 ${project.glowColor}`}
                              style={{ animation: `fadeInUp 0.6s ease-out ${(index * 0.2)}s both` }}
                            >
                                {/* Imagen del proyecto */}
                                <div className="h-64 overflow-hidden bg-[#0A1128] relative border-b border-sky-400/10">
                                    <div className="absolute inset-0 bg-linear-to-t from-[#050A18] via-transparent to-transparent z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={`Sistema ${project.name}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                                        onError={(e) => {
                                            e.target.src = "https://placehold.co/600x400/0A1128/38bdf8?text=Deploy";
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-[#0A1128]/80 backdrop-blur-md border border-sky-500/30 text-sky-400 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        En Producción
                                    </div>
                                </div>

                                {/* Contenido */}
                                <div className="p-8 flex flex-col grow relative z-20">
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-sky-400 transition-colors">{project.name}</h3>
                                    <p className="text-sky-100/70 text-sm leading-relaxed mb-8 grow font-light">
                                        {project.description}
                                    </p>

                                    <div className="pt-4 border-t border-sky-400/10">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-[#0A1128] text-sky-300 text-xs font-bold tracking-wide rounded-md border border-sky-500/20 shadow-inner">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Separador */}
                <div className="w-full flex justify-center mb-24">
                    <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-400/50 to-transparent"></div>
                </div>

                {/* --- SECCIÓN 2: NUESTRO EQUIPO TÉCNICO (ESTILO TARJETAS DE PERFIL) --- */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="text-xs font-bold text-sky-400 tracking-widest uppercase mb-3">Ingeniería Humana</div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                            El Equipo <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-200">Detrás del Código</span>
                        </h2>
                        <p className="text-lg text-sky-100/70 font-light leading-relaxed">
                            Contamos con un escuadrón técnico especializado, donde cada integrante aporta experiencia profunda en áreas clave del desarrollo y despliegue operativo.
                        </p>
                    </div>

                    {/* Nueva Cuadrícula de Tarjetas Verticales */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={member.id} 
                                className="group relative bg-[#050A18]/60 backdrop-blur-xl rounded-3xl border border-sky-400/10 overflow-hidden hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center p-6"
                                style={{ animation: `fadeInUp 0.5s ease-out ${(index * 0.1)}s both` }}
                            >
                                {/* Fondo decorativo superior (Banner de perfil) */}
                                <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-sky-900/30 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icono de Rol Flotante en la esquina */}
                                <div className="absolute top-4 right-4 text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 drop-shadow-md">
                                    {member.icon}
                                </div>

                                {/* Avatar Central */}
                                <div className="relative w-24 h-24 mt-6 mb-5">
                                    <div className="absolute inset-0 bg-linear-to-tr from-sky-400 to-amber-400 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                                    <div className="relative z-10 w-full h-full rounded-full border-2 border-[#0A1128] group-hover:border-amber-400 transition-colors duration-500 overflow-hidden bg-[#0A1128]">
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                        />
                                    </div>
                                </div>

                                {/* Información del integrante */}
                                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-sky-300 transition-colors mb-1">{member.name}</h3>
                                <p className="text-amber-400 font-bold text-[10px] uppercase tracking-widest mb-4">
                                    {member.role}
                                </p>
                                <p className="text-sky-100/60 text-sm leading-relaxed font-light mt-auto">
                                    {member.description}
                                </p>
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

export default AboutUsPage;