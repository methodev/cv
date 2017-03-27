module.exports = {
  task: {
    options: {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true
    },
    expand: true,
    cwd: 'dist/',
    src: '*.html',
    dest: 'dist/'
  }
};