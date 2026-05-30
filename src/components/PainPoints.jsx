"use client";

import Image from "next/image";
import {
  Store, BrainCircuit, FileSpreadsheet,
  TrendingDown, UsersRound, PackageMinus,
} from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    { icon: Store,           title: "No sé qué pasa en cada local ahora mismo",       description: "Tienes varios locales y no puedes estar en todos. Cuando algo sale mal, te enteras tarde — o por un WhatsApp del encargado." },
    { icon: BrainCircuit,    title: "Tomo decisiones con el estómago, no con datos",   description: "Cambias un producto, modificas un turno, abres un local — basado en intuición. Sin saber si los números te dan la razón." },
    { icon: FileSpreadsheet, title: "Cada semana alguien arma una planilla distinta",  description: "El administrador tiene su versión, el gerente la suya. Nunca cuadran. Pierdes horas reconciliando datos en vez de analizarlos." },
    { icon: TrendingDown,    title: "No sé qué productos me dejan plata de verdad",    description: "Vendes mucho de un plato pero no sabes si te conviene. No tienes claro qué categorías sostienen el negocio." },
    { icon: UsersRound,      title: "Armo los equipos por costumbre, no por datos",    description: "Los sábados sobra gente, los miércoles al almuerzo falta. Sin venta por turno y día, la dotación siempre es un estimado." },
    { icon: PackageMinus,    title: "Me quedo sin stock o compro de más",               description: "Sin visibilidad de cuánto vendiste por día y producto, el abastecimiento es a ojo. Y el costo lo pagas en merma o quiebre de stock." },
  ];

  return (
    <section className="py-24 bg-white" id="pain-points">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">El problema</span>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-main mt-3 mb-5 leading-[1.1] tracking-tight text-balance">
            Los 6 dolores de cabeza que Savvy elimina
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Si gestionas una cadena de restaurantes, cafeterías o heladerías,
            probablemente vives uno o más de estos cada semana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 ring-1 ring-black/5 hover:ring-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
              >
                {/* Número + ícono */}
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-primary/15 leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                {/* Texto */}
                <div>
                  <h3 className="text-lg font-semibold text-text-main mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-[15px]">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Texto centrado + foto panorámica */}
        <div className="mt-16 text-center max-w-3xl mx-auto mb-10">
          <p className="text-2xl md:text-3xl font-bold text-text-main leading-snug text-balance">
            Savvy convierte cada venta en una decisión más inteligente.
          </p>
          <p className="text-text-muted text-lg leading-relaxed mt-4">
            Sin exportar datos, sin pedirle reportes a nadie, sin armar planillas. La información está lista cuando la necesitas — por local, por turno, por producto.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[16/7] max-w-3xl mx-auto">
          <Image
            src="/img/s2-pain-points.webp"
            alt="Del caos de las planillas al control con datos reales en Savvy"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
            <p className="text-white font-semibold text-lg text-balance">
              Del caos de las planillas al control con datos reales.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
