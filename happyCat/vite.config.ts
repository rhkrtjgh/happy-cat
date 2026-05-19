import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // AIT(앱인토스) 빌드: '/', GitHub Pages: '/happy-cat/'
  base: mode === 'ait' ? '/' : '/happy-cat/',
}))
