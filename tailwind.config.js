/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Scan the root `index.html` for Tailwind classes
    "./index.html", 
    // Scan all files in `src/` for Tailwind classes
    "./src/**/*.{html,js,css}", 
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { color: 'transparent' },
          '50%': { color: 'black' },
        },
      },
      margin: {
        '7p': '7%',
        '10p': '10%',
        '20p': '20%',

      },
      width: {
        '70p': '70%'
      },
      colors: {
        bg_primary: "#f9f8fd", /* White-ish */
        bg_secondary: "#f6f5f3", /* Vanilla Grey */
        bg_tertiary: "#141418", /* Dark Grey */
        bg_nav_hover: "#23232a", /* Variation of Dark Grey */
        text_primary: "#3d3d3f", /* Scuffed Dark Grey */
        text_secondary: "#7dce94", /* Simpler Lime Green */
        /* Tag Colors */
        dfir: "#ff6f61",
        red_teaming: "#c0392b",
        osint: "#1abc9c",
        secure_setup: "#3498db",
        kali: "#9b59b6",
        dev_projects: "#f1c40f",
        technical_writing: "#e67e22",
      },
      spacing: {
        "25ch": "25ch",
        "50ch": "50ch",
        "74ch": "74ch",
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),]
};
