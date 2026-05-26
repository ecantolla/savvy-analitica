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
    "Panel principal con KPIs en tiempo real",
    "Ventas comparadas (últimos 3 meses)",
    "Análisis de productos por categoría",
    "Medios de pago y flujo de caja",
    "Indicadores mensuales por turno",
    "KPIs operacionales y correlaciones",
    "Comparación de rendimiento entre locales",
    "Análisis de categorías",
    "Soporte de implementación y capacitación",
  ];

  return (
    <>
      <section className="py-24 bg-background" id="precios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
              Planes diseñados para crecer contigo
            </h2>
            <p className="text-lg md:text-xl text-text-muted">
              Todos los planes incluyen las mismas funcionalidades. El precio varía solo según el número de locales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 transition-transform hover:-translate-y-2 ${
                  plan.popular 
                    ? "border-2 border-primary shadow-xl scale-105 z-10" 
                    : "border border-gray-100 shadow-md mt-4 lg:mt-0"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                    Más Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-text-main mb-2">{plan.name}</h3>
                <p className="text-text-muted font-medium mb-6 pb-6 border-b border-gray-100">
                  {plan.range}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-black text-text-main">{plan.price}</span>
                  <span className="text-text-muted font-medium"> /mes</span>
                </div>

                <div className="space-y-4 mb-8">
                  {/* Solo listamos 3 features para no hacer la card enorme, y dejamos un texto de "Incluye todas las funcionalidades" */}
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Todas las funcionalidades incluidas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted">Capacitación inicial</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full py-3 rounded-xl font-bold transition-colors ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90 text-white" 
                      : "bg-gray-100 hover:bg-gray-200 text-text-main"
                  }`}
                >
                  Agenda tu Demo →
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-lg font-bold text-text-main mb-6 text-center">
              Todos los planes incluyen el 100% de la plataforma:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm font-medium text-text-muted">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-text-muted italic">
              * Valor mensual más IVA.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-6 py-4 rounded-xl text-sm font-medium">
              <span className="font-bold block mb-1">Nota sobre integración:</span>
              La integración con tu POS actual se evalúa y cotiza por separado, según las características de tu sistema. Te lo explicamos en la demo.
            </div>
          </div>

        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
