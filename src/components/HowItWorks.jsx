"use client";

import Image from "next/image";
import { Plug, SlidersHorizontal, GraduationCap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Conexión con tu POS",
      desc: "Evaluamos tu sistema actual y definimos la integración. Savvy es compatible con cualquier POS — el costo se evalúa caso a caso.",
    },
    {
      icon: SlidersHorizontal,
      title: "Configuración",
      desc: "Configuramos Savvy con la estructura de tu cadena — locales, categorías y productos. La plataforma ya viene con todos los indicadores listos.",
    },
    {
      icon: GraduationCap,
      title: "Puesta en marcha y capacitación",
      desc: "Capacitamos a tu equipo para que aproveche al máximo la plataforma. En 20 días hábiles estás operando con datos reales.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen: del POS a Savvy */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] rotate-2" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-secondary/10 ring-1 ring-black/5">
              <Image
                src="/img/s6-como-funciona.png"
                alt="El sistema POS del restaurante conectándose automáticamente con el dashboard de Savvy"
                width={1200}
                height={680}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Pasos */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Cómo funciona
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-main mt-3 mb-4 leading-[1.1] tracking-tight text-balance">
              Operativo en 20 días hábiles
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-10">
              Sin interrupciones en tu operación. El proceso es simple, guiado y
              tú solo tienes que aprobar.
            </p>

            <div className="relative">
              {/* Línea conectora vertical */}
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
                        <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
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
