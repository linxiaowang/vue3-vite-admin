import { defineConfig } from 'vite'
// jsx支持插件
import vueJsx from '@vitejs/plugin-vue-jsx'
// mockjs
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
import myExample from './plugins/vite-plugin-my-example'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'comps': path.resolve(__dirname, 'src/components'),
      'apis': path.resolve(__dirname, 'src/apis'),
      'views': path.resolve(__dirname, 'src/views'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'routes': path.resolve(__dirname, 'src/router'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'service': path.resolve(__dirname, 'src/service'),
    },
  },
  plugins: [vue(), myExample(), vueJsx(), viteMockServe({
    supportTs: false
  }), styleImport({
    libs: [{
      libraryName: 'element-plus',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        name = name.slice(3)
        return `element-plus/packages/theme-chalk/src/${name}.scss`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      },
    }]
  })]
})
