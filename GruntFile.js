module.exports = function(grunt){
    grunt.initConfig({
        env: {
            dev: {
                NODE_ENV: 'development'
            },
            nodemon: {
                dev: {
                    script: 'server.js',
                    options: {
                        ext: 'js,html',
                        watch: ['server.js', 'config/**/*.js', 'app/**/*.js']
                    }
                }
            },
            test: {
                NODE_ENV: 'test'
            }
        }
    });

    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['env:dev']);
};