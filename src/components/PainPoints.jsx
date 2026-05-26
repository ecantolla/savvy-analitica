"use client";

import { 
  Store, 
  BrainCircuit, 
  FileSpreadsheet, 
  TrendingDown, 
  UsersRound, 
  PackageMinus 
} from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      icon: <Store className="text-primary w-8 h-8" />,
      title: "No sé qué está pasando en cada local ahora mismo",
      description: "Tienes varios locales y no puedes estar en todos a la vez. Cuando algo sale mal, te enteras tarde — o por un WhatsApp del encargado.",
      color: "border-primary"
    },
    {
      icon: <BrainCircuit className="text-secondary w-8 h-8" />,
      title: "Tomo decisiones con el estómago, no con datos",
      description: "Cambias un producto, modificas un turno, abres un local — y lo haces basado en intuición. Sin saber si los números te dan la razón.",
      color: "border-secondary"
    },
    {
      icon: <FileSpreadsheet className="text-accent w-8 h-8" />,
      title: "Cada semana alguien arma una planilla distinta",
      description: "El administrador tiene su versión, el gerente la suya. Nunca cuadran. Pierdes horas reconciliando datos en lugar de analizarlos.",
      color: "border-accent"
    },
    {
      icon: <TrendingDown className="text-primary w-8 h-8" />,
      title: "No sé qué productos me dejan plata de verdad",
      description: "Vendes mucho de un plato pero no sabes si te conviene. No tienes claro qué categorías sostienen el negocio y cuáles solo ocupan espacio en la carta.",
      color: "border-primary"
    },
    {
      icon: <UsersRound className="text-secondary w-8 h-8" />,
      title: "Armo los equipos por costumbre, no por datos",
      description: "Los sábados sobra gente, los miércoles al almuerzo falta. Sin datos de venta por turno y día, la dotación siempre es un estimado.",
      color: "border-secondary"
    },
    {
      icon: <PackageMinus className="text-accent w-8 h-8" />,
      title: "Me quedo sin stock o compro de más constantemente",
      description: "Sin visibilidad de cuánto vendiste por día y producto, el abastecimiento es a ojo. Y el costo lo pagas en merma o en quiebre de stock.",
      color: "border-accent"
    }
  ];

  return (
    <section className="py-24 bg-white" id="pain-points">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
            Los 6 dolores de cabeza que Savvy elimina
          </h2>
          <p className="text-lg md:text-xl text-text-muted">
            Si gestionas una cadena de restaurantes, cafeterías o heladerías, probablemente vives uno o más de estos problemas cada semana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className={`bg-background rounded-xl p-8 border-t-4 shadow-sm hover:shadow-md transition-shadow ${point.color}`}
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-4">
                {point.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
