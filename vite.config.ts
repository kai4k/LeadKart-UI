import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [tailwindcss(), vue(), visualizer({ filename: 'dist/stats.html', open: false })],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router'],
          echarts: ['echarts', 'vue-echarts'],
          apex: ['apexcharts', 'vue3-apexcharts'],
          fullcalendar: ['@fullcalendar/core', '@fullcalendar/daygrid', '@fullcalendar/vue3']
        }
      }
    }
  }
})
