import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { qrcode } from 'vite-plugin-qrcode';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), qrcode()
  ],
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "src/assets/scss/variables.scss";`,
        },
    },
},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
