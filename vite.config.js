import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    host: true,
    hmr: {
      port: 3000,
    },
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'seo-boost-agency.preview.emergentagent.com',
      '.emergentagent.com'
    ],
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'esnext', // 1. Fix: Modern target prevents unnecessary polyfills
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'ui-vendor': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', 'lucide-react', 'clsx', 'tailwind-merge']
        }
      }
    }
  },
  define: {
    // For compatibility with existing environment variable usage
    'process.env': {},
  },
})