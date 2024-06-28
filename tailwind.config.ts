import { Inter } from 'next/font/google';
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-color": "RGB(85, 230, 165)",
        "gray-opacity": "rgba(255, 255, 255, 0.25)",
        "black-opacity": "rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        inter: ["var(--font-inter)", ...fontFamily.sans],
      },
      screens: {
        "max-480": { max: "480px" },
        "max-768": { max: "768px" },
        "max-920": { max: "920px" },
        "min-320": { min: "320px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
