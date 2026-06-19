import React from 'react';

function AboutUsPage() {
    // Datos de los proyectos
    const projects = [
        {
            id: "meditec",
            name: "MediTec-ITS",
            description: "Sistema integral de gestión de salud para enfermería universitaria. Cuenta con una arquitectura multi-rol que permite administrar accesos y flujos de trabajo independientes para Administradores, Enfermeras, Médicos y Pacientes, optimizando el control clínico.",
            image: "/meditec-logo.png",
            technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS v4"],
            glowColor: "group-hover:border-cyan-500/40 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
        },
        {
            id: "CuchiNetworks",
            name: "CuchiNetworks",
            description: "Sistema de gestión de redes y servidores para pequeñas empresas. Permite monitorear el estado de los dispositivos, configurar alertas personalizadas y administrar accesos remotos de forma segura, todo desde una interfaz web intuitiva.",
            image: "/cuchilogov2.png",
            technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS v4"],
            glowColor: "group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        },
        {
            id: "Chafatec",
            name: "Chafatec",
            description: "Sistema de gestión de calificaciones, alumnos y profesores para instituciones educativas. Facilita la administración de cursos, el seguimiento del rendimiento académico y la comunicación entre estudiantes y docentes a través de una plataforma web segura y escalable.",
            image: "/Chafatec.png",
            technologies: ["Angular", "Node.js", "Express", "MySQL", "Bootstrap"],
            glowColor: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
        },
        {
            id: "Cuchitienda",
            name: "Cuchitienda",
            description: "Plataforma de comercio electrónico para productos tecnológicos. Permite a los usuarios explorar un catálogo de productos, realizar compras seguras y gestionar sus pedidos, mientras que los administradores pueden controlar el inventario, procesar pagos y analizar ventas desde un panel de administración robusto.",
            image: "https://placehold.co/600x400/070d19/22d3ee?text=Cuchitienda",
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
            description: "Encargado de la arquitectura de software, modelado de bases de datos relacionales y gestión de la infraestructura de servidores. Coordina el desarrollo técnico de Cuchipu Entertainment.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=CC" 
        },
        {
            id: "frontend-dev",
            name: "Rodolfo Torres",
            role: "UI/UX & Desarrollo Web",
            description: "Responsable de traducir el diseño en código limpio, creando interfaces fluidas, estructuradas y responsivas utilizando componentes modernos.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=RT"
        },
        {
            id: "backend-dev",
            name: "Alejandro Ramos",
            role: "Ingeniería de Datos & APIs",
            description: "Diseño y estructuración de la lógica de negocio, manejo de conexiones a bases de datos y seguridad en el flujo de información del servidor.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=AR"
        },
        {
            id: "database-dev",
            name: "Javier Gaitan",
            role: "Database Architect & Data Eng.",
            description: "Especialista en modelado de bases de datos relacionales, optimización de consultas y diseño de esquemas para garantizar la integridad de datos.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=JG"
        },
        {
            id: "infrastructure-dev",
            name: "Monserrat Dominguez",
            role: "Infrastructure Engineer",
            description: "Experto en diseño e implementación de infraestructuras de software, incluyendo despliegue, monitoreo y mantenimiento de servidores y redes.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=MD"
        },
        {
            id: "devops",
            name: "Miguel Guzman",
            role: "DevOps Engineer",
            description: "Experto en automatización de procesos de desarrollo y despliegue, gestión de contenedores y orquestación de servicios en entornos cloud.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=MG"
        },
        {
            id: "Consultoring Engineer",
            name: "Sofia Star",
            role: "Consulting Engineer",
            description: "Brinda asesoramiento técnico estratégico para optimizar la arquitectura de software, mejorar procesos de desarrollo y garantizar la escalabilidad.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=SS"
        },
        {
            id: "Network Engineer",
            name: "Jose Mares",
            role: "Network Engineer",
            description: "Especialista en diseño, implementación y gestión de redes seguras y eficientes para garantizar la conectividad y el rendimiento óptimo de las aplicaciones.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=JM"
        },
        {
            id: "Test Engineer",
            name: "Jose Puente",
            role: "Test Engineer",
            description: "Encargado de diseñar y ejecutar planes de prueba para asegurar la funcionalidad, rendimiento y seguridad del software antes de su lanzamiento.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=JP"
        },
        {
            id: "Human Resources",
            name: "Alondra Zuñiga",
            role: "Human Resources Specialist",
            description: "Responsable de gestionar los recursos humanos, incluyendo reclutamiento, capacitación y desarrollo profesional de los empleados.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=AZ"
        },
        {
            id: "qa-engineer",
            name: "Mariana Mota",
            role: "QA Engineer",
            description: "Responsable de garantizar la calidad del software a través de pruebas exhaustivas, automatización de tests y validación de funcionalidades.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=MM"
        },
        {
            id: "Marketing Specialist",
            name: "Jonathan Perez",
            role: "Marketing Specialist",
            description: "Encargado de desarrollar estrategias de marketing digital para promover los servicios de la empresa y atraer nuevos clientes.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=JP"
        },
        {
            id: "Project Manager",
            name: "Paola Vazquez",
            role: "Project Manager",
            description: "Responsable de planificar, ejecutar y supervisar los proyectos de desarrollo, asegurando que se cumplan los plazos y objetivos establecidos.",
            photo: "https://placehold.co/150x150/0b1329/22d3ee?text=PV"
        }
    ];

    return (
        <div className="bg-[#030712] min-h-screen pt-32 pb-20 relative overflow-hidden">
            
            {/* Patrón de Red Digital de Fondo */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

            {/* Resplandores de Neón de Fondo */}
            <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] z-0 pointer-events-none"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- SECCIÓN 1: PROYECTOS TERMINADOS --- */}
                <div className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="text-xs font-bold text-cyan-400 tracking-widest uppercase mb-3">Portafolio Tecnológico</div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
                            Nuestros <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">Proyectos</span>
                        </h1>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            Desarrollamos soluciones de software funcionales, escalables y a medida. Aquí presentamos algunos de nuestros sistemas implementados y operando en entornos reales.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className={`bg-[#0b1329]/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 group flex flex-col ${project.glowColor}`}>
                                {/* Imagen del proyecto con overlay oscuro */}
                                <div className="h-64 overflow-hidden bg-[#070d19] relative">
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0b1329] via-transparent to-transparent z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={`Captura de ${project.name}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                                        onError={(e) => {
                                            e.target.src = "https://placehold.co/600x400/070d19/22d3ee?text=Proyecto";
                                        }}
                                    />
                                </div>

                                {/* Contenido del proyecto */}
                                <div className="p-8 flex flex-col grow relative z-20 -mt-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 grow font-light">
                                        {project.description}
                                    </p>

                                    {/* Tecnologías */}
                                    <div>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-white/5 text-cyan-300 text-xs font-semibold tracking-wide rounded-md border border-white/10 shadow-inner">
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

                {/* Separador Visual Neón */}
                <div className="w-full flex justify-center mb-32">
                    <div className="w-32 h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                </div>

                {/* --- SECCIÓN 2: NUESTRO EQUIPO TÉCNICO --- */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="text-xs font-bold text-purple-400 tracking-widest uppercase mb-3">El Talento</div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                            El Equipo <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-400">Detrás del Código</span>
                        </h2>
                        <p className="text-lg text-gray-400 font-light leading-relaxed">
                            Contamos con un escuadrón técnico especializado, donde cada integrante aporta su experiencia en áreas clave del desarrollo para construir software de élite.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-[#0b1329]/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-cyan-500/30 hover:bg-[#0b1329]/50 transition-all duration-300 group">

                                {/* Foto del integrante */}
                                <div className="shrink-0 relative">
                                    <div className="absolute -inset-1 bg-linear-to-tr from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#070d19] border border-white/10 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                                        <img
                                            src={member.photo}
                                            alt={`Avatar de ${member.name}`}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                    </div>
                                </div>

                                {/* Información del integrante */}
                                <div className="text-center sm:text-left grow">
                                    <h3 className="text-xl font-bold text-white tracking-wide">{member.name}</h3>
                                    <p className="text-cyan-400 font-semibold text-xs mb-3 uppercase tracking-widest mt-1">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                                        {member.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutUsPage;