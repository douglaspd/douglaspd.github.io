import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/onlinestore/', // Isso facilita o deploy no GitHub Pages mais tarde
  server: {
    open: true, // Abre o navegador automaticamente
  },
});
