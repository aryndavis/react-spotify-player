import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Port 3000 matches the Spotify redirect URI registered for this app.
  server: { port: 3000, strictPort: true },
  build: { outDir: 'build' },
})
