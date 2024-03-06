import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'film': '21 / 9',
      },
      colors: {
        "outdocs-yellow": "#F5FF00",
        "pink": "#FF48B0",
        "red": "#F15060",
        "orange": "#FF6C2F",
        "amber": "#FFE800",
        "bright-green": "#44D62C",
        "green": "#00A95C",
        "hunter-green": "#407060",
        "aqua": "#1ACBE9",
        "blue": "#0078BF",
        "navy": "#3D5588",
        "purple": "#765BA7",
        "brown": "#925F52",
        "gold": "#BB8B41",
        "gray": "#88898A",
        "stone": "#F2F2F2"
      },
      fontFamily: {
        "Nimbus-Sans": ["nimbus-sans-extended", "sans-serif"],
        "OCR": ["ocr-b-std", "monospace"],
        "Inter": ["inter", "sans-serif"]
      }
    },
  },
  plugins: [
      require("tailwindcss-leading-trim"),
  ],
};
export default config;
