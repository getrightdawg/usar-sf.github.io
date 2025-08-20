/**
 * tailwind.config.ts
 *
 * Tailwind CSS configuration for the ASF web project.
 *
 * Responsibilities:
 *   - Enable dark mode using class strategy
 *   - Specify content files for purging unused styles
 *   - Extend the default theme with custom fonts, colors, border radius, and animations
 *   - Include Tailwind plugins for animations and typography
 *
 * Notes:
 *   - Uses CSS variables (var(--...)) for theme colors to support dynamic theming
 *   - Keyframes and animations defined here are used throughout the project
 */

import type { Config } from "tailwindcss";

export default {
  // Enable dark mode via a CSS class on the <html> element
  darkMode: ["class"],

  // Specify all files to scan for Tailwind classes
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      // Custom fonts
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        rajdhani: ["var(--font-rajdhani)", "system-ui", "sans-serif"],
      },

      // Custom colors mapped to CSS variables
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },

      // Custom border radius sizes
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Custom animations
      animation: {
        marquee: "marquee 25s linear infinite",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        counter: "counter 2s ease-out",
      },

      // Keyframes for custom animations
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        counter: {
          from: { transform: "scale(0.8)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },

  // Tailwind plugins
  plugins: [
    require("tailwindcss-animate"), // Enables predefined animations
    require("@tailwindcss/typography"), // Rich text styling for prose content
  ],
} satisfies Config;
