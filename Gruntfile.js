module.exports = function(grunt){
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
        watch: {
          css: {
            files: '**/*.styl',
            tasks: ['stylus'],
            options: {
              livereload: true,
            },
          },
          js:{
            files: '**/*.coffee',
            tasks: ['coffee'],
            options: {
              livereload:true,
            }
          }
        },
        stylus: {
          compile: {
            files: {
              'bin/style.css': ['src/stylesheets/*.styl']
            }
          }
        },
        coffee: {
          compileWithMaps: {
            options: {
              sourceMap: true
            },
            files: {
              'bin/script.js': ['src/scripts/*.coffee']
            }
          }
        }
    });pkg: grunt.file.readJSON('package.json'),
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['stylus','coffee','watch']);
};