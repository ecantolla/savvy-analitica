"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./ContactModal";
import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#1E293B] pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

            {/* Col 1: Marca */}
            <div className="md:col-span-5 lg:col-span-4 text-center md:text-left">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/img/1-Logo-Savvy-Azul.png"
                  alt="SAVVY Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm leading-relaxed max-w-sm mx-auto md:mx-0" style={{ color: "rgba(255,255,255,0.6)" }}>
                Plataforma de analítica comercial diseñada para cadenas de restaurantes, cafeterías y heladerías.
              </p>
            </div>

            {/* Col 2: Navegación */}
            <div className="md:col-span-3 lg:col-span-4 lg:justify-self-center">
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>Navegación</h4>
              <ul className="space-y-4">
                <li><Link href="#que-es" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>¿Qué es Savvy?</Link></li>
                <li><Link href="#para-que-sirve" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>Para qué sirve</Link></li>
                <li><Link href="#dashboard" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>Dashboard</Link></li>
                <li><Link href="#precios" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>Precios</Link></li>
                <li><Link href="#faq" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>Preguntas Frecuentes</Link></li>
              </ul>
            </div>

            {/* Col 3: Contacto */}
            <div className="md:col-span-4 lg:col-span-4 lg:justify-self-end">
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>Contacto</h4>
              <ul className="space-y-4 mb-8">
                <li>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ecantolla@thk.cl"}`} className="flex items-center gap-3 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}>
                    <Mail size={16} />
                    <span className="text-sm font-medium">{process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ecantolla@thk.cl"}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace("+", "") || "56997792100"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <MessageCircle size={16} />
                    <span className="text-sm font-medium">{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+56 9 9779 2100"}</span>
                  </a>
                </li>
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all shadow-sm hover:shadow-md"
              >
                Agenda tu demo →
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-xs text-center md:text-left" style={{ color: "rgba(255,255,255,0.4)" }}>
              © 2026 SAVVY Analítica Comercial. Todos los derechos reservados.
            </p>
            <div className="flex gap-5 flex-shrink-0">
              <a href="/privacidad" className="text-xs transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.3)" }}>
                Política de privacidad
              </a>
              <a href="/terminos" className="text-xs transition-colors hover:text-white/60" style={{ color: "rgba(255,255,255,0.3)" }}>
                Términos de uso
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
