import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0610",
        "bg-2": "#120a18",
        surface: "#17101f",
        "surface-2": "#1d1428",
        ink: "#f6eef3",
        muted: "#a99cb0",
        "muted-2": "#7d7088",
        pink: "#ff3d8a",
        "pink-2": "#ff7ac0",
        "pink-3": "#ff9ecd",
        magenta: "#c03bff",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
