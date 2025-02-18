import { defineConfig } from 'wxt'
import tailwindcss from '@tailwindcss/vite'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react', '@wxt-dev/i18n/module'],
  imports: {
    eslintrc: { enabled: 9 },
  },
  manifest: {
    name: 'Watsonize',
    default_locale: 'en',
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
})
