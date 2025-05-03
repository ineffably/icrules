import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: 'lib',
    sourcemap: true
  },
  server: {
    port: 8080,
    open: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@icrules/editor': path.resolve(__dirname, '../editor/src'),
      '@icrules/core': path.resolve(__dirname, '../core/src')
    }
  },
  // Use the Vite-specific tsconfig
  optimizeDeps: {
    include: ['react', 'react-dom', 'antd', '@ant-design/icons']
  },
  // Use custom tsconfig
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
      }
    }
  }
}); 