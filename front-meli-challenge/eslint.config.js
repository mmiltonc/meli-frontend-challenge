
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  
  {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier', // Debe ir al final para evitar conflictos con Prettier
    ],parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error', // Muestra errores si no se cumple la configuración de Prettier
      'react/react-in-jsx-scope': 'off', // Desactiva esta regla para React 17+
      'react/prop-types': 'off', // No es necesario usar PropTypes con TypeScript
      '@typescript-eslint/no-unused-vars': ['warn'], // Advertencias para variables no usadas
    },
    settings: {
      react: {
        version: 'detect', // Detecta la versión de React automáticamente
      },
    },
  },
)
