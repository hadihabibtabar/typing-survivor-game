import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the production build can be hosted from any static path.
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
});
