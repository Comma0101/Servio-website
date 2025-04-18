import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Servio-website/', // Required for GitHub Pages (capital S)
  plugins: [react()],
  server: {
    port: 3000,
  },
});
