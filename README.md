# Portafolio · Vangelis Ramos Ríos

Portafolio profesional de **Vangelis Ramos Ríos**, Analista de Servicios y Experiencia Digital en Grupo COMGRAP (Santiago, Chile). Trabajo en soporte TI y software de ingeniería (Autodesk, Adobe, Trimble), y automatizo con Python e IA generativa.

**Ver en vivo:** https://vangeum.github.io/Portafolio/
**CV en PDF:** [cv/Vangelis-Ramos-CV.pdf](cv/Vangelis-Ramos-CV.pdf)

![Vista previa del portafolio](assets/img/og-image.png)

## Qué incluye

- Trayectoria laboral, desde la práctica profesional hasta el cargo actual
- Proyectos presentados como casos (problema, solución y resultado)
- Habilidades agrupadas por área
- 11 certificaciones con enlace de verificación (IBM, Autodesk, Coursera y UAB)
- Modo oscuro y claro, con la preferencia guardada en el navegador
- Versión imprimible que funciona como CV de 2 páginas

## Tecnología

Sitio estático sin frameworks ni paso de compilación:

- **HTML** semántico con metadatos para SEO, Open Graph y schema.org
- **CSS** propio con variables para los dos temas, diseño responsive desde 360 px y estilos de impresión
- **JavaScript** liviano sin dependencias: menú móvil, cambio de tema, filtro de certificaciones y animaciones que respetan `prefers-reduced-motion`
- Publicado con **GitHub Pages**

```
index.html
assets/css/styles.css
assets/js/main.js
assets/img/          favicon e imagen para redes sociales
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
