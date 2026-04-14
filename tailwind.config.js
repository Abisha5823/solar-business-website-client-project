/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F97316",
          orangeDark: "#EA580C"
        },
        ink: {
          900: "#0A0A0A"
        },
        surface: {
          50: "#FAFAFA",
          100: "#F4F4F5"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.08)",
        card: "0 10px 25px rgba(0,0,0,0.08)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

