import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        // TODO: see if we can set the API port via an env var in a single spot for backend and frontend
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
