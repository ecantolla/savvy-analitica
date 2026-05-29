/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BFA5", // Cyan primario (botones/CTA)
        secondary: "#1E88E5", // Azul (textos destacados)
        accent: "#7C4DFF", // Púrpura acento
        background: "#F8FAFC", // Fondo claro
        "dark-bg": "#0F172A", // Fondo oscuro (CTA section)
        "text-main": "#1E293B", // Texto principal
        "text-muted": "#64748B", // Texto secundario
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
