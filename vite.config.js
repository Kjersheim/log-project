import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/web_visualization/log-project/',
  server: {
    // Automatically opens the browser on `npm run dev`
    open: true, 
  },
  build: {
    // production files, distribute
    outDir: 'dist', 
    // static assets (CSS, JS, etc.)
    assetsDir: 'assets', 
    rollupOptions: {
        // main entry point
      input: {
        main: path.resolve(__dirname, 'index.html'),
        recent: path.resolve(__dirname, 'src/pages/articles.html'), 
        archive: path.resolve(__dirname, 'src/pages/archive.html'),
        about: path.resolve(__dirname, 'src/pages/about.html'), 
      }
    },
  },
  // Folder for static assets (not processed by Vite)
  publicDir: 'public', 
});
