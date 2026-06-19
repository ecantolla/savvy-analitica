# HANDOVER PARA AGENTE IA (CLAUDE CODE / CURSOR)

**Rol:** Eres un Ingeniero Frontend experto especializado en Next.js, Tailwind CSS y UI/UX de alto nivel.
**Contexto:** Estás asumiendo el desarrollo de la Landing Page de "SAVVY" (plataforma B2B de analítica comercial para restaurantes). El proyecto ya fue inicializado, el código base fue clonado y las dependencias están instaladas. El objetivo de la web es generar agendas de "Demos".

---

## 📂 1. RUTAS Y ARCHIVOS CLAVE
Te encuentras en la raíz del proyecto. **Tu espacio de trabajo es:**
`d:\OneDrive - THK SpA\Web Savvy Restoranes 2026-Antigravity\savvy-analitica`

Antes de escribir cualquier código, **DEBES LEER** estos tres archivos que se encuentran en esta misma raíz:

1. **`contenido.md`**: Fuente única de verdad. Contiene el 100% del copy (textos) que debe ir en la web, separado por secciones (Hero, Pain Points, Pricing, etc.). *Nota: Estos textos ya fueron validados y son los definitivos.*
2. **`INSTRUCCIONES_WEB_SAVVY.md`**: Contiene la guía de estilo (colores exactos, tipografía Inter, uso de "Glassmorphism") y el stack técnico.
3. **`Plan Web Savvy restoranes.md`**: El roadmap. Actualmente estamos listos para arrancar con la **Fase 4 (Desarrollo)**.

**Imágenes y Assets:**
Todas las imágenes (optimizadas en formato `.webp`) y logos que necesitas ya están descargados y ubicados en la ruta:
👉 `./public/img/`
*(Nombres exactos: `foto-base-hero.webp`, `vista1-ventas-indicadores.webp`, etc. No tienes que inventar ni buscar imágenes, usa estrictamente las que están ahí).*

---

## 🛠️ 2. STACK TÉCNICO Y REGLAS ESTRICTAS
*   **Framework:** Next.js 14+ (App Router).
*   **Estilos:** Tailwind CSS.
*   **Iconos:** `lucide-react` (Nunca usar emojis como íconos).
*   **Paleta estricta:** 
    *   Fondos claros (`#F8FAFC`, `#FFFFFF`)
    *   CTA/Botones (`#00BFA5` - Cyan)
    *   Acentos (`#1E88E5` - Azul, `#7C4DFF` - Púrpura).
*   **Componentes:** Debes crearlos en `./src/components/` (Hero.jsx, Dashboard.jsx, etc.) e inyectarlos en `./src/app/page.jsx`.

---

## ✅ 3. TRABAJO PREVIO REALIZADO (NO REPETIR)
*   **Instalación:** `npm install` ya fue ejecutado exitosamente. No pierdas tiempo reinstalando dependencias base.
*   **Auditoría de contenido:** El texto en `contenido.md` fue auditado hoy y coincide 100% con la estructura aprobada por el negocio.
*   **Imágenes:** La Fase 1 (preparación de imágenes) está completada. Todo está en `public/img`.

---

## 🚀 4. TU PRIMERA TAREA
1. Revisa brevemente la estructura de `./src/app/page.jsx` y `./src/components/`.
2. Comienza construyendo el **Navbar** y el **Hero Section**, aplicando diseño moderno (Glassmorphism, sombras suaves) y utilizando la imagen `foto-base-hero.webp` (y su versión mobile).
3. Asegúrate de extraer los textos exactos desde `contenido.md`.

*Fin del Handover. Procede con el código.*
