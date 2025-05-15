import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px", //>indentation for the container
      },
      colors: {
        accent:"#FF8F9C", //> background colour
        blackish: "#1b1b1b", //> Text colour
      },
    },
  },
  plugins: [],
};
