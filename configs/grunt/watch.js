module.exports = {
    options: {
        livereload: false,
        event: ['changed', 'added', 'deleted']
    },

    markup: {
        files: ['src/markup/**/*.pug', 'src/model/**/*.json'],
        tasks: ['puglint', 'clean:markup', 'pug']
    },

    styles: {
        files: ['src/styles/**/*.scss', 'src/images/icons/**/*'],
        tasks: ['scsslint', 'clean:styles', 'stripCssComments', 'compass']
    },

    scripts: {
        files: ['src/scripts/**/*.js'],
        tasks: ['jshint', 'clean:scripts', 'concat', 'uglify']
    },

    favicons: {
        files: ['src/images/favicon.png'],
        tasks: ['realFavicon']
    }
};