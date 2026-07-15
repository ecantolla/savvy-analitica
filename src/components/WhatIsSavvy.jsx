"use client";

import Image from "next/image";
import { Eye, FileBarChart, Radar, Users } from "lucide-react";

const outcomes = [
  {
    title: "Conocimiento en tiempo real de los principales indicadores de gestión de cada una de tus tiendas",
    desc: "",
    icon: Eye,
  },
  {
    title: "Toda la información en un solo reporte, generado automáticamente",
    desc: "Cero planillas, cero trabajo manual.",
    icon: FileBarChart,
  },
  {
    title: "Resuelve problemas del día y proyecta resultados mensuales",
    desc: "Te adelantas a los problemas. Detecta caídas, desviaciones y oportunidades.",
    icon: Radar,
  },
  {
    title: "Consigue la participación y aporte de administradores y garzones.",
    desc: "",
    icon: Users,
  },
];

export default function WhatIsSavvy() {
  return (
    <section className="py-24 bg-[#F0F9F8]" id="que-es">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header a todo el ancho */}
        <div className="md:text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-main mt-3 mb-5 leading-[1.1] tracking-tight text-center">
            <span style={{ display: "block" }}>Mide y conoce tu cadena,</span>
            <span style={{ display: "block" }}>tienda por tienda.</span>
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-primary mb-3 text-center">
            Todo lo que se mide, se mejora.
          </p>
          <p className="text-xl text-text-muted leading-relaxed max-w-2xl mx-auto text-center">
            Savvy se conecta a tu POS y transforma cada transacción en información
            clara para gestionar tu cadena con cabeza fría.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen con profundidad */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -rotate-2" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-secondary/10 ring-1 ring-black/5">
              <Image
                src="/img/s3-que-es-savvy.webp"
                alt="Dueño de restaurante revisando los indicadores de su cadena en el dashboard de Savvy"
                width={1200}
                height={680}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Resultados */}
          <div className="space-y-8">
            {outcomes.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-main mb-1.5">
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
