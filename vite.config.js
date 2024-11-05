import { defineConfig } from 'vite';

export default defineConfig({
  base: '', // Isso facilita o deploy no GitHub Pages mais tarde
  server: {
    open: true, // Abre o navegador automaticamente
  },
});
