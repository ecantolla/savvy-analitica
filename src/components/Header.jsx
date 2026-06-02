"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "¿Qué es Savvy?", href: "/#que-es" },
    { name: "Dashboard", href: "/#dashboard" },
    { name: "Precios", href: "/#precios" },
    { name: "Preguntas Frecuentes", href: "/#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo — izquierda */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/img/1-Logo-Savvy-Azul.png"
                  alt="SAVVY Logo"
                  width={150}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation — centrada */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-text-main hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA — derecha */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:-translate-y-0.5 shadow-sm"
              >
                Agenda tu Demo →
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-main hover:text-primary"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t mt-3 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-text-main hover:bg-background hover:text-primary rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Agenda tu Demo →
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
