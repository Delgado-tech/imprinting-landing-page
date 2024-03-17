/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "300px",
        "2xl": "1400px"
      },
      colors: {
        "custom-beige-01": "#FFFFE5",
        "custom-beige-02": "#F7C1A9",
        "custom-beige-03": "#F9BA84",
        "custom-blue-01": "#217AFF",
        "custom-blue-02": "#333399",
        "custom-magenta": "#917CA5",
        "custom-pink": "#FF00CC",
        "custom-gray-01": "#C2C2CA",
        "custom-gray-02": "#7C7C85",
        "custom-gray-03": "#676974",
        "custom-gray-04": "#565762",
        "custom-gray-05": "#4F4F5E",
        "custom-gray-06": "#393D4F",
        "custom-gray-07": "#2E2E38",
        "custom-gray-08": "#161720",
        "custom-gray-09": "#131318",
        "custom-gray-10": "#08080B",
        "custom-black": "#040404",
        "custom-black-02": "#020202",
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto': ['Roboto']
      },
      animation: {
        linearShow: "linearShow .3s ease-in"
      },
      keyframes: {
        linearShow: {
          "0%": { width: "0%", opacity: "40%" },
          "100%": { width: "100%", opacity: "100%" }
        }
      }
    },
  },
  plugins: [],
}

