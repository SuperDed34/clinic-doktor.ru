// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'


export default {
  base: '/clinic-doktor.ru/',
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