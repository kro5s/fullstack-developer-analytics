import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/fullstack-developer-analytics/",
  plugins: [react()],
  build: {
    outDir: "./build",
    emptyOutDir: true
  }
})
