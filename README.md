# Portafolio · Vangelis Ramos Ríos

Portafolio técnico de **Vangelis Ramos Ríos**, Ingeniero en Computación e Informática (Universidad Andrés Bello), de Santiago, Chile. Trabajo como Analista de Servicios y Experiencia Digital en Grupo COMGRAP, automatizo con Python y construyo software: un chatbot de soporte con IA local (mi tesis), un CRM modular en producción y el homelab donde administro servidores de juegos.

**Ver en vivo:** https://vangeum.github.io/Portafolio/
**CV en PDF:** [cv/Vangelis-Ramos-CV.pdf](cv/Vangelis-Ramos-CV.pdf)

![Vista previa del portafolio](assets/img/og-image.png)

## Qué incluye

- Tres proyectos, cada uno con un diagrama animado y ampliable de su arquitectura:
  - **Agente de soporte con IA local** (tesis): RAG orquestado con n8n, modelos abiertos con Ollama, PostgreSQL + pgvector, Caddy y Docker
  - **CRM modular** (en producción en [crm.sktserver.com](https://crm.sktserver.com)): Express + TypeScript, React 19 + Vite como PWA, SQLite, integración con Shopify y WooCommerce por webhooks firmados, desplegado con Docker
  - **SKT Panel** (homelab propio): servidores de juego en contenedores Docker sobre 2 mini PC, túnel frp hacia un VPS y panel web protegido con Cloudflare Access
- Capturas reales del CRM y del panel
- Experiencia en soporte TI, desde la práctica profesional hasta el cargo actual
- Capacidades concretas con su respaldo y habilidades agrupadas por área
- 11 certificaciones con enlace de verificación (IBM, Autodesk, Coursera y UAB): 4 destacadas y 7 plegables
- Diseño en diapositivas grafito y crema con acento naranja: tipografía Staatliches, Schibsted Grotesk e IBM Plex Mono, monograma en órbita y teclas "siguiente ↵" para avanzar
- Versión imprimible que funciona como CV de 2 páginas

## Tecnología

Sitio estático sin frameworks ni paso de compilación:

- **HTML** semántico con metadatos para SEO, Open Graph y schema.org
- **CSS** propio con la paleta en cuatro variables, diseño responsive desde 360 px y estilos de impresión
- **SVG** animado para los diagramas de los proyectos, con versión horizontal y vertical
- **JavaScript** liviano sin dependencias: menú móvil, sección activa en la navegación y revelado al hacer scroll. Todas las animaciones respetan `prefers-reduced-motion`
- Publicado con **GitHub Pages**

```
index.html
assets/css/styles.css
assets/js/main.js
assets/img/          favicon, imagen para redes sociales y capturas de los proyectos
cv/                  CV en PDF generado desde la versión imprimible
```

## Ejecutar en local

```bash
python -m http.server 8080
```

Luego abre http://localhost:8080.

## Actualizar el CV en PDF

El PDF se genera desde la misma página con los estilos de impresión. Con el servidor local corriendo, en Windows:

```bash
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --no-pdf-header-footer --print-to-pdf=cv\Vangelis-Ramos-CV.pdf http://localhost:8080/
```

También puedes abrir la página en el navegador, usar **Imprimir → Guardar como PDF** y reemplazar el archivo en `cv/`.

## Contacto

- Email: contactovange02@gmail.com
- LinkedIn: [linkedin.com/in/vangelis-ramos](https://www.linkedin.com/in/vangelis-ramos/)
