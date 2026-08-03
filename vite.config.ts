import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/berghofer-bau/',
  server: {
    port: 3008,
    host: true
  },
  preview: {
    port: 3008,
    host: true
  }
});
