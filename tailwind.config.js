/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-back': "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
        'custom-mix': "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"
      },
    },
  },
  plugins: [],
};
