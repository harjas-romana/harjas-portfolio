import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Allows you to use import x from '@/components/x'
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 3000,
    // Strict port ensures you don't accidentally run multiple 
    // instances on different ports while debugging 3D assets
    strictPort: true,
  },
  build: {
    // Optimizes the chunk size for Three.js and Framer Motion 
    // to prevent "heavy" initial page loads
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          framer: ['framer-motion'],
        },
      },
    },
    // Minimizes the output for that clinical, high-speed performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Cleans up logs for the production handshake
        drop_debugger: true,
      },
    },
  },
})