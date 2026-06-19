"use client";

import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", lastname: "", email: "", phone: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
        setTimeout(() => { setIsSuccess(false); onClose(); }, 3500);
        return;
      }
    } catch {}
    finally { setIsSubmitting(false); }

    // Fallback mailto
    const to = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ecantolla@thk.cl";
    const subject = `Nueva solicitud de demo: ${formData.name} ${formData.lastname} — ${formData.company || "Sin empresa"}`;
    const body = [`Nombre: ${formData.name} ${formData.lastname}`, `Email: ${formData.email}`, formData.phone ? `Teléfono: ${formData.phone}` : "", formData.company ? `Empresa: ${formData.company}` : "", formData.message ? `\nMensaje:\n${formData.message}` : ""].filter(Boolean).join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSuccess(true);
    setTimeout(() => { setIsSuccess(false); onClose(); }, 3500);
  };

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-text-main placeholder-text-muted/60";

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Cerrar */}
        <div className="absolute top-4 right-4 z-10">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-text-main mb-1">Agenda tu demo gratuita</h2>
          <p className="text-text-muted mb-7 text-[15px]">
            En menos de 30 minutos te mostramos Savvy con datos reales de un negocio como el tuyo.
          </p>

          {/* WhatsApp — ARRIBA */}
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center gap-4 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-4 rounded-xl font-semibold transition-colors mb-7"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle size={22} />
            </div>
            <div className="text-left">
              <div className="font-bold">Escríbenos por WhatsApp</div>
              <div className="text-sm text-white/80 font-normal">Respuesta en minutos · sin formularios</div>
            </div>
            <span className="ml-auto text-lg">→</span>
          </button>

          {/* Divisor */}
          <div className="flex items-center gap-4 mb-7">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-text-muted font-medium">o completa el formulario</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Formulario — ABAJO */}
          {isSuccess ? (
            <div className="bg-green-50 text-green-700 p-5 rounded-xl text-center">
              <p className="font-semibold text-lg mb-1">Mensaje enviado</p>
              <p className="text-sm">Te contactaremos a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="name" required placeholder="Tu nombre" onChange={handleChange} className={inputClass} />
                <input type="text" name="lastname" required placeholder="Apellido" onChange={handleChange} className={inputClass} />
              </div>
              <input type="email" name="email" required placeholder="Email de trabajo" onChange={handleChange} className={inputClass} />
              <div className="grid grid-cols-2 gap-4">
                <input type="tel" name="phone" placeholder="Teléfono (opcional)" onChange={handleChange} className={inputClass} />
                <input type="text" name="company" placeholder="Nombre de tu cadena" onChange={handleChange} className={inputClass} />
              </div>
              <textarea name="message" rows="2" placeholder="¿Cuántos locales tienes? ¿Qué POS usas? (opcional)" onChange={handleChange} className={`${inputClass} resize-none`} />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold transition-colors disabled:opacity-70 text-base"
              >
                {isSubmitting ? "Enviando..." : "Quiero mi demo gratuita →"}
              </button>
              {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
