module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        includeSource: {
            options: {
                basePath: 'app',
                baseUrl: 'app'
            },
            myTarget: {
                files: {
                    'app/index.html': 'app/index.tpl.html'
                }
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-include-source');

    // Default task(s).
    grunt.registerTask('default', ['includeSource']);

};