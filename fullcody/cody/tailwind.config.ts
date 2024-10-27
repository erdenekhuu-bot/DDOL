import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      navcustom: { max: "1024px" },
      mobilecustom: { max: "800px" },
      hidemenu: { min: "800px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customtitle: "rgb(30, 24, 102)",
        custombanner: "rgb(118, 111, 239)",
        customlabel: "rgb(136, 85, 241)",
        splushcolor: "rgb(250, 251, 255);",
        ssdcolor: "rgb(241, 243, 255);",
      },
    },
  },
  plugins: [],
};
export default config;
