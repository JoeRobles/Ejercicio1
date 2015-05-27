module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        usemin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'web/js/<%= pkg.name %>.js',
                dest: 'web/js/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            js: {
                files: ['web/js/*.js'],
                tasks: ['jshint']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'web/js/*.js']
        }
    });
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', ['usemin', 'watch', 'jshint']);
};
