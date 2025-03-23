import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'configure-server',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Aquí puedes añadir cualquier middleware personalizado si lo necesitas
          next()
        })
      }
    }
  ],
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
