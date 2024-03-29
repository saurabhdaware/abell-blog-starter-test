import { defineConfig } from 'abell';
import { vitePluginMdToHTML } from 'vite-plugin-md-to-html';

export default defineConfig({
  plugins: [
    vitePluginMdToHTML({
      resolveImageLinks: true,
      syntaxHighlighting: true
    }),
  ]
})