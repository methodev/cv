module.exports = {

    // PDF file
    pdf: {
        files: [{
            expand: true,
            cwd: 'src',
            src: ['cv.pdf'],
            dest: 'dist/'
        }]
    }

};