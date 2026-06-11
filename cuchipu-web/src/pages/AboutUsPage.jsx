import React from 'react';

function AboutUsPage() {
    // Datos de los proyectos
    const projects = [
        {
            id: "meditec",
            name: "MediTec-ITS",
            description: "Sistema integral de gestión de salud para enfermería universitaria. Cuenta con una arquitectura multi-rol que permite administrar accesos y flujos de trabajo independientes para Administradores, Enfermeras, Médicos y Pacientes, optimizando el control clínico.",
            image: "src\\assets\\meditec-logo.png", // Placeholder para la imagen de tu proyecto
            technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS v4"]
        },
        {
            id: "CuchiNetworks",
            name: "CuchiNetworks",
            description: "Sistema de gestión de redes y servidores para pequeñas empresas. Permite monitorear el estado de los dispositivos, configurar alertas personalizadas y administrar accesos remotos de forma segura, todo desde una interfaz web intuitiva.",
            image: "src/assets/cuchilogov2.png",
            technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS v4"]
        },
        {
            id: "Chafatec",
            name: "Chafatec",
            description: "Sistema de gestión de calificaciones, alumnos y profesores para instituciones educativas. Facilita la administración de cursos, el seguimiento del rendimiento académico y la comunicación entre estudiantes y docentes a través de una plataforma web segura y escalable.",
            image: "src\\assets\\Chafatec.png", // Placeholder para la imagen de tu proyecto
            technologies: ["Angular", "Node.js", "Express", "MySQL", "Bootstrap"]
        },
        {
            id: "Cuchitienda",
            name: "Cuchitienda",
            description: "Plataforma de comercio electrónico para productos tecnológicos. Permite a los usuarios explorar un catálogo de productos, realizar compras seguras y gestionar sus pedidos, mientras que los administradores pueden controlar el inventario, procesar pagos y analizar ventas desde un panel de administración robusto.",
            image: "https://placehold.co/600x400/f8fafc/001833?text=Cuchitienda",
            technologies: ["Angular", "Node.js", "Express", "MySQL", "Bootstrap"]
        }
    ];

    // Datos del equipo técnico
    const teamMembers = [
        {
            id: "carlos",
            name: "Carlos Cepeda",
            role: "Full-Stack Developer & Coordinador",
            description: "Encargado de la arquitectura de software, modelado de bases de datos relacionales y gestión de la infraestructura de servidores. Coordina el desarrollo técnico de Cuchipu Entertainment.",
            photo: "https://placehold.co/150x150/5dade2/ffffff?text=CC" // Placeholder para la foto
        },
        {
            id: "frontend-dev",
            name: "Rodolfo Torres",
            role: "UI/UX & Desarrollo Web",
            description: "Responsable de traducir el diseño en código limpio, creando interfaces fluidas, estructuradas y responsivas utilizando componentes modernos.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=RT"
        },
        {
            id: "backend-dev",
            name: "Alejandro Ramos",
            role: "Ingeniería de Datos & APIs",
            description: "Diseño y estructuración de la lógica de negocio, manejo de conexiones a bases de datos y seguridad en el flujo de información del servidor.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=AR"
        }
        ,
        {
            id: "database-dev",
            name: "Javier Gaitan",
            role: "Database Architect & Data Engineer",
            description: "Especialista en modelado de bases de datos relacionales, optimización de consultas y diseño de esquemas para garantizar la integridad y eficiencia del almacenamiento de datos.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=JG"
        }
        ,
        {
            id: "infrastructure-dev",
            name: "Monserrat Dominguez",
            role: "Infrastructure Engineer",
            description: "Experto en diseño e implementación de infraestructuras de software, incluyendo despliegue, monitoreo y mantenimiento de servidores y redes.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=MD"
        }
        ,
        {
            id: "devops",
            name: "Miguel Guzman",
            role: "DevOps Engineer",
            description: "Experto en automatización de procesos de desarrollo y despliegue, gestión de contenedores y orquestación de servicios en entornos cloud.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=MG"
        }
        ,
        {
            id: "Consultoring Engineer",
            name: "Sofia Star",
            role: "Consulting Engineer",
            description: "Brinda asesoramiento técnico estratégico para optimizar la arquitectura de software, mejorar procesos de desarrollo y garantizar la escalabilidad de las soluciones implementadas.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=SS"
        },
        {
            id: "Network Engineer",
            name: "Jose Mares",
            role: "Network Engineer",
            description: "Especialista en diseño, implementación y gestión de redes seguras y eficientes para garantizar la conectividad y el rendimiento óptimo de las aplicaciones.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=JM"
        },
        {
            id: "Test Engineer",
            name: "Jose Puente",
            role: "Test Engineer",
            description: "Encargado de diseñar y ejecutar planes de prueba para asegurar la funcionalidad, rendimiento y seguridad del software antes de su lanzamiento.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=JP"
        },

        {
            id: "Human Resources",
            name: "Alondra Zuñiga",
            role: "Human Resources Specialist",
            description: "Responsable de gestionar los recursos humanos, incluyendo reclutamiento, capacitación y desarrollo profesional de los empleados.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=AZ"
        }
        ,
        {
            id: "qa-engineer",
            name: "Mariana Mota",
            role: "QA Engineer",
            description: "Responsable de garantizar la calidad del software a través de pruebas exhaustivas, automatización de tests y validación de funcionalidades antes del lanzamiento.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=MT"
        },
        {
            id: "Marketing Specialist",
            name: "Jonathan Perez",
            role: "Marketing Specialist",
            description: "Encargado de desarrollar estrategias de marketing digital para promover los servicios de la empresa y atraer nuevos clientes.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=JP"
        },
        {
            id: "Project Manager",
            name: "Paola Vazquez",
            role: "Project Manager",
            description: "Responsable de planificar, ejecutar y supervisar los proyectos de desarrollo, asegurando que se cumplan los plazos, presupuestos y objetivos establecidos.",
            photo: "https://placehold.co/150x150/001833/ffffff?text=PV"
        }

    ];

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- SECCIÓN 1: PROYECTOS TERMINADOS --- */}
                <div className="mb-24">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-cuchipu-dark mb-4">
                            Nuestros <span className="text-cuchipu-light">Proyectos</span>
                        </h1>
                        <p className="text-lg text-gray-600">
                            Desarrollamos soluciones de software funcionales y a medida. Aquí presentamos algunos de nuestros sistemas implementados y en funcionamiento.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
                                {/* Imagen del proyecto */}
                                <div className="h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={project.image}
                                        alt={`Captura de ${project.name}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Contenido del proyecto */}
                                <div className="p-6 flex flex-col grow">
                                    <h3 className="text-xl font-bold text-cuchipu-dark mb-2">{project.name}</h3>
                                    <p className="text-gray-600 text-sm mb-6 grow">
                                        {project.description}
                                    </p>

                                    {/* Tecnologías */}
                                    <div>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="px-2 py-1 bg-gray-50 text-cuchipu-dark text-xs font-medium rounded border border-gray-200">
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

                {/* Separador Visual */}
                <div className="w-24 h-1 bg-cuchipu-light rounded-full mx-auto mb-24 opacity-50"></div>

                {/* --- SECCIÓN 2: NUESTRO EQUIPO TÉCNICO --- */}
                <div>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-cuchipu-dark mb-4">
                            El Equipo <span className="text-transparent bg-clip-text bg-linear-to-r from-cuchipu-light to-blue-600">Detrás del Código</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Contamos con un equipo técnico especializado, donde cada integrante aporta su experiencia en áreas clave del desarrollo para construir software excepcional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:border-cuchipu-light/30 transition-colors">

                                {/* Foto del integrante (Izquierda) */}
                                <div className="shrink-0">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-inner rotate-3 hover:rotate-0 transition-transform duration-300">
                                        <img
                                            src={member.photo}
                                            alt={`Foto de ${member.name}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Información del integrante (Derecha) */}
                                <div className="text-center sm:text-left grow">
                                    <h3 className="text-xl font-bold text-cuchipu-dark">{member.name}</h3>
                                    <p className="text-cuchipu-light font-semibold text-sm mb-3 uppercase tracking-wide">
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
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