import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "background-slate": "rgba(var(--background-slate))",
        primary: "rgba(var(--primary))",
        accent: "rgba(var(--accent))",
      },
    },
  },
  plugins: [],
}
export default config
