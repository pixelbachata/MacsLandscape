import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/MacsLandscape/', // Set base for GitHub Pages deployment (case-sensitive)
  plugins: [vue(), tailwindcss()],
})
