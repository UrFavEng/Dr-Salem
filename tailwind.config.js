/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F5F5F5", // Dark Navy background
        bordercolor: "#D3D3D3", // Light Gray text
        textmain: "#333333", // Teal primary accent
        textsec: "#555555", // Crimson secondary accent
        texthird: "#808080", // Dark Purple accent background
      },
    },
  },
  plugins: [],
};
