/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Paths to your HTML and JavaScript/TypeScript files
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '375px', // Extra small screens (mobile base)
        'sm': '480px', // Small screens (mobile portrait)
        'md': '768px', // Medium screens (mobile landscape)
        'lg': '1024px', // Large screens (tablet devices)
        'xl': '1280px', // Extra large screens (small desktop devices)
        '2xl': '1536px', // Double extra large screens (large desktop devices)
      },
      gridTemplateColumns: {
        'custom': '0.5fr 2fr 1fr 1fr 1.5fr', // Define custom grid template
        'Mobile': '0.5fr 3fr 1fr 1fr', // Define custom grid template
      },

      colors: {
        primary: "#0b004e", // Primary color
        secondary: "#1d152f", // Secondary color
        brandDark: "#002834", // Brand dark color
        dark: "#1e1e1e", // Dark color
        light: "#f5f5f5", // Light color
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #0b004e, #1d152f, #002834)', // Custom gradient background
        'gradient': 'linear-gradient(rgba(84,3,255,0.15),rgba(105,2,153,0.15))', // Custom gradient background
      },
      container: {
        center: true, // Center the container by default
        // Uncomment the padding section below to customize container padding
        // padding: {
        //   DEFAULT: "1rem", // Default padding for all screen sizes
        //   sm: "3rem", // Custom padding for small screens
        // },
      },
      width: {
        'max-12vw-120px': 'max(12vw, 120px)', // Custom width utility
       
      },
      gap: {
        'max-1vw-12px': 'max(1vw, 12px)', // Custom gap utility
      },
      fontSize: {
        'max-4vw-36px': 'max(4vw, 36px)', // Custom font size utility
      },
    },
  },
  plugins: [], // No additional plugins are used in this configuration
}
