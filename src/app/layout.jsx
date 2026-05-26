import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "SAVVY — Analítica Comercial para Cadenas de Restaurantes | Chile",
  description:
    "Plataforma SaaS de analítica para cadenas de restaurantes, cafeterías y heladerías. Conecta tu POS y toma decisiones con datos reales. Planes desde 5 UF/mes.",
  keywords:
    "analítica restaurante chile, software gestión cadena gastronómica, KPIs restaurante, dashboard restaurantes, software POS analítica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
