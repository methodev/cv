var grunt = require('grunt');

module.exports = {
  task: {
    options: {
      separator: grunt.option('target') !== 'prod' ? ';\n\n\n\n' : ';\n',
      stripBanners: grunt.option('target') !== 'prod' ? false : {force: true}
    },
    src: [
      // External libraries
      'node_modules/css-browser-selector/css_browser_selector.min.js',
      'node_modules/fastclick/lib/fastclick.js',
      'node_modules/jquery/dist/jquery.min.js',

      // Internal scripts
      'src/scripts/<%= pkg.name %>.js'
    ],
    dest: 'dist/assets/js/<%= pkg.name %>_bundle.js'
  }
};