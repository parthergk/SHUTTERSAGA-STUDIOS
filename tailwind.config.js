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
        Beige: '#F5F5DC',
        EerieBlack: '#1B1B1B',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        cormorant: ['__Cormorant_Garamond_c23135', '__Cormorant_Garamond_Fallback_c23135'],
        great: ['__Great_Vibes_a51928', '__Great_Vibes_Fallback_a51928'],
      },
      fontSize: {
        '1.5xl': "1.375rem",
        "2.8xl" : "1.75rem",
        '4.5xl': '2.813rem',
        '6.5xl': "4.063rem",
        '7.0xl': '4.375rem',
        '8.0': '5rem',
        '8.5xl': '7.5rem',
        '12xl': '10rem',
      }
    },
  },
  plugins: [],
};
