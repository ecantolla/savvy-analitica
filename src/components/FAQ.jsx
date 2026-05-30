"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "¿Savvy reemplaza mi POS actual?",           a: "No. Savvy se conecta a los datos de tu POS actual y los convierte en analítica avanzada. Tu operación diaria no cambia — solo ganas visibilidad e inteligencia sobre esa información." },
    { q: "¿Con qué sistemas POS es compatible?",       a: "Savvy es compatible con cualquier POS. Antes de la implementación evaluamos tu sistema actual para definir el tipo y costo de integración. En la demo te explicaremos el proceso completo." },
    { q: "¿Cuánto tiempo tarda la implementación?",    a: "El proceso completo se estima en 20 días hábiles. Incluye la integración con tu POS, la configuración y la capacitación de tu equipo." },
    { q: "¿Cuántos locales necesito para usar Savvy?", a: "Savvy se puede utilizar desde 1 local en adelante." },
    { q: "¿Cómo se cobra la integración con el POS?",  a: "El costo de integración se evalúa según las características de tu sistema POS y se cotiza por separado del plan mensual. La integración se paga una vez." },
    { q: "¿Los precios incluyen IVA?",                 a: "No. Los precios indicados en UF no incluyen IVA. El valor en pesos varía según el valor de la UF del mes de facturación." },
    { q: "¿Qué pasa si crezco y agrego más locales?",  a: "Los planes están diseñados para crecer contigo. Si superas el rango de tu plan actual, simplemente migras al siguiente — el equipo de Savvy te avisa cuando corresponde." },
    { q: "¿Qué tan difícil es usar el dashboard?",     a: "Savvy está diseñado para que cualquier persona de gestión pueda usarlo sin conocimientos técnicos. Los indicadores ya están configurados y la capacitación cubre todo lo que necesitas." },
    { q: "¿Puedo ver datos históricos de mi negocio?", a: "Sí. Savvy permite analizar datos históricos para comparar períodos, detectar tendencias y tomar decisiones con contexto real. El alcance depende de los datos disponibles en tu POS." },
    { q: "¿Cómo puedo ver Savvy antes de decidir?",    a: "Agenda una demo gratuita. En menos de 30 minutos te mostramos la plataforma en acción con datos reales, respondemos todas tus preguntas y te explicamos cómo se vería con tu cadena." },
  ];

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  const FaqItem = ({ faq, index, globalIndex }) => (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all duration-300">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-inset rounded-2xl outline-none"
        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
        aria-expanded={openIndex === globalIndex}
      >
        <span className="font-semibold text-base text-text-main pr-6 leading-snug">{faq.q}</span>
        <ChevronDown
          className={`flex-shrink-0 text-primary transition-transform duration-300 ${openIndex === globalIndex ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === globalIndex ? "max-h-60 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-text-muted leading-relaxed text-[15px]">{faq.a}</p>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Dudas</span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-main mt-3 mb-4 leading-[1.1] tracking-tight text-balance">
              Preguntas frecuentes
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Todo lo que necesitas saber antes de tu demo. Si tienes más preguntas,
              escríbenos por WhatsApp — respondemos rápido.
            </p>
          </div>
          {/* Ilustración pequeña — decorativa */}
          <div className="hidden lg:block flex-shrink-0 w-40 h-40 relative">
            <Image
              src="/img/s9-faq.webp"
              alt=""
              fill
              className="object-contain object-center"
              sizes="160px"
            />
          </div>
        </div>

        {/* Preguntas: 2 columnas en desktop, 1 en mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Columna 1 */}
          <div className="space-y-3">
            {col1.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} globalIndex={i} />
            ))}
          </div>
          {/* Columna 2 */}
          <div className="space-y-3">
            {col2.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} globalIndex={half + i} />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
