// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'
import {resolve} from 'path'

export default {
  base: '/clinic-doktor.ru/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'doctors/index.html')
      }
    }
  },
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      /* pass your config */
      jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
         quality: 100,
      },
      }),
  ],
}