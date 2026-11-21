import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pharma: {
          blue: "#3182CE",
          navy: "#2B6CB0",
          dark: "#1A202C",
          slate: "#2D3748",
          teal: "#0d9488",
          sky: "#0284c7",
          light: "#F7FAFC",
        },
      },
      fontFamily: {
        main: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
