"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Eye,
  BarChart3,
  DollarSign,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const allCases = [
  { num: "01", title: "Para controlar tu negocio", desc: "Ve en tiempo real qué está pasando en cada sucursal, las ventas, márgenes, rendimiento, sin necesitar estar físicamente presente.", icon: Eye },
  { num: "02", title: "Para maximizar tu rentabilidad", desc: "Identifica qué productos, canales y categorías contribuyen realmente a tus resultados y enfoca tus recursos donde tiene sentido.", icon: BarChart3 },
  { num: "03", title: "Para mantener inventarios óptimos", desc: "Conoce la venta en unidades por día y mes. Sabe cuándo comprar, cuánto abastecer y define tu algoritmo de abastecimiento con datos reales.", icon: DollarSign },
  { num: "04", title: "Para enfocar tu gestión", desc: "Prioriza las acciones que más impacto generan. Deja de operar en base a urgencias y empieza a gestionar con claridad estratégica.", icon: Target },
  { num: "05", title: "Para decidir con datos, no con tincómetro", desc: "Cada decisión de menú, dotación, precios o expansión — respaldada por información precisa y actualizada de tu propio negocio.", icon: BarChart3 },
  { num: "06", title: "Para medir tu desempeño", desc: "Fija objetivos con base en lo que tu negocio realmente puede lograr y mide el avance semana a semana, local por local.", icon: TrendingUp },
  { num: "07", title: "Para confirmar o rebatir tus percepciones", desc: "¿Crees que el delivery no te conviene? ¿Que un local rinde menos que otro? Savvy te dice si estás en lo correcto — con números, no con opiniones.", icon: CheckCircle },
  { num: "08", title: "Para saber si ganas o no (y cuánto)", desc: "Identifica exactamente qué locales, productos y canales generan rentabilidad real y cuáles están erosionando tu margen sin que lo notes.", icon: DollarSign },
  { num: "09", title: "Para nunca perderte una oportunidad", desc: "Detecta tendencias, patrones y correlaciones en tus datos antes de que se vuelvan obvias. La ventaja competitiva está en ver antes que los demás.", icon: Sparkles },
];

/**
 * Crea el path SVG de un sector de dona (anillo).
 * 0° = arriba (12 en punto), ángulos crecen en sentido horario.
 */
const createSectorPath = (cx, cy, innerR, outerR, startDeg, endDeg) => {
  const toRad = (deg) => ((deg - 90) * Math.PI) / 180;
  const s = toRad(startDeg);
  const e = toRad(endDeg);

  const x1 = cx + outerR * Math.cos(s); // inicio arco exterior
  const y1 = cy + outerR * Math.sin(s);
  const x2 = cx + outerR * Math.cos(e); // fin arco exterior
  const y2 = cy + outerR * Math.sin(e);
  const x3 = cx + innerR * Math.cos(e); // inicio arco interior (inverso)
  const y3 = cy + innerR * Math.sin(e);
  const x4 = cx + innerR * Math.cos(s); // fin arco interior
  const y4 = cy + innerR * Math.sin(s);

  const largeArc = endDeg - startDeg > 180 ? 1 : 0;

  return [
    `M ${x1} ${y1}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2}`,
    `L ${x3} ${y3}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4}`,
    "Z",
  ].join(" ");
};

export default function UseCases() {
  const [activeCase, setActiveCase] = useState(0);
  const [hoveredCase, setHoveredCase] = useState(null);

  // Coordenadas del SVG overlay (viewBox "0 0 700 700")
  const cx = 350;
  const cy = 310;      // centro real del círculo en el PNG (más arriba del centro del viewBox)
  const innerR = 75;   // radio del círculo central blanco (SAVVY logo)
  const outerR = 300;  // radio exterior de los segmentos
  const segAngle = 360 / 9; // 40° por segmento
  const startOffset = 4;   // offset de rotación para alinear con el PNG

  return (
    <section className="py-24 bg-white" id="para-que-sirve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Casos de uso
          </span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-main mt-3 mb-5 leading-[1.1] tracking-tight text-balance">
            ¿Para qué sirve Savvy?
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Nueve razones concretas por las que los directivos y dueños de cadenas gastronómicas eligen Savvy.
          </p>
        </div>

        {/* Texto accesible / SEO: las 9 razones como contenido real para buscadores y lectores de pantalla.
            El círculo es una imagen; esta lista garantiza que Google indexe los títulos y descripciones. */}
        <ul className="sr-only">
          {allCases.map((c) => (
            <li key={`seo-${c.num}`}>
              <strong>{c.title}.</strong> {c.desc}
            </li>
          ))}
        </ul>

        {/* Desktop: Imagen del círculo con sectores SVG interactivos */}
        <div className="hidden lg:flex lg:gap-12 lg:items-center lg:justify-center max-w-7xl mx-auto">

          {/* Círculo con zonas interactivas */}
          <div className="relative w-full" style={{ maxWidth: "700px" }}>
            <div className="relative w-full aspect-square">
              <Image
                src="/img/Circulo_Savvy.webp"
                alt="Círculo interactivo con las nueve razones para usar Savvy"
                fill
                sizes="(max-width: 1024px) 0px, 700px"
                className="object-contain pointer-events-none"
              />

              {/* SVG overlay con 9 sectores de arco, uno por caso de uso */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 700 700"
                fill="none"
                stroke="none"
                style={{ pointerEvents: "auto", zIndex: 20 }}
              >
                {allCases.map((_, i) => {
                  const startDeg = i * segAngle + startOffset;
                  const endDeg   = startDeg + segAngle;
                  const d        = createSectorPath(cx, cy, innerR, outerR, startDeg, endDeg);
                  const isActive  = activeCase === i;
                  const isHovered = hoveredCase === i;

                  return (
                    <path
                      key={i}
                      d={d}
                      role="button"
                      aria-label={allCases[i].title}
                      aria-pressed={isActive}
                      onClick={() => setActiveCase(i)}
                      onMouseEnter={() => setHoveredCase(i)}
                      onMouseLeave={() => setHoveredCase(null)}
                      style={{
                        fill: isActive
                          ? "rgba(255,255,255,0.20)"
                          : isHovered
                          ? "rgba(255,255,255,0.09)"
                          : "rgba(0,0,0,0)",
                        stroke: isActive ? "rgba(255,255,255,0.55)" : "none",
                        strokeWidth: isActive ? 1.5 : 0,
                        strokeLinejoin: "round",
                        cursor: "pointer",
                        pointerEvents: "auto",
                        transition: "fill 0.2s ease, stroke 0.2s ease",
                      }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Panel de detalle del caso activo */}
          {(() => {
            const current = allCases[activeCase] ?? allCases[0];
            const IconComponent = current.icon;
            return (
              <div className="flex-1 relative">
                <div className="absolute top-0 right-0">
                  <IconComponent size={80} className="text-primary/20" />
                </div>
                <div className="text-6xl font-bold text-primary leading-none mb-6">
                  {current.num}
                </div>
                <h3 className="text-3xl font-bold text-text-main mb-6 min-h-[80px]">
                  {current.title}
                </h3>
                <p className="text-lg text-text-muted leading-relaxed">
                  {current.desc}
                </p>
              </div>
            );
          })()}
        </div>

        {/* Mobile: Acordeón */}
        <div className="lg:hidden space-y-3">
          {allCases.map((useCase, i) => (
            <div
              key={`accordion-${i}`}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setActiveCase(activeCase === i ? -1 : i)}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0">
                  {useCase.num}
                </div>
                <span className="text-left font-semibold text-text-main flex-grow">
                  {useCase.title}
                </span>
              </button>

              {activeCase === i && (
                <div className="px-4 pb-4 border-t border-gray-200 bg-gray-50">
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {useCase.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
