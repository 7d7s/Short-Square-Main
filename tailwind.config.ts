import type { Config } from "tailwindcss";

export default {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: '#b4b2b5',
        primary: {
          brown: '#373833',
          gunmetal: '#22333b',
          umber: '#5d4f3f',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
