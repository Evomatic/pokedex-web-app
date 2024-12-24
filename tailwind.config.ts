/* eslint-disable @typescript-eslint/no-require-imports */
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        fire: "#FF6464",
        bug: "#C9FF84",
        water: "#9FF3FF",
        flying: {
          light: "#CBE9FF",
          DEFAULT: "#2299EE",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
