import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./public",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Bungee: ["Bungee Shade", "sans-serif"],
        Sniglet: ["Sniglet", "sans-serif"],
      },
      colors: {
        dred: "#DC2626",
      },
    },
  },
};
export default config;
