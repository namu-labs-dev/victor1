import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      screens: {
        "max-480": { max: "480px" },
        "max-768": { max: "768px" },
        "max-920": { max: "920px" },
        "min-920": { max: "920px" },
        "min-320": { min: "320px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
