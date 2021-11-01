/*
 * @Author: your name
 * @Date: 2021-11-01 11:12:02
 * @LastEditTime: 2021-11-01 11:14:10
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /stree-design/stree-design/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()]
})
