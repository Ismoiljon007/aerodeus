import antfu from '@antfu/eslint-config';

export default antfu({
  rules: {
    'no-console': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/first-attribute-linebreak': ['error', {
      singleline: 'ignore',
      multiline: 'below',
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
    }],
    'semi': ['error', 'always'],
    'style/semi': 'off',
    'node/prefer-global/process': 'off',
    'style/brace-style': ['error', '1tbs'],
    'brace-style': 'off',
  },
  gitignore: true,
  ignores: [
    '**/node_modules/',
    '*.d.ts',
    '.nuxt/',
    '.github/',
    '.output/',
    '.gitlab-ci.yml',
    'Dockerfile',
    '.vscode/',
    '.idea/',
    '.git/',
  ],
});
