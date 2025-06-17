import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: '../public',
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: '/index.html'
      }
    }
  }
});