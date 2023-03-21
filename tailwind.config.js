/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fromTop: "fromTop 200ms linear",
        bordeIntermitente: "bordeIntermitente 200ms linear infinite",
      },

      keyframes: {
        fromTop: {
          "0%": { opacity: 0, transform: "translateY(-500%)" },
          "100%": { opacity: "100", transform: "translateY(0)" },
        },
        bordeIntermitente: {
          "0%": { borderColor: "orange" },
          "100%": { borderColor: "green" },
        },
      },
    },
  },
  plugins: [],
};
