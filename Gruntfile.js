/*jshint node: true */
"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    browserify2: {
      main: {
        entry: './scripts/demo.js',
        compile: 'scripts/demo.build.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'scripts/app.min.js': [
            'scripts/jquery-1.7.2.min.js',
            'core/deck.core.js',
            'extensions/hash/deck.hash.js',
            'extensions/menu/deck.menu.js',
            'extensions/status/deck.status.js',
            'extensions/scale/deck.scale.js',
            'scripts/demo.build.js'
          ]
        }
      }
    },
    sass: {
      main: {
        src: 'custom-styles.scss',
        dest: 'custom-styles.css'
      }
    },
    cssmin: {
      combine: {
        files: {
          'style.min.css': [
            'core/deck.core.css',
            'extensions/goto/deck.goto.css',
            'extensions/menu/deck.menu.css',
            'extensions/navigation/deck.navigation.css',
            'extensions/status/deck.status.css',
            'extensions/hash/deck.hash.css',
            'extensions/scale/deck.scale.css',
            'themes/style/web-2.0.css',
            'themes/transition/horizontal-slide.css',
            'custom-styles.css'
          ]
        }
      }
    },
    watch: {
      js: {
        files: ['scripts/*.js'],
        tasks: ['browserify2', 'uglify']
      },
      css: {
        files: ['*.scss', '*/*.css'],
        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify2');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['browserify2', 'uglify', 'sass', 'cssmin']);
  grunt.registerTask('default', ['build']);
  grunt.registerTask('dev', ['build', 'watch']);

};
