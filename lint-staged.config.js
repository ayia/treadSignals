module.exports = {
  // TypeScript/JavaScript files - lint and format
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{js,jsx}': ['eslint --fix', 'prettier --write'],

  // JSON, Markdown, YAML, CSS - format only
  '*.{json,md,yml,yaml,css}': ['prettier --write'],
}
