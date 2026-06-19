"use client";

import { useState } from "react";
import Image from "next/image";
import ContactModal from "./ContactModal";
import { CheckCircle } from "lucide-react";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const points = [
    "Te conectamos en vivo con el dashboard",
    "Te mostramos los indicadores más relevantes para tu negocio",
    "Te explicamos el proceso de implementación paso a paso",
    "Te respondemos todas tus preguntas",
  ];

  return (
    <>
      <section className="py-24 bg-dark-bg text-white relative overflow-hidden">
        <style>{`
          @media (max-width: 1023px) {
            .cta-container {
              display: flex;
              flex-direction: column;
            }
            .cta-title-mobile {
              order: 1;
            }
            .cta-image {
              order: 2;
              margin-top: 1.5rem;
            }
            .cta-body {
              order: 3;
            }
            .cta-title-desktop {
              display: none;
            }
          }
          @media (min-width: 1024px) {
            .cta-container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 4rem;
              align-items: center;
            }
            .cta-title-mobile {
              display: none;
            }
          }
        `}</style>

        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="cta-container gap-12">

            {/* Mobile: título */}
            <h2 className="cta-title-mobile text-3xl font-bold leading-[1.1] tracking-tight">
              ¿Listo para gestionar tu cadena con datos reales?
            </h2>

            {/* Imagen */}
            <div className="cta-image relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] rotate-2" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/img/s8-cta.webp"
                  alt="Dueño de cafetería revisando con tranquilidad el crecimiento de sus ventas en Savvy"
                  width={1200}
                  height={680}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Texto + CTA */}
            <div className="cta-body">
              <h2 className="cta-title-desktop text-3xl md:text-[2.75rem] font-bold mb-5 leading-[1.1] tracking-tight text-balance">
                ¿Listo para gestionar tu cadena con datos reales?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed mt-6 lg:mt-0">
                Agenda una demo gratuita y te mostramos Savvy en acción, con datos reales,
                sin presentaciones genéricas. En menos de 30 minutos verás exactamente cómo
                puede transformar la gestión de tu cadena.
              </p>

              <div className="space-y-3 mb-10">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-gray-200">{point}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 text-base font-medium mb-8">Sin compromiso, sin presión de venta.</p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(0,191,165,0.5)]"
                >
                  Agenda tu demo gratis →
                </button>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace("+", "")}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium text-center sm:text-left"
                >
                  O escríbenos al WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
