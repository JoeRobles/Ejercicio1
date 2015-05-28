module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['web/js/*.js'],
                tasks: ['jslint']
            }
        },
        jslint: {
            all: ['Gruntfile.js', 'web/js/*.js']
        },
        uglify: {
            js: {
                src: [
                    'web/js/common.js',
                    'web/js/DistGrid.js',
                    'web/js/editGelImage.js',
                    'web/js/jquery.plugins.js',
                    'web/js/MongoDBGelImage.js',
                    'web/js/newGelImage.js',
                    'web/js/primer.js',
                    'web/js/sample_massive.js',
                    'web/js/scripts.js',
                    'web/js/showGelImage.js'
                ],
                dest: 'web/build/ugly.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jslint', 'uglify', 'concat']);
};
