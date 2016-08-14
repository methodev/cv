module.exports = {
    options: {
        livereload: false,
        event: ['changed', 'added', 'deleted']
    },

    markup: {
        files: ['src/markup/**/*.jade', 'src/model/**/*.json'],
        tasks: ['clean:markup', 'jade']
    },

    styles: {
        files: ['src/styles/**/*.scss', 'src/images/icons/**/*'],
        tasks: ['scsslint', 'clean:styles', 'compass']
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