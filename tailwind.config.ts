import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#014E56",
        "bg-secondary": "#012F34",
        "bg-footer": "#002529",
        "text-secondary": "#F67E7E",
        "text-footer": "#99A8A9",
        "text-primary":"#79C8C7",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      container: {
        padding: "2rem",
        center: true,
        screens: {
          lg: "1110px",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "main-bg-t": "url('/main-bg-t.png')",
        "main-bg-b": "url('/main-bg-b.svg')",
        "main-bg-line": "url('/main-bg-line.png')",
        "build-bg-b": "url('/build-bg-b.png')",
        "build-bg-t": "url('/build-bg-t.png')",
        "comment-bg-t":"url('/comments-bg-t.svg')",
        "comment-bg-b":"url('/comments-bg-b.svg')",
        "cooment-icon":"url('/comment-icon.svg')",
        "contact-bg":"url('/contact-bg.svg')"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
