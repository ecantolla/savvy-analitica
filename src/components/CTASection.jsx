"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import { CheckCircle } from "lucide-react";

export default function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const points = [
    "Te conectamos en vivo con el dashboard",
    "Analizamos el tipo de reportería que necesitas",
    "Te mostramos los indicadores más relevantes para tu negocio",
    "Sin compromiso, sin presión de venta",
  ];

  return (
    <>
      <section className="py-24 bg-dark-bg text-white relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para gestionar tu cadena con datos reales?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-medium">
            Agenda una demo gratuita y te mostramos Savvy en acción — con datos reales, sin presentaciones genéricas. En menos de 30 minutos verás exactamente cómo Savvy puede transformar la gestión de tu cadena.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-12 mb-12 text-left md:text-center">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span className="text-gray-200 font-medium">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(0,191,165,0.5)]"
            >
              Agenda tu Demo Gratis →
            </button>
            <a 
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace("+", "")}?text=${encodeURIComponent(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              O escríbenos directamente al WhatsApp {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
