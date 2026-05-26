"use client";

import { Link, Settings, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Link className="text-white w-8 h-8" />,
      title: "Conexión con tu POS",
      desc: "Evaluamos tu sistema actual y definimos la integración. Savvy es compatible con cualquier POS — el costo de integración se evalúa caso a caso según tu sistema.",
      color: "bg-primary",
      delay: "0"
    },
    {
      icon: <Settings className="text-white w-8 h-8" />,
      title: "Configuración",
      desc: "Configuramos Savvy con la estructura de tu cadena — locales, categorías y productos. La plataforma ya viene con todos los indicadores listos. Sin desarrollo, sin configuraciones complejas.",
      color: "bg-secondary",
      delay: "150"
    },
    {
      icon: <Rocket className="text-white w-8 h-8" />,
      title: "Puesta en marcha y capacitación",
      desc: "Capacitamos a tu equipo para que aproveche al máximo la plataforma. En 20 días hábiles estás operando con datos reales y decisiones más inteligentes.",
      color: "bg-accent",
      delay: "300"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
            Operativo en 20 días hábiles
          </h2>
          <p className="text-lg md:text-xl text-text-muted">
            Sin interrupciones en tu operación. El proceso es simple, guiado y tú solo tienes que aprobar.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-100 rounded-full">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent w-full opacity-30"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <div className="absolute top-0 -mt-3 ml-20 bg-white text-text-main font-bold px-3 py-1 rounded-full shadow-sm text-sm border border-gray-100 z-20">
                  Paso {index + 1}
                </div>

                {/* Icon Container */}
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-lg transform transition-transform group-hover:-translate-y-2 ${step.color}`}>
                  {step.icon}
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 rounded-2xl ${step.color} opacity-40 animate-ping shadow-xl`} style={{ animationDuration: '3s' }}></div>
                </div>

                <h3 className="text-2xl font-bold text-text-main mb-4">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
