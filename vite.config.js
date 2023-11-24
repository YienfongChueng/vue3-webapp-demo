import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      '@': path.resolve(__dirname,'src')
    }
  },
  server: {
    open: true,
    port: 8080,
    // proxy: {
    //   '^/api': {
    //     target: 'http://49.235.128.49:3012/api',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api':  ''
    //     }
    //   }
    // }
  },
  plugins: [vue()],
})
