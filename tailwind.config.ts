import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0.9)",
            position: "absolute",
            top: "50%",
            left: "50%",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
            position: "absolute",
            top: "50%",
            left: "50%",
          },
        },
        zoomOut: {
          "0%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
            position: "absolute",
            top: "50%",
            left: "50%",
          },
          "100%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0.9)",
            position: "absolute",
            top: "50%",
            left: "50%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        zoomIn: "zoomIn 0.2s ease-in-out",
        zoomOut: "zoomOut 0.2s ease-in-out",
        fadeIn: "fadeIn 0.2s ease-in-out",
        fadeOut: "fadeOut 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
