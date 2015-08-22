module.exports = function (grunt) {

    var modRewrite = require('connect-modrewrite');

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
        jshint: {
            all: ['Gruntfile.js', 'app/*.js', 'app/**/*.js']
        },
        watch: {
            dev: {
                files: ['Gruntfile.js', 'app/*.js', '*.html'],
                tasks: ['jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp'],
                options: {
                    atBegin: true
                }
            },
            min: {
                files: ['Gruntfile.js', 'app/*.js', '*.html'],
                tasks: ['jshint', 'karma:unit', 'html2js:dist', 'concat:dist', 'clean:temp', 'uglify:dist'],
                options: {
                    atBegin: true
                }
            }
        },
        connect: {
            options: {
                hostname: 'localhost',
                port: 8080,
                base: 'app',
                debug: 'true',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            modRewrite(['^[^\\.]*$ /index.html [L]']),
                            //connect().use(
                            //    '/bower_components',
                            //    connect.static('./bower_components')
                            //)
                        ];
                    }
                }
            },
        },
        browserSync: {
            bsFiles: {
                src : ['assets/css/*.css', "src/**/*.js", "src/**/*.html"]
            },
            options: {
                server: {
                    baseDir: "./app/",
                    middleware: [
                        modRewrite([
                            '!\\.\\w+$ /index.html [L]'
                        ])
                    ]
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    //grunt.loadNpmTasks('grunt-contrib-compress');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    //grunt.registerTask('default', ['includeSource']);
    grunt.registerTask('dev', ['browserSync']);

};