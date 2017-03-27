module.exports = {
  dev: {
    app: 'Google Chrome',
    path: 'http://localhost:8001'
  },

  prod: {
    app: 'Google Chrome',
    path: 'http://<%= pkg.name %>.martinmetodiev.com'
  },

  build: {
    app: 'Google Chrome',
    path: 'https://travis-ci.org/martinmethod/<%= pkg.name %>/builds'
  },

  repo: {
    app: 'Google Chrome',
    path: 'https://github.com/martinmethod/<%= pkg.name %>'
  }
};