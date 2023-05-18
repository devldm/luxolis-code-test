import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-mont)"],
      },
      colors: {
        "login-blue": "#2148C0",
        "bg-blue": "#2148c0",
      },
    },
  },
  plugins: [],
} satisfies Config;
