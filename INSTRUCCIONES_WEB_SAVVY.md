# Proyecto: Web SAVVY — Instrucciones para el Agente

## 🎯 Objetivo del sitio
Crear el sitio web oficial de **SAVVY**. El único objetivo es generar reuniones de demostración con potenciales clientes — no ventas directas ni pruebas gratuitas.

El CTA es siempre **"Agenda tu Demo Gratis →"** — nunca "Prueba gratuita" ni "Compra ahora".

---

## 🏢 Contexto del Producto

**SAVVY** es una plataforma de analítica comercial que se conecta al POS de la cadena y convierte sus datos en indicadores comerciales claros, listos para tomar decisiones. No reemplaza el POS — lo potencia.

**Público objetivo:** Directivos, dueños y supervisores de cadenas de restaurantes, cafeterías y heladerías.

**Diferenciador clave:** Indicadores comerciales ya listos, sin necesidad de configurar métricas desde cero ni saber de analítica.

**Implementación:** ~20 días hábiles. Compatible con cualquier POS (integración se evalúa y cotiza por separado, se paga una vez).

---

## 💰 Pricing (más IVA, en UF/mes)

| Plan | Locales | Precio |
|------|---------|--------|
| Starter | 1 a 3 locales | 5 UF/mes |
| Base | 4 a 10 locales | 10 UF/mes |
| Mid | 11 a 20 locales | 15 UF/mes |
| Alto | 21 o más locales | 25 UF/mes |

Todos los planes incluyen las mismas funcionalidades. El precio varía solo según el número de locales. La integración con el POS se evalúa y cotiza por separado.

---

## 📞 Datos de Contacto

- **Email:** ecantolla@thk.cl
- **WhatsApp:** +56997792100
- **Mensaje WhatsApp predefinido:** "Hola, me interesa conocer más sobre Savvy para mi cadena de restaurantes."

---

## 🎨 Diseño & Branding

**Estilo general:** Fondo claro (gris muy claro o blanco). Glassmorphism moderno como referencia visual — cards con bordes sutiles, capas translúcidas, sombras suaves. Los colores de la paleta se usan como acentos sobre el fondo claro. Las imágenes del dashboard son sobre fondo blanco y deben verse bien integradas.

**Paleta de colores:**
- Botones/CTA: `#00BFA5` — usar SOLO en botones y elementos de acción
- Textos destacados y acentos: `#1E88E5` — usar en palabras clave de headlines y acentos de UI
- Acento Púrpura: `#7C4DFF` — uso secundario en iconos y detalles
- Fondo principal (gris muy claro): `#F8FAFC` — fondo base de todo el sitio
- Blanco: `#FFFFFF` — fondo de cards, modales y secciones alternadas
- Fondo oscuro (uso puntual): `#0F172A` — solo para secciones de contraste como CTA central
- Texto principal: `#1E293B`
- Texto secundario: `#64748B`

**Tipografía — Inter (Google Fonts):**
- Headlines: Inter Bold, 48-72px (hero), 32-40px (secciones)
- Subtítulos: Inter SemiBold, 18-24px
- Body: Inter Regular, 15-16px, line-height 1.6
- Labels: Inter Medium, 12-14px, uppercase, letter-spacing 0.05em

**Logo:** `/public/logo.png` — PNG transparente. Usar siempre sobre fondo claro.

**Iconos:** lucide-react únicamente. Nunca emojis como íconos en la UI.

**Tono de voz:**
- B2B, confiado y experto — nunca arrogante
- Directo y orientado a resultados
- Sin jerga técnica innecesaria
- Siempre desde el beneficio para quien gestiona la cadena

---

## 🛠️ Stack Técnico

- **Framework:** Next.js 14+ con App Router
- **Estilos:** Tailwind CSS
- **Iconos:** lucide-react
- **Deploy:** Vercel (conectado a GitHub) — NO usar .htaccess ni configuraciones de Hostinger
- **Dominio:** savvy-analitica.cl
- **Analytics:** Google Analytics 4

**Variables de entorno (.env.local):**
```
NEXT_PUBLIC_WHATSAPP_NUMBER=+56997792100
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hola, me interesa conocer más sobre Savvy para mi cadena de restaurantes.
NEXT_PUBLIC_CONTACT_EMAIL=ecantolla@thk.cl
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://savvy-analitica.cl
```

Siempre usar variables de entorno para datos sensibles. Nunca hardcodear email, teléfono ni números en el código.

---

## 📁 Estructura del Proyecto

```
savvy-web/
├── contenido.md          ← fuente única de todos los textos del sitio
├── INSTRUCCIONES_WEB_SAVVY.md
├── .env.local            ← variables sensibles (nunca al repo)
├── public/
│   ├── logo.png          (PNG transparente)
│   ├── favicon.ico
│   └── img/
│       ├── vista1-ventas-indicadores.png
│       ├── vista2-ventas-comparadas.png
│       ├── vista3-productos.png
│       ├── vista4-medios-pago.png
│       ├── vista5-kpis-operacionales.png
│       ├── vista6-indicadores-mensuales.png
│       ├── vista7-categorias.png
│       └── vista8-comparacion-locales.png
└── src/
    ├── app/
    │   ├── layout.jsx    (meta tags, GA, fonts)
    │   └── page.jsx
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── PainPoints.jsx
        ├── WhatIsSavvy.jsx
        ├── UseCases.jsx
        ├── Dashboard.jsx
        ├── HowItWorks.jsx
        ├── Pricing.jsx
        ├── CTASection.jsx
        ├── FAQ.jsx
        ├── ContactModal.jsx
        ├── FloatingWhatsApp.jsx
        └── Footer.jsx
```

---

## 📋 Secciones del Sitio (en orden)

1. **Navbar** — Logo + links + botón "Agenda tu Demo Gratis →"
2. **Hero** — Headline + subheadline + CTA + 3 trust badges
3. **Pain Points** — 6 dolores de cabeza que Savvy elimina
4. **Qué es Savvy** — 7 value props en cards
5. **9 Casos de Uso** — Rueda interactiva: clic en cada segmento muestra título + descripción al lado
6. **Dashboard** — 9 tabs interactivas con screenshot + texto descriptivo. Las imágenes se muestran tal como están — sin crop, sin recorte, sin transformación. Nombres de archivo exactos en la carpeta `/img/`.
7. **Cómo funciona** — 3 pasos: Conexión POS → Configuración → Puesta en marcha y capacitación
8. **Pricing** — 4 planes con funcionalidades unificadas + nota de IVA + nota de integración
9. **CTA central** — "Lo que pasa en la demo" + botón
10. **FAQ** — 10 preguntas respondidas
11. **Footer** — Marca + navegación + contacto + legal

---

## 🪟 Modal de Contacto

Se activa con CUALQUIER botón "Agenda tu Demo Gratis →" en toda la web.

**Título:** ¿Cómo prefieres que te contactemos?

**Opción A — WhatsApp:**
- Botón: "Escribir por WhatsApp →"
- Abre WhatsApp con número y mensaje predefinido desde variables de entorno

**Opción B — Formulario:**
- Nombre (obligatorio)
- Apellido (obligatorio)
- Email (obligatorio)
- Teléfono (opcional)
- Empresa (opcional)
- Mensaje (cuadro de texto, opcional)
- Al enviar: notificación a ecantolla@thk.cl + mensaje de confirmación al usuario

---

## 🔘 Botón Flotante WhatsApp

Siempre visible en esquina inferior derecha. Independiente del modal. Abre WhatsApp directamente con número y mensaje predefinido desde variables de entorno.

---

## 📊 SEO

- **Título:** "SAVVY — Analítica Comercial para Cadenas de Restaurantes | Chile"
- **Descripción:** "Plataforma de analítica comercial para cadenas de restaurantes, cafeterías y heladerías. Conecta tu POS y toma decisiones con datos reales. Planes desde 5 UF/mes más IVA."
- **Keywords:** analítica restaurante chile, software gestión cadena gastronómica, KPIs restaurante, dashboard restaurantes, software POS analítica
- **Open Graph:** título, descripción, imagen y URL configurados en layout.jsx

---

## 📐 Estándares de UI/UX

- **Breakpoints:** 375px (móvil) / 768px (tablet) / 1024px (laptop) / 1440px (desktop)
- **Espaciado:** usar siempre múltiplos de 4px y 8px para gaps, paddings y márgenes
- **Contraste:** texto principal ≥4.5:1, texto secundario ≥3:1 sobre el fondo
- **Touch targets:** mínimo 44×44pt en todos los elementos interactivos (botones, links, tabs)
- **Contenido primero:** si una animación oculta contenido mientras carga, es una regresión — el contenido debe ser visible antes que el efecto

---

## 📌 Reglas para el Agente

- El archivo `contenido.md` es la **fuente única de verdad** para todos los textos. Siempre referenciarlo, nunca inventar copy.
- Todos los textos del sitio vienen del `contenido.md`. No modificar textos sin instrucción explícita.
- El CTA es siempre **"Agenda tu Demo Gratis →"**.
- Los precios siempre en **UF, más IVA**, aclarando que la integración es aparte.
- Nunca usar emojis como íconos en la UI — usar lucide-react.
- El modal de contacto se activa desde TODOS los botones CTA del sitio.
- El botón flotante de WhatsApp es independiente y siempre visible.
- El deploy es en **Vercel** — no usar configuraciones de Hostinger ni .htaccess.
- Siempre usar variables de entorno para email, teléfono y GA ID.
- El flujo de trabajo es: contenido.md ✅ → imágenes ✅ → mockup (v0.dev) → código → deploy (Vercel).
- **Las imágenes del dashboard (`/img/vista1` a `/img/vista8`) se muestran tal como están — sin crop, sin recorte, sin transformación, sin filtros.** Son screenshots reales del producto y deben verse completos e intactos.

---

*INSTRUCCIONES_WEB_SAVVY.md — Versión 2.0 — Mayo 2026 — Proyecto Web SAVVY*
