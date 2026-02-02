import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: set BASE_PATH to "/repo/" for username.github.io/repo, or leave unset for username.github.io
const base = process.env.BASE_PATH ?? '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
