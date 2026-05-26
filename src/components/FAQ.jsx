"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "¿Savvy reemplaza mi POS actual?",
      a: "No. Savvy se conecta a los datos de tu POS actual y los convierte en analítica avanzada. Tu operación diaria no cambia — solo ganas visibilidad e inteligencia sobre esa información.",
    },
    {
      q: "¿Con qué sistemas POS es compatible?",
      a: "Savvy es compatible con cualquier POS. Antes de la implementación evaluamos tu sistema actual para definir el tipo y costo de integración. En la demo te explicaremos el proceso completo.",
    },
    {
      q: "¿Cuánto tiempo tarda la implementación?",
      a: "El proceso completo se estima en 20 días hábiles. Incluye la integración con tu POS, la configuración y la capacitación de tu equipo.",
    },
    {
      q: "¿Cuántos locales necesito tener para usar Savvy?",
      a: "Savvy se puede utilizar desde 1 local en adelante.",
    },
    {
      q: "¿Cómo se cobra la integración con el POS?",
      a: "El costo de integración se evalúa según las características de tu sistema POS y se cotiza por separado del plan mensual. La integración se paga una vez.",
    },
    {
      q: "¿Los precios incluyen IVA?",
      a: "No. Los precios indicados en UF no incluyen IVA. El valor en pesos varía según el valor de la UF del mes de facturación.",
    },
    {
      q: "¿Qué pasa si crezco y necesito agregar más locales?",
      a: "Los planes están diseñados para crecer contigo. Si superas el rango de tu plan actual, simplemente migras al siguiente — el equipo de Savvy te avisa cuando corresponde hacer el cambio.",
    },
    {
      q: "¿Qué tan difícil es usar el dashboard?",
      a: "Savvy está diseñado para que cualquier persona de gestión pueda usarlo sin necesitar conocimientos técnicos. Los indicadores ya están configurados y listos para interpretar. La capacitación incluida en la implementación cubre todo lo que tu equipo necesita.",
    },
    {
      q: "¿Puedo ver datos históricos de mi negocio?",
      a: "Sí. Savvy permite analizar datos históricos para comparar períodos, detectar tendencias y tomar decisiones con contexto real. El alcance histórico depende de la disponibilidad de datos en tu POS.",
    },
    {
      q: "¿Cómo puedo ver Savvy antes de tomar una decisión?",
      a: "Agenda una demo gratuita. En menos de 30 minutos te mostramos la plataforma en acción, respondemos todas tus preguntas y te explicamos cómo se vería con los datos de tu cadena. Sin compromiso.",
    },
  ];

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-text-main pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  size={24} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-text-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
