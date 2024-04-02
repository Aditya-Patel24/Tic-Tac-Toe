import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Tic-Tac-Toe/',
  build: {
    outDir: 'build', // This should match the directory you're trying to deploy
  },
  plugins: [react()],
})
