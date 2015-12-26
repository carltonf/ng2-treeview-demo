/* global System */
System.config({
  // Use path and json package config to load modules from node_modules
  // Ref: https://github.com/systemjs/systemjs/issues/767
  // NOTE: '*' wildcard will overrides all paths, use './' to override it
  paths: {
    '*': './node_modules/*',
  },
  packageConfigPaths: ['./node_modules/*/package.json'],
  packages: {
    './app': {
      format: 'cjs',
      defaultExtension: 'js'
    },
  }
});
System.import('./app/boot')
  .then(null, console.error.bind(console));
