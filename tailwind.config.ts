import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#c4622d", dark: "#a0491f", light: "#e07a4a" },
        accent: { DEFAULT: "#2c5f8a", dark: "#1e4466", light: "#4a7da8" },
      },
      fontFamily: { sans: ["Inter", "sans-serif"], body: ["DM Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
