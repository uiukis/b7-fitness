import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nexaBlack: "var(--font-nexa-black)",
        nexaRegular: "var(--font-nexa-regular)",
        nexaItalic: "var(--font-nexa-regular-italic)",
        nexaLightItalic: "var(--font-nexa-extralight-italic)",
      },
    },
  },
  plugins: [],
} satisfies Config;
