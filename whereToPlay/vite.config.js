import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/choujiang-front/',
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0',
    port: '5173',
    proxy: {
      '/back':{
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/back/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// https://registry.npmjs.org/

