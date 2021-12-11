module.exports = {
  '*.js': () => 'npm run lint:script:fix',
  '*.{css,sass,scss}': () => 'npm run lint:style:fix',
};
