"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import { CheckCircle2, Plug, Zap } from "lucide-react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important;
            position: relative;
            display: flex;
            flex-direction: column;
          }
          .hero-bg-img {
            display: none;
          }
          .hero-mobile-title {
            background-color: white;
            padding: 2rem 2rem 1rem;
            position: relative;
            z-index: 10;
            order: 1;
          }
          .hero-image-mobile {
            width: 100%;
            height: auto;
            object-fit: cover;
            order: 2;
            transform: scale(1.08);
          }
          .hero-mobile-subtitle {
            background-color: white;
            padding: 1.25rem 2rem 0;
            order: 3;
          }
          .hero-features {
            background-color: white;
            padding: 1.25rem 2rem 2rem;
            position: relative;
            z-index: 10;
            order: 4;
          }
          .hero-relative-content {
            display: none;
          }
          .hero-title-description {
            display: none;
          }
          .hero-trust-bar {
            order: 5;
          }
        }
        @media (min-width: 769px) {
          .hero-bg-img {
            object-position: center 45% !important;
          }
          .hero-section {
            min-height: 100dvh !important;
          }
          .hero-image-mobile {
            display: none;
          }
          .hero-title-description {
            display: none;
          }
          .hero-mobile-title {
            display: none;
          }
          .hero-mobile-subtitle {
            display: none;
          }
          .hero-features {
            display: none;
          }
        }
      `}</style>
      <section className="hero-section relative flex flex-col justify-center pt-20 overflow-hidden bg-white">
        {/* Background image - desktop only */}
        <img
          src="/img/foto-base-hero.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover hero-bg-img"
        />

        {/* Title and Description - Desktop */}
        <div className="hero-relative-content relative z-10 w-full flex-grow flex items-center">
          <div className="w-full md:w-1/2 lg:w-2/5 py-12 md:py-24 px-8 md:px-12 lg:px-16 xl:px-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-main leading-tight mb-6">
              <span className="block mb-2 text-4xl sm:text-5xl lg:text-6xl">Savvy</span>
              Analítica comercial para <span className="text-secondary">restaurantes, cafeterías y heladerías.</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-muted mb-10 font-medium">
              Deja de tomar decisiones por intuición y decide con información real.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" size={26} />
                <span className="text-text-main font-medium text-lg">Diseñado para Restaurantes, Cafeterías y Heladerías</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" size={26} />
                <span className="text-text-main font-medium text-lg">Mide la gestión por local en forma diaria y mensual</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" size={26} />
                <span className="text-text-main font-medium text-lg">Permite analizar los principales indicadores de gestión</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" size={26} />
                <span className="text-text-main font-medium text-lg">Consolida la información de todas las tiendas</span>
              </div>
            </div>

            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Agenda tu demo gratis →
              </button>
              <p className="mt-4 text-base text-text-muted font-medium">
                Sin compromisos. Te mostramos cómo funciona y qué puede hacer por tu negocio.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: título */}
        <div className="hero-mobile-title">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-main leading-tight">
            <span className="block text-4xl sm:text-5xl">Savvy</span>
            Analítica comercial para <span className="text-secondary">restaurantes, cafeterías y heladerías.</span>
          </h1>
        </div>

        {/* Mobile image */}
        <img
          src="/img/foto-base-hero-mobile.webp"
          alt="SAVVY Dashboard"
          className="hero-image-mobile"
        />

        {/* Mobile: subtítulo */}
        <div className="hero-mobile-subtitle">
          <p className="text-base sm:text-lg text-text-muted font-medium">
            Deja de tomar decisiones por intuición y decide con información real.
          </p>
        </div>

        {/* Mobile Features */}
        <div className="hero-features">
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
              <span className="text-text-main font-medium text-sm">Diseñado para Restaurantes, Cafeterías y Heladerías</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
              <span className="text-text-main font-medium text-sm">Mide la gestión por local en forma diaria y mensual</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
              <span className="text-text-main font-medium text-sm">Permite analizar los principales indicadores de gestión</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
              <span className="text-text-main font-medium text-sm">Consolida la información de todas las tiendas</span>
            </div>
          </div>

          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Agenda tu demo gratis →
            </button>
            <p className="mt-4 text-sm text-text-muted font-medium">
              Sin compromisos. Te mostramos cómo funciona y qué puede hacer por tu negocio.
            </p>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="hero-trust-bar relative z-10 mt-auto bg-white/80 backdrop-blur-md border-t border-gray-200 py-0 md:py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-300">
              <div className="flex items-center gap-2 md:gap-3 px-4 md:px-10 py-2 md:py-0 w-full md:w-auto justify-center">
                <Zap className="text-primary w-4 h-4 md:w-6 md:h-6" />
                <span className="font-semibold text-text-main text-xs md:text-base uppercase tracking-wide">Potencia tu POS actual</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 px-4 md:px-10 py-2 md:py-0 w-full md:w-auto justify-center">
                <CheckCircle2 className="text-primary w-4 h-4 md:w-6 md:h-6" />
                <span className="font-semibold text-text-main text-xs md:text-base uppercase tracking-wide">Sin migraciones</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 px-4 md:px-10 py-2 md:py-0 w-full md:w-auto justify-center">
                <Plug className="text-primary w-4 h-4 md:w-6 md:h-6" />
                <span className="font-semibold text-text-main text-xs md:text-base uppercase tracking-wide">Sin cambiar de sistema</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
