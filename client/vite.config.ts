import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv'

const conf = dotenv.config({path: '../.env'})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: conf?.parsed?.CLIENT_PATH ?? '/assets/client/',
  server:{
    proxy: {
      '/api': {
        target: `http://localhost:${conf?.parsed?.SERVER_HTTP_PORT}`
      }
    }
  }
})
