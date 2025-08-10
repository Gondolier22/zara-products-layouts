import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './jest.setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/node_modules/**',
        'src/routes.tsx', // Excluir routes.tsx
        'src/main.tsx', // Excluir main.tsx
        'src/providers/**/*.{ts,tsx}', // Excluir providers
        'src/models/**/*.{ts,tsx}', // Excluir models
        'src/types/**/*.{ts,tsx}', // Excluir types
      ],
    },

    globals: true,
  },
});
