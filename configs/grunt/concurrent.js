module.exports = {

    build: [
        // favicons
        ['realFavicon'],

        // markup
        ['pug'],

        // styles
        ['stripCssComments', 'compass'],

        // scripts
        ['concat', 'uglify']
    ],

    prod: [
        'htmlmin',
        'copy:pdf'
    ],

    review: [
        'open:build',
        'open:repo',
        'open:prod'
    ]

};