# Plan Web SAVVY Restoranes
*Flujo de trabajo completo — Tú diriges, la IA ejecuta*

---

## Estado actual del proyecto

- [x] `contenido.md` — textos del sitio revisados y aprobados
- [x] `INSTRUCCIONES_WEB_SAVVY.md` — brief técnico y de diseño listo
- [x] Dominio savvy-analitica.cl — comprado y configurado en Vercel
- [x] GitHub + Vercel — conectados y listos para deploy
- [ ] Imágenes — pendientes (ver Fase 1)
- [ ] Google Analytics — pendiente (ver Fase 1)
- [ ] Resend (formulario) — pendiente (ver Fase 1)

---

## Fase 1 — Preparación
*Completar antes de empezar el mockup*

### Imágenes
Guardar en `public/img/` con estos nombres exactos:
- [ ] `hero.jpg` — definir qué va en el hero (foto, gradiente, ilustración o screenshot)
- [ ] `vista1-ventas-indicadores.png`
- [ ] `vista2-ventas-comparadas.png`
- [ ] `vista3-productos.png`
- [ ] `vista4-medios-pago.png`
- [ ] `vista5-kpis-operacionales.png`
- [ ] `vista6-indicadores-mensuales.png`
- [ ] `vista7-categorias.png`
- [ ] `vista8-comparacion-locales.png`
- [ ] `public/logo.png` — PNG transparente (fuera de la carpeta img)
- [ ] `public/favicon.ico` — crear desde el logo

### Formulario de contacto
Servicio elegido: **Resend** (nativo con Next.js + Vercel, 3.000 emails gratis/mes)
- [ ] Crear cuenta en resend.com
- [ ] Verificar dominio savvy-analitica.cl en Resend
- [ ] Obtener API key → agregar al `.env.local` como `RESEND_API_KEY=`

### Google Analytics
- [ ] Ir a analytics.google.com
- [ ] Crear cuenta "SAVVY" → propiedad "savvy-analitica.cl" → plataforma Web
- [ ] Copiar GA ID (formato G-XXXXXXXXXX)
- [ ] Agregar al `.env.local` → `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`

---

## Fase 2 — Mockup en v0.dev
*Herramienta: v0.dev (iniciar sesión con GitHub)*

- [ ] Abrir v0.dev
- [ ] Pegar el contenido de `INSTRUCCIONES_WEB_SAVVY.md` + `contenido.md` como contexto
- [ ] Generar mockup de la landing completa
- [ ] Revisar y ajustar hasta aprobar diseño
- [ ] Exportar código JSX desde la pestaña "Code"

**Resultado esperado:** diseño visual aprobado con código base en Next.js + Tailwind

---

## Fase 3 — Revisión del Mockup
*Antes de pasar al desarrollo*

- [ ] Verificar Hero — headline, subheadline, CTA, trust badges
- [ ] Verificar Pain Points — 6 cards
- [ ] Verificar sección "Lo que obtienes con Savvy" — 7 value props
- [ ] Verificar rueda interactiva — 9 casos de uso
- [ ] Verificar tabs del dashboard — 8 vistas con screenshots
- [ ] Verificar Cómo funciona — 3 pasos
- [ ] Verificar Pricing — 4 planes
- [ ] Verificar Modal de contacto — WhatsApp + formulario
- [ ] Verificar FAQ — 10 preguntas
- [ ] Verificar Footer
- [ ] Verificar vista móvil (375px)

---

## Fase 4 — Desarrollo
*Herramienta: Cursor (modo Composer) o Antigravity*

- [ ] Abrir carpeta del proyecto
- [ ] Pasar el mockup aprobado + `contenido.md` + `INSTRUCCIONES_WEB_SAVVY.md` al agente
- [ ] El agente instala dependencias y construye los componentes
- [ ] Revisar en `http://localhost:3000`
- [ ] Ajustar lo que no esté correcto con instrucciones al agente

**Prompt base para el agente:**
```
Construye la web de SAVVY en Next.js 14 usando:
- Textos desde contenido.md
- Instrucciones de diseño desde INSTRUCCIONES_WEB_SAVVY.md
- Imágenes desde public/img/
- Mockup aprobado en v0.dev como referencia visual
- Stack: Next.js 14 + Tailwind CSS + lucide-react
- Deploy: Vercel (no usar .htaccess)
- Usar variables de entorno para todos los datos sensibles
```

---

## Fase 5 — Revisión en Localhost

- [ ] Formulario de contacto — envía email a ecantolla@thk.cl
- [ ] Botón WhatsApp flotante — abre con mensaje predefinido
- [ ] Modal de contacto — ambas opciones funcionan
- [ ] Rueda interactiva — clic en segmentos muestra detalle
- [ ] Tabs del dashboard — navegan correctamente con screenshots
- [ ] Vista móvil (375px) — todo legible y funcional
- [ ] Todos los botones "Agenda tu Demo Gratis →" abren el modal
- [ ] SEO — título, descripción y Open Graph correctos

---

## Fase 6 — Deploy

- [ ] Commit y push a GitHub
- [ ] Vercel detecta el cambio y despliega automáticamente
- [ ] Web live en savvy-analitica.cl (~30 segundos)
- [ ] Verificar con `Ctrl+F5` que cargó la versión nueva

---

## Fase 7 — Pruebas en Producción

- [ ] Formulario funciona en producción
- [ ] WhatsApp funciona en móvil real
- [ ] Google Analytics recibe visitas
- [ ] Velocidad de carga aceptable (Google PageSpeed)
- [ ] Sin errores en consola del navegador
- [ ] Vista en iPhone y Android

---

## Documentos del proyecto

| Archivo | Descripción |
|---------|-------------|
| `contenido.md` | Fuente única de todos los textos del sitio |
| `INSTRUCCIONES_WEB_SAVVY.md` | Brief técnico y de diseño para el agente |
| `Plan Web Savvy restoranes.md` | Este archivo — plan de ejecución |
| `TODO.md` | Tareas pendientes detalladas |

---

*Plan Web Savvy Restoranes — Versión 2.0 — Mayo 2026*
