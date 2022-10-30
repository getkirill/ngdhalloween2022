import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import electron from "vite-electron-plugin"
import { customStart } from "vite-electron-plugin/plugin"

export default defineConfig({
  plugins: [
    react(),
    electron({
      include: [
        'electron',
        'preload',
      ],
      // plugins: [
      //   customStart()
      // ]
    })
  ],
  // base: '/'
})
