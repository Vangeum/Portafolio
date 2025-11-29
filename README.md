<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio Profesional - Vangelis Ramos</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        /* Estilos personalizados para la línea de tiempo */
        .timeline-line {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 100%;
            background-color: #e5e7eb;
        }

        /* Estilos específicos para impresión (Generación de PDF) */
        @media print {
            .no-print { display: none !important; }
            body { background-color: white; color: black; }
            .print-break-inside-avoid { break-inside: avoid; }
            .print-new-page { break-before: always; }
            a[href]:after { content: " (" attr(href) ")"; font-size: 0.8em; color: #666; }
            .shadow-lg, .shadow-md { box-shadow: none !important; }
            .bg-slate-900 { background-color: white !important; color: black !important; }
            .text-white { color: black !important; }
            .bg-blue-600 { background-color: #eee !important; color: black !important; border: 1px solid #ccc; }
            
            /* Ajuste para que las certificaciones se vean bien en PDF */
            .cert-grid-print { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800">

    <!-- Navegación (Solo visible en web) -->
    <nav class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 no-print">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16 items-center">
                <div class="text-xl font-bold text-blue-700">VR.<span class="text-slate-500">Dev</span></div>
                <div class="hidden md:flex space-x-8">
                    <a href="#perfil" class="text-slate-600 hover:text-blue-600 transition">Perfil</a>
                    <a href="#experiencia" class="text-slate-600 hover:text-blue-600 transition">Experiencia</a>
                    <a href="#proyectos" class="text-slate-600 hover:text-blue-600 transition">Proyectos</a>
                    <a href="#servicios" class="text-slate-600 hover:text-blue-600 transition">Servicios</a>
                    <a href="#carta" class="text-slate-600 hover:text-blue-600 transition">Carta</a>
                </div>
                <button onclick="window.print()" class="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition">
                    <i class="fas fa-file-pdf mr-2"></i>Descargar PDF
                </button>
            </div>
        </div>
    </nav>

    <!-- PORTADA / HERO (Sin Foto) -->
    <header id="inicio" class="pt-32 pb-16 md:pt-40 md:pb-24 bg-white print:pt-10 print:pb-5">
        <div class="max-w-5xl mx-auto px-4 text-center">
            
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Vangelis Antonio Ramos Rios</h1>
            <p class="text-xl md:text-2xl text-blue-600 font-medium mb-6">Estudiante de Ingeniería en Computación e Informática</p>
            
            <div class="flex justify-center flex-wrap gap-4 mb-8 text-slate-600 print:text-sm">
                <span class="flex items-center"><i class="fas fa-envelope mr-2"></i> contactovange02@gmail.com</span>
                <span class="flex items-center"><i class="fas fa-phone mr-2"></i> +56 9 5357 8417</span>
                <span class="flex items-center"><i class="fab fa-linkedin mr-2"></i> linkedin.com/in/vangelis-ramos</span>
                <span class="flex items-center print:hidden"><i class="fas fa-map-marker-alt mr-2"></i> Lo Espejo, Santiago</span>
            </div>
            
            <p class="max-w-2xl mx-auto text-slate-600 leading-relaxed print:text-sm">
                Futuro Ingeniero con proyección en el área de Infraestructura TI y Soporte. Poseo una visión integral de los sistemas TI, desde el hardware hasta los procesos de software, enfocado en la continuidad operativa y la eficiencia del servicio.
            </p>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 pb-20">

        <!-- PERFIL PROFESIONAL -->
        <section id="perfil" class="mb-20 print:mb-10 print-break-inside-avoid">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Perfil Profesional</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                    <h3 class="font-semibold text-lg mb-3">Sobre Mí</h3>
                    <p class="text-slate-600 mb-4 text-justify">
                        Soy una persona organizada, proactiva y con gran capacidad de adaptación a nuevas tecnologías y entornos dinámicos. Cuento con experiencia práctica en la industria retail, donde comprendí la importancia de la disponibilidad tecnológica para el negocio. Mis fortalezas incluyen el trabajo colaborativo, la resolución eficiente de incidencias técnicas y un compromiso constante con el aprendizaje.
                    </p>
                    <h3 class="font-semibold text-lg mb-3 mt-6">Áreas de Interés</h3>
                    <div class="flex flex-wrap gap-2">
                        <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Infraestructura TI</span>
                        <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Arquitectura de Redes</span>
                        <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Soporte Técnico</span>
                        <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Seguridad de Redes</span>
                    </div>
                </div>
                
                <div class="bg-slate-800 text-white p-6 rounded-xl shadow-lg print:bg-white print:text-black print:border print:border-black">
                    <h3 class="font-semibold text-lg mb-4 text-blue-300 print:text-black">Habilidades Técnicas</h3>
                    <div class="space-y-3">
                        <div>
                            <span class="text-sm font-medium">Lenguajes de Programación</span>
                            <p class="text-sm text-slate-400 print:text-black">Python, Java, C, C++, SQL, R, JavaScript, HTML</p>
                        </div>
                        <div>
                            <span class="text-sm font-medium">Infraestructura & Redes</span>
                            <p class="text-sm text-slate-400 print:text-black">Configuración LAN/WiFi, Direccionamiento IP, Hardware, POS</p>
                        </div>
                        <div>
                            <span class="text-sm font-medium">Software & Herramientas</span>
                            <p class="text-sm text-slate-400 print:text-black">Microsoft Office (Intermedio), Herramientas de diagnóstico</p>
                        </div>
                        <div>
                            <span class="text-sm font-medium">Idiomas</span>
                            <p class="text-sm text-slate-400 print:text-black">Español (Nativo), Inglés (Intermedio)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PRÁCTICA Y EXPERIENCIA -->
        <section id="experiencia" class="mb-20 print:mb-10 print-break-inside-avoid">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Experiencia Laboral & Académica</h2>
            
            <div class="relative pl-8 border-l-2 border-slate-200 space-y-10">
                <!-- Experiencia Laboral -->
                <div class="relative">
                    <div class="absolute -left-[41px] bg-blue-600 h-6 w-6 rounded-full border-4 border-white shadow-sm"></div>
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <div>
                                <h3 class="text-xl font-bold text-slate-800">Practicante de Soporte TI</h3>
                                <p class="text-blue-600 font-semibold">Family Shop - Quilicura, RM</p>
                            </div>
                            <span class="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0">Nov 2023 - Ene 2024</span>
                        </div>
                        <p class="text-slate-600 mb-4">
                            Responsable de asegurar la continuidad operativa tecnológica en tienda y soporte a usuarios.
                        </p>
                        <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">
                            <li>Instalación, configuración y mantenimiento de equipos de cómputo y puntos de venta (POS).</li>
                            <li>Configuración básica de redes (LAN/WiFi), direccionamiento IP y resolución de incidencias de conectividad.</li>
                            <li>Soporte técnico a usuarios en hardware y software.</li>
                            <li><strong>Logro Clave:</strong> Participación en la preparación tecnológica para la apertura de tres nuevas tiendas (instalación de equipos y redes en terreno), logrando una puesta en marcha exitosa en los plazos establecidos.</li>
                        </ul>
                    </div>
                </div>

                <!-- Educación Universitaria -->
                <div class="relative">
                    <div class="absolute -left-[41px] bg-slate-300 h-6 w-6 rounded-full border-4 border-white shadow-sm"></div>
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <div>
                                <h3 class="text-xl font-bold text-slate-800">Ingeniería en Computación e Informática</h3>
                                <p class="text-slate-600 font-semibold">Universidad Andrés Bello</p>
                            </div>
                            <span class="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0">2021 - Actualidad</span>
                        </div>
                        <p class="text-slate-600 text-sm">Formación integral en desarrollo de software, algoritmos y sistemas computacionales.</p>
                    </div>
                </div>

                <!-- Educación Secundaria -->
                 <div class="relative">
                    <div class="absolute -left-[41px] bg-slate-300 h-6 w-6 rounded-full border-4 border-white shadow-sm"></div>
                    <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <div>
                                <h3 class="text-xl font-bold text-slate-800">Enseñanza Media Científico - Humanista</h3>
                                <p class="text-slate-600 font-semibold">Liceo Nacional de Maipú</p>
                            </div>
                            <span class="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0">2015 - 2020</span>
                        </div>
                        <p class="text-slate-600 text-sm">Mención en Físico - Matemático.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROYECTOS DESTACADOS -->
        <section id="proyectos" class="mb-20 print:mb-10 print-new-page">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Proyectos Académicos</h2>
            <p class="text-slate-600 mb-6 italic text-sm">Selección de proyectos desarrollados durante la formación académica aplicando lenguajes como Python, Java y SQL.</p>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Proyecto 1: Basado en Python/Data -->
                <div class="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group">
                    <div class="h-40 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white print:bg-slate-200 print:text-black">
                        <i class="fas fa-database text-4xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Análisis de Datos con Python</h3>
                        <p class="text-slate-600 text-sm mb-4 h-20 overflow-hidden">Desarrollo de scripts para el procesamiento y limpieza de grandes volúmenes de datos, aplicando lógica de programación estructurada.</p>
                        <div class="mb-4">
                            <span class="text-xs font-semibold text-slate-500 uppercase">Tecnologías:</span>
                            <div class="flex flex-wrap gap-1 mt-1">
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">Python</span>
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">Pandas</span>
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">SQL</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 2: Basado en Java/POO -->
                <div class="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group">
                    <div class="h-40 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white print:bg-slate-200 print:text-black">
                        <i class="fas fa-laptop-code text-4xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Sistema de Gestión en Java</h3>
                        <p class="text-slate-600 text-sm mb-4 h-20 overflow-hidden">Aplicación de escritorio para la gestión de inventario, implementando Programación Orientada a Objetos y conexión a base de datos.</p>
                        <div class="mb-4">
                            <span class="text-xs font-semibold text-slate-500 uppercase">Tecnologías:</span>
                            <div class="flex flex-wrap gap-1 mt-1">
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">Java</span>
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">MySQL</span>
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">JDBC</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 3: Basado en C/C++ -->
                <div class="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition group">
                    <div class="h-40 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white print:bg-slate-200 print:text-black">
                        <i class="fas fa-microchip text-4xl"></i>
                    </div>
                    <div class="p-6">
                        <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition">Algoritmos en C++</h3>
                        <p class="text-slate-600 text-sm mb-4 h-20 overflow-hidden">Implementación de estructuras de datos complejas y algoritmos de optimización para resolver problemas lógicos de alta eficiencia.</p>
                        <div class="mb-4">
                            <span class="text-xs font-semibold text-slate-500 uppercase">Tecnologías:</span>
                            <div class="flex flex-wrap gap-1 mt-1">
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">C++</span>
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">Algoritmos</span>
                                <span class="text-xs bg-slate-100 px-2 py-1 rounded">Estructuras de Datos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- SERVICIOS Y CERTIFICACIONES -->
        <div class="grid md:grid-cols-2 gap-8 mb-20 print:mb-10 print-break-inside-avoid">
            <!-- Servicios -->
            <section id="servicios">
                <h2 class="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Lo que puedo ofrecer</h2>
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full">
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <i class="fas fa-network-wired text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-slate-800">Soporte e Infraestructura TI</h4>
                                <p class="text-sm text-slate-600">Instalación y configuración de equipos, redes LAN/WiFi y resolución de incidencias en terreno.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-code text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-slate-800">Desarrollo de Software</h4>
                                <p class="text-sm text-slate-600">Programación en lenguajes como Python, Java y C++ para soluciones a medida.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-users-cog text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-slate-800">Asistencia Técnica al Usuario</h4>
                                <p class="text-sm text-slate-600">Capacidad para comunicar conceptos técnicos a usuarios finales y asegurar la operatividad.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-chart-pie text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-slate-800">Análisis y Gestión de Datos</h4>
                                <p class="text-sm text-slate-600">Extracción, limpieza y visualización de datos para la toma de decisiones usando Python y SQL.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-robot text-blue-600 mt-1 mr-3"></i>
                            <div>
                                <h4 class="font-bold text-slate-800">Integración de IA Generativa</h4>
                                <p class="text-sm text-slate-600">Optimización de flujos de trabajo de desarrollo mediante el uso de herramientas de Inteligencia Artificial.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Certificaciones -->
            <section id="certificaciones">
                <h2 class="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Certificaciones</h2>
                <div class="bg-white p-6 rounded-xl border border-slate-100 shadow-sm h-full">
                    <ul class="space-y-4 cert-grid-print">
                        <!-- Certificación 1 -->
                        <li class="border-b border-slate-100 pb-2">
                            <h4 class="font-bold text-slate-800 text-sm group">
                                <a href="https://coursera.org/share/918e649e0747e69664c3d921416c0ddb" target="_blank" class="hover:text-blue-600 transition flex items-center gap-2">
                                    Software Dev. Career Guide
                                    <i class="fas fa-external-link-alt text-xs text-slate-400 group-hover:text-blue-500"></i>
                                </a>
                            </h4>
                            <p class="text-xs text-slate-600">IBM - Coursera</p>
                        </li>
                        <!-- Certificación 2 -->
                        <li class="border-b border-slate-100 pb-2">
                            <h4 class="font-bold text-slate-800 text-sm group">
                                <a href="https://coursera.org/share/390ac56ad6b5d0c78e3136e5d4b5e8fa" target="_blank" class="hover:text-blue-600 transition flex items-center gap-2">
                                    Generative AI: Elevate Career
                                    <i class="fas fa-external-link-alt text-xs text-slate-400 group-hover:text-blue-500"></i>
                                </a>
                            </h4>
                            <p class="text-xs text-slate-600">IBM - Coursera</p>
                        </li>
                        <!-- Certificación 3 -->
                        <li class="border-b border-slate-100 pb-2">
                            <h4 class="font-bold text-slate-800 text-sm group">
                                <a href="https://coursera.org/share/d1cdfab98a7ccf92a76441673ac09c3b" target="_blank" class="hover:text-blue-600 transition flex items-center gap-2">
                                    Building Gen AI Apps w/ Python
                                    <i class="fas fa-external-link-alt text-xs text-slate-400 group-hover:text-blue-500"></i>
                                </a>
                            </h4>
                            <p class="text-xs text-slate-600">IBM - Coursera</p>
                        </li>
                         <!-- Certificación 4 -->
                        <li class="border-b border-slate-100 pb-2">
                            <h4 class="font-bold text-slate-800 text-sm group">
                                <a href="https://coursera.org/share/92e23ec96a9318f14ef19d1bb0af7906" target="_blank" class="hover:text-blue-600 transition flex items-center gap-2">
                                    Gen AI: Prompt Engineering
                                    <i class="fas fa-external-link-alt text-xs text-slate-400 group-hover:text-blue-500"></i>
                                </a>
                            </h4>
                            <p class="text-xs text-slate-600">IBM - Coursera</p>
                        </li>
                         <!-- Certificación 5 -->
                        <li class="border-b border-slate-100 pb-2">
                            <h4 class="font-bold text-slate-800 text-sm group">
                                <a href="https://coursera.org/share/29b8babfd201aa3b3cd432f176aee26f" target="_blank" class="hover:text-blue-600 transition flex items-center gap-2">
                                    Gen AI: Intro & Applications
                                    <i class="fas fa-external-link-alt text-xs text-slate-400 group-hover:text-blue-500"></i>
                                </a>
                            </h4>
                            <p class="text-xs text-slate-600">IBM - Coursera</p>
                        </li>
                        <!-- Certificación 6 -->
                        <li class="border-b border-slate-100 pb-2">
                            <h4 class="font-bold text-slate-800 text-sm group">
                                <a href="https://coursera.org/share/5e4bdbdb197adf5c3f919c986ede377f" target="_blank" class="hover:text-blue-600 transition flex items-center gap-2">
                                    Intro to AI (Artificial Intelligence)
                                    <i class="fas fa-external-link-alt text-xs text-slate-400 group-hover:text-blue-500"></i>
                                </a>
                            </h4>
                            <p class="text-xs text-slate-600">IBM - Coursera</p>
                        </li>
                        <!-- Certificación 7 -->
                        <li class="border-b border-slate-100 pb-2">
                            <h4 class="font-bold text-slate-800 text-sm group">
                                <a href="https://coursera.org/share/0fe0cb3f56bb2ab96983bd93f110b3bf" target="_blank" class="hover:text-blue-600 transition flex items-center gap-2">
                                    Intro to Software Engineering
                                    <i class="fas fa-external-link-alt text-xs text-slate-400 group-hover:text-blue-500"></i>
                                </a>
                            </h4>
                            <p class="text-xs text-slate-600">IBM SkillsBuild</p>
                        </li>
                        <!-- Certificación 8 -->
                        <li class="pb-2">
                            <h4 class="font-bold text-slate-800 text-sm group">
                                <a href="https://coursera.org/share/edad62799fbec38731dfe19b83b78da1" target="_blank" class="hover:text-blue-600 transition flex items-center gap-2">
                                    Big Data: Impacto datos masivos
                                    <i class="fas fa-external-link-alt text-xs text-slate-400 group-hover:text-blue-500"></i>
                                </a>
                            </h4>
                            <p class="text-xs text-slate-600">Univ. Autónoma de Barcelona</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- CARTA DE PRESENTACIÓN -->
        <section id="carta" class="mb-20 print:mb-0 print-new-page">
            <h2 class="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-blue-600 pl-4">Carta de Presentación</h2>
            <div class="bg-white p-8 rounded-xl shadow-lg border border-slate-100 relative overflow-hidden">
                <div class="absolute top-0 right-0 p-4 opacity-10">
                    <i class="fas fa-quote-right text-8xl text-blue-900"></i>
                </div>
                
                <div class="prose max-w-none text-slate-700">
                    <p class="mb-4"><strong>Estimado/a Responsable de Selección,</strong></p>
                    
                    <p class="mb-4 text-justify">
                        Mi nombre es Vangelis Ramos y soy estudiante de Ingeniería en Computación e Informática. Me dirijo a usted para presentar mi interés en formar parte de su equipo, con el objetivo de desarrollarme profesionalmente como Ingeniero de Infraestructura Junior y aportar a la continuidad operativa de su organización.
                    </p>
                    
                    <p class="mb-4 text-justify">
                        Poseo experiencia en soporte técnico adquirida durante mi práctica en <em>Family Shop</em>, donde trabajé en entornos de alta demanda. Allí, no solo realicé la instalación y configuración de equipos y redes, sino que también jugué un rol clave en la preparación tecnológica para la apertura de tres nuevas tiendas, asegurando una puesta en marcha exitosa dentro de los plazos. Esta experiencia reforzó mi capacidad de organización, trabajo bajo presión y mi visión integral de los sistemas TI, desde el hardware hasta el software.
                    </p>
                    
                    <p class="mb-6 text-justify">
                        Mi motivación principal es especializarme en arquitectura y seguridad de redes. Busco una oportunidad donde pueda poner en práctica mis conocimientos en programación (Python, Java, C++) y configuración de redes, mientras aprendo nuevas herramientas que contribuyan al funcionamiento estable y seguro de la infraestructura TI de su empresa.
                    </p>
                    
                    <p>Atentamente,</p>
                    <br>
                    <p class="font-bold text-lg">Vangelis Antonio Ramos Rios</p>
                    <p class="text-sm text-slate-500">Estudiante de Ingeniería en Computación e Informática</p>
                </div>
            </div>
        </section>

    </main>

    <!-- FOOTER -->
    <footer class="bg-slate-900 text-slate-300 py-12 print:hidden">
        <div class="max-w-5xl mx-auto px-4 text-center">
            <h3 class="text-white text-xl font-bold mb-4">Contacto</h3>
            <p class="mb-8">Disponible para oportunidades en Infraestructura TI y Desarrollo.</p>
            <div class="flex justify-center gap-6 mb-8">
                <a href="#" class="hover:text-white transition text-2xl"><i class="fab fa-linkedin"></i></a>
                <a href="#" class="hover:text-white transition text-2xl"><i class="fab fa-github"></i></a>
                <a href="mailto:contactovange02@gmail.com" class="hover:text-white transition text-2xl"><i class="fas fa-envelope"></i></a>
            </div>
            <p class="text-sm text-slate-500">© 2025 Portafolio Profesional - Vangelis Ramos.</p>
        </div>
    </footer>

</body>
</html>
