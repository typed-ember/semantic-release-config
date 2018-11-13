module.exports = {
  verifyConditions: ['@semantic-release/github', '@semantic-release/npm'],
  prepare: [
    {
      path: '@semantic-release/changelog',
      changelogFile: 'CHANGELOG.md'
    },
    '@semantic-release/npm'
  ],
  publish: ['@semantic-release/npm', '@semantic-release/github'],
  success: ['@semantic-release/github'],
  fail: ['@semantic-release/github']
};
