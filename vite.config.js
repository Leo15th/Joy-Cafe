import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/joycafe/',   // repo name for GitHub Pages
  plugins: [tailwindcss()],
})
