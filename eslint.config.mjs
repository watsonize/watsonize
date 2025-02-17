import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import wxtAutoImports from './.wxt/eslint-auto-imports.mjs'

export default tseslint.config({
  files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  extends: [
    wxtAutoImports,
    eslint.configs.recommended,
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
  ],
  languageOptions: { globals: globals.browser },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  settings: { react: { version: 'detect' } },
})
