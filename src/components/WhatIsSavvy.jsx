"use client";

import {
  Eye,
  BarChart3,
  DollarSign,
  MapPin,
  FileX,
  AlertCircle,
  Target
} from "lucide-react";

const sevenCases = [
  { num: "01", title: "Control total sobre cada local, sin estar en todos lados", desc: "Ve en tiempo real qué está pasando en cada sucursal — ventas, márgenes, rendimiento — desde un solo lugar.", icon: Eye },
  { num: "02", title: "Decisiones con datos, no con corazonadas", desc: "Deja de operar en base a suposiciones. Cada decisión respaldada por información precisa y actualizada de tu propio negocio.", icon: BarChart3 },
  { num: "03", title: "Conoce exactamente qué te deja plata y qué no", desc: "Identifica qué productos, canales y categorías contribuyen realmente a tu resultado. Enfoca tus recursos donde tiene sentido.", icon: DollarSign },
  { num: "04", title: "Revisa el aporte real de cada local y canal de venta", desc: "Sabe si el local de un sector rinde más que otro, y si el delivery te conviene comparado con el salón.", icon: MapPin },
  { num: "05", title: "Olvídate de las planillas Excel", desc: "Tus reportes se generan automáticamente. Sin trabajo manual, sin errores, sin perder tiempo pidiendo datos a tu equipo.", icon: FileX },
  { num: "06", title: "Detecta caídas y desvíos antes de que se vuelvan un problema", desc: "Identifica a tiempo cuando un local, producto o turno se está desviando de lo esperado. Sin sorpresas al cierre del mes.", icon: AlertCircle },
  { num: "07", title: "Fija objetivos con base en lo que tu negocio realmente puede lograr", desc: "Planifica con conocimiento real de tu potencial. No metas arbitrarias — metas que tienen sentido y que tu equipo puede cumplir.", icon: Target },
];

export default function WhatIsSavvy() {
  return (
    <section className="py-24 bg-background" id="que-es">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
            Lo que obtienes con Savvy
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-6">
            Control total sobre tu cadena, desde un solo lugar
          </p>
          <p className="text-base text-text-main font-medium bg-white inline-block px-6 py-2 rounded-full shadow-sm border border-gray-100">
            Savvy se conecta a tu POS y convierte tus datos en decisiones claras, sin trabajo manual.
          </p>
        </div>

        {/* Bento Grid - 7 casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          {sevenCases.map((item, i) => {
            const IconComponent = item.icon;
            const isFirst = i === 0;
            const isLast = i === sevenCases.length - 1;

            return (
              <div
                key={`${item.num}-${i}`}
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-gray-100 ${isFirst ? 'lg:col-span-2' : ''} ${isLast ? 'lg:col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors leading-none">
                    {item.num}
                  </div>
                  <IconComponent size={32} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
