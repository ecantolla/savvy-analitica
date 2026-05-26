"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace("+", "") || "56997792100";
    const msg = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hola, me interesa conocer más sobre Savvy para mi cadena de restaurantes.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-text-main text-sm font-medium py-2 px-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        ¿Hablamos?
      </span>
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" style={{ animationDuration: '2s' }}></span>
    </button>
  );
}
