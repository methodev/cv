var rewriteModule = require('http-rewrite-middleware');

module.exports = {
  server: {
    options: {
      port: 8001,
      base: './dist',
      livereload: false
    }
  }
};