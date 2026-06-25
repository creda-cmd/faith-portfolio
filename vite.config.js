import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base for GitHub Pages project sites via VITE_BASE (e.g. "/faith-portfolio/").
// Falls back to "/" for local dev and other hosts (Netlify, Vercel, custom domain).
const base = process.env.VITE_BASE || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
