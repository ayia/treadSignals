module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type must be one of these values
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation
        'style',    // Formatting (no code change)
        'refactor', // Code refactoring
        'test',     // Adding tests
        'chore',    // Maintenance
        'ci',       // CI/CD changes
        'perf',     // Performance improvements
        'build',    // Build system changes
        'revert',   // Revert previous commit
      ],
    ],
    // Subject max length
    'subject-max-length': [2, 'always', 72],
    // Body max line length
    'body-max-line-length': [2, 'always', 100],
    // Subject must be lowercase
    'subject-case': [2, 'always', 'lower-case'],
    // No period at end of subject
    'subject-full-stop': [2, 'never', '.'],
  },
}
