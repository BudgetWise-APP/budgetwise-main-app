import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [ react({ include: '**/*.{jsx,tsx,js,ts}' }), tsconfigPaths(), viteTsconfigPaths()],
  server: {
    port: 8899,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
