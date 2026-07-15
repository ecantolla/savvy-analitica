"use client";

import Image from "next/image";
import { Plug, SlidersHorizontal, GraduationCap, HeadphonesIcon } from "lucide-react";

function PosCallout() {
  return (
    <div className="inline-flex items-start gap-3 bg-primary/5 ring-1 ring-primary/15 rounded-xl px-5 py-4 text-left">
      <Plug className="text-primary flex-shrink-0 mt-0.5" size={24} />
      <p className="text-lg font-semibold text-text-main leading-snug">
        Sin migraciones. Sin cambiar de sistema. Potencia tu POS actual
      </p>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Conexión con tu POS",
      desc: "Evaluamos tu sistema actual y definimos la integración. Savvy es compatible con cualquier POS, el costo se evalúa caso a caso.",
    },
    {
      icon: SlidersHorizontal,
      title: "Configuración",
      desc: "Configuramos Savvy con la estructura de tu cadena: locales, categorías y productos. La plataforma ya viene con todos los indicadores listos.",
    },
    {
      icon: GraduationCap,
      title: "Puesta en marcha y capacitación",
      desc: "Capacitamos a tu equipo para que aproveche al máximo la plataforma. En pocas semanas estás operando con datos reales.",
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte. No estás solo.",
      desc: "Una vez en marcha, el equipo de Savvy está disponible para dar soporte de continuidad operacional, resolver dudas y todo lo que necesites para sacarle el máximo partido a la plataforma.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Desktop: encabezado centrado */}
        <div className="hidden lg:block text-center mb-16">
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-main mt-3 mb-5 leading-[1.1] tracking-tight whitespace-nowrap">
            Así de fácil es con Savvy
          </h2>
          <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            Sin interrupciones en tu operación. El proceso es simple, guiado y tú solo tienes que aprobar.
          </p>
          <div className="mt-8 flex justify-center">
            <PosCallout />
          </div>
        </div>

        {/* Contenido: imagen + pasos */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Mobile: título */}
          <h2 className="lg:hidden order-1 text-3xl font-bold text-text-main leading-[1.1] tracking-tight text-center">
            Así de fácil es con Savvy
          </h2>

          {/* Imagen */}
          <div className="order-2 lg:order-1 mt-6 lg:mt-0 relative">
            <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] rotate-2" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-secondary/10 ring-1 ring-black/5">
              <Image
                src="/img/s6-como-funciona.webp"
                alt="El sistema POS del restaurante conectándose automáticamente con el dashboard de Savvy"
                width={1200}
                height={680}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Mobile: subtítulo */}
          <p className="lg:hidden order-3 mt-6 text-xl text-text-muted leading-relaxed">
            Sin interrupciones en tu operación. El proceso es simple, guiado y tú solo tienes que aprobar.
          </p>

          {/* Mobile: callout POS */}
          <div className="lg:hidden order-4 mt-6">
            <PosCallout />
          </div>

          {/* Pasos */}
          <div className="order-5 lg:order-2 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute left-7 top-7 bottom-7 w-px bg-gradient-to-b from-primary/40 to-primary/10" />
              <div className="space-y-8">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="relative flex gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/25 relative z-10 transition-transform group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="pt-1">
                        <div className="text-[13px] font-bold text-primary uppercase tracking-wider mb-1">
                          Paso {index + 1}
                        </div>
                        <h3 className="text-xl font-semibold text-text-main mb-2">
                          {step.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
