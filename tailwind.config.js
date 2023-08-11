/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        atlassianBlue: "hsl(216, 100%, 50%)",
        atlassianLightBlue: "hsl(216, 100%, 94%)",
        buttonBlue: "#034AB5",
        hoverButtonBlue: "hsl(216, 97%, 28%)",
        deepBlue: "hsl(216, 100%, 35%)",
        deepGray: "hsl(218, 25%, 35%)",
        lightGray: "hsl(220, 10%, 89%)",
        cardViolet: "hsl(251, 89%, 96%)",
        cardBlue: "#D4FAFF",
        chakra: "#4CC8C3",
        tailwind: "#38BDF8",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: [],
};
