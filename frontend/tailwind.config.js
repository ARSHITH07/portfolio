/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "system-ui"],
        body: ["Sora", "system-ui"]
      },
      colors: {
        ink: {
          900: "#0b0f1a",
          800: "#131a2a",
          700: "#1a2336",
          600: "#22304a",
          100: "#e8edf6"
        },
        glass: "rgba(255, 255, 255, 0.08)",
        accent: "#37f2b0",
        accent2: "#6c7dff"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(1200px circle at 10% 10%, rgba(55, 242, 176, 0.25), transparent 50%), radial-gradient(900px circle at 90% 20%, rgba(108, 125, 255, 0.25), transparent 55%), linear-gradient(135deg, #0b0f1a 0%, #0f1526 40%, #0b0f1a 100%)",
        "light-gradient": "radial-gradient(1200px circle at 10% 10%, rgba(55, 242, 176, 0.22), transparent 55%), radial-gradient(900px circle at 85% 20%, rgba(108, 125, 255, 0.18), transparent 60%), linear-gradient(135deg, #f4f6fb 0%, #ffffff 35%, #eef2ff 100%)"
      },
      boxShadow: {
        glass: "0 20px 45px rgba(0,0,0,0.25)",
        glow: "0 0 30px rgba(55, 242, 176, 0.35)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
