import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'NariFinance',
        short_name: 'NariFinance',
        description: 'Duolingo-style financial literacy app',
        theme_color: '#7c3aed',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: []
      },
      workbox: {
        navigateFallbackDenylist: [/^\/api\//],
      },
    })
  ],
})
