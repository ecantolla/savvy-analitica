"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Ventas + Indicadores",   image: "vista1-ventas-indicadores.jpg",  desc: "En la pantalla principal verás, en tiempo real, la venta del mes acumulada, el ticket promedio, el N° de mesas y personas atendidas, y los garzones utilizados por local. Lo más importante: comparado con el mes anterior y con el mismo mes del año pasado." },
    { id: 1, label: "Ventas Comparadas",       image: "vista2-ventas-comparadas.jpg",   desc: "Compara la venta día a día de los últimos tres meses en una sola vista. No fecha contra fecha, sino sábado con sábado, viernes con viernes — exactamente cómo se comportan tus locales." },
    { id: 2, label: "Productos",               image: "vista3-productos.jpg",           desc: "Fundamental para el abastecimiento. Venta en unidades por día y mes en curso, clasificada por Categoría, Sub Categoría y Producto. Sabrás cuándo comprar, cuánto abastecer y cómo definir tu algoritmo de stock." },
    { id: 3, label: "KPIs Operacionales",      image: "vista4-kpis-operacionales.jpg",  desc: "Descubre las correlaciones que mueven tu facturación. ¿Las mismas mesas pero menos venta? Cayó el ticket promedio. ¿Más garzones, más venta? Aquí lo confirmas con datos reales." },
    { id: 4, label: "Medios de Pago",          image: "vista5-medio-pago.jpg",          desc: "Analiza cómo te pagan tus clientes. Verifica comisiones de Transbank, conoce las propinas del día y sabe exactamente cuánto efectivo debe haber en caja al día siguiente." },
    { id: 5, label: "Garzones",                image: "vista6-garzones.jpg",            desc: "Mide el rendimiento individual de cada garzón: ventas, mesas atendidas y ticket promedio. Fija objetivos claros y crea incentivos justos basados en datos." },
    { id: 6, label: "Indicadores Mensuales",   image: "vista7-indicadores-mensuales.jpg", desc: "Analiza la venta por turno y por día de la semana. Arma tus equipos de cocina y salón con la dotación exacta que cada momento necesita — sin sobre ni subcontratar." },
    { id: 7, label: "Análisis de Categorías",  image: "vista8-categorias.jpg",          desc: "Mide unidades vendidas por categoría, sub-categoría y producto en cada local. Comprueba si tu carta responde al posicionamiento de tu marca." },
    { id: 8, label: "Comparación de Locales",  image: "vista9-comparacion-locales.jpg", desc: "Qué categorías venden más en cada sucursal y mes. Identifica si tu fuerte es el Bebestible en el Local 1 o la Pasta en el Local 2 — y toma decisiones de carta, stock y promociones." },
  ];

  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden no-divider" id="dashboard">
      {/* Glow de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header — texto blanco */}
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
          <p className="text-lg text-white/60 leading-relaxed">
            Savvy incluye 9 vistas especializadas, cada una diseñada para darte la información exacta en el momento que la necesitas.
          </p>
        </div>

        {/* Tabs — 5 arriba / 4 abajo */}
        <div className="flex flex-col items-center gap-2 mb-10">
          {/* Fila 1: primeras 5 */}
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.slice(0, 5).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-transparent text-white/60 hover:bg-white/10 hover:text-white border border-white/35"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Fila 2: últimas 4 */}
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.slice(5).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-transparent text-white/60 hover:bg-white/10 hover:text-white border border-white/35"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Panel: título + descripción + imagen */}
        <div className="rounded-2xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] bg-[#0B1120]">

          {/* Texto */}
          <div className="px-8 md:px-12 pt-8 pb-6 text-center">
            <h3 className="font-semibold text-white mb-3" style={{ fontSize: "23px" }}>
              {tabs[activeTab].label}
            </h3>
            <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              {tabs[activeTab].desc}
            </p>
          </div>

          {/* Imagen con glow teal */}
          <div className="px-8 md:px-12 pb-8">
            <div className="rounded-xl overflow-hidden ring-1 ring-primary/15 shadow-[0_0_60px_rgba(0,191,165,0.30)]">
              <Image
                src={`/img/${tabs[activeTab].image}`}
                alt={tabs[activeTab].label}
                width={1600}
                height={900}
                className="w-full h-auto object-contain animate-in fade-in duration-500"
                quality={93}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
