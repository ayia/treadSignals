import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/e2e/**', '**/.next/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.{ts,tsx}', 'app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'lib/**/*.{ts,tsx}'],
      exclude: [
        '**/node_modules/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types/**',
        '**/__tests__/**',
        '**/e2e/**',
      ],
      thresholds: {
        // MVP Phase - Pragmatic thresholds
        lines: 60,
        functions: 60,
        branches: 50,
        statements: 60,
      },
    },
  },
})
