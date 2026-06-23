import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/user': 'http://localhost:5432',
      '/staff': 'http://localhost:5432',
      '/tasks': 'http://localhost:5432',
      '/beds': 'http://localhost:5432'
    }
  }
})
