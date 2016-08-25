Package.describe({
  name: 'tomwasd:flow-router-seo',
  version: '0.0.3',
  summary: 'A simple way to set the title and meta tags for sites using flow router',
  git: 'https://github.com/tomwasd/flow-router-seo',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use(['mongo', 'underscore', 'jquery']);

  api.addFiles('flow-router-seo.js');

  api.export('FlowRouterSEO');
});
