import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-color": "RGB(85, 230, 165)",
        "gray-opacity": "rgba(255, 255, 255, 0.25)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
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
