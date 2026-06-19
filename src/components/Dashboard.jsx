"use client";

import { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Ventas + Indicadores",   image: "vista1-ventas-indicadores.webp",  desc: "En la pantalla principal verás, en tiempo real, la venta del mes acumulada, el ticket promedio, el N° de mesas y personas atendidas, y los garzones utilizados por local. Lo más importante: comparado con el mes anterior y con el mismo mes del año pasado." },
    { id: 1, label: "Ventas Comparadas",       image: "vista2-ventas-comparadas.webp",   desc: "Compara la venta día a día de los últimos tres meses en una sola vista. No fecha contra fecha, sino sábado con sábado, viernes con viernes, exactamente cómo se comportan tus locales." },
    { id: 2, label: "Productos",               image: "vista3-productos.webp",           desc: "Fundamental para el abastecimiento. Venta en unidades por día y mes en curso, clasificada por Categoría, Sub Categoría y Producto. Sabrás cuándo comprar, cuánto abastecer y cómo definir tu algoritmo de stock." },
    { id: 3, label: "KPIs Operacionales",      image: "vista4-kpis-operacionales.webp",  desc: "Descubre las correlaciones que mueven tu facturación. ¿Las mismas mesas pero menos venta? Cayó el ticket promedio. ¿Más garzones, más venta? Aquí lo confirmas con datos reales." },
    { id: 4, label: "Medios de Pago",          image: "vista5-medio-pago.webp",          desc: "Analiza cómo te pagan tus clientes. Verifica comisiones de Transbank, conoce las propinas del día y sabe exactamente cuánto efectivo debe haber en caja al día siguiente." },
    { id: 5, label: "Garzones",                image: "vista6-garzones.webp",            desc: "Mide el rendimiento individual de cada garzón: ventas, mesas atendidas y ticket promedio. Fija objetivos claros y crea incentivos justos basados en datos." },
    { id: 6, label: "Indicadores Mensuales",   image: "vista7-indicadores-mensuales.webp", desc: "Analiza la venta por turno y por día de la semana. Arma tus equipos de cocina y salón con la dotación exacta que cada momento necesita, sin sobre ni subcontratar." },
    { id: 7, label: "Análisis de Categorías",  image: "vista8-categorias.webp",          desc: "Mide unidades vendidas por categoría, sub-categoría y producto en cada local. Comprueba si tu carta responde al posicionamiento de tu marca." },
    { id: 8, label: "Comparación de Locales",  image: "vista9-comparacion-locales.webp", desc: "Qué categorías venden más en cada sucursal y mes. Identifica si tu fuerte es el Bebestible en el Local 1 o la Pasta en el Local 2, y toma decisiones de carta, stock y promociones." },
  ];

  const boxShadow = { boxShadow: "0 10px 80px 8px rgba(180,200,255,0.30), 0 40px 90px -20px rgba(0,0,0,0.55)" };

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden no-divider" id="dashboard">
      {/* Glow de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex justify-center mb-6">
            <Image
              src="/img/Logo Savvy Blanco V Azul con analitica comercial 800x260png.png"
              alt="SAVVY"
              width={240}
              height={78}
              className="h-16 w-auto"
            />
          </div>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-white mt-3 mb-5 leading-[1.1] tracking-tight text-balance">
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p className="text-xl text-white/60 leading-relaxed">
            Savvy incluye 9 vistas especializadas, cada una diseñada para darte la información exacta en el momento que la necesitas.
          </p>
        </div>

        {/* Desktop: columna izquierda (tabs) + columna derecha (imagen) */}
        <div className="hidden lg:grid grid-cols-[175px_1fr] gap-6 items-start">

          {/* Tabs verticales — sticky mientras scrolleas la imagen */}
          <div className="flex flex-col gap-1 sticky top-24">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left px-4 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "text-white/60 border border-white/35 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Descripción arriba + imagen abajo */}
          <div>
            <div key={`text-${activeTab}`} className="mb-4 tab-text-enter">
              <h3 className="text-lg font-semibold text-white mb-1.5">
                {tabs[activeTab].label}
              </h3>
              <p className="text-white/70 leading-relaxed text-[15px]">
                {tabs[activeTab].desc}
              </p>
            </div>
            <div
              key={`img-${activeTab}`}
              className="rounded-xl overflow-hidden tab-image-enter"
              style={boxShadow}
            >
              <Image
                src={`/img/${tabs[activeTab].image}`}
                alt={tabs[activeTab].label}
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
                quality={93}
              />
            </div>
          </div>
        </div>

        {/* Mobile: selector desplegable + imagen */}
        <div className="lg:hidden">
          <div className="relative mb-6">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(Number(e.target.value))}
              className="w-full appearance-none bg-white/10 border border-white/35 text-white font-semibold text-sm px-4 py-3 rounded-full pr-10 outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id} className="bg-[#0F172A] text-white">
                  {tab.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/60">
              ▾
            </div>
          </div>

          <div key={`img-m-${activeTab}`} className="tab-image-enter" style={boxShadow}>
            <Image
              src={`/img/${tabs[activeTab].image}`}
              alt={tabs[activeTab].label}
              width={1600}
              height={900}
              className="w-full h-auto object-contain rounded-xl"
              quality={93}
            />
          </div>

          <div key={`text-m-${activeTab}`} className="mt-4 tab-text-enter">
            <h3 className="text-base font-semibold text-white mb-1.5">{tabs[activeTab].label}</h3>
            <p className="text-white/70 leading-relaxed text-sm">{tabs[activeTab].desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
