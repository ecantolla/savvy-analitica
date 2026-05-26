"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+56997792100";
    const msg = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hola, me interesa conocer más sobre Savvy para mi cadena de restaurantes.";
    window.open(`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3500);
        return;
      }
    } catch {
      // Si la API falla, usamos fallback mailto
    } finally {
      setIsSubmitting(false);
    }

    // Fallback: abre el cliente de correo con todos los datos pre-cargados
    const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ecantolla@thk.cl";
    const subject = `Nueva solicitud de demo: ${formData.name} ${formData.lastname} — ${formData.company || "Sin empresa"}`;
    const body = [
      `Nombre: ${formData.name} ${formData.lastname}`,
      `Email: ${formData.email}`,
      formData.phone ? `Teléfono: ${formData.phone}` : "",
      formData.company ? `Empresa: ${formData.company}` : "",
      formData.message ? `\nMensaje:\n${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="absolute top-4 right-4">
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-text-main mb-2">
            ¿Cómo prefieres que te contactemos?
          </h2>
          <p className="text-text-muted mb-8">
            Elige la opción que más te acomode para conversar sobre tu cadena.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Opción A - WhatsApp */}
            <div className="bg-background p-6 rounded-xl border border-gray-100 flex flex-col">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 text-[#25D366]">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vía WhatsApp</h3>
              <p className="text-sm text-text-muted flex-grow">
                Respuesta rápida. Habla directamente con nuestro equipo.
              </p>
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-lg font-medium transition-colors flex justify-center items-center gap-2"
              >
                Escribir por WhatsApp →
              </button>
            </div>

            {/* Opción B - Form */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4">Déjanos tus datos</h3>

              {isSuccess ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center gap-3 h-full">
                  <div>
                    <p className="font-semibold">¡Mensaje enviado!</p>
                    <p className="text-sm">Te contactaremos a la brevedad.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-grow">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="text" name="name" required placeholder="Nombre" onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                    </div>
                    <div>
                      <input type="text" name="lastname" required placeholder="Apellido" onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <input type="email" name="email" required placeholder="Email" onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="tel" name="phone" placeholder="Tel." onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                    </div>
                    <div>
                      <input type="text" name="company" placeholder="Empresa" onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <textarea name="message" rows="2" placeholder="Mensaje (opcional)" onChange={handleChange} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-70 mt-auto"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar →"}
                  </button>
                  {errorMsg && (
                    <p className="text-red-500 text-sm text-center mt-2">{errorMsg}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
