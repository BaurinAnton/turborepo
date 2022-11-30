module.exports = {
  extends: ['turbo', 'prettier'],
  plugins: ['turbo'],
  rules: {
    // Automatically flag env vars missing from turbo.json
    'turbo/no-undeclared-env-vars': 'error',
    'react/jsx-key': 'off',
    'no-delete-var': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error'
  }
}
