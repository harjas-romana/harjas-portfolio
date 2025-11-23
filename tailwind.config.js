/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Ensures your ThemeToggle component works
  theme: {
    extend: {
      colors: {
        // LIGHT MODE MAP
        arctic: {
          bg: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          border: 'var(--border-color)',
          accent: 'var(--accent-color)',
        },
        // DARK MODE MAP
        dark: {
          bg: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          border: 'var(--border-color)',
          accent: 'var(--accent-color)',
        }
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        jet: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'footer-giant': 'clamp(5rem, 20vw, 20rem)', // For the massive footer text
      },
      letterSpacing: {
        'ultra-tight': '-0.08em',
      },
      lineHeight: {
        'ultra-tight': '0.85',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}