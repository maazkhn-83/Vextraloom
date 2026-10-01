import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ mode }) => {
  // Read the root .env / Replit Secrets so the dev proxy targets the same PORT as the server.
  const env = loadEnv(mode, fileURLToPath(new URL('..', import.meta.url)), '');
  const api = `http://127.0.0.1:${env.PORT || 3001}`;
  const server = {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    proxy: { '/api': { target: api, changeOrigin: true } },
  };
  return {
    plugins: [react()],
    server,
    preview: { ...server },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
            motion: ['framer-motion'],
          },
        },
      },
    },
  };
});
