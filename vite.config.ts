import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'none',
    dirStyle: 'nested',
    beastiesOptions: false,
  },
  build: {
    target: 'es2020',
    sourcemap: false,
    cssCodeSplit: true,
  },
  preview: {
    allowedHosts: ['castcreel.com'],
  },
});
