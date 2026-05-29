"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      range: "1 a 3 locales",
      price: "5 UF",
      popular: false,
    },
    {
      name: "Base",
      range: "4 a 10 locales",
      price: "10 UF",
      popular: true,
    },
    {
      name: "Mid",
      range: "11 a 20 locales",
      price: "15 UF",
      popular: false,
    },
    {
      name: "Alto",
      range: "21 o más locales",
      price: "25 UF",
      popular: false,
    }
  ];

  const features = [
    { label: "Panel de KPIs en tiempo real",        desc: "Venta total, ticket promedio, mesas y garzones por local" },
    { label: "Ventas comparadas",                   desc: "Día a día vs. mes anterior y mismo mes del año pasado" },
    { label: "Análisis de productos",               desc: "Unidades vendidas por categoría, sub-categoría y producto" },
    { label: "Medios de pago",                      desc: "Efectivo, débito, crédito, delivery y propinas desglosadas" },
    { label: "Indicadores mensuales",               desc: "Venta por turno y día de la semana para armar dotaciones" },
    { label: "KPIs operacionales",                  desc: "Correlaciones entre mesas, garzones, ticket y venta" },
    { label: "Análisis de categorías",              desc: "Qué categorías rinden en cada local y en qué período" },
    { label: "Comparación entre locales",           desc: "Ranking de sucursales por venta, ticket y rentabilidad" },
    { label: "Implementación y capacitación",       desc: "Operativo en 20 días hábiles, tu equipo capacitado" },
  ];

  return (
    <>
      <section className="py-24 bg-[#F0F9F8]" id="precios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Precios
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-main mt-3 mb-5 leading-[1.1] tracking-tight text-balance">
              Planes diseñados para crecer contigo
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Todos los planes incluyen las mismas funcionalidades. El precio varía solo según el número de locales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-bold text-text-main mb-1">{plan.name}</h3>
                <p className="text-sm text-text-muted font-medium mb-6 pb-6 border-b border-gray-100">
                  {plan.range}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-text-main">{plan.price}</span>
                  <span className="text-text-muted font-medium"> /mes</span>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">100% de la plataforma incluida</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Capacitación inicial</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 rounded-xl font-bold transition-colors bg-primary hover:bg-primary/90 text-white"
                >
                  Agenda tu Demo →
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-lg font-bold text-text-main mb-8 text-center">
              Todos los planes incluyen el 100% de la plataforma
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check size={13} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-main">{feature.label}</p>
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-text-muted italic">
              * Valor mensual más IVA.
            </p>
            <div className="bg-secondary/5 border border-secondary/15 text-text-main px-6 py-4 rounded-xl text-sm">
              <span className="font-bold block mb-1 text-secondary">Nota sobre integración</span>
              <span className="text-text-muted">La integración con tu POS actual se evalúa y cotiza por separado, según las características de tu sistema. Te lo explicamos en la demo.</span>
            </div>
          </div>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
