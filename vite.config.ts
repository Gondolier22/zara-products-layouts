import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './jest-utils.js',
    exclude: [
      '**/node_modules/**',
      './src/routes.tsx', // Excluir routes.tsx
      './src/main.tsx', // Excluir main.tsx
      './src/store/index.ts', // Excluir store/index.ts
      './src/providers/**/*',
      './src/models/**/*',
    ],
    globals: true,
  },
});
