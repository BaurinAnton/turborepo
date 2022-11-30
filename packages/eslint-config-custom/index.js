module.exports = {
  extends: ['next', 'turbo', 'prettier'],
  plugins: ['turbo'],
  rules: {
    // Automatically flag env vars missing from turbo.json
    'turbo/no-undeclared-env-vars': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'no-delete-var': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error'
  }
}
