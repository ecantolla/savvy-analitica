"use client";

import { useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Ventas + Indicadores", image: "vista1-ventas-indicadores.jpg", desc: "En la pantalla principal verás, en tiempo real, la venta del mes acumulada, el ticket promedio, el N° de mesas y personas atendidas, y los garzones utilizados por local. Y lo más importante: comparado con el mes anterior y con el mismo mes del año pasado." },
    { id: 1, label: "Ventas Comparadas", image: "vista2-ventas-comparadas.jpg", desc: "Compara la venta día a día de los últimos tres meses en una sola vista. Y no fecha contra fecha, sino sábado con sábado, viernes con viernes… exactamente cómo se comportan tus locales." },
    { id: 2, label: "Productos", image: "vista3-productos.jpg", desc: "Esta vista es fundamental para el abastecimiento. Te mostrará la venta en unidades, por día y mes en curso. Podrás clasificar por Categoría, Sub Categoría, Producto. Información imprescindible para saber cuándo comprar, cuánto abastecer y definir tu algoritmo de abastecimiento." },
    { id: 3, label: "KPIs Operacionales", image: "vista4-kpis-operacionales.jpg", desc: "Descubre las correlaciones que mueven tu facturación. ¿Atendiste las mismas mesas pero vendiste menos? Probablemente cayó tu ticket promedio. ¿La venta subió cuando tuve más garzones en el local? Aquí lo confirmas con datos." },
    { id: 4, label: "Medios de Pago", image: "vista5-medio-pago.jpg", desc: "Analiza cómo te pagan tus clientes. Verifica las comisiones de Transbank, conoce las propinas del día y entérate exactamente cuánto efectivo debe haber en tu caja al día siguiente." },
    { id: 5, label: "Garzones", image: "vista6-garzones.jpg", desc: "Mide el rendimiento individual de cada garzón: sus ventas, mesas atendidas y ticket promedio. Con estos datos puedes fijar objetivos claros y crear incentivos justos, como bonos para quienes mejoren su desempeño." },
    { id: 6, label: "Indicadores Mensuales", image: "vista7-indicadores-mensuales.jpg", desc: "Analiza la venta por turno y por día de la semana. Esta información te permitirá armar tus equipos de cocina y salón con la dotación exacta que cada momento y día necesita." },
    { id: 7, label: "Análisis de Categorías", image: "vista8-categorias.jpg", desc: "Acá podrás medir las unidades vendidas de cada producto en tus locales, separado por Categorías, Sub categorías y producto. Podrás comprobar si tu carta está respondiendo al posicionamiento de tu marca." },
    { id: 8, label: "Comparación de Locales", image: "vista9-comparacion-locales.jpg", desc: "Analiza qué categorías venden más en cada sucursal y mes. Identifica si tu fuerte es el Bebestible en el Local 1 o la Pasta en el Local 2, y toma decisiones de carta, stock y promociones basadas en lo que realmente pide tu cliente en cada local." },
  ];

  return (
    <section className="py-24 bg-background" id="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
            Todo lo que necesitas, en un solo lugar
          </h2>
          <p className="text-lg md:text-xl text-text-muted">
            Savvy incluye múltiples vistas especializadas, cada una diseñada para darte la información exacta que necesitas en el momento que la necesitas.
          </p>
        </div>

        {/* Custom Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-text-main text-white shadow-md transform scale-105"
                  : "bg-white text-text-muted hover:bg-gray-50 hover:text-text-main border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-1">
          <div className="bg-gray-50 p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-text-main mb-2">
                {tabs[activeTab].label}
              </h3>
              <p className="text-text-muted max-w-3xl leading-relaxed">
                {tabs[activeTab].desc}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-lg text-sm uppercase tracking-wide">
                Vista de Panel
              </span>
            </div>
          </div>
          
          <div className="relative bg-gray-900 w-full" style={{ minHeight: "400px" }}>
            <Image
              src={`/img/${tabs[activeTab].image}`}
              alt={tabs[activeTab].label}
              width={1600}
              height={900}
              className="w-full h-auto object-contain animate-in fade-in duration-500"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
