/*eslint camelcase: ["error", {properties: "never"}]*/
module.exports = {
  cache: {
    cacheId: 'rcel',
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    title: 'rcel',
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
