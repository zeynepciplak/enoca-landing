import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild', // hızlı ve küçük çıktı
    cssCodeSplit: true, // CSS’leri sayfa bazlı ayır
    chunkSizeWarningLimit: 800, // gereksiz uyarıları azalt
    assetsInlineLimit: 4096, // küçük görselleri inline et
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // vendor chunk'ı ayrı ayır
          }
        },
      },
    },
  },
});
