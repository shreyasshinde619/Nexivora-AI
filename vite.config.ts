import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Nexivora/', // Base path for GitHub Pages: https://shreyasshinde619.github.io/Nexivora/
  server: {
    port: 3000,
    open: true
  }
})
