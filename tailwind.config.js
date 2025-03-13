/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        warning: "#AC8745",
        success: "#3F825A",
        failed: "#B22E2E",
        sidebarColor:"#0F0F0F",
        textColor:"#E7E7E7",
        contentBackground:"#121212"
      },
      fontWeight: {
        extraLight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
