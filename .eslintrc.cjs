module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: { parser: '@typescript-eslint/parser', ecmaVersion: 'latest', sourceType: 'module' },
  extends: ['plugin:vue/vue3-recommended','plugin:@typescript-eslint/recommended','prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/order': ['warn', { 'newlines-between': 'always' }]
  }
}
