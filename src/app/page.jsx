import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import WhatIsSavvy from "@/components/WhatIsSavvy";
import Dashboard from "@/components/Dashboard";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

// Importar UseCases dinámicamente sin SSR para evitar hydration mismatch
const UseCases = dynamic(() => import("@/components/UseCases"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PainPoints />
      <WhatIsSavvy />
      <Dashboard />
      <UseCases />
      <HowItWorks />
      <Pricing />
      <CTASection />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
