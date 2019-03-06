module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'main.css.map',
          sourceMapFilename: '../main.css.map'
        },
        files: {
          "../main.css": "main.less", // destination file and source file,
        }
      },
      developmentTwo: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'front.css.map',
          sourceMapFilename: '../front.css.map'
        },
        files: {
          "../front.css": "front.less" // destination file and source file,
        }
        
      }
    },
    watch: {
      styles: {
        files: ['**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less', 'watch']);
};