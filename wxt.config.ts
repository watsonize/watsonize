import { defineConfig } from 'wxt'
import tailwindcss from '@tailwindcss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  imports: {
    eslintrc: { enabled: true },
  },
  manifest: {
    name: 'Watsonize',
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
})
